/**
 * @since alpha-2.0.0
 * @typedef {{
 *  'DEBUG': 0, 
 *  'INFO': 1, 
 *  'WARNING': 2, 
 *  'ERROR': 3, 
 *  'LOG': 4, 
 * }} LogLevels
 * @typedef {LogLevels[keyof LogLevels]} LogLevel
 */

/**
 * Defines the different levels of log.
 * 
 * @since alpha-2.0.0
 * @type {LogLevels}
 */
const LOG_LEVELS = {
    DEBUG: 0, 
    INFO: 1, 
    WARNING: 2, 
    ERROR: 3, 
    LOG: 4, 
};

export default Object.freeze(LOG_LEVELS);