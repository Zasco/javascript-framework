import Logger from '../interfaces/Logger.js';

/**
 * @since 0.0.1
 */
export default class ConsoleLogger extends Logger {
    log(message) {
        console.log(message);
    };
}