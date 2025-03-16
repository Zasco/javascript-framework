// Types
import * as PackageJsonTypes from './src/types/package-json-types.js';
import * as LogLevelsTypes from './src/config/LogLevelsConfig.js';

// Config
import LOG_LEVELS from './src/config/LogLevelsConfig.js';

// Interfaces
import Logger from './src/interfaces/Logger.js';

// Traits
import AbstractClassTrait from './src/traits/AbstractClassTrait.js';
import SingletonTrait from './src/traits/SingletonTrait.js';

// Models
import FileSystemPath from './src/models/FileSystemPath.js';
import Action from './src/models/Action.js';
import Repository from './src/models/Repository.js';
import Commit from './src/models/Commit.js';

// Utils
import ErrorUtils from './src/utils/ErrorUtils.js';
import TypeUtils from './src/utils/TypeUtils.js';

// Helpers
import ErrorHandler from './src/helpers/ErrorHandler.js';
import LogHelper from './src/helpers/LogHelper.js';
import GitHelper from './src/helpers/GitHelper.js';
import PackageJsonHelper from './src/helpers/PackageJsonHelper.js';

// Entities
import ConsoleLogger from './src/entities/ConsoleLogger.js';

// Modules
import * as errorModule from './src/modules/error.js';
import * as logModule from './src/modules/log.js';
import * as gitModule from './src/modules/git.js';
import * as npmModule from './src/modules/npm.js';


// [TODO] Check if these could not be imported the other way...
/**
 * @typedef {import('./src/types/package-json-types.js').PackageJson} PackageJsonType
 * @typedef {import('./src/models/Action.js').DefaultActionConfig} DefaultActionConfig
 */

export {
    // Types
    PackageJsonTypes, 
    LogLevelsTypes, 
    
    // Config
    
    // Interfaces
    Logger, 
    
    // Traits
    AbstractClassTrait, 
    SingletonTrait, 

    // Models
    FileSystemPath, 
    Action, 
    Repository, 
    Commit, 
    
    // Utils
    ErrorUtils, 
    TypeUtils, 
    
    // Helpers
    ErrorHandler, 
    LogHelper, 
    GitHelper, 
    PackageJsonHelper, 

    // Entities
    ConsoleLogger, 

    // Modules
    errorModule, 
    logModule, 
    gitModule, 
    npmModule, 
};