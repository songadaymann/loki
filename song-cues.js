/**
 * Song timing data for "Loki Genderfluid"
 * BPM: 130
 * Duration: 2:02 (122 seconds)
 * 
 * Timestamps converted from timecode format (01:MM:SS:FF.subframes @ 30fps)
 * Adjust TIMING_OFFSET if sync feels off
 */

const TIMING_OFFSET = 0; // Adjust this if audio sync is off (in seconds)

const SONG_CUES = {
    bpm: 130,
    duration: 122, // 2:02
    firstDownbeat: 0.5 + TIMING_OFFSET,  // When beat 1 hits (0.5s from start)
    
    // Pre-calculated timing values
    get beatDuration() { return 60 / this.bpm; },  // ~0.4615 seconds per beat
    get halfBeat() { return this.beatDuration / 2; },
    get quarterBeat() { return this.beatDuration / 4; },
    
    // Convert frame-based timestamp to seconds
    // Format was: 01:MM:SS:FF.subframes (assuming 30fps)
    
    sections: [
        // VERSE 1 (starts on first downbeat)
        { 
            type: "verse", 
            start: 0.5 + TIMING_OFFSET,  // First downbeat
            end: 13.435 + TIMING_OFFSET,
            label: "verse1"
        },
        
        // TRANSITION TO CHORUS 1 (leap off moment)
        { 
            type: "transition_to_chorus", 
            start: 13.435 + TIMING_OFFSET,
            end: 15.306 + TIMING_OFFSET,
            label: "trans1"
        },
        
        // CHORUS 1
        { 
            type: "chorus", 
            start: 15.306 + TIMING_OFFSET,
            end: 22.622 + TIMING_OFFSET,
            label: "chorus1"
        },
        
        // VERSE 2
        { 
            type: "verse", 
            start: 22.622 + TIMING_OFFSET,
            end: 35.564 + TIMING_OFFSET,
            label: "verse2"
        },
        
        // TRANSITION TO CHORUS 2
        { 
            type: "transition_to_chorus", 
            start: 35.564 + TIMING_OFFSET,
            end: 37.434 + TIMING_OFFSET,
            label: "trans2"
        },
        
        // CHORUS 2
        { 
            type: "chorus", 
            start: 37.434 + TIMING_OFFSET,
            end: 52.240 + TIMING_OFFSET,
            label: "chorus2"
        },
        
        // BRIDGE
        { 
            type: "bridge", 
            start: 52.240 + TIMING_OFFSET,
            end: 65.175 + TIMING_OFFSET,
            label: "bridge"
        },
        
        // TRANSITION TO VERSE 3
        { 
            type: "transition_to_verse", 
            start: 65.175 + TIMING_OFFSET,
            end: 67.046 + TIMING_OFFSET,
            label: "trans_v3"
        },
        
        // VERSE 3
        { 
            type: "verse", 
            start: 67.046 + TIMING_OFFSET,
            end: 79.981 + TIMING_OFFSET,
            label: "verse3"
        },
        
        // TRANSITION TO FINAL CHORUS
        { 
            type: "transition_to_chorus", 
            start: 79.981 + TIMING_OFFSET,
            end: 81.851 + TIMING_OFFSET,
            label: "trans_final",
            keyChange: true  // whole step up!
        },
        
        // FINAL CHORUS (key change!)
        { 
            type: "chorus", 
            start: 81.851 + TIMING_OFFSET,
            end: 111.303 + TIMING_OFFSET,
            label: "chorus_final",
            keyChange: true
        },
        
        // OUTRO
        { 
            type: "outro", 
            start: 111.303 + TIMING_OFFSET,
            end: 120.796 + TIMING_OFFSET,
            label: "outro"
        }
    ],
    
    // Helper function to get current section based on song time
    getCurrentSection: function(time) {
        for (let section of this.sections) {
            if (time >= section.start && time < section.end) {
                return section;
            }
        }
        // Before song starts or after it ends
        if (time < this.sections[0].start) {
            return { type: "intro", start: 0, end: this.sections[0].start, label: "intro" };
        }
        return { type: "ended", start: this.duration, end: this.duration, label: "ended" };
    },
    
    // Check if we're approaching a transition (useful for preparing visual changes)
    isApproachingTransition: function(time, lookaheadSeconds = 1.0) {
        for (let section of this.sections) {
            if (section.type.includes('transition')) {
                if (time >= section.start - lookaheadSeconds && time < section.start) {
                    return { upcoming: section, timeUntil: section.start - time };
                }
            }
        }
        return null;
    },
    
    // Get time until next beat (for jump timing etc)
    getTimeToNextBeat: function(time) {
        const beatsSinceStart = (time - this.firstDownbeat) / this.beatDuration;
        const nextBeatNumber = Math.ceil(beatsSinceStart);
        const nextBeatTime = this.firstDownbeat + (nextBeatNumber * this.beatDuration);
        return nextBeatTime - time;
    },
    
    // Get the current beat number (0-indexed from first downbeat)
    getCurrentBeat: function(time) {
        if (time < this.firstDownbeat) return -1;
        return Math.floor((time - this.firstDownbeat) / this.beatDuration);
    },
    
    // Get the exact time of a specific beat number
    getBeatTime: function(beatNumber) {
        return this.firstDownbeat + (beatNumber * this.beatDuration);
    },
    
    // Check if we're "on beat" within a tolerance window
    isOnBeat: function(time, toleranceSeconds = 0.1) {
        const timeSinceDownbeat = time - this.firstDownbeat;
        if (timeSinceDownbeat < 0) return false;
        
        const positionInBeat = timeSinceDownbeat % this.beatDuration;
        // Check if we're near the start or end of a beat
        return positionInBeat < toleranceSeconds || 
               positionInBeat > (this.beatDuration - toleranceSeconds);
    },
    
    // Get accuracy rating for a jump/action (-1 to 1, where 0 is perfect)
    getTimingAccuracy: function(time) {
        const timeSinceDownbeat = time - this.firstDownbeat;
        if (timeSinceDownbeat < 0) return 0;
        
        const positionInBeat = timeSinceDownbeat % this.beatDuration;
        // Normalize to -0.5 to 0.5 (0 = on beat, ±0.5 = off beat)
        if (positionInBeat < this.beatDuration / 2) {
            return positionInBeat / this.beatDuration * 2;  // 0 to 1 (late)
        } else {
            return (positionInBeat - this.beatDuration) / this.beatDuration * 2;  // -1 to 0 (early)
        }
    },
    
    // Get timing label for UI feedback
    getTimingLabel: function(time, tolerances = { perfect: 0.05, great: 0.1, good: 0.15 }) {
        const accuracy = Math.abs(this.getTimingAccuracy(time));
        const normalizedAccuracy = accuracy * this.beatDuration;  // Convert to seconds
        
        if (normalizedAccuracy <= tolerances.perfect) return 'PERFECT';
        if (normalizedAccuracy <= tolerances.great) return 'GREAT';
        if (normalizedAccuracy <= tolerances.good) return 'GOOD';
        return 'MISS';
    },
    
    // Generate array of all beat times for the song (useful for spawning)
    getAllBeatTimes: function() {
        const beats = [];
        let beatTime = this.firstDownbeat;
        while (beatTime < this.duration) {
            beats.push(beatTime);
            beatTime += this.beatDuration;
        }
        return beats;
    },
    
    // Get beats within a time range (for spawning obstacles ahead)
    getBeatsInRange: function(startTime, endTime) {
        const beats = [];
        const startBeat = Math.ceil((startTime - this.firstDownbeat) / this.beatDuration);
        const endBeat = Math.floor((endTime - this.firstDownbeat) / this.beatDuration);
        
        for (let i = startBeat; i <= endBeat; i++) {
            const beatTime = this.firstDownbeat + (i * this.beatDuration);
            if (beatTime >= startTime && beatTime <= endTime) {
                beats.push({
                    beatNumber: i,
                    time: beatTime,
                    isDownbeat: i % 4 === 0,  // Every 4th beat is a downbeat (measure start)
                    isHalfMeasure: i % 2 === 0  // Every 2nd beat
                });
            }
        }
        return beats;
    }
};

// Export for module systems, also attach to window for script tag usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SONG_CUES;
}
if (typeof window !== 'undefined') {
    window.SONG_CUES = SONG_CUES;
}

