// =============================================================================
// NON-BINARY GAME - LEVEL-BASED ARCHITECTURE
// The entire song is built as one continuous world
// =============================================================================

const DEBUG_OPTIONS = {
    showDebugInfo: false,
    showZoneBorders: false,    // Show where zones start/end
    showHitboxes: false,
    skipToTime: null,         // Set to seconds to skip ahead
    muteMusic: false,
};

// =============================================================================
// LEVEL CONFIGURATION
// =============================================================================

// Chorus items placed via editor (time-based, normalized Y 0-1)
const CHORUS_ITEMS = {
    chorus1: [
        { time: 15.743, y: 0.050, type: 'atmo_bifrost' },
        { time: 15.781, y: 0.853, type: 'rune_fehu' },
        { time: 15.793, y: 0.950, type: 'symbol_longship' },
        { time: 15.931, y: 0.375, type: 'creature_sleipnir' },
        { time: 16.181, y: 0.050, type: 'atmo_bifrost' },
        { time: 16.194, y: 0.950, type: 'symbol_longship' },
        { time: 16.281, y: 0.520, type: 'rune_laguz' },
        { time: 16.668, y: 0.050, type: 'atmo_bifrost' },
        { time: 16.668, y: 0.950, type: 'symbol_longship' },
        { time: 16.681, y: 0.198, type: 'rune_thurisaz' },
        { time: 17.143, y: 0.050, type: 'atmo_bifrost' },
        { time: 17.206, y: 0.948, type: 'symbol_longship' },
        { time: 17.581, y: 0.058, type: 'atmo_bifrost' },
        { time: 17.593, y: 0.943, type: 'symbol_longship' },
        { time: 17.606, y: 0.848, type: 'rune_fehu' },
        { time: 17.768, y: 0.373, type: 'creature_fenrir' },
        { time: 18.043, y: 0.508, type: 'rune_laguz' },
        { time: 18.081, y: 0.053, type: 'atmo_bifrost' },
        { time: 18.081, y: 0.948, type: 'symbol_longship' },
        { time: 18.543, y: 0.205, type: 'rune_thurisaz' },
        { time: 18.569, y: 0.050, type: 'atmo_bifrost' },
        { time: 18.569, y: 0.950, type: 'symbol_longship' },
        { time: 18.956, y: 0.948, type: 'symbol_longship' },
        { time: 18.993, y: 0.058, type: 'atmo_bifrost' },
        { time: 19.418, y: 0.058, type: 'atmo_bifrost' },
        { time: 19.456, y: 0.948, type: 'symbol_longship' },
        { time: 19.481, y: 0.820, type: 'rune_fehu' },
        { time: 19.743, y: 0.380, type: 'creature_jormungandr' },
        { time: 19.868, y: 0.950, type: 'symbol_longship' },
        { time: 19.906, y: 0.058, type: 'atmo_bifrost' },
        { time: 19.944, y: 0.513, type: 'rune_laguz' },
        { time: 20.306, y: 0.950, type: 'symbol_longship' },
        { time: 20.368, y: 0.205, type: 'rune_thurisaz' },
        { time: 20.381, y: 0.058, type: 'atmo_bifrost' },
        { time: 20.806, y: 0.060, type: 'atmo_bifrost' },
        { time: 20.856, y: 0.943, type: 'symbol_longship' },
        { time: 21.218, y: 0.943, type: 'symbol_longship' },
        { time: 21.268, y: 0.060, type: 'atmo_bifrost' },
        { time: 21.293, y: 0.820, type: 'rune_fehu' },
        { time: 21.531, y: 0.378, type: 'creature_hel' },
        { time: 21.743, y: 0.508, type: 'rune_laguz' },
        { time: 21.756, y: 0.943, type: 'symbol_longship' },
        { time: 21.793, y: 0.063, type: 'atmo_bifrost' },
        { time: 22.093, y: 0.945, type: 'symbol_longship' },
        { time: 22.218, y: 0.213, type: 'rune_thurisaz' },
        { time: 22.268, y: 0.063, type: 'atmo_bifrost' },
    ],
    chorus2: [
        { time: 37.551, y: 0.900, type: 'atmo_star' },
        { time: 37.901, y: 0.900, type: 'atmo_star' },
        { time: 37.917, y: 0.050, type: 'atmo_star' },
        { time: 37.934, y: 0.455, type: 'atmo_ice' },
        { time: 38.317, y: 0.053, type: 'atmo_star' },
        { time: 38.351, y: 0.903, type: 'atmo_star' },
        { time: 38.734, y: 0.903, type: 'atmo_star' },
        { time: 38.817, y: 0.468, type: 'atmo_ice' },
        { time: 38.834, y: 0.055, type: 'atmo_star' },
        { time: 39.167, y: 0.055, type: 'atmo_star' },
        { time: 39.301, y: 0.915, type: 'atmo_fire' },
        { time: 39.334, y: 0.470, type: 'creature_sleipnir' },
        { time: 39.351, y: 0.215, type: 'obstacle' },
        { time: 39.634, y: 0.063, type: 'symbol_longship' },
        { time: 39.751, y: 0.905, type: 'atmo_fire' },
        { time: 39.767, y: 0.468, type: 'atmo_ice' },
        { time: 40.101, y: 0.905, type: 'atmo_fire' },
        { time: 40.217, y: 0.065, type: 'symbol_longship' },
        { time: 40.484, y: 0.063, type: 'symbol_longship' },
        { time: 40.634, y: 0.900, type: 'atmo_fire' },
        { time: 40.734, y: 0.475, type: 'atmo_ice' },
        { time: 40.784, y: 0.068, type: 'symbol_longship' },
        { time: 41.117, y: 0.053, type: 'atmo_star' },
        { time: 41.151, y: 0.793, type: 'obstacle' },
        { time: 41.201, y: 0.908, type: 'atmo_star' },
        { time: 41.201, y: 0.475, type: 'creature_fenrir' },
        { time: 41.501, y: 0.050, type: 'atmo_star' },
        { time: 41.601, y: 0.463, type: 'atmo_ice' },
        { time: 41.684, y: 0.910, type: 'atmo_star' },
        { time: 41.967, y: 0.050, type: 'atmo_star' },
        { time: 42.434, y: 0.903, type: 'atmo_star' },
        { time: 42.484, y: 0.050, type: 'atmo_star' },
        { time: 42.534, y: 0.473, type: 'atmo_ice' },
        { time: 42.984, y: 0.218, type: 'obstacle' },
        { time: 43.017, y: 0.050, type: 'symbol_longship' },
        { time: 43.051, y: 0.498, type: 'creature_jormungandr' },
        { time: 43.067, y: 0.903, type: 'atmo_star' },
        { time: 43.334, y: 0.050, type: 'atmo_star' },
        { time: 43.484, y: 0.475, type: 'atmo_ice' },
        { time: 43.551, y: 0.913, type: 'atmo_fire' },
        { time: 43.901, y: 0.050, type: 'atmo_star' },
        { time: 43.951, y: 0.910, type: 'atmo_fire' },
        { time: 44.267, y: 0.483, type: 'atmo_ice' },
        { time: 44.301, y: 0.050, type: 'atmo_star' },
        { time: 44.367, y: 0.910, type: 'atmo_fire' },
        { time: 44.817, y: 0.780, type: 'obstacle' },
        { time: 44.884, y: 0.050, type: 'atmo_star' },
        { time: 44.901, y: 0.925, type: 'atmo_star' },
        { time: 45.267, y: 0.475, type: 'atmo_ice' },
        { time: 45.317, y: 0.058, type: 'symbol_longship' },
        { time: 45.517, y: 0.923, type: 'atmo_star' },
        { time: 45.651, y: 0.470, type: 'creature_hel' },
        { time: 45.751, y: 0.058, type: 'symbol_longship' },
        { time: 46.151, y: 0.913, type: 'atmo_star' },
        { time: 46.317, y: 0.495, type: 'atmo_ice' },
        { time: 46.317, y: 0.050, type: 'symbol_longship' },
        { time: 46.651, y: 0.210, type: 'obstacle' },
        { time: 46.651, y: 0.913, type: 'atmo_star' },
        { time: 46.667, y: 0.790, type: 'obstacle' },
        { time: 47.001, y: 0.055, type: 'atmo_star' },
        { time: 47.134, y: 0.495, type: 'atmo_ice' },
        { time: 47.151, y: 0.915, type: 'atmo_fire' },
        { time: 47.551, y: 0.495, type: 'symbol_yggdrasil' },
        { time: 47.634, y: 0.058, type: 'atmo_star' },
        { time: 47.701, y: 0.915, type: 'atmo_fire' },
        { time: 47.951, y: 0.058, type: 'atmo_star' },
        { time: 48.117, y: 0.915, type: 'atmo_fire' },
        { time: 48.184, y: 0.508, type: 'atmo_ice' },
        { time: 48.484, y: 0.050, type: 'atmo_star' },
        { time: 48.517, y: 0.198, type: 'obstacle' },
        { time: 48.734, y: 0.900, type: 'atmo_star' },
        { time: 48.951, y: 0.060, type: 'symbol_longship' },
        { time: 48.984, y: 0.503, type: 'atmo_ice' },
        { time: 49.334, y: 0.903, type: 'atmo_star' },
        { time: 49.467, y: 0.508, type: 'symbol_yggdrasil' },
        { time: 49.534, y: 0.055, type: 'symbol_longship' },
        { time: 49.734, y: 0.903, type: 'atmo_star' },
        { time: 49.951, y: 0.508, type: 'atmo_ice' },
        { time: 49.984, y: 0.053, type: 'symbol_longship' },
        { time: 50.151, y: 0.908, type: 'atmo_star' },
        { time: 50.334, y: 0.815, type: 'obstacle' },
        { time: 50.417, y: 0.050, type: 'atmo_star' },
        { time: 50.651, y: 0.895, type: 'atmo_fire' },
        { time: 50.701, y: 0.050, type: 'atmo_star' },
        { time: 50.817, y: 0.503, type: 'atmo_ice' },
        { time: 51.184, y: 0.898, type: 'atmo_fire' },
        { time: 51.351, y: 0.500, type: 'symbol_yggdrasil' },
        { time: 51.367, y: 0.050, type: 'atmo_star' },
        { time: 51.584, y: 0.903, type: 'atmo_fire' },
        { time: 51.734, y: 0.513, type: 'atmo_ice' },
        { time: 52.117, y: 0.215, type: 'obstacle' },
        { time: 52.134, y: 0.050, type: 'atmo_star' },
        { time: 52.201, y: 0.903, type: 'atmo_fire' },
    ],
    chorus_final: [
        { time: 81.951, y: 0.950, type: 'atmo_star' },
        { time: 82.201, y: 0.050, type: 'atmo_bifrost' },
        { time: 82.551, y: 0.950, type: 'atmo_star' },
        { time: 82.626, y: 0.050, type: 'atmo_bifrost' },
        { time: 83.101, y: 0.050, type: 'atmo_bifrost' },
        { time: 83.176, y: 0.950, type: 'atmo_star' },
        { time: 83.576, y: 0.950, type: 'atmo_star' },
        { time: 83.576, y: 0.683, type: 'rune_fehu' },
        { time: 83.601, y: 0.165, type: 'rune_laguz' },
        { time: 83.626, y: 0.910, type: 'obstacle' },
        { time: 83.626, y: 0.320, type: 'symbol_runecircle' },
        { time: 83.626, y: 0.050, type: 'atmo_bifrost' },
        { time: 83.651, y: 0.508, type: 'creature_sleipnir' },
        { time: 84.026, y: 0.050, type: 'atmo_bifrost' },
        { time: 84.251, y: 0.950, type: 'atmo_star' },
        { time: 84.451, y: 0.050, type: 'atmo_bifrost' },
        { time: 84.801, y: 0.950, type: 'atmo_star' },
        { time: 84.901, y: 0.050, type: 'atmo_bifrost' },
        { time: 85.301, y: 0.950, type: 'atmo_star' },
        { time: 85.326, y: 0.400, type: 'rune_laguz' },
        { time: 85.451, y: 0.520, type: 'obstacle' },
        { time: 85.451, y: 0.198, type: 'symbol_raven' },
        { time: 85.501, y: 0.688, type: 'rune_fehu' },
        { time: 85.576, y: 0.053, type: 'atmo_bifrost' },
        { time: 85.626, y: 0.805, type: 'symbol_valknut' },
        { time: 85.876, y: 0.950, type: 'atmo_star' },
        { time: 85.976, y: 0.055, type: 'atmo_bifrost' },
        { time: 86.451, y: 0.950, type: 'atmo_star' },
        { time: 86.526, y: 0.055, type: 'atmo_bifrost' },
        { time: 86.951, y: 0.050, type: 'atmo_bifrost' },
        { time: 87.026, y: 0.950, type: 'atmo_star' },
        { time: 87.226, y: 0.055, type: 'atmo_bifrost' },
        { time: 87.251, y: 0.685, type: 'rune_fehu' },
        { time: 87.301, y: 0.508, type: 'creature_sleipnir' },
        { time: 87.351, y: 0.335, type: 'symbol_runecircle' },
        { time: 87.376, y: 0.050, type: 'obstacle' },
        { time: 87.401, y: 0.190, type: 'rune_laguz' },
        { time: 87.451, y: 0.950, type: 'atmo_star' },
        { time: 87.851, y: 0.058, type: 'atmo_bifrost' },
        { time: 88.026, y: 0.950, type: 'atmo_star' },
        { time: 88.176, y: 0.050, type: 'atmo_bifrost' },
        { time: 88.426, y: 0.950, type: 'atmo_star' },
        { time: 88.701, y: 0.063, type: 'atmo_bifrost' },
        { time: 89.051, y: 0.370, type: 'rune_laguz' },
        { time: 89.076, y: 0.950, type: 'atmo_star' },
        { time: 89.101, y: 0.500, type: 'obstacle' },
        { time: 89.101, y: 0.195, type: 'symbol_raven' },
        { time: 89.176, y: 0.805, type: 'symbol_valknut' },
        { time: 89.201, y: 0.060, type: 'atmo_bifrost' },
        { time: 89.226, y: 0.683, type: 'rune_fehu' },
        { time: 89.451, y: 0.950, type: 'atmo_star' },
        { time: 89.601, y: 0.058, type: 'atmo_bifrost' },
        { time: 89.876, y: 0.950, type: 'atmo_star' },
        { time: 90.051, y: 0.058, type: 'atmo_bifrost' },
        { time: 90.451, y: 0.950, type: 'atmo_star' },
        { time: 90.576, y: 0.068, type: 'atmo_bifrost' },
        { time: 90.901, y: 0.195, type: 'rune_laguz' },
        { time: 90.976, y: 0.338, type: 'symbol_runecircle' },
        { time: 90.976, y: 0.515, type: 'creature_sleipnir' },
        { time: 91.001, y: 0.950, type: 'atmo_star' },
        { time: 91.026, y: 0.683, type: 'rune_fehu' },
        { time: 91.051, y: 0.910, type: 'obstacle' },
        { time: 91.076, y: 0.050, type: 'obstacle' },
        { time: 91.101, y: 0.050, type: 'atmo_bifrost' },
        { time: 91.526, y: 0.055, type: 'atmo_bifrost' },
        { time: 91.601, y: 0.950, type: 'atmo_star' },
        { time: 92.051, y: 0.055, type: 'atmo_bifrost' },
        { time: 92.126, y: 0.950, type: 'atmo_star' },
        { time: 92.576, y: 0.055, type: 'atmo_bifrost' },
        { time: 92.651, y: 0.950, type: 'atmo_star' },
        { time: 92.776, y: 0.185, type: 'symbol_raven' },
        { time: 92.776, y: 0.683, type: 'rune_fehu' },
        { time: 92.826, y: 0.350, type: 'rune_laguz' },
        { time: 92.851, y: 0.788, type: 'symbol_valknut' },
        { time: 92.876, y: 0.508, type: 'obstacle' },
        { time: 93.051, y: 0.060, type: 'atmo_bifrost' },
        { time: 93.151, y: 0.950, type: 'atmo_star' },
        { time: 93.526, y: 0.060, type: 'atmo_bifrost' },
        { time: 93.651, y: 0.950, type: 'atmo_star' },
        { time: 93.976, y: 0.060, type: 'atmo_bifrost' },
        { time: 94.301, y: 0.950, type: 'atmo_star' },
        { time: 94.476, y: 0.518, type: 'creature_fenrir' },
        { time: 94.551, y: 0.050, type: 'atmo_bifrost' },
        { time: 94.751, y: 0.673, type: 'rune_fehu' },
        { time: 94.776, y: 0.050, type: 'obstacle' },
        { time: 94.801, y: 0.343, type: 'symbol_runecircle' },
        { time: 94.876, y: 0.950, type: 'atmo_star' },
        { time: 94.876, y: 0.163, type: 'rune_laguz' },
        { time: 95.126, y: 0.050, type: 'atmo_bifrost' },
        { time: 95.501, y: 0.950, type: 'atmo_star' },
        { time: 95.601, y: 0.050, type: 'atmo_bifrost' },
        { time: 96.026, y: 0.950, type: 'atmo_star' },
        { time: 96.126, y: 0.050, type: 'atmo_bifrost' },
        { time: 96.201, y: 0.353, type: 'rune_laguz' },
        { time: 96.451, y: 0.685, type: 'rune_fehu' },
        { time: 96.501, y: 0.950, type: 'atmo_star' },
        { time: 96.551, y: 0.515, type: 'obstacle' },
        { time: 96.551, y: 0.810, type: 'symbol_valknut' },
        { time: 96.601, y: 0.193, type: 'symbol_raven' },
        { time: 96.676, y: 0.063, type: 'atmo_bifrost' },
        { time: 96.901, y: 0.950, type: 'atmo_star' },
        { time: 97.301, y: 0.065, type: 'atmo_bifrost' },
        { time: 97.401, y: 0.950, type: 'atmo_star' },
        { time: 97.976, y: 0.065, type: 'atmo_bifrost' },
        { time: 97.976, y: 0.950, type: 'atmo_star' },
        { time: 98.301, y: 0.918, type: 'obstacle' },
        { time: 98.376, y: 0.050, type: 'obstacle' },
        { time: 98.376, y: 0.688, type: 'rune_fehu' },
        { time: 98.476, y: 0.325, type: 'symbol_runecircle' },
        { time: 98.476, y: 0.950, type: 'atmo_star' },
        { time: 98.526, y: 0.510, type: 'creature_fenrir' },
        { time: 98.576, y: 0.065, type: 'atmo_bifrost' },
        { time: 98.651, y: 0.950, type: 'atmo_star' },
        { time: 98.676, y: 0.180, type: 'rune_thurisaz' },
        { time: 99.151, y: 0.065, type: 'atmo_bifrost' },
        { time: 99.276, y: 0.950, type: 'atmo_star' },
        { time: 99.701, y: 0.063, type: 'atmo_bifrost' },
        { time: 99.776, y: 0.950, type: 'atmo_star' },
        { time: 100.176, y: 0.548, type: 'obstacle' },
        { time: 100.201, y: 0.805, type: 'symbol_valknut' },
        { time: 100.226, y: 0.060, type: 'atmo_bifrost' },
        { time: 100.276, y: 0.208, type: 'symbol_raven' },
        { time: 100.276, y: 0.695, type: 'rune_fehu' },
        { time: 100.301, y: 0.440, type: 'rune_thurisaz' },
        { time: 100.326, y: 0.950, type: 'atmo_star' },
        { time: 100.801, y: 0.060, type: 'atmo_bifrost' },
        { time: 100.801, y: 0.950, type: 'atmo_star' },
        { time: 101.251, y: 0.950, type: 'atmo_star' },
        { time: 101.501, y: 0.060, type: 'atmo_bifrost' },
        { time: 101.726, y: 0.950, type: 'atmo_star' },
        { time: 101.776, y: 0.265, type: 'rune_thurisaz' },
        { time: 101.951, y: 0.060, type: 'atmo_bifrost' },
        { time: 102.051, y: 0.675, type: 'rune_fehu' },
        { time: 102.076, y: 0.350, type: 'symbol_runecircle' },
        { time: 102.201, y: 0.538, type: 'creature_fenrir' },
        { time: 102.276, y: 0.050, type: 'obstacle' },
        { time: 102.351, y: 0.950, type: 'atmo_star' },
        { time: 102.601, y: 0.053, type: 'atmo_bifrost' },
        { time: 103.076, y: 0.950, type: 'atmo_star' },
        { time: 103.126, y: 0.060, type: 'atmo_bifrost' },
        { time: 103.476, y: 0.950, type: 'atmo_star' },
        { time: 103.551, y: 0.060, type: 'atmo_bifrost' },
        { time: 103.876, y: 0.530, type: 'obstacle' },
        { time: 103.926, y: 0.203, type: 'symbol_raven' },
        { time: 104.001, y: 0.950, type: 'atmo_star' },
        { time: 104.076, y: 0.808, type: 'symbol_valknut' },
        { time: 104.126, y: 0.060, type: 'atmo_bifrost' },
        { time: 104.126, y: 0.423, type: 'rune_thurisaz' },
        { time: 104.151, y: 0.683, type: 'rune_fehu' },
        { time: 104.651, y: 0.950, type: 'atmo_star' },
        { time: 104.851, y: 0.058, type: 'atmo_bifrost' },
        { time: 105.326, y: 0.950, type: 'atmo_star' },
        { time: 105.401, y: 0.065, type: 'atmo_bifrost' },
        { time: 105.576, y: 0.503, type: 'creature_jormungandr' },
        { time: 105.651, y: 0.223, type: 'rune_thurisaz' },
        { time: 105.776, y: 0.688, type: 'rune_fehu' },
        { time: 105.826, y: 0.343, type: 'symbol_runecircle' },
        { time: 105.851, y: 0.950, type: 'obstacle' },
        { time: 105.876, y: 0.050, type: 'obstacle' },
        { time: 106.101, y: 0.065, type: 'atmo_bifrost' },
        { time: 106.551, y: 0.950, type: 'atmo_star' },
        { time: 106.576, y: 0.073, type: 'atmo_bifrost' },
        { time: 107.076, y: 0.065, type: 'atmo_bifrost' },
        { time: 107.076, y: 0.950, type: 'atmo_star' },
        { time: 107.451, y: 0.188, type: 'symbol_raven' },
        { time: 107.501, y: 0.510, type: 'obstacle' },
        { time: 107.526, y: 0.803, type: 'symbol_valknut' },
        { time: 107.526, y: 0.065, type: 'atmo_bifrost' },
        { time: 107.726, y: 0.423, type: 'rune_thurisaz' },
        { time: 107.801, y: 0.688, type: 'rune_fehu' },
        { time: 107.951, y: 0.950, type: 'atmo_star' },
        { time: 108.201, y: 0.050, type: 'atmo_bifrost' },
        { time: 108.601, y: 0.050, type: 'atmo_bifrost' },
        { time: 108.701, y: 0.950, type: 'atmo_star' },
        { time: 109.201, y: 0.050, type: 'atmo_bifrost' },
        { time: 109.226, y: 0.950, type: 'atmo_star' },
        { time: 109.501, y: 0.353, type: 'symbol_runecircle' },
        { time: 109.526, y: 0.698, type: 'rune_fehu' },
        { time: 109.576, y: 0.533, type: 'creature_jormungandr' },
        { time: 109.601, y: 0.050, type: 'obstacle' },
        { time: 109.726, y: 0.950, type: 'atmo_star' },
        { time: 109.801, y: 0.050, type: 'atmo_bifrost' },
        { time: 109.801, y: 0.138, type: 'rune_thurisaz' },
        { time: 110.126, y: 0.950, type: 'atmo_star' },
        { time: 110.276, y: 0.050, type: 'atmo_bifrost' },
        { time: 110.701, y: 0.950, type: 'atmo_star' },
        { time: 110.901, y: 0.060, type: 'atmo_bifrost' },
        { time: 111.201, y: 0.160, type: 'symbol_raven' },
        { time: 111.226, y: 0.950, type: 'atmo_star' },
        { time: 111.276, y: 0.515, type: 'obstacle' },
        { time: 111.301, y: 0.808, type: 'symbol_valknut' },
    ]
};

