import { LOG_LEVELS, ErrorUtils, Logger} from 'javascript-framework';

import * as LogLevelsTypes from '../config/LogLevelsConfig.js';

/**
 * @since 0.0.1
 */
export default class ConsoleLogger extends Logger {
    /**
     * @inheritdoc
     * @see {@link Logger}
     */
    // @ts-expect-error The parameters types are inherited from the parent class.
    log(message, level) {
        const logFunction = this.getLogFunctionForLogLevel(level);
        if (message instanceof Error) message = ErrorUtils.getDetailedErrMsg(message);
        logFunction(message);
    };

    /**
     * Returns the log function for a given {@link LOG_LEVELS}.
     * 
     * @since 0.0.2
     * @param {LogLevelsTypes.LogLevel} level
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