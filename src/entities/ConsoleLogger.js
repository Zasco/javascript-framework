import { Utils as ErrorUtils } from 'javascript-framework/module/error';

import * as logLevelsTypes from '../config/LogLevelsConfig.js';
import LOG_LEVELS from '../config/LogLevelsConfig.js';
import Logger from '../interfaces/Logger.js';

/**
 * @since alpha-1.0.0
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
     * @since alpha-2.0.0
     * @param {logLevelsTypes.LogLevel} level
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