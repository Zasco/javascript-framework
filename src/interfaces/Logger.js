import ErrorUtils from "../utils/ErrorUtils.js";

/** @typedef {import('../config/LogLevelsConfig.js').LogLevel} LogLevel */

/**
 * @since 0.0.1
 */
export default class Logger {
    constructor() {
        if (this.constructor === Logger) throw ErrorUtils.getAbstractClassError(this.constructor.name);
    };

    /**
     * Logs a message to the output.
     * 
     * @since 0.0.1
     * @abstract
     * @param {*} message The message to log.
     * @param {LogLevel} level The log level.
     * @throws {Error} Must be implemented by concrete logger.
     */
    log(message, level) {
        throw ErrorUtils.getAbstractMethodError('log()');
    };
}