export default class Logger {
    constructor() {
        if (this.constructor === Logger) throw new Error(`Cannot instantiate abstract ${this.constructor.name} class directly.`);
    }

    /**
     * Logs a message to the output.
     * @abstract
     * @param {*} message The message to log.
     * @throws {Error} Must be implemented by concrete logger.
     */
    log(message) {
        throw new Error(`${this.constructor.name}.log() must be implemented.`);
    }
}