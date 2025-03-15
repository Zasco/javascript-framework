/**
 * @since 0.0.2
 * @typedef {{
 *  'DEBUG': 0, 
 *  'INFO': 1, 
 *  'WARNING': 2, 
 *  'ERROR': 3, 
 *  'LOG': 4, 
 * }} LogLevelsConfig
 * @typedef {LogLevelsConfig[keyof LogLevelsConfig]} LogLevel
 */

/**
 * Defines the different levels of log.
 * 
 * @since 0.0.2
 * @type {LogLevelsConfig}
 */
const LOG_LEVELS = {
    DEBUG: 0, 
    INFO: 1, 
    WARNING: 2, 
    ERROR: 3, 
    LOG: 4, 
};

export default Object.freeze(LOG_LEVELS);