// Traits
import AbstractClassTrait from './src/traits/AbstractClassTrait.js';
import SingletonTrait from './src/traits/SingletonTrait.js';

// Modules
import * as typesModule from './src/modules/types.js';
import * as errorModule from './src/modules/error.js';
import * as logModule from './src/modules/log.js';
import * as fsModule from './src/modules/fs.js';
import * as gitModule from './src/modules/git.js';
import * as packageJsonModule from './src/modules/packageJson.js';
import * as npmModule from './src/modules/npm.js';
import * as actionModule from './src/modules/action.js';


// [TODO] Check if these could not be imported the other way...
/**
 * @typedef {import('./src/types/package-json-types.js').PackageJson} PackageJsonType
 * @typedef {import('./src/models/Action.js').DefaultActionConfig} DefaultActionConfig
 */

export {
    // Traits
    AbstractClassTrait, 
    SingletonTrait, 

    // Modules
    typesModule, 
    errorModule, 
    logModule, 
    fsModule, 
    gitModule, 
    packageJsonModule, 
    npmModule, 
    actionModule, 
};