import Logger from '../interfaces/Logger.js';

import LOG_LEVELS from '../config/LogLevelsConfig.js';

import ErrorUtils from '../utils/ErrorUtils.js';

/** @typedef {import('../config/LogLevelsConfig.js').LogLevel} LogLevel */

/**
 * @since 0.0.1
 */
export default class ConsoleLogger extends Logger {
    log(message, level) {
        const logFunction = this.getLogFunctionForLogLevel(level);
        if (message instanceof Error) message = ErrorUtils.buildFormattedErrorMessage(message);
        logFunction(message);
    };

    /**
     * Returns the log function for a given log level.
     * 
     * @since ${NEXT_VERSION}
     * @param {LogLevel} level
     * @returns {function}
     */
    getLogFunctionForLogLevel(level) {
        switch (level) {
            case LOG_LEVELS.DEBUG:
                return console.debug;

            case LOG_LEVELS.INFO:
                return console.info;

            case LOG_LEVELS.WARNING:
                return console.warn;

            case LOG_LEVELS.ERROR:
                return console.error;
                
            case LOG_LEVELS.LOG:
            default:
                return console.log;
        }
    };
};