/**
 * @since ${NEXT_VERSION}
 * @typedef {number} LogLevel
 */

/**
 * @since ${NEXT_VERSION}
 * @typedef {{
 *  DEBUG: LogLevel, 
 *  INFO: LogLevel, 
 *  WARNING: LogLevel, 
 *  ERROR: LogLevel, 
 *  LOG: LogLevel, 
 * }} LogLevelsConfig
 */

/**
 * Defines the different levels of log.
 * 
 * @since ${NEXT_VERSION}
 * @type {LogLevelsConfig}
 */
export default {
    DEBUG: 0,
    INFO: 1,
    WARNING: 2,
    ERROR: 3,
    LOG: 4,
};