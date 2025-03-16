import { AbstractClassTrait } from 'javascript-framework';
import { Utils as ErrorUtils } from 'javascript-framework/module/error';

import * as LogLevelsTypes from '../config/LogLevelsConfig.js';

/**
 * @since 0.0.1
 */
export default class Logger {
    /** @throws If instantiated (see {@link AbstractClassTrait.abstractClassConstructor}) */
    constructor() {
        AbstractClassTrait.abstractClassConstructor.call(this);
    };

    /**
     * Logs a message to the output.
     * 
     * @since 0.0.1
     * @abstract
     * @param {*} message The message to log.
     * @param {LogLevelsTypes.LogLevel} level The log level.
     * @throws {Error} Must be implemented by concrete logger.
     */
    log(message, level) {
        throw ErrorUtils.getStdAbstractMethodErr(this.log.name, Logger.name, this.constructor.name);
    };
};