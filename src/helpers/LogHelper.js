import { traits } from 'javascript-framework/module/core';
import { Handler as ErrorHandler } from 'javascript-framework/module/error';

import * as LogLevelsTypes from '../config/LogLevelsConfig.js';
import LOG_LEVELS from '../config/LogLevelsConfig.js';
import LogUtils from '../utils/LogUtils.js';
import Logger from '../interfaces/Logger.js';
import ConsoleLogger from '../entities/ConsoleLogger.js';

/**
 * @since 0.0.1
 */
export default class LogHelper {
    /**
     * @static
     * @type {Logger[]} The list of registered logger instances.
     */
    static loggers = [];

    /**
     * @see {@link LogHelper._consoleLogger}
     * @protected
     * @static
     * @type {ConsoleLogger}
     */
    static _consoleLoggerCache;

    /** @throws If instantiated (see {@link traits.SingletonTrait.singletonConstructor}) */
    constructor() {
        traits.SingletonTrait.singletonConstructor.call(this);
    }

    /**
     * The local instance of the {@link ConsoleLogger}.
     * 
     * @protected
     * @readonly
     * @static
     */
    static get _consoleLogger() {
        if (!this._consoleLoggerCache) {
            const { default: ConsoleLogger } = require('../entities/ConsoleLogger.js');
            this._consoleLoggerCache = new ConsoleLogger();
        }
        return this._consoleLoggerCache;
    }

    /**
     * Registers a logger instance.
     * 
     * @since 0.0.1
     * @static
     * @param {Logger} logger The logger instance to register.
     */
    static registerLogger(logger) {
        ErrorHandler.withWarningHandling(
            () => {
                if (!logger) throw new Error('Logger must be provided.');
                if (!(logger instanceof Logger)) throw new Error('Logger must be an instance of LoggerInterface.');
                if (this.loggers.includes(logger)) throw new Error('Logger already registered.');
                
                this.loggers.push(logger);

                return true;
            },
            'Failed to register logger.',
            false,
        );
    }

    /**
     * Displays a message in the console, the output and the VS Code window.
     * 
     * @since 0.0.1
     * @static
     * @param {*} message The message to display.
     * @param {LogLevelsTypes.LogLevel} level The log level. Defaults to `LOG`.
     * @param {string | undefined} summaryMessage The summary message to display in the VS Code window. Defaults to the first line of the message.
     * @returns {boolean} If the message was displayed successfully in every output.
     */
    static fullDisplay(
        message, 
        level = LOG_LEVELS.LOG, 
        summaryMessage = undefined, 
    ) {
        try {
            // [TODO] Extract the first line only here...
            if (!summaryMessage) summaryMessage = String(message);
            
            // [NOTE] This ensures console logging even without having a `ConsoleLogger` registered. 
            //this.log(message, level);
            
            this.output(message, level);
            
            return true;
        } catch (error) {
            this.log(`Error while doing a "full display" of "${message}": ${error.message}`, LOG_LEVELS.ERROR);
            return false;
        }
    }
    
    /**
     * Logs a message to the console.
     * 
     * @since 0.0.1
     * @static
     * @param {*} message The message to log.
     * @param {LogLevelsTypes.LogLevel} [level] The log level. Defaults to `LOG`.
     */
    static log(message, level = LOG_LEVELS.LOG) {
        this._consoleLogger.log(message, level);
    }
    
    /**
     * Outputs a message to the the registered loggers.
     * 
     * @since 0.0.1
     * @static
     * @param {*} message The message to output.
     * @param {LogLevelsTypes.LogLevel} level The log level.
     * @returns {boolean} If the message was output successfully.
     */
    static output(message, level) {
        // FIXME: Using warning/error handling here causes an infinite loop if there are no registered loggers...
        // Handler calls withHandling() that calls handle() that calls fullDisplay() that calls output() and it starts over.
        // [TODO] Add fallback with default console if no registered logger...
        try {
        //return ErrorHandler.withWarningHandling(
        //    () => {
                if (!this.loggers.length) throw new Error('No loggers registered.');
                this.loggers.forEach(logger => logger.log(message, level));
                return true;
        //    },
        //    'Failed while outputting message to registered loggers.',
        //    false,
        //);
        } catch (error) {
            return false;
        }
    }

    // [TODO] Allow node-fetch `Response` object as a valid param type here. Find how to support browser/Node environments...
    /**
     * Logs a `Response` object to the console in a readable format.
     * 
     * @since 0.0.2
     * @static
     * @param {Response} response The response object to output.
     */
    static logResponse(response) {
        console.debug(LogUtils.exposeResponse(response));
    }
};