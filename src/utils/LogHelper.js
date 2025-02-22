import ErrorHandler from "./ErrorHandler.js";

import Logger from "../interfaces/Logger.js";
import ConsoleLogger from "../entities/ConsoleLogger.js";

import LOG_LEVELS from '../config/LogLevelsConfig.js';

/** @typedef {import('../config/LogLevelsConfig.js').LogLevel} LogLevel */

/**
 * @since 0.0.1
 */
export default {
    /** @type {Logger[]} The list of registered logger instances. */
    loggers: [],

    /** @type {ConsoleLogger} Singleton instance for console logging */
    _consoleLogger: new ConsoleLogger(),

    /**
     * Registers a logger instance.
     * 
     * @since 0.0.1
     * @param {Logger} logger The logger instance to register.
     */
    registerLogger(logger) {
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
    },

    /**
     * Displays a message in the console, the output and the VS Code window.
     * 
     * @since 0.0.1
     * @param {*} message The message to display.
     * @param {LogLevel} level The log level. Defaults to `LOG`.
     * @param {string | undefined} summaryMessage The summary message to display in the VS Code window. Defaults to the first line of the message.
     * @returns {boolean} If the message was displayed successfully in every output.
     */
    fullDisplay(
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
    },
    
    /**
     * Logs a message to the console.
     * 
     * @since 0.0.1
     * @param {*} message The message to log.
     * @param {LogLevel} [level] The log level. Defaults to `LOG`.
     */
    log(message, level = LOG_LEVELS.LOG) {
        this._consoleLogger.log(message, level);
    },
    
    /**
     * Outputs a message to the the registered loggers.
     * 
     * @since 0.0.1
     * @param {*} message The message to output.
     * @param {LogLevel} level The log level.
     * @returns {boolean} If the message was output successfully.
     */
    output(message, level) {
        return ErrorHandler.withWarningHandling(
            () => {
                if (!this.loggers.length) throw new Error('No loggers registered.');
                this.loggers.forEach(logger => logger.log(message, level));
                return true;
            }, 
            'Failed while outputting message to registered loggers.', 
            false, 
        );
    },

    /**
     * Exposes an object.
     * 
     * @since 0.0.1
     * @param {Object} obj The object to expose.
     * @returns {{
     *  'constructor': *, 
     *  'prototype': *, 
     *  'properties': string[], 
     *  'descriptors': {[property: string]: PropertyDescriptor}, 
     *  'toString': string, 
     *  'type': *, 
     * }} An object containing the constructor, prototype, properties, descriptors, toString, and type of the exposed object.
     */
    exposeObject(obj) {
        return {
            'constructor': obj.constructor, 
            'prototype': Object.getPrototypeOf(obj), 
            'properties': Object.getOwnPropertyNames(obj), 
            'descriptors': Object.getOwnPropertyDescriptors(obj), 
            'toString': obj.toString(), 
            'type': Object.prototype.toString.call(obj), 
        };
    },
}