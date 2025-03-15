import SingletonTrait from './src/traits/SingletonTrait.js';

import LOG_LEVELS from './src/config/LogLevelsConfig.js';

import * as NpmTypes from './src/types/npm-types.js';

import * as NpmConstants from './src/constants/NpmConstants.js';

import ErrorHandler from './src/helpers/ErrorHandler.js';
import LogHelper from './src/helpers/LogHelper.js';
import GitHelper from './src/helpers/GitHelper.js';
import PackageJsonHelper from './src/helpers/PackageJsonHelper.js';

import ErrorUtils from './src/utils/ErrorUtils.js';
import TypeUtils from './src/utils/TypeUtils.js';

import NpmCliWrapper from './src/wrappers/NpmCliWrapper.js';

import Logger from './src/interfaces/Logger.js';

import FileSystemPath from './src/models/FileSystemPath.js';
import Action from './src/models/Action.js';
import Repository from './src/models/Repository.js';
import Commit from './src/models/Commit.js';

import ConsoleLogger from './src/entities/ConsoleLogger.js';

// [TODO] Check if these could not be imported the other way...
/**
 * @typedef {import('./src/config/LogLevelsConfig.js').LogLevel} LogLevel
 * @typedef {import('./src/types/package-json-types.js').PackageJson} PackageJsonType
 * @typedef {import('./src/models/Action.js').DefaultActionConfig} DefaultActionConfig
 */

export {
    // Traits
    SingletonTrait, 
    
    // Config
    LOG_LEVELS, 

    // Types
    NpmTypes, 
    
    // Constants
    NpmConstants, 
    
    // Helpers & Utils
    ErrorHandler, 
    LogHelper, 
    GitHelper, 
    PackageJsonHelper, 
    
    ErrorUtils, 
    TypeUtils, 

    // Wrappers
    NpmCliWrapper, 

    // Interfaces
    Logger, 

    // Models
    FileSystemPath, 
    Action, 
    Repository, 
    Commit, 

    // Entities
    ConsoleLogger, 
};