import { traits } from 'javascript-framework/module/core';
import { Utils as ErrorUtils } from 'javascript-framework/module/error';

import * as logLevelsTypes from '../config/LogLevelsConfig.js';

/**
 * @since alpha-1.0.0
 */
export default class Logger {
    /** @throws If instantiated (see {@link traits.AbstractClassTrait.abstractClassConstructor}) */
    constructor() {
        traits.AbstractClassTrait.abstractClassConstructor.call(this);
    };

    /**
     * Logs a message to the output.
     * 
     * @since alpha-1.0.0
     * @abstract
     * @param {*} message The message to log.
     * @param {logLevelsTypes.LogLevel} level The log level.
     * @throws {Error} Must be implemented by concrete logger.
     */
    log(message, level) {
        throw ErrorUtils.getStdAbstractMethodErr(this.log.name, Logger.name, this.constructor.name);
    };
};