// Map editor types to game texture keys
const ITEM_TYPE_TO_TEXTURE = {
    rune_fehu: 'norse_rune_fehu',
    rune_laguz: 'norse_rune_laguz',
    rune_thurisaz: 'norse_rune_thurisaz',
    creature_sleipnir: 'norse_sleipnir',
    creature_fenrir: 'norse_fenrir',
    creature_jormungandr: 'norse_jormungandr',
    creature_hel: 'norse_hel',
    atmo_aurora: 'norse_aurora',
    atmo_bifrost: 'norse_bifrost',
    atmo_fire: 'norse_fire',
    atmo_ice: 'norse_ice',
    atmo_star: 'norse_star',
    symbol_mjolnir: 'norse_mjolnir',
    symbol_raven: 'norse_raven',
    symbol_runecircle: 'norse_runecircle',
    symbol_valknut: 'norse_valknut',
    symbol_longship: 'norse_longship',
    symbol_yggdrasil: 'norse_yggdrasil',
};

// Item scales by category
const ITEM_SCALES = {
    // Scales adjusted 4x to compensate for image optimization (1024→256px)
    rune_fehu: 1.0, rune_laguz: 1.0, rune_thurisaz: 1.0,
    creature_sleipnir: 2.0, creature_fenrir: 2.0, creature_jormungandr: 2.0, creature_hel: 2.0,
    atmo_aurora: 1.2, atmo_bifrost: 1.2, atmo_fire: 0.8, atmo_ice: 0.8, atmo_star: 0.6,
    symbol_mjolnir: 1.0, symbol_raven: 0.8, symbol_runecircle: 0.8, symbol_valknut: 0.8,
    symbol_longship: 1.0, symbol_yggdrasil: 1.2,
};

const LEVEL_CONFIG = {
    // How fast the world scrolls (pixels per second)
    // This determines the entire level layout
    scrollSpeed: 400,
    
    // Screen dimensions (will be updated on resize)
    screenWidth: 800,
    screenHeight: 600,
    
    // Character position on screen (stays fixed, world moves)
    playerScreenX: 200,
    
    // Physics
    verseGravity: 3500,      // Normal platformer gravity
    chorusGravity: 400,       // Floaty falling in chorus
    jumpVelocity: -900,
    
    // Convert song time to world X position
    timeToX: function(time) {
        return time * this.scrollSpeed;
    },
    
    // Convert world X to song time
    xToTime: function(x) {
        return x / this.scrollSpeed;
    }
};

// =============================================================================
// BOOT SCENE - Load assets
// =============================================================================

class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }
    
    preload() {
        const w = this.scale.width;
        const h = this.scale.height;
        const seamY = h / 2;
        
        // Create split background
        const topBg = this.add.rectangle(w/2, seamY/2, w, seamY, 0x000000);
        const bottomBg = this.add.rectangle(w/2, seamY + seamY/2, w, seamY, 0xffffff);
        
        // Loading bar background
        const barWidth = 300;
        const barHeight = 20;
        const barBg = this.add.rectangle(w/2, seamY, barWidth + 4, barHeight + 4, 0x333333);
        const barFill = this.add.rectangle(w/2 - barWidth/2, seamY, 0, barHeight, 0x00ff88);
        barFill.setOrigin(0, 0.5);
        
        // Loading text
        const loadingText = this.add.text(w/2, seamY - 40, 'LOADING...', {
            fontFamily: 'Arial Black, sans-serif',
            fontSize: '24px',
            color: '#ffcc00',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);
        
        // Animated "Loki" rectangles (placeholders until sprites load)
        const whiteLoki = this.add.rectangle(50, seamY - 30, 30, 50, 0xffffff);
        whiteLoki.setStrokeStyle(2, 0x000000);
        const blackLoki = this.add.rectangle(50, seamY + 30, 30, 50, 0x000000);
        blackLoki.setStrokeStyle(2, 0xffffff);
        
        // Animate the Lokis running across
        this.tweens.add({
            targets: [whiteLoki, blackLoki],
            x: w - 50,
            duration: 3000,
            ease: 'Linear',
            repeat: -1,
            yoyo: true
        });
        
        // Bounce animation
        this.tweens.add({
            targets: whiteLoki,
            y: seamY - 40,
            duration: 200,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true
        });
        this.tweens.add({
            targets: blackLoki,
            y: seamY + 40,
            duration: 200,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
            delay: 100
        });
        
        // Update loading bar on progress
        this.load.on('progress', (value) => {
            barFill.width = barWidth * value;
            loadingText.setText(`LOADING... ${Math.floor(value * 100)}%`);
        });
        
        this.load.on('complete', () => {
            loadingText.setText('READY!');
        });
        
        // Now load all assets
        this.load.audio('song', 'assets/song/loki-genderfluid.mp3');
        
        // Load character sprites
        for (let i = 1; i <= 6; i++) {
            this.load.image(`white${i}`, `assets/woman/white${i}.png`);
            this.load.image(`black${i}`, `assets/man/black${i}.png`);
        }
        for (let i = 1; i <= 8; i++) {
            this.load.image(`jumping_woman${i}`, `assets/woman/jumping-woman${i}.png`);
            this.load.image(`flying${i}`, `assets/nonBinary/flying${i}.png`);
        }
        for (let i = 1; i <= 7; i++) {
            this.load.image(`jumping_man${i}`, `assets/man/jumping-man${i}.png`);
        }
        
        // Load Norse assets for chorus
        this.load.image('norse_sleipnir', 'assets/norse/creature-sleipnir-floating.png');
        this.load.image('norse_fenrir', 'assets/norse/creature-fenrir-howling.png');
        this.load.image('norse_jormungandr', 'assets/norse/creature-jormungandr-coiled.png');
        this.load.image('norse_hel', 'assets/norse/creature-hel-standing.png');
        this.load.image('norse_aurora', 'assets/norse/atmosphere-aurora-strip.png');
        this.load.image('norse_bifrost', 'assets/norse/atmosphere-bifrost-section.png');
        this.load.image('norse_fire', 'assets/norse/atmosphere-fire-wisp.png');
        this.load.image('norse_ice', 'assets/norse/atmosphere-ice-crystal.png');
        this.load.image('norse_star', 'assets/norse/atmosphere-mystical-star.png');
        this.load.image('norse_mjolnir', 'assets/norse/symbol-mjolnir-hammer.png');
        this.load.image('norse_raven', 'assets/norse/symbol-raven-flying.png');
        this.load.image('norse_runecircle', 'assets/norse/symbol-rune-circle.png');
        this.load.image('norse_valknut', 'assets/norse/symbol-valknut-gold.png');
        this.load.image('norse_longship', 'assets/norse/symbol-viking-longship.png');
        this.load.image('norse_yggdrasil', 'assets/norse/symbol-yggdrasil-tree.png');
        this.load.image('norse_rune_fehu', 'assets/norse/rune-fehu-stone.png');
        this.load.image('norse_rune_laguz', 'assets/norse/rune-laguz-stone.png');
        this.load.image('norse_rune_thurisaz', 'assets/norse/rune-thurisaz-stone.png');
        
        // Bridge section - Medieval Loki images (background)
        this.load.image('loki1', 'assets/loki1.png');
        this.load.image('loki2', 'assets/loki2.png');
        
        // Old Loki animation frames (for player during bridge)
        for (let i = 0; i <= 6; i++) {
            this.load.image(`old_loki_${i}`, `assets/old-loki/frame_00${i}.png`);
        }
        
        // Sleipnir horse animation (for bridge)
        for (let i = 1; i <= 6; i++) {
            this.load.image(`sleipnir_${i}`, `assets/horse/sleipnir${i}.png`);
        }
        
        // Chorus enemies - TERFs
        this.load.image('terf1_1', 'assets/enemies/terfs1/terf1-1.png');
        this.load.image('terf1_2', 'assets/enemies/terfs1/terf1-2.png');
        
        // Projectile - heart
        this.load.image('heart', 'assets/projectile/heart.png');
        
        // Explosion animation
        for (let i = 0; i <= 4; i++) {
            this.load.image(`explosion_${i}`, `assets/explosion/explosion-${i}.png`);
        }
    }
    
    create() {
        this.createAnimations();
        this.scene.start('GameScene');
    }
    
    createAnimations() {
        // Run animations - explicit frame definitions
        this.anims.create({
            key: 'white_run',
            frames: [
                { key: 'white1' },
                { key: 'white2' },
                { key: 'white3' },
                { key: 'white4' },
                { key: 'white5' },
                { key: 'white6' },
            ],
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.create({
            key: 'black_run',
            frames: [
                { key: 'black1' },
                { key: 'black2' },
                { key: 'black3' },
                { key: 'black4' },
                { key: 'black5' },
                { key: 'black6' },
            ],
            frameRate: 10,
            repeat: -1
        });
        
        // Jump animations
        this.anims.create({
            key: 'white_jump',
            frames: [
                { key: 'jumping_woman1' },
                { key: 'jumping_woman2' },
                { key: 'jumping_woman3' },
                { key: 'jumping_woman4' },
                { key: 'jumping_woman5' },
                { key: 'jumping_woman6' },
                { key: 'jumping_woman7' },
                { key: 'jumping_woman8' },
            ],
            frameRate: 12,
            repeat: 0
        });
        
        this.anims.create({
            key: 'black_jump',
            frames: [
                { key: 'jumping_man1' },
                { key: 'jumping_man2' },
                { key: 'jumping_man3' },
                { key: 'jumping_man4' },
                { key: 'jumping_man5' },
                { key: 'jumping_man6' },
                { key: 'jumping_man7' },
            ],
            frameRate: 12,
            repeat: 0
        });
        
        // Flying animation
        this.anims.create({
            key: 'flying',
            frames: [1,2,3,4,5,6,7,8].map(i => ({ key: `flying${i}` })),
            frameRate: 10,
            repeat: -1
        });
        
        // Old Loki player animation (for bridge section)
        this.anims.create({
            key: 'old_loki',
            frames: [0,1,2,3,4,5,6].map(i => ({ key: `old_loki_${i}` })),
            frameRate: 10,
            repeat: -1
        });
        
        // Sleipnir horse animation
        this.anims.create({
            key: 'sleipnir_run',
            frames: [1,2,3,4,5,6].map(i => ({ key: `sleipnir_${i}` })),
            frameRate: 12,
            repeat: -1
        });

        // Loki bridge animation - quick alternation between two frames
        this.anims.create({
            key: 'loki_dance',
            frames: [
                { key: 'loki1' },
                { key: 'loki2' },
            ],
            frameRate: 6,  // Quick alternation
            repeat: -1
        });
        
        // TERF enemy animation - alternating between two frames
        this.anims.create({
            key: 'terf_fly',
            frames: [
                { key: 'terf1_1' },
                { key: 'terf1_2' },
            ],
            frameRate: 8,
            repeat: -1
        });
        
        // Explosion animation
        this.anims.create({
            key: 'explosion',
            frames: [0,1,2,3,4].map(i => ({ key: `explosion_${i}` })),
            frameRate: 15,
            repeat: 0  // Play once
        });
    }
}

// =============================================================================
// GAME SCENE - Main gameplay
// =============================================================================

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }
    
    create() {
        const w = this.scale.width;
        const h = this.scale.height;
        LEVEL_CONFIG.screenWidth = w;
        LEVEL_CONFIG.screenHeight = h;
        
        // World container - everything moves together
        this.worldContainer = this.add.container(0, 0);
        
        // Build the entire level
        this.buildLevel();
        
        // Create characters (on screen, not in world container)
        this.createCharacters();
        
        // Setup input
        this.setupInput();
        
        // Create UI layer
        this.createUI();
        
        // Game state
        this.gameStarted = false;
        this.isDead = false;
        this.worldX = 0;  // Current world scroll position
        this.currentZone = null;
        this.seenZoneTypes = {};  // Track which zone types player has seen (for instructions)
        
        // Physics state
        this.velocityY = 0;
        this.isJumping = false;
        this.onGround = true;
        this.onPlatform = null;
        
        // Jump buffering - allows pressing jump slightly before landing
        this.jumpBufferTime = 0;  // Timestamp when jump was last pressed
        this.jumpBufferWindow = 150;  // ms window to buffer jump input
        
        // Schmup mode state (for chorus sections)
        this.schmupInput = { up: false, down: false, left: false, right: false };
        this.projectiles = [];  // Active heart projectiles
        this.enemies = [];  // Active TERF enemies
        this.enemyLines = [];  // Track active enemy lines
        this.currentChorusNumber = 0;  // Track which chorus we're on for difficulty
        this.lastShotTime = 0;  // For fire rate limiting
        this.shootCooldown = 200;  // ms between shots
        this.lastLineSpawnTime = 0;  // Track line spawning
        this.lineSpawnInterval = 3000;  // ms between line spawns
        
        // Sleipnir (horse companion in bridge)
        this.sleipnir = null;
        this.sleipnirState = 'waiting';  // 'waiting', 'entering', 'following'
        
        // Song
        this.song = this.sound.add('song');
        
        // End screen state
        this.gameEnded = false;
        this.endOverlay = null;
        this.endFadeStartTime = 115;  // Start fading 7 seconds before end (122 - 7)
        
        // Start overlay
        this.createStartOverlay();
    }
    
    buildLevel() {
        const h = LEVEL_CONFIG.screenHeight;
        const seamY = h / 2;
        
        // Store zone data for collision/physics detection
        this.zones = [];
        
        // Store collectible runes
        this.collectibles = [];
        this.runesCollected = 0;
        this.terfsDestroyed = 0;
        
        // Store shimmer overlays for chorus animation
        this.shimmerOverlays = [];
        
        // Build each section from song cues
        SONG_CUES.sections.forEach(section => {
            const startX = LEVEL_CONFIG.timeToX(section.start);
            const endX = LEVEL_CONFIG.timeToX(section.end);
            const width = endX - startX;
            
            if (section.type === 'verse') {
                this.buildVerseZone(startX, width, section);
            } else if (section.type === 'chorus') {
                this.buildChorusZone(startX, width, section);
            } else if (section.type === 'transition_to_chorus') {
                this.buildTransitionToChorus(startX, width, section);
            } else if (section.type === 'transition_to_verse') {
                this.buildTransitionToVerse(startX, width, section);
            } else if (section.type === 'bridge') {
                this.buildBridgeZone(startX, width, section);
            } else if (section.type === 'outro') {
                this.buildVerseZone(startX, width, section);  // Outro is like verse
            }
        });
        
        // Build intro zone (before first downbeat)
        const introEndX = LEVEL_CONFIG.timeToX(SONG_CUES.firstDownbeat);
        this.buildVerseZone(0, introEndX, { label: 'intro', type: 'verse' });
        
        // Place obstacles based on beat patterns
        this.placeObstacles();
    }
    
    buildVerseZone(startX, width, section) {
        const h = LEVEL_CONFIG.screenHeight;
        const seamY = h / 2;
        
        // Black background (top half)
        const topBg = this.add.rectangle(startX + width/2, seamY/2, width, seamY, 0x000000);
        this.worldContainer.add(topBg);
        
        // White background (bottom half)
        const bottomBg = this.add.rectangle(startX + width/2, seamY + seamY/2, width, seamY, 0xffffff);
        this.worldContainer.add(bottomBg);
        
        // Seam line
        const seam = this.add.rectangle(startX + width/2, seamY, width, 4, 0x888888);
        this.worldContainer.add(seam);
        
        // Store zone for physics
        this.zones.push({
            type: 'verse',
            startX: startX,
            endX: startX + width,
            groundY: seamY,
            label: section.label,
            gravity: LEVEL_CONFIG.verseGravity
        });
        
        // Debug border
        if (DEBUG_OPTIONS.showZoneBorders) {
            const border = this.add.rectangle(startX + width/2, h/2, width, h, 0x00ff00);
            border.setStrokeStyle(2, 0x00ff00, 0.5);
            border.setFillStyle(0x00ff00, 0);
            this.worldContainer.add(border);
            
            const label = this.add.text(startX + 10, 20, section.label, { 
                fontSize: '14px', 
                color: '#00ff00',
                backgroundColor: '#000000aa'
            });
            this.worldContainer.add(label);
        }
    }
    
    buildBridgeZone(startX, width, section) {
        const h = LEVEL_CONFIG.screenHeight;
        const centerY = h / 2;
        
        // Parchment/manuscript background
        const parchmentBg = this.add.graphics();
        parchmentBg.fillStyle(0xe8d4a8, 1); // Old parchment color
        parchmentBg.fillRect(startX, 0, width, h);
        this.worldContainer.add(parchmentBg);
        
        // Add some aged texture effect with subtle darker patches
        const aged = this.add.graphics();
        for (let i = 0; i < 20; i++) {
            const px = startX + Math.random() * width;
            const py = Math.random() * h;
            const size = 30 + Math.random() * 60;
            aged.fillStyle(0xc4a882, 0.2 + Math.random() * 0.2);
            aged.fillCircle(px, py, size);
        }
        this.worldContainer.add(aged);
        
        // Place animated Loki sprites across the zone
        const lokiScale = 1.1;  // Scale adjusted 3.2x for image optimization (1272→400px)
        const lokiSpacing = 500;  // More spacing between Lokis
        const numLokis = Math.ceil(width / lokiSpacing);
        
        for (let i = 0; i < numLokis; i++) {
            const x = startX + lokiSpacing/2 + i * lokiSpacing;
            
            // Create animated sprite
            const loki = this.add.sprite(x, centerY, 'loki1');
            loki.setScale(lokiScale);
            loki.play('loki_dance');
            
            // Offset the animation start time for variety
            if (i % 2 === 1) {
                loki.anims.setProgress(0.5); // Start at second frame
            }
            
            this.worldContainer.add(loki);
        }
        
        // Add some decorative border (manuscript style)
        const border = this.add.graphics();
        border.lineStyle(8, 0x8b4513, 0.6); // Brown border
        border.strokeRect(startX + 20, 20, width - 40, h - 40);
        this.worldContainer.add(border);
        
        // Store zone - bridge is like chorus (floaty flying)
        this.zones.push({
            type: 'bridge',
            startX: startX,
            endX: startX + width,
            groundY: null,  // No ground - floating
            label: section.label,
            gravity: LEVEL_CONFIG.chorusGravity
        });
        
        // Debug border
        if (DEBUG_OPTIONS.showZoneBorders) {
            const debugBorder = this.add.rectangle(startX + width/2, h/2, width, h);
            debugBorder.setStrokeStyle(2, 0xff8800, 0.5);
            debugBorder.setFillStyle(0xff8800, 0);
            this.worldContainer.add(debugBorder);
            
            const label = this.add.text(startX + 10, 20, section.label, { 
                fontSize: '14px', 
                color: '#ff8800',
                backgroundColor: '#000000aa'
            });
            this.worldContainer.add(label);
        }
    }
    
    buildChorusZone(startX, width, section) {
        const h = LEVEL_CONFIG.screenHeight;
        const centerY = h / 2;
        
        // === BIFRÖST RAINBOW BACKGROUND ===
        // Dark cosmic background first
        const cosmicBg = this.add.graphics();
        cosmicBg.fillStyle(0x0a0a1a, 1);
        cosmicBg.fillRect(startX, 0, width, h);
        this.worldContainer.add(cosmicBg);
        
        // Diagonal rainbow stripes (Bifröst style)
        const rainbowBg = this.add.graphics();
        const rainbowColors = [
            { color: 0xff1744, alpha: 0.7 },  // Red
            { color: 0xff6d00, alpha: 0.65 }, // Orange
            { color: 0xffd600, alpha: 0.6 },  // Yellow
            { color: 0x00e676, alpha: 0.6 },  // Green
            { color: 0x00b0ff, alpha: 0.65 }, // Cyan
            { color: 0x2979ff, alpha: 0.7 },  // Blue
            { color: 0x7c4dff, alpha: 0.7 },  // Indigo
            { color: 0xd500f9, alpha: 0.65 }, // Violet
            { color: 0xff1744, alpha: 0.6 },  // Back to red for seamless loop
        ];
        
        const stripeWidth = 120; // Width of each diagonal stripe
        const skewAngle = 0.3; // How much diagonal (radians)
        const totalRainbowWidth = stripeWidth * rainbowColors.length;
        
        // Draw diagonal stripes across the zone
        for (let xOffset = -totalRainbowWidth; xOffset < width + totalRainbowWidth; xOffset += totalRainbowWidth) {
            rainbowColors.forEach((c, idx) => {
                const x = startX + xOffset + idx * stripeWidth;
                const skewOffset = h * Math.tan(skewAngle);
                
                rainbowBg.fillStyle(c.color, c.alpha);
                rainbowBg.beginPath();
                rainbowBg.moveTo(x, 0);
                rainbowBg.lineTo(x + stripeWidth, 0);
                rainbowBg.lineTo(x + stripeWidth + skewOffset, h);
                rainbowBg.lineTo(x + skewOffset, h);
                rainbowBg.closePath();
                rainbowBg.fillPath();
            });
        }
        this.worldContainer.add(rainbowBg);
        
        // Add subtle glow overlay in center
        const glowOverlay = this.add.graphics();
        const glowGradientHeight = h * 0.4;
        for (let i = 0; i < 20; i++) {
            const alpha = 0.03 * (1 - i / 20);
            glowOverlay.fillStyle(0xffffff, alpha);
            glowOverlay.fillRect(startX, h/2 - glowGradientHeight/2 + i * (glowGradientHeight/20), width, glowGradientHeight/20);
        }
        this.worldContainer.add(glowOverlay);
        
        // === SHIMMER LIGHT STREAKS ===
        // Traveling light beams for shimmer effect
        const numStreaks = 5;
        for (let i = 0; i < numStreaks; i++) {
            const streak = this.add.graphics();
            
            // Gradient-like streak (brighter in center)
            const streakWidth = 60 + Math.random() * 40;
            const skew = h * 0.25;
            
            // Draw with varying opacity for glow effect
            for (let j = 0; j < 3; j++) {
                const alpha = 0.08 - j * 0.02;
                const offset = j * 15;
                streak.fillStyle(0xffffff, alpha);
                streak.beginPath();
                streak.moveTo(offset, 0);
                streak.lineTo(streakWidth - offset, 0);
                streak.lineTo(streakWidth - offset + skew, h);
                streak.lineTo(offset + skew, h);
                streak.closePath();
                streak.fillPath();
            }
            
            streak.x = startX + i * (width / numStreaks);
            streak.y = 0;
            this.worldContainer.add(streak);
            
            this.shimmerOverlays.push({
                graphic: streak,
                zoneStartX: startX,
                zoneWidth: width,
                speed: 120 + i * 25 + Math.random() * 30,
                offset: i * (width / numStreaks)
            });
        }
        
        // Add some static sparkle stars
        for (let i = 0; i < Math.ceil(width / 150); i++) {
            const sparkle = this.add.graphics();
            const sx = startX + 50 + Math.random() * (width - 100);
            const sy = 30 + Math.random() * (h - 60);
            const size = 2 + Math.random() * 3;
            
            // Draw a simple 4-point star
            sparkle.fillStyle(0xffffff, 0.6 + Math.random() * 0.4);
            sparkle.fillCircle(sx, sy, size);
            sparkle.fillRect(sx - size * 2, sy - 1, size * 4, 2);
            sparkle.fillRect(sx - 1, sy - size * 2, 2, size * 4);
            
            this.worldContainer.add(sparkle);
        }
        
        // === PLACE ITEMS FROM EDITOR DATA ===
        const chorusItems = CHORUS_ITEMS[section.label] || [];
        
        if (chorusItems.length > 0) {
            // Use custom placement from editor
            chorusItems.forEach(item => {
                const textureKey = ITEM_TYPE_TO_TEXTURE[item.type];
                if (!textureKey) return;
                
                const x = LEVEL_CONFIG.timeToX(item.time);
                const y = item.y * h; // Convert normalized Y to screen Y
                const scale = ITEM_SCALES[item.type] || 1.0;  // Default adjusted 4x for optimization
                
                const sprite = this.add.image(x, y, textureKey);
                sprite.setScale(scale);
                
                // Runes are collectible
                if (item.type.startsWith('rune_')) {
                    sprite.setAlpha(0.9);
                    sprite.isCollectible = true;
                    sprite.worldX = x;
                    this.collectibles.push(sprite);
                } else if (item.type.startsWith('creature_')) {
                    // Creatures are semi-transparent background elements
                    sprite.setAlpha(0.6);
                } else {
                    // Atmosphere and symbols
                    sprite.setAlpha(0.7);
                }
                
                this.worldContainer.add(sprite);
            });
        } else {
            // Fallback: random placement for choruses without editor data
            const runeKeys = ['norse_rune_fehu', 'norse_rune_laguz', 'norse_rune_thurisaz'];
            const runeSpacing = 150;
            const numRunes = Math.ceil(width / runeSpacing);
            
            for (let i = 0; i < numRunes; i++) {
                const x = startX + 75 + i * runeSpacing;
                const y = 80 + Math.random() * (h - 160);
                const runeKey = runeKeys[i % runeKeys.length];
                
                const rune = this.add.image(x, y, runeKey);
                rune.setScale(1.0);  // Adjusted 4x for image optimization
                rune.setAlpha(0.9);
                this.worldContainer.add(rune);
                
                rune.isCollectible = true;
                rune.worldX = x;
                this.collectibles.push(rune);
            }
        }
        
        // Store zone
        this.zones.push({
            type: 'chorus',
            startX: startX,
            endX: startX + width,
            groundY: null,  // No ground!
            label: section.label,
            gravity: LEVEL_CONFIG.chorusGravity
        });
        
        // Debug border
        if (DEBUG_OPTIONS.showZoneBorders) {
            const border = this.add.rectangle(startX + width/2, h/2, width, h);
            border.setStrokeStyle(2, 0xff00ff, 0.5);
            border.setFillStyle(0xff00ff, 0);
            this.worldContainer.add(border);
            
            const label = this.add.text(startX + 10, 20, section.label, { 
                fontSize: '14px', 
                color: '#ff00ff',
                backgroundColor: '#000000aa'
            });
            this.worldContainer.add(label);
        }
    }
    
    buildTransitionToChorus(startX, width, section) {
        const h = LEVEL_CONFIG.screenHeight;
        const seamY = h / 2;
        
        // Verse ground that ends with an edge
        // First 70% is ground, last 30% is the drop
        const groundWidth = width * 0.7;
        const dropWidth = width * 0.3;
        
        // Ground part (like verse)
        const topBg = this.add.rectangle(startX + groundWidth/2, seamY/2, groundWidth, seamY, 0x000000);
        this.worldContainer.add(topBg);
        
        const bottomBg = this.add.rectangle(startX + groundWidth/2, seamY + seamY/2, groundWidth, seamY, 0xffffff);
        this.worldContainer.add(bottomBg);
        
        const seam = this.add.rectangle(startX + groundWidth/2, seamY, groundWidth, 4, 0x888888);
        this.worldContainer.add(seam);
        
        // Drop part (rainbow realm starting)
        const dropStart = startX + groundWidth;
        
        // Rainbow gradient fading in
        const dropBg = this.add.graphics();
        const rainbowColors = [0xff0000, 0xff7700, 0xffff00, 0x00ff00, 0x0088ff, 0x8800ff];
        const stripeHeight = h / rainbowColors.length;
        rainbowColors.forEach((color, idx) => {
            dropBg.fillStyle(color, 0.4); // Lower opacity for transition
            dropBg.fillRect(dropStart, idx * stripeHeight, dropWidth, stripeHeight + 1);
        });
        this.worldContainer.add(dropBg);
        
        // A couple Norse assets appearing
        const transitionAssets = ['norse_rune_fehu', 'norse_star', 'norse_valknut'];
        transitionAssets.forEach((key, i) => {
            const x = dropStart + (i + 1) * (dropWidth / 4);
            const y = h / 2 + (Math.random() - 0.5) * 150;
            const sprite = this.add.image(x, y, key);
            sprite.setScale(1.0);  // Adjusted 4x for image optimization
            sprite.setAlpha((x - dropStart) / dropWidth * 0.6);
            this.worldContainer.add(sprite);
        });
        
        // Store as two zones: ground part and drop part
        this.zones.push({
            type: 'verse',
            startX: startX,
            endX: startX + groundWidth,
            groundY: seamY,
            label: section.label + '_ground',
            gravity: LEVEL_CONFIG.verseGravity
        });
        
        this.zones.push({
            type: 'transition_drop',
            startX: startX + groundWidth,
            endX: startX + width,
            groundY: null,
            label: section.label + '_drop',
            gravity: LEVEL_CONFIG.chorusGravity
        });
        
        // Debug
        if (DEBUG_OPTIONS.showZoneBorders) {
            const label = this.add.text(startX + 10, 40, section.label, { 
                fontSize: '14px', 
                color: '#ffff00',
                backgroundColor: '#000000aa'
            });
            this.worldContainer.add(label);
        }
    }
    
    buildTransitionToVerse(startX, width, section) {
        const h = LEVEL_CONFIG.screenHeight;
        const seamY = h / 2;
        
        // Verse ground appears - player lands on it
        // First 30% is the approach, last 70% is ground
        const approachWidth = width * 0.3;
        const groundWidth = width * 0.7;
        
        // Approach part (rainbow realm fading)
        const approachBg = this.add.graphics();
        const rainbowColors = [0xff0000, 0xff7700, 0xffff00, 0x00ff00, 0x0088ff, 0x8800ff];
        const stripeHeight = h / rainbowColors.length;
        rainbowColors.forEach((color, idx) => {
            approachBg.fillStyle(color, 0.4); // Lower opacity for transition
            approachBg.fillRect(startX, idx * stripeHeight, approachWidth, stripeHeight + 1);
        });
        this.worldContainer.add(approachBg);
        
        // A couple Norse assets fading out
        const transitionAssets = ['norse_star', 'norse_rune_laguz'];
        transitionAssets.forEach((key, i) => {
            const x = startX + (i + 1) * (approachWidth / 3);
            const y = h / 2 + (Math.random() - 0.5) * 150;
            const sprite = this.add.image(x, y, key);
            sprite.setScale(1.0);  // Adjusted 4x for image optimization
            sprite.setAlpha((1 - (x - startX) / approachWidth) * 0.5);
            this.worldContainer.add(sprite);
        });
        
        // Ground part
        const groundStart = startX + approachWidth;
        const topBg = this.add.rectangle(groundStart + groundWidth/2, seamY/2, groundWidth, seamY, 0x000000);
        this.worldContainer.add(topBg);
        
        const bottomBg = this.add.rectangle(groundStart + groundWidth/2, seamY + seamY/2, groundWidth, seamY, 0xffffff);
        this.worldContainer.add(bottomBg);
        
        const seam = this.add.rectangle(groundStart + groundWidth/2, seamY, groundWidth, 4, 0x888888);
        this.worldContainer.add(seam);
        
        // Store zones
        this.zones.push({
            type: 'transition_approach',
            startX: startX,
            endX: startX + approachWidth,
            groundY: null,
            label: section.label + '_approach',
            gravity: LEVEL_CONFIG.chorusGravity
        });
        
        this.zones.push({
            type: 'verse',
            startX: startX + approachWidth,
            endX: startX + width,
            groundY: seamY,
            label: section.label + '_ground',
            gravity: LEVEL_CONFIG.verseGravity
        });
    }
    
    placeObstacles() {
        // Store obstacles for collision detection
        this.obstacles = [];
        
        // Obstacle pattern (beats to X positions)
        const obstacleData = [
            { beat: 2, type: 'spike' },
            { beat: 6, type: 'spike' },
            { beat: 10, type: 'spike' },
            { beat: 14, type: 'spike' },
            { beat: 16, type: 'block_low' },
            { beat: 17, type: 'block_low' },
            { beat: 18, type: 'block_mid' },
            { beat: 18, type: 'spike' },
            { beat: 19, type: 'block_mid' },
            { beat: 20, type: 'block_high' },
            { beat: 21, type: 'block_mid' },
            { beat: 22, type: 'block_high' },
            { beat: 22, type: 'spike' },
            { beat: 23, type: 'block_mid' },
            { beat: 24, type: 'block_high' },
            { beat: 25, type: 'block_high' },
            { beat: 26, type: 'block_mid' },
            { beat: 26, type: 'spike' },
            { beat: 27, type: 'block_mid' },
            { beat: 28, type: 'block_low' },
            // verse2 obstacles
            { beat: 50, type: 'block_low' },
            { beat: 50, type: 'spike' },
            { beat: 51, type: 'block_mid' },
            { beat: 52, type: 'block_high' },
            { beat: 53, type: 'block_highhigh' },
            { beat: 54, type: 'block_low' },
            { beat: 54, type: 'spike' },
            { beat: 55, type: 'block_low' },
            { beat: 55, type: 'spike' },
            { beat: 56, type: 'block_low' },
            { beat: 56, type: 'spike' },
            { beat: 58, type: 'spike' },
            { beat: 60, type: 'block_low' },
            { beat: 61, type: 'block_low' },
            { beat: 62, type: 'block_mid' },
            { beat: 62, type: 'spike' },
            { beat: 63, type: 'block_mid' },
            { beat: 63, type: 'spike' },
            { beat: 64, type: 'block_high' },
            { beat: 64, type: 'spike' },
            { beat: 65, type: 'block_high' },
            { beat: 65, type: 'spike' },
            { beat: 66, type: 'block_highhigh' },
            { beat: 66, type: 'spike' },
            { beat: 67, type: 'block_highhigh' },
            { beat: 67, type: 'spike' },
            { beat: 68, type: 'block_mid' },
            { beat: 68, type: 'spike' },
            { beat: 69, type: 'block_mid' },
            { beat: 69, type: 'spike' },
            { beat: 70, type: 'block_high' },
            { beat: 70, type: 'spike' },
            { beat: 71, type: 'block_high' },
            { beat: 71, type: 'spike' },
            { beat: 72, type: 'block_mid' },
            { beat: 72, type: 'spike' },
            { beat: 73, type: 'block_high' },
            { beat: 73, type: 'spike' },
            { beat: 74, type: 'block_highhigh' },
            { beat: 74, type: 'spike' },
            { beat: 75, type: 'spike' },
            // verse3 obstacles
            { beat: 147, type: 'block_low' },
            { beat: 148, type: 'block_mid' },
            { beat: 148, type: 'spike' },
            { beat: 149, type: 'block_low' },
            { beat: 150, type: 'block_mid' },
            { beat: 150, type: 'spike' },
            { beat: 151, type: 'block_high' },
            { beat: 151, type: 'spike' },
            { beat: 152, type: 'block_mid' },
            { beat: 152, type: 'spike' },
            { beat: 153, type: 'block_high' },
            { beat: 153, type: 'spike' },
            { beat: 154, type: 'block_highhigh' },
            { beat: 154, type: 'spike' },
            { beat: 155, type: 'block_high' },
            { beat: 155, type: 'spike' },
            { beat: 156, type: 'block_highhigh' },
            { beat: 156, type: 'spike' },
            { beat: 157, type: 'block_high' },
            { beat: 157, type: 'spike' },
            { beat: 158, type: 'block_highhigh' },
            { beat: 158, type: 'spike' },
            { beat: 160, type: 'spike' },
            { beat: 162, type: 'block_low' },
            { beat: 163, type: 'block_mid' },
            { beat: 164, type: 'block_high' },
            { beat: 164, type: 'spike' },
            { beat: 165, type: 'block_highhigh' },
            { beat: 165, type: 'spike' },
            { beat: 166, type: 'block_high' },
            { beat: 166, type: 'spike' },
            { beat: 167, type: 'block_mid' },
            { beat: 168, type: 'block_low' },
            { beat: 169, type: 'block_mid' },
            { beat: 169, type: 'spike' },
            { beat: 170, type: 'block_high' },
            { beat: 170, type: 'spike' },
            { beat: 171, type: 'block_mid' },
            { beat: 172, type: 'spike' },
        ];
        
        const h = LEVEL_CONFIG.screenHeight;
        const seamY = h / 2;
        
        obstacleData.forEach(obs => {
            const beatTime = SONG_CUES.getBeatTime(obs.beat);
            const x = LEVEL_CONFIG.timeToX(beatTime);
            
            if (obs.type === 'spike') {
                // White spike on black (top)
                const spikeTop = this.add.triangle(x, seamY, 0, 40, 20, 0, 40, 40, 0xffffff);
                spikeTop.setOrigin(0.5, 1);
                spikeTop.setScale(2);
                this.worldContainer.add(spikeTop);
                
                // Black spike on white (bottom, flipped)
                const spikeBottom = this.add.triangle(x, seamY, 0, 0, 20, 40, 40, 0, 0x000000);
                spikeBottom.setOrigin(0.5, 0);
                spikeBottom.setScale(2);
                this.worldContainer.add(spikeBottom);
                
                // Store for collision
                this.obstacles.push({
                    type: 'spike',
                    worldX: x,
                    topSprite: spikeTop,
                    bottomSprite: spikeBottom,
                    hit: false
                });
            } else {
                // Blocks at different heights
                const heights = { 'block_low': 80, 'block_mid': 130, 'block_high': 180, 'block_highhigh': 230 };
                const blockHeight = heights[obs.type] || 80;
                
                // Top block (white on black)
                const blockTop = this.add.rectangle(x, seamY - blockHeight, 60, 30, 0xffffff);
                blockTop.setOrigin(0.5, 1);
                blockTop.setScale(2, 1);
                this.worldContainer.add(blockTop);
                
                // Bottom block (black on white, mirrored)
                const blockBottom = this.add.rectangle(x, seamY + blockHeight, 60, 30, 0x000000);
                blockBottom.setOrigin(0.5, 0);
                blockBottom.setScale(2, 1);
                this.worldContainer.add(blockBottom);
                
                // Store for collision
                this.obstacles.push({
                    type: 'block',
                    worldX: x,
                    height: blockHeight,
                    topSprite: blockTop,
                    bottomSprite: blockBottom
                });
            }
        });
    }
    
    createCharacters() {
        const h = LEVEL_CONFIG.screenHeight;
        const seamY = h / 2;
        const playerX = LEVEL_CONFIG.playerScreenX;
        
        this.charScale = 3;
        
        // Create a container for characters (like original game)
        this.characterLayer = this.add.container(0, 0);
        this.characterLayer.setDepth(100);
        
        // Top character (white woman on black background)
        this.charWhite = this.add.sprite(playerX, seamY - 50, 'white1');
        this.charWhite.setScale(this.charScale);
        this.characterLayer.add(this.charWhite);
        
        // Bottom character (black man on white background, flipped)
        this.charBlack = this.add.sprite(playerX, seamY + 70, 'black1');  // Nudged down
        this.charBlack.setScale(this.charScale);
        this.charBlack.setFlipY(true);
        this.characterLayer.add(this.charBlack);
        
        // Combined character (for chorus)
        this.charCombined = this.add.sprite(playerX, seamY, 'flying1');
        this.charCombined.setScale(this.charScale);
        this.charCombined.setVisible(false);
        this.characterLayer.add(this.charCombined);
        
        // Store base Y positions
        this.groundYTop = seamY - 50;
        this.groundYBottom = seamY + 70;  // Nudged down a bit
        
        // Start run animation
        this.charWhite.play('white_run');
        this.charBlack.play('black_run');
    }
    
    setupInput() {
        document.addEventListener('keydown', (e) => {
            if (!this.gameStarted || this.isDead) return;
            
            // Schmup movement (arrow keys + WASD)
            if (e.code === 'ArrowUp' || e.code === 'KeyW') this.schmupInput.up = true;
            if (e.code === 'ArrowDown' || e.code === 'KeyS') this.schmupInput.down = true;
            if (e.code === 'ArrowLeft' || e.code === 'KeyA') this.schmupInput.left = true;
            if (e.code === 'ArrowRight' || e.code === 'KeyD') this.schmupInput.right = true;
            
            // Universal action button: Space, Z, or X
            // Verse: Jump | Chorus: Shoot | Bridge: Float/Jump
            if ((e.code === 'Space' || e.code === 'KeyZ' || e.code === 'KeyX') && !e.repeat) {
                e.preventDefault();
                this.doAction();
            }
        });
        
        document.addEventListener('keyup', (e) => {
            // Release schmup movement (arrow keys + WASD)
            if (e.code === 'ArrowUp' || e.code === 'KeyW') this.schmupInput.up = false;
            if (e.code === 'ArrowDown' || e.code === 'KeyS') this.schmupInput.down = false;
            if (e.code === 'ArrowLeft' || e.code === 'KeyA') this.schmupInput.left = false;
            if (e.code === 'ArrowRight' || e.code === 'KeyD') this.schmupInput.right = false;
        });
        
        document.addEventListener('touchstart', (e) => {
            if (!this.gameStarted || this.isDead) return;
            if (document.getElementById('start-overlay')?.contains(e.target)) return;
            e.preventDefault();
            
            if (this.isInSchmupMode()) {
                this.shoot();
            } else {
                this.jump();
            }
        }, { passive: false });
    }
    
    isInSchmupMode() {
        return this.currentZone && this.currentZone.type === 'chorus';
    }
    
    createUI() {
        if (DEBUG_OPTIONS.showDebugInfo) {
            this.debugText = this.add.text(10, 10, '', {
                fontSize: '14px',
                color: '#ffffff',
                backgroundColor: '#000000aa',
                padding: { x: 5, y: 5 }
            });
            this.debugText.setScrollFactor(0);
            this.debugText.setDepth(1000);
        }
        
        // Rune counter display (top right)
        this.runeCounterText = this.add.text(this.scale.width - 20, 20, 'ᚱ 0', {
            fontFamily: '"Noto Sans Runic", "BBH Bartle", sans-serif',
            fontSize: '28px',
            color: '#ffcc00',
            stroke: '#000000',
            strokeThickness: 4
        });
        this.runeCounterText.setOrigin(1, 0);
        this.runeCounterText.setScrollFactor(0);
        this.runeCounterText.setDepth(1000);
        
        // TERF counter with image
        this.terfIcon = this.add.image(this.scale.width - 100, 60, 'terf1');
        this.terfIcon.setScale(0.3);  // Adjusted 2x for image optimization (812→400px)
        this.terfIcon.setScrollFactor(0);
        this.terfIcon.setDepth(1000);
        
        this.terfCounterText = this.add.text(this.scale.width - 20, 50, '0', {
            fontFamily: '"BBH Bartle", sans-serif',
            fontSize: '28px',
            color: '#ff6666',
            stroke: '#000000',
            strokeThickness: 4
        });
        this.terfCounterText.setOrigin(1, 0);
        this.terfCounterText.setScrollFactor(0);
        this.terfCounterText.setDepth(1000);
        
        // Instruction text (shows on first entry to each zone type)
        this.instructionText = this.add.text(this.scale.width / 2, this.scale.height - 60, '', {
            fontFamily: '"Bebas Neue", "Arial Black", sans-serif',
            fontSize: '36px',
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 5,
            align: 'center'
        });
        this.instructionText.setOrigin(0.5);
        this.instructionText.setScrollFactor(0);
        this.instructionText.setDepth(1000);
        this.instructionText.setAlpha(0);
        
        // Lyrics display
        this.createLyricsDisplay();
    }
    
    showInstructions(zoneType) {
        // Only show once per zone type
        if (this.seenZoneTypes[zoneType]) return;
        this.seenZoneTypes[zoneType] = true;
        
        const instructions = {
            verse: 'TAP/SPACE TO JUMP',
            chorus: 'TAP/SPACE TO SHOOT • USE D-PAD TO MOVE',
            bridge: 'TAP/SPACE TO FLOAT'
        };
        
        const text = instructions[zoneType];
        if (!text) return;
        
        this.instructionText.setText(text);
        this.instructionText.setAlpha(1);
        
        // Fade out after 3 seconds
        this.tweens.add({
            targets: this.instructionText,
            alpha: 0,
            delay: 3000,
            duration: 1000,
            ease: 'Power2'
        });
    }
    
    createLyricsDisplay() {
        const w = this.scale.width;
        const h = this.scale.height;
        const seamY = h / 2;
        
        // Position: just above highest platform level (same relative position on each half)
        const lyricOffset = 300; // Distance from seam
        
        // Top lyrics: white text on black background
        // Lyrics disabled - keeping references for potential future use
        this.lyricsTextTop = this.add.text(0, 0, '', {}).setVisible(false);
        this.lyricsTextBottom = this.add.text(0, 0, '', {}).setVisible(false);
        
        // Track current lyric to avoid re-setting
        this.currentLyricIndex = -1;
    }
    
    updateLyrics(songTime) {
        if (!window.LYRICS_TIMING || !this.lyricsTextTop) return;
        
        // Find current segment
        let newIndex = -1;
        for (let i = 0; i < LYRICS_TIMING.segments.length; i++) {
            const seg = LYRICS_TIMING.segments[i];
            if (songTime >= seg.start && songTime < seg.end) {
                newIndex = i;
                break;
            }
        }
        
        // Only update if changed
        if (newIndex !== this.currentLyricIndex) {
            this.currentLyricIndex = newIndex;
            
            if (newIndex >= 0) {
                const segment = LYRICS_TIMING.segments[newIndex];
                
                // Alternate: even index = top (black side), odd index = bottom (white side)
                const useTop = (newIndex % 2 === 0);
                const activeText = useTop ? this.lyricsTextTop : this.lyricsTextBottom;
                const inactiveText = useTop ? this.lyricsTextBottom : this.lyricsTextTop;
                
                // Hide the inactive one
                inactiveText.setAlpha(0);
                
                // Set and animate the active one
                activeText.setText(segment.text);
                activeText.setAlpha(0);
                
                activeText.setScale(0.8);
                this.tweens.add({
                    targets: activeText,
                    alpha: 1,
                    scale: 1,
                    duration: 150,
                    ease: 'Back.easeOut'
                });
            } else {
                // Fade out when no lyric
                this.tweens.add({
                    targets: [this.lyricsTextTop, this.lyricsTextBottom],
                    alpha: 0,
                    duration: 200
                });
            }
        }
    }
    
    createStartOverlay() {
        const w = this.scale.width;
        const h = this.scale.height;
        
        this.startOverlay = this.add.container(0, 0);
        
        const bg = this.add.rectangle(w/2, h/2, w, h, 0x000000, 0.8);
        this.startOverlay.add(bg);
        
        const text = this.add.text(w/2, h/2, 'CLICK TO START', {
            fontSize: '32px',
            color: '#ffffff'
        }).setOrigin(0.5);
        this.startOverlay.add(text);
        
        this.startOverlay.setDepth(1000);
        
        this.input.once('pointerdown', () => {
            this.startGame();
        });
    }
    
    startGame() {
        this.gameStarted = true;
        this.startOverlay.setVisible(false);
        
        // Start song
        if (DEBUG_OPTIONS.skipToTime) {
            this.song.play({ seek: DEBUG_OPTIONS.skipToTime });
            this.worldX = LEVEL_CONFIG.timeToX(DEBUG_OPTIONS.skipToTime);
        } else {
            this.song.play();
            this.worldX = 0;
        }
        
        if (DEBUG_OPTIONS.muteMusic) {
            this.song.setMute(true);
        }
        
        // Start animations
        this.charWhite.play('white_run');
        this.charBlack.play('black_run');
        
        // Ensure ground state
        this.onGround = true;
        this.isJumping = false;
        this.velocityY = 0;
    }
    
    createEndOverlay() {
        if (this.endOverlay) return;  // Already created
        
        const w = this.scale.width;
        const h = this.scale.height;
        
        // Create rainbow gradient background
        this.endOverlay = this.add.container(0, 0);
        this.endOverlay.setDepth(2000);
        this.endOverlay.setAlpha(0);
        
        // Rainbow gradient using multiple colored rectangles
        const rainbowColors = [0xff0000, 0xff7f00, 0xffff00, 0x00ff00, 0x0000ff, 0x4b0082, 0x9400d3];
        const stripeHeight = h / rainbowColors.length;
        
        rainbowColors.forEach((color, i) => {
            const stripe = this.add.rectangle(w/2, stripeHeight * i + stripeHeight/2, w, stripeHeight, color, 1);
            this.endOverlay.add(stripe);
        });
        
        // Add slight overlay for text readability
        const overlay = this.add.rectangle(w/2, h/2, w, h, 0x000000, 0.3);
        this.endOverlay.add(overlay);
        
        // Thanks for playing text
        const thanksText = this.add.text(w/2, h/2 - 30, 'THANKS FOR PLAYING', {
            fontFamily: '"BBH Bartle", sans-serif',
            fontSize: '48px',
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 6
        }).setOrigin(0.5);
        this.endOverlay.add(thanksText);
        
        // Subtitle
        const subText = this.add.text(w/2, h/2 + 30, '🏳️‍🌈 LOKI IS GENDERFLUID 🏳️‍⚧️', {
            fontFamily: '"BBH Bartle", sans-serif',
            fontSize: '32px',
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);
        this.endOverlay.add(subText);
    }
    
    updateEndFade(songTime) {
        // Start fading in during last 7 seconds
        if (songTime >= this.endFadeStartTime) {
            // Create overlay if not exists
            this.createEndOverlay();
            
            // Calculate fade progress (0 to 1 over 7 seconds)
            const fadeProgress = (songTime - this.endFadeStartTime) / 7;
            const alpha = Math.min(fadeProgress, 1);
            
            this.endOverlay.setAlpha(alpha);
            
            // Fade out characters as overlay fades in
            const charAlpha = 1 - alpha;
            this.charWhite.setAlpha(charAlpha);
            this.charBlack.setAlpha(charAlpha);
            this.charCombined.setAlpha(charAlpha);
        }
    }
    
    // Universal action - context-sensitive based on current zone
    doAction() {
        if (this.currentZone?.type === 'chorus') {
            this.shoot();
        } else {
            // Verse, bridge, or any other zone: jump
            this.jump();
        }
    }
    
    jump() {
        // Always record that jump was pressed (for buffering)
        this.jumpBufferTime = performance.now();
        
        // Execute jump if allowed
        this.tryJump();
    }
    
    tryJump() {
        // Don't jump in chorus (schmup mode) - we shoot instead
        if (this.currentZone?.type === 'chorus') return;
        
        if (this.onGround || this.currentZone?.type === 'bridge') {
            this.velocityY = LEVEL_CONFIG.jumpVelocity;
            this.isJumping = true;
            this.onGround = false;
            this.jumpBufferTime = 0;  // Clear buffer after successful jump
            
            // Play jump animation if in verse
            if (this.currentZone?.type === 'verse') {
                this.charWhite.play('white_jump');
                this.charBlack.play('black_jump');
            }
        }
    }
    
    shoot() {
        // Only shoot in chorus (schmup mode)
        if (!this.isInSchmupMode()) return;
        
        // Rate limit shooting
        const now = performance.now();
        if (now - this.lastShotTime < this.shootCooldown) return;
        this.lastShotTime = now;
        
        // Create heart projectile at character position
        const heart = this.add.sprite(
            this.charCombined.x + 30,  // Slightly in front
            this.charCombined.y,
            'heart'
        );
        heart.setScale(2);  // Bigger heart!
        
        // Store velocity for movement
        heart.velocityX = 500;  // Pixels per second
        
        this.projectiles.push(heart);
    }
    
    updateProjectiles(dt) {
        const w = this.scale.width;
        
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const proj = this.projectiles[i];
            
            // Move projectile right
            proj.x += proj.velocityX * dt;
            
            // Remove if off screen
            if (proj.x > w + 50) {
                proj.destroy();
                this.projectiles.splice(i, 1);
            }
        }
    }
    
    updateEnemies(dt) {
        const time = performance.now() / 1000;  // Time in seconds for sine wave
        
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            const enemy = this.enemies[i];
            
            // Move enemy left toward player
            enemy.x += enemy.velocityX * dt;
            
            // Sine wave movement (up/down oscillation)
            const sineOffset = Math.sin(time * enemy.sineSpeed + enemy.sinePhase) * enemy.sineAmplitude;
            enemy.y = enemy.baseY + sineOffset;
            
            // Remove if off screen left
            if (enemy.x < -100) {
                enemy.destroy();
                this.enemies.splice(i, 1);
            }
        }
    }
    
    spawnEnemies() {
        // Only spawn in chorus
        if (!this.isInSchmupMode()) return;
        
        const now = performance.now();
        
        // Spawn lines periodically
        if (now - this.lastLineSpawnTime < this.lineSpawnInterval) return;
        this.lastLineSpawnTime = now;
        
        const h = this.scale.height;
        const w = this.scale.width;
        
        // Number of lines based on chorus number (1, 2, or 3 lines)
        const numLines = Math.min(this.currentChorusNumber, 3);
        
        // Spawn enemies for each line
        for (let line = 0; line < numLines; line++) {
            // Distribute lines vertically
            const lineY = h * (line + 1) / (numLines + 1);
            
            // Enemies per line (5-7 enemies in a horizontal row)
            const enemiesPerLine = 5;
            const spacing = 80;  // Horizontal spacing between enemies
            
            for (let i = 0; i < enemiesPerLine; i++) {
                const startX = w + 100 + i * spacing;
                
                const enemy = this.add.sprite(startX, lineY, 'terf1_1');
                enemy.setScale(0.8);  // Adjusted 2x for image optimization (812→400px)
                enemy.play('terf_fly');
                
                // Movement properties
                enemy.velocityX = -350 - (this.currentChorusNumber * 30);  // Fast toward player
                
                // Sine wave properties
                enemy.baseY = lineY;
                enemy.sineAmplitude = 50 + line * 20;  // Different amplitude per line
                enemy.sineSpeed = 3 + line * 0.5;  // Different speed per line
                enemy.sinePhase = i * 0.5;  // Phase offset for wave effect
                
                this.enemies.push(enemy);
            }
        }
    }
    
    checkSchmupCollisions() {
        // Check projectile vs enemy collisions
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const proj = this.projectiles[i];
            
            for (let j = this.enemies.length - 1; j >= 0; j--) {
                const enemy = this.enemies[j];
                
                // Simple distance check for collision
                const dx = proj.x - enemy.x;
                const dy = proj.y - enemy.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 50) {  // Hit!
                    // Create explosion at enemy position
                    this.createExplosion(enemy.x, enemy.y);
                    
                    // Increment TERF counter
                    this.terfsDestroyed++;
                    this.terfCounterText.setText(`${this.terfsDestroyed}`);
                    
                    // Remove both
                    proj.destroy();
                    this.projectiles.splice(i, 1);
                    enemy.destroy();
                    this.enemies.splice(j, 1);
                    break;  // This projectile is done
                }
            }
        }
        
        // Check enemy vs player collision
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            const enemy = this.enemies[i];
            
            const dx = this.charCombined.x - enemy.x;
            const dy = this.charCombined.y - enemy.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 60) {  // Hit player!
                this.onHitSpike();  // Use same death function
                return;
            }
        }
    }
    
    createExplosion(x, y) {
        const explosion = this.add.sprite(x, y, 'explosion_0');
        explosion.setScale(0.6);  // Adjusted 2x for image optimization (356→180px)
        explosion.play('explosion');
        
        // Remove after animation completes
        explosion.on('animationcomplete', () => {
            explosion.destroy();
        });
    }
    
    clearSchmupObjects() {
        // Clear all projectiles
        for (const proj of this.projectiles) {
            proj.destroy();
        }
        this.projectiles = [];
        
        // Clear all enemies
        for (const enemy of this.enemies) {
            enemy.destroy();
        }
        this.enemies = [];
        
        // Reset line spawn timer
        this.lastLineSpawnTime = 0;
    }
    
    spawnSleipnir() {
        const w = this.scale.width;
        const h = this.scale.height;
        
        // Create Sleipnir off-screen right
        this.sleipnir = this.add.sprite(w + 200, h / 2, 'sleipnir_1');
        this.sleipnir.setScale(3);  // Big horse!
        this.sleipnir.setFlipX(true);  // Face left (toward player) when entering
        this.sleipnir.play('sleipnir_run');
        
        // Start in 'entering' state - running left toward player
        this.sleipnirState = 'entering';
        this.sleipnirEnterTime = performance.now();
    }
    
    despawnSleipnir() {
        if (this.sleipnir) {
            this.sleipnir.destroy();
            this.sleipnir = null;
        }
        this.sleipnirState = 'waiting';
    }
    
    updateSleipnir(dt) {
        if (!this.sleipnir) return;
        
        const w = this.scale.width;
        const h = this.scale.height;
        const enterDuration = 1500;  // Time to run in from right
        const now = performance.now();
        
        if (this.sleipnirState === 'entering') {
            // Run left toward center of screen (slower entrance)
            this.sleipnir.x -= 200 * dt;
            
            // After entering, switch to following
            if (now - this.sleipnirEnterTime > enterDuration) {
                this.sleipnirState = 'following';
                this.sleipnir.setFlipX(false);  // Flip to face right (same direction as Loki)
            }
        } else if (this.sleipnirState === 'following') {
            // Follow player with some smoothing
            const targetX = this.charCombined.x - 80;  // Slightly behind player
            const targetY = this.charCombined.y + 20;  // Slightly below player
            
            // Smooth follow
            const followSpeed = 5;
            this.sleipnir.x += (targetX - this.sleipnir.x) * followSpeed * dt;
            this.sleipnir.y += (targetY - this.sleipnir.y) * followSpeed * dt;
            
            // Keep in bounds
            this.sleipnir.x = Phaser.Math.Clamp(this.sleipnir.x, 50, w - 50);
            this.sleipnir.y = Phaser.Math.Clamp(this.sleipnir.y, 50, h - 50);
        }
    }
    
    // Called when landing - checks if jump was buffered
    checkJumpBuffer() {
        const now = performance.now();
        if (this.jumpBufferTime > 0 && (now - this.jumpBufferTime) < this.jumpBufferWindow) {
            this.tryJump();
        }
    }
    
    update(time, delta) {
        if (!this.gameStarted) return;
        if (this.isDead) return;  // No updates during death
        if (!this.song.isPlaying) return;
        
        const dt = delta / 1000;
        const songTime = this.song.seek;
        
        // Update world position based on song time
        this.worldX = LEVEL_CONFIG.timeToX(songTime);
        
        // Move world container (characters stay in place, world moves left)
        this.worldContainer.x = LEVEL_CONFIG.playerScreenX - this.worldX;
        
        // Determine current zone
        const prevZone = this.currentZone;
        this.currentZone = this.getCurrentZone();
        
        // Show instructions on first entry to each zone type
        if (this.currentZone && (!prevZone || prevZone.type !== this.currentZone.type)) {
            this.showInstructions(this.currentZone.type);
            
            // Show/hide mobile D-pad based on zone type
            const needsDpad = this.currentZone.type === 'chorus' || this.currentZone.type === 'bridge';
            if (typeof showDpad === 'function') {
                showDpad(needsDpad);
            }
        }
        
        // Track chorus number (for difficulty scaling)
        if (this.currentZone && this.currentZone.type === 'chorus' && 
            (!prevZone || prevZone.type !== 'chorus')) {
            this.currentChorusNumber++;
            // Clear any leftover enemies/projectiles from previous sections
            this.clearSchmupObjects();
        }
        
        // Clear TERFs and hearts when leaving chorus (entering verse/bridge)
        if (prevZone && prevZone.type === 'chorus' && 
            this.currentZone && this.currentZone.type !== 'chorus') {
            this.clearSchmupObjects();
        }
        
        // Spawn Sleipnir when entering bridge
        if (this.currentZone && this.currentZone.type === 'bridge' && 
            (!prevZone || prevZone.type !== 'bridge')) {
            this.spawnSleipnir();
        }
        
        // Clean up Sleipnir when leaving bridge
        if (prevZone && prevZone.type === 'bridge' && 
            this.currentZone && this.currentZone.type !== 'bridge') {
            this.despawnSleipnir();
        }
        
        // Update character mode based on zone
        this.updateCharacterMode();
        
        // Apply physics
        this.updatePhysics(dt);
        
        // Check collisions with obstacles
        this.checkCollisions();
        
        // Check collectible runes
        this.checkCollectibles();
        
        // Schmup mode updates (chorus sections)
        if (this.isInSchmupMode()) {
            this.updateProjectiles(dt);
            this.updateEnemies(dt);
            this.checkSchmupCollisions();
            this.spawnEnemies();
        }
        
        // Update shimmer effect in chorus zones
        this.updateShimmer(songTime);
        
        // Lyrics disabled
        // this.updateLyrics(songTime);
        
        // Update end screen fade (last 7 seconds)
        this.updateEndFade(songTime);
        
        // Update debug display
        this.updateDebugDisplay(songTime);
    }
    
    checkCollisions() {
        if (!this.currentZone || this.currentZone.type !== 'verse') return;
        
        const playerWorldX = this.worldX;
        const h = LEVEL_CONFIG.screenHeight;
        const seamY = h / 2;
        
        // Character hitbox (smaller than sprite)
        const charW = this.charWhite.displayWidth * 0.6;
        const charH = this.charWhite.displayHeight * 0.8;
        const feetOffset = (this.charWhite.displayHeight - charH) / 2;
        
        // Character bounds in world space
        const charLeft = playerWorldX - charW / 2;
        const charRight = playerWorldX + charW / 2;
        const charTop = this.charWhite.y - charH / 2 + feetOffset;
        const charBottom = this.charWhite.y + charH / 2 + feetOffset;
        
        for (const obs of this.obstacles) {
            // Only check nearby obstacles
            if (Math.abs(obs.worldX - playerWorldX) > 200) continue;
            
            if (obs.type === 'spike') {
                // Spike hitbox
                const spikeW = 40 * 2 * 0.5;  // scaled width * hitbox ratio
                const spikeH = 40 * 2 * 0.6;
                const spikeLeft = obs.worldX - spikeW / 2;
                const spikeRight = obs.worldX + spikeW / 2;
                const spikeTop = seamY - spikeH;
                const spikeBottom = seamY;
                
                // Check overlap
                const overlapping = !(charRight < spikeLeft || charLeft > spikeRight ||
                                     charBottom < spikeTop || charTop > spikeBottom);
                
                if (overlapping && !obs.hit) {
                    obs.hit = true;
                    this.onHitSpike();
                }
            } else {
                // Block hitbox
                const blockW = 60 * 2;
                const blockH = 30;
                const blockLeft = obs.worldX - blockW / 2;
                const blockRight = obs.worldX + blockW / 2;
                const blockTop = seamY - obs.height - blockH;
                const blockBottom = seamY - obs.height;
                
                // Check if landing on top
                const overBlock = charRight > blockLeft && charLeft < blockRight;
                const feetNearTop = charBottom >= blockTop && charBottom <= blockTop + 40;
                const isFalling = this.velocityY > 0;
                
                if (overBlock && feetNearTop && isFalling && this.isJumping) {
                    // Land on block!
                    this.charWhite.y = blockTop - this.charWhite.displayHeight / 2;
                    this.charBlack.y = seamY + obs.height + blockH + this.charBlack.displayHeight / 2;
                    this.velocityY = 0;
                    this.onGround = true;
                    this.isJumping = false;
                    this.onPlatform = obs;
                    
                    // Return to run animation
                    this.charWhite.play('white_run');
                    this.charBlack.play('black_run');
                    
                    // Check if jump was buffered - allows instant re-jump
                    this.checkJumpBuffer();
                }
            }
        }
        
        // Check if we walked off a platform
        if (this.onPlatform) {
            const blockLeft = this.onPlatform.worldX - 60;
            const blockRight = this.onPlatform.worldX + 60;
            if (playerWorldX < blockLeft || playerWorldX > blockRight) {
                this.onPlatform = null;
                this.onGround = false;
                this.isJumping = true;
            }
        }
    }
    
    updateShimmer(songTime) {
        // Animate shimmer overlays based on song time
        if (!this.shimmerOverlays || this.shimmerOverlays.length === 0) return;
        
        for (const shimmer of this.shimmerOverlays) {
            // Calculate position based on song time (continuous motion)
            const travelDistance = songTime * shimmer.speed;
            const zoneOffset = shimmer.offset;
            
            // Wrap within zone bounds with some margin for the streak width
            const streakFullWidth = 230; // streak width + skew
            const wrapWidth = shimmer.zoneWidth + streakFullWidth;
            const wrappedPos = ((travelDistance + zoneOffset) % wrapWidth) - streakFullWidth;
            
            shimmer.graphic.x = shimmer.zoneStartX + wrappedPos;
        }
    }
    
    checkCollectibles() {
        // Only check in chorus/transition zones
        if (!this.currentZone) return;
        const zoneType = this.currentZone.type;
        if (zoneType !== 'chorus' && zoneType !== 'bridge' && zoneType !== 'transition_drop' && zoneType !== 'transition_approach') return;
        
        const playerWorldX = this.worldX;
        const playerY = this.charCombined.y;
        const collectRadius = 50; // How close player needs to be
        
        for (let i = this.collectibles.length - 1; i >= 0; i--) {
            const rune = this.collectibles[i];
            if (!rune.active || !rune.isCollectible) continue;
            
            // Distance check
            const dx = rune.worldX - playerWorldX;
            const dy = rune.y - playerY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < collectRadius) {
                // Collect it!
                this.collectRune(rune, i);
            }
        }
    }
    
    collectRune(rune, index) {
        // Increment counter
        this.runesCollected++;
        this.runeCounterText.setText(`ᚱ ${this.runesCollected}`);
        
        // Animate the rune collection
        this.tweens.add({
            targets: rune,
            alpha: 0,
            scale: rune.scale * 1.5,
            y: rune.y - 30,
            duration: 200,
            ease: 'Power2',
            onComplete: () => {
                rune.destroy();
            }
        });
        
        // Remove from array
        this.collectibles.splice(index, 1);
        
        // Visual feedback
        this.cameras.main.flash(100, 255, 200, 0, false);
        
        // Optional: sound effect would go here
    }
    
    onHitSpike() {
        // Prevent multiple deaths
        if (this.isDead) return;
        this.isDead = true;
        
        // Stop the music immediately
        if (this.song) {
            this.song.stop();
        }
        
        // Visual feedback - quick flash and shake
        this.cameras.main.flash(300, 255, 0, 0);
        this.cameras.main.shake(300, 0.03);
        
        // Hide characters instantly (death effect)
        this.charWhite.setVisible(false);
        this.charBlack.setVisible(false);
        this.charCombined.setVisible(false);
        
        // Restart after a brief delay (Geometry Dash style - very quick)
        this.time.delayedCall(400, () => {
            this.scene.restart();
        });
    }
    
    getCurrentZone() {
        const playerWorldX = this.worldX;
        
        for (const zone of this.zones) {
            if (playerWorldX >= zone.startX && playerWorldX < zone.endX) {
                return zone;
            }
        }
        return null;
    }
    
    updateCharacterMode() {
        if (!this.currentZone) return;
        
        const isChorus = this.currentZone.type === 'chorus' || 
                        this.currentZone.type === 'bridge' ||
                        this.currentZone.type === 'transition_drop' ||
                        this.currentZone.type === 'transition_approach';
        
        if (isChorus) {
            // Show combined character, hide split characters
            this.charWhite.setVisible(false);
            this.charBlack.setVisible(false);
            this.charCombined.setVisible(true);
            
            // Use old_loki animation during bridge, flying for choruses
            const isBridge = this.currentZone && this.currentZone.type === 'bridge';
            const targetAnim = isBridge ? 'old_loki' : 'flying';
            const currentAnim = this.charCombined.anims.currentAnim?.key;
            
            if (!this.charCombined.anims.isPlaying || currentAnim !== targetAnim) {
                this.charCombined.play(targetAnim);
            }
        } else {
            // Show split characters, hide combined
            this.charWhite.setVisible(true);
            this.charBlack.setVisible(true);
            this.charCombined.setVisible(false);
            
            // Play run animation if on ground and not jumping
            if (this.onGround && !this.isJumping) {
                const currentAnim = this.charWhite.anims.currentAnim?.key;
                // Force play if animation stopped
                if (!this.charWhite.anims.isPlaying || 
                    (currentAnim !== 'white_run' && currentAnim !== 'white_jump')) {
                    this.charWhite.play('white_run');
                    this.charBlack.play('black_run');
                }
            }
        }
    }
    
    updatePhysics(dt) {
        if (!this.currentZone) return;
        
        const gravity = this.currentZone.gravity;
        const groundY = this.currentZone.groundY;
        const h = LEVEL_CONFIG.screenHeight;
        const seamY = h / 2;
        
        // Only apply gravity if not on ground
        if (!this.onGround) {
            this.velocityY += gravity * dt;
        }
        
        // Move characters
        if (this.currentZone.type === 'chorus') {
            // SCHMUP MODE - Direct control, no gravity
            const schmupSpeed = 300;  // pixels per second
            
            const td = window.touchDpad || {};
            if (this.schmupInput.up || td.up) this.charCombined.y -= schmupSpeed * dt;
            if (this.schmupInput.down || td.down) this.charCombined.y += schmupSpeed * dt;
            if (this.schmupInput.left || td.left) this.charCombined.x -= schmupSpeed * dt;
            if (this.schmupInput.right || td.right) this.charCombined.x += schmupSpeed * dt;
            
            // Keep in bounds (screen space)
            const margin = 50;
            const w = this.scale.width;
            this.charCombined.x = Phaser.Math.Clamp(this.charCombined.x, margin, w - margin);
            this.charCombined.y = Phaser.Math.Clamp(this.charCombined.y, margin, h - margin);
            
        } else if (this.currentZone.type === 'bridge') {
            // Bridge - floaty physics WITH left/right movement
            const bridgeMoveSpeed = 250;
            
            // Left/right movement
            const td = window.touchDpad || {};
            if (this.schmupInput.left || td.left) this.charCombined.x -= bridgeMoveSpeed * dt;
            if (this.schmupInput.right || td.right) this.charCombined.x += bridgeMoveSpeed * dt;
            
            // Floaty vertical movement (gravity-based jumping)
            this.charCombined.y += this.velocityY * dt;
            
            // Keep in bounds
            const margin = 50;
            const w = this.scale.width;
            this.charCombined.x = Phaser.Math.Clamp(this.charCombined.x, margin, w - margin);
            if (this.charCombined.y > h - margin) {
                this.charCombined.y = h - margin;
                this.velocityY = 0;
            }
            if (this.charCombined.y < margin) {
                this.charCombined.y = margin;
                this.velocityY = 0;
            }
            
            // Update Sleipnir to follow player
            this.updateSleipnir(dt);
            
        } else if (this.currentZone.type === 'transition_drop' ||
            this.currentZone.type === 'transition_approach') {
            // Transition - floaty physics (original behavior)
            this.charCombined.y += this.velocityY * dt;
            
            // Keep in bounds
            if (this.charCombined.y > h - 50) {
                this.charCombined.y = h - 50;
                this.velocityY = 0;
            }
            if (this.charCombined.y < 50) {
                this.charCombined.y = 50;
                this.velocityY = 0;
            }
        } else {
            // Verse mode - split characters with ground
            if (!this.onGround) {
                this.charWhite.y += this.velocityY * dt;
                this.charBlack.y -= this.velocityY * dt;  // Mirrored
            }
            
            // Land on ground
            if (this.charWhite.y >= this.groundYTop && !this.onGround) {
                this.charWhite.y = this.groundYTop;
                this.charBlack.y = this.groundYBottom;
                this.velocityY = 0;
                this.onGround = true;
                this.isJumping = false;
                
                // Return to run animation (only when actually landing!)
                this.charWhite.play('white_run');
                this.charBlack.play('black_run');
                
                // Check if jump was buffered - allows instant re-jump
                this.checkJumpBuffer();
            }
        }
    }
    
    updateDebugDisplay(songTime) {
        if (!DEBUG_OPTIONS.showDebugInfo || !this.debugText) return;
        
        const beat = SONG_CUES.getCurrentBeat(songTime);
        const zoneName = this.currentZone?.label || 'none';
        const zoneType = this.currentZone?.type || 'none';
        
        this.debugText.setText([
            `Time: ${songTime.toFixed(2)}s`,
            `Beat: ${beat}`,
            `WorldX: ${Math.round(this.worldX)}`,
            `Zone: ${zoneName} (${zoneType})`,
            `Gravity: ${this.currentZone?.gravity || 0}`,
            `VelY: ${Math.round(this.velocityY)}`,
            `OnGround: ${this.onGround}`,
            `OnPlatform: ${this.onPlatform ? 'yes' : 'no'}`,
        ].join('\n'));
        
        // Draw hitboxes if enabled
        if (DEBUG_OPTIONS.showHitboxes) {
            this.drawHitboxes();
        }
    }
    
    drawHitboxes() {
        if (!this.hitboxGraphics) {
            this.hitboxGraphics = this.add.graphics();
            this.hitboxGraphics.setDepth(1000);
        }
        
        this.hitboxGraphics.clear();
        
        if (!this.currentZone || this.currentZone.type !== 'verse') return;
        
        const playerWorldX = this.worldX;
        const h = LEVEL_CONFIG.screenHeight;
        const seamY = h / 2;
        const offsetX = this.worldContainer.x;
        
        // Character hitbox (green)
        const charW = this.charWhite.displayWidth * 0.6;
        const charH = this.charWhite.displayHeight * 0.8;
        const feetOffset = (this.charWhite.displayHeight - charH) / 2;
        
        this.hitboxGraphics.lineStyle(2, 0x00ff00);
        this.hitboxGraphics.strokeRect(
            this.charWhite.x - charW / 2,
            this.charWhite.y - charH / 2 + feetOffset,
            charW, charH
        );
        
        // Obstacle hitboxes
        for (const obs of this.obstacles) {
            if (Math.abs(obs.worldX - playerWorldX) > 400) continue;
            
            const screenX = obs.worldX + offsetX;
            
            if (obs.type === 'spike') {
                // Spike hitbox (red)
                this.hitboxGraphics.lineStyle(2, 0xff0000);
                const spikeW = 40 * 2 * 0.5;
                const spikeH = 40 * 2 * 0.6;
                this.hitboxGraphics.strokeRect(
                    screenX - spikeW / 2,
                    seamY - spikeH,
                    spikeW, spikeH
                );
            } else {
                // Block hitbox (blue)
                this.hitboxGraphics.lineStyle(2, 0x0088ff);
                const blockW = 60 * 2;
                const blockH = 30;
                this.hitboxGraphics.strokeRect(
                    screenX - blockW / 2,
                    seamY - obs.height - blockH,
                    blockW, blockH
                );
            }
        }
    }
}

// =============================================================================
// GAME CONFIG
// =============================================================================

const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    backgroundColor: '#1a1a2e',
    pauseOnBlur: false,  // Critical for mann.cool virtual controller
    pixelArt: true,
    roundPixels: true,
    antialias: false,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 720,
    },
    render: {
        pixelArt: true,
        antialias: false,
    },
    scene: [BootScene, GameScene]
};

const game = new Phaser.Game(config);

// Track play on load
fetch('https://mann.cool/api/plays', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slug: 'non-binary', source: 'direct' }),
}).catch(() => {});

// =============================================================================
// ON-SCREEN D-PAD FOR MOBILE (Chorus sections)
// =============================================================================

// Store touch D-pad state
window.touchDpad = {
    up: false,
    down: false,
    left: false,
    right: false
};

// Create D-pad overlay for mobile
function createDpad() {
    // Only create on touch devices
    if (!('ontouchstart' in window)) return;
    
    const dpad = document.createElement('div');
    dpad.id = 'touch-dpad';
    dpad.innerHTML = `
        <style>
            #touch-dpad {
                position: fixed;
                bottom: 20px;
                left: 20px;
                width: 140px;
                height: 140px;
                z-index: 10000;
                display: none;
                pointer-events: auto;
                user-select: none;
                -webkit-user-select: none;
            }
            #touch-dpad.visible {
                display: block;
            }
            .dpad-btn {
                position: absolute;
                width: 50px;
                height: 50px;
                background: rgba(255, 255, 255, 0.3);
                border: 2px solid rgba(255, 255, 255, 0.6);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                color: white;
                text-shadow: 0 0 4px black;
                transition: background 0.1s;
            }
            .dpad-btn.active {
                background: rgba(255, 255, 255, 0.6);
            }
            .dpad-up { top: 0; left: 45px; }
            .dpad-down { bottom: 0; left: 45px; }
            .dpad-left { top: 45px; left: 0; }
            .dpad-right { top: 45px; right: 0; }
        </style>
        <div class="dpad-btn dpad-up" data-dir="up">▲</div>
        <div class="dpad-btn dpad-down" data-dir="down">▼</div>
        <div class="dpad-btn dpad-left" data-dir="left">◀</div>
        <div class="dpad-btn dpad-right" data-dir="right">▶</div>
    `;
    document.body.appendChild(dpad);
    
    // Touch handlers for D-pad buttons
    const buttons = dpad.querySelectorAll('.dpad-btn');
    buttons.forEach(btn => {
        const dir = btn.dataset.dir;
        
        btn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.touchDpad[dir] = true;
            btn.classList.add('active');
        }, { passive: false });
        
        btn.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.touchDpad[dir] = false;
            btn.classList.remove('active');
        }, { passive: false });
        
        btn.addEventListener('touchcancel', (e) => {
            window.touchDpad[dir] = false;
            btn.classList.remove('active');
        });
    });
    
    return dpad;
}

// Show/hide D-pad based on game mode
function showDpad(visible) {
    const dpad = document.getElementById('touch-dpad');
    if (dpad) {
        if (visible) {
            dpad.classList.add('visible');
        } else {
            dpad.classList.remove('visible');
            // Reset all directions when hiding
            window.touchDpad.up = false;
            window.touchDpad.down = false;
            window.touchDpad.left = false;
            window.touchDpad.right = false;
        }
    }
}

// Create D-pad when page loads
document.addEventListener('DOMContentLoaded', createDpad);

