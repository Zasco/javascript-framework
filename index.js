import AbstractClassTrait from './src/traits/AbstractClassTrait.js';
import SingletonTrait from './src/traits/SingletonTrait.js';

import LOG_LEVELS from './src/config/LogLevelsConfig.js';

import * as PackageJsonTypes from './src/types/package-json-types.js';
import * as LogLevelsTypes from './src/config/LogLevelsConfig.js';

import ErrorHandler from './src/helpers/ErrorHandler.js';
import LogHelper from './src/helpers/LogHelper.js';
import GitHelper from './src/helpers/GitHelper.js';
import PackageJsonHelper from './src/helpers/PackageJsonHelper.js';

import ErrorUtils from './src/utils/ErrorUtils.js';
import TypeUtils from './src/utils/TypeUtils.js';

import Logger from './src/interfaces/Logger.js';

import FileSystemPath from './src/models/FileSystemPath.js';
import Action from './src/models/Action.js';
import Repository from './src/models/Repository.js';
import Commit from './src/models/Commit.js';

import ConsoleLogger from './src/entities/ConsoleLogger.js';

// Modules
import * as npmModule from './src/modules/npm.js';


// [TODO] Check if these could not be imported the other way...
/**
 * @typedef {import('./src/types/package-json-types.js').PackageJson} PackageJsonType
 * @typedef {import('./src/models/Action.js').DefaultActionConfig} DefaultActionConfig
 */

export {
    // Traits
    AbstractClassTrait, 
    SingletonTrait, 
    
    // Config
    LOG_LEVELS, 

    // Types
    PackageJsonTypes, 
    LogLevelsTypes, 
    
    // Constants
    
    // Helpers & Utils
    ErrorHandler, 
    LogHelper, 
    GitHelper, 
    PackageJsonHelper, 
    
    ErrorUtils, 
    TypeUtils, 

    // Wrappers

    // Interfaces
    Logger, 

    // Models
    FileSystemPath, 
    Action, 
    Repository, 
    Commit, 

    // Entities
    ConsoleLogger, 

    // Modules
    npmModule, 
};