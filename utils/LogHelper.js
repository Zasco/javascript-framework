// @ts-check
import ErrorHandler from "./ErrorHandler.js";

import Logger from "../interface/Logger.js";

export default {
    LOG_LEVELS: {
        DEBUG: 0,
        INFO: 1,
        WARNING: 2,
        ERROR: 3,
        LOG: 4,
    },

    /** @type {Logger[]} The list of registered logger instances. */
    loggers: [],

    /**
     * Registers a logger instance.
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
     * Displays a message in the console, the output and the VSCode window.
     * @param {*} message The message to display.
     * @param {number} level The log level. Defaults to LOG.
     * @param {string|undefined} summaryMessage The summary message to display in the VSCode window. Defaults to the first line of the message.
     * @returns {boolean} If the message was displayed successfully in every output.
     */
    fullDisplay(message, level = this.LOG_LEVELS.LOG, summaryMessage = undefined) {
        try {
            if (!summaryMessage) summaryMessage = String(message); // Only get first line here...
            
            this.output(message);
            
            return true;
        } catch (error) {
            this.log(`Error while doing a "full display" of "${message}": ${error.message}`, this.LOG_LEVELS.ERROR);
            return false;
        }
    },
    
    /**
     * Logs a message to the console with the extension log prefix.
     * @param {*} message The message to log.
     * @param {number} level The log level. Defaults to LOG.
     */
    log(message, level = this.LOG_LEVELS.LOG) {
        let logFunction;
        switch (level) {
            case this.LOG_LEVELS.DEBUG:
                logFunction = console.debug;
                break;

            case this.LOG_LEVELS.INFO:
                logFunction = console.info;
                break;

            case this.LOG_LEVELS.WARNING:
                logFunction = console.warn;
                break;

            case this.LOG_LEVELS.ERROR:
                logFunction = console.error;
                break;
                
            case this.LOG_LEVELS.LOG:
            default:
                logFunction = console.log;
                break;
        }

        logFunction(message);
    },
    
    /**
     * Outputs a message to the the registered loggers.
     * @param {*} message The message to output.
     * @returns {boolean} If the message was output successfully.
     */
    output(message) {
        return ErrorHandler.withWarningHandling(
            () => {
                if (!this.loggers.length) throw new Error('No loggers registered.');
                this.loggers.forEach(logger => logger.log(message));
                return true;
            },
            'Failed while outputting message to registered loggers.',
            false,
        );
    },

    /**
     * Exposes an object.
     * @param {*} obj The object to expose.
     * @returns {object} An object containing the constructor, prototype, properties, descriptors, toString, and type of the exposed object.
     */
    exposeObject(obj) {
        return {
            'constructor': obj.constructor,
            'prototype': Object.getPrototypeOf(obj),
            'properties': Object.getOwnPropertyNames(obj),
            'descriptors': Object.getOwnPropertyDescriptors(obj),
            'toString': obj.toString(),
            'type': Object.prototype.toString.call(obj)
        };
    },
}