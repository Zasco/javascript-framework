import LOG_LEVELS from './src/config/LogLevelsConfig.js';

import ErrorHandler from './src/utils/ErrorHandler.js';
import ErrorUtils from './src/utils/ErrorUtils.js';
import LogHelper from './src/utils/LogHelper.js';

import Logger from './src/interface/Logger.js';
import ConsoleLogger from './src/entity/ConsoleLogger.js';

/** @typedef {import('./src/config/LogLevelsConfig.js').LogLevel} LogLevel */

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