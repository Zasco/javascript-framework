import ErrorUtils from "../utils/ErrorUtils.js";

/** @typedef {import('../config/LogLevelsConfig.js').LogLevel} LogLevel */

export default class Logger {
    constructor() {
        if (this.constructor === Logger) throw ErrorUtils.getAbstractClassError(this.constructor.name);
    }

    /**
     * Logs a message to the output.
     * 
     * @abstract
     * @param {*} message The message to log.
     * @param {LogLevel} level The log level.
     * @throws {Error} Must be implemented by concrete logger.
     */
    log(message, level) {
        throw ErrorUtils.getAbstractMethodError('log()');
    }
}