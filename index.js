import LOG_LEVELS from './config/LogLevelsConfig.js';

import ErrorHandler from './utils/ErrorHandler.js';
import ErrorUtils from './utils/ErrorUtils.js';
import LogHelper from './utils/LogHelper.js';

import Logger from './interface/Logger.js';
import ConsoleLogger from './entity/ConsoleLogger.js';

/**
 * @typedef {import('./config/LogLevelsConfig.js').LogLevel} LogLevel
 */

export {
    // Config
    LOG_LEVELS,
    
    // Helpers & Utils
    ErrorHandler,
    ErrorUtils,
    LogHelper,

    // Interfaces
    Logger,

    // Entities
    ConsoleLogger,
};