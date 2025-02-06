import ErrorUtils from "../utils/ErrorUtils.js";

export default class Logger {
    constructor() {
        if (this.constructor === Logger) throw ErrorUtils.getAbstractClassError(this.constructor.name);
    }

    /**
     * Logs a message to the output.
     * @abstract
     * @param {*} message The message to log.
     * @throws {Error} Must be implemented by concrete logger.
     */
    log(message) {
        throw ErrorUtils.getAbstractMethodError('log()');
    }
}