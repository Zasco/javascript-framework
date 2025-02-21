import Logger from '../interface/Logger.js';

export default class ConsoleLogger extends Logger {
    /**
     * @inheritdoc
     * @param {*} message The message to log.
     */
    log(message) {
        console.log(message);
    }
}