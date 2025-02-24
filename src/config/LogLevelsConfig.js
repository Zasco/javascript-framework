/**
 * @since 0.0.2
 * @typedef {number} LogLevel
 * @typedef {{[LevelLabel: string]: LogLevel}} LogLevelsConfig
 */

/**
 * Defines the different levels of log.
 * 
 * @since 0.0.2
 * @type {LogLevelsConfig}
 */
export default {
    DEBUG: 0, 
    INFO: 1, 
    WARNING: 2, 
    ERROR: 3, 
    LOG: 4, 
};