import Logger from '../interfaces/Logger.js';

export default class ConsoleLogger extends Logger {
    log(message) {
        console.log(message);
    };
}