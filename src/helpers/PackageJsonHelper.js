import fs from 'fs';
import path from 'path';

import { traits } from 'javascript-framework/module/core';
import { FileSystemPath } from 'javascript-framework/module/fs';
import { Utils as ErrorUtils, Handler as ErrorHandler } from 'javascript-framework/module/error';

import * as packageJsonTypes from '../types/package-json.js';
import { DEFAULT_FILE_NAME, DEFAULT_NAME_KEY, DEFAULT_VERSION_KEY} from '../constants/package-json.js';

/**
 * @since alpha-3.0.0
 */
export default class PackageJsonHelper {
    /**
     * @deprecated ${NEXT_VERSION}; Will be removed in `alpha-8.0.0`; Use {@link DEFAULT_FILE_NAME} instead.
     * @see {@link PackageJsonHelper.FILE_NAME}
     * @protected
     * @static
     * @type {string}
     */
    static _FILE_NAME = DEFAULT_FILE_NAME;
    
    /**
     * @deprecated ${NEXT_VERSION}; Will be removed in `alpha-8.0.0`; Use {@link DEFAULT_NAME_KEY} instead.
     * @see {@link PackageJsonHelper.NAME_KEY}
     * @protected
     * @static
     * @type {string}
     */
    static _NAME_KEY = DEFAULT_NAME_KEY;
    
    /**
     * @deprecated ${NEXT_VERSION}; Will be removed in `alpha-8.0.0`; Use {@link DEFAULT_VERSION_KEY} instead.
     * @see {@link PackageJsonHelper.VERSION_KEY}
     * @protected
     * @static
     * @type {string}
     */
    static _VERSION_KEY = DEFAULT_VERSION_KEY;
    
    /** @throws If instantiated (see {@link traits.SingletonTrait.singletonConstructor}) */
    constructor() {
        traits.SingletonTrait.singletonConstructor.call(this);
    }

    /**
     * The default package config file name.
     * 
     * @deprecated ${NEXT_VERSION}; Will be removed in `alpha-8.0.0`; Use {@link DEFAULT_FILE_NAME} instead.
     * @since alpha-3.0.0
     * @readonly
     * @static
     */    
    static get FILE_NAME() {
        return this._FILE_NAME;
    }

    /**
     * The key holding the package name in the package config.
     * 
     * @since alpha-3.0.0
     * @deprecated ${NEXT_VERSION}; Will be removed in `alpha-8.0.0`; Use {@link DEFAULT_FILE_NAME} instead.
     * @readonly
     * @static
     */
    static get NAME_KEY() {
        return this._NAME_KEY;
    }

    /**
     * The key holding the package version in the package config.
     * 
     * @since alpha-3.0.0
     * @deprecated ${NEXT_VERSION}; Will be removed in `alpha-8.0.0`; Use {@link DEFAULT_FILE_NAME} instead.
     * @readonly
     * @static
     */
    static get VERSION_KEY() {
        return this._VERSION_KEY;
    }

    /**
     * Checks if a `package.json` file exists in the provided directory.
     * Unlike `npm` and `git` which traverse up the directory tree, this method only checks the exact provided directory.
     * 
     * @since alpha-4.0.0
     * @static
     * @param {FileSystemPath | string} directory
     * @returns {true} If `package.json` exists
     * @throws {Error} If `package.json` doesn't exist
     */
    static checkConfigFileExists(directory) {
        const directoryStr = String(directory);
        const packageJsonPath = path.join(directoryStr, this.FILE_NAME);
        
        if (!fs.existsSync(packageJsonPath)) throw new Error(`No ${this.FILE_NAME} found in ${directoryStr}`);

        return true;
    }
    
    /**
     * Returns the package config object.
     * 
     * @since alpha-3.0.0
     * @readonly
     * @static
     * @param {string} packageConfigFilePath The path to the package config file.
     * @returns {packageJsonTypes.Schema} The package config object.
     * @throws {Error} If the file does not exist or is not a valid JSON file.
     */
    static getPackageConfig(packageConfigFilePath) {
        return ErrorHandler.withErrorHandling(
            () => {
                const packageConfig = fs.readFileSync(packageConfigFilePath, 'utf8');
                return JSON.parse(packageConfig);
            },
            ErrorUtils.getStdSubjectMsg(`Could not load package config at`, packageConfigFilePath),
        );
    }
    
    /**
     * Returns if the package config is valid.
     * 
     * @since alpha-3.0.0
     * @static
     * @param {packageJsonTypes.Schema} packageConfig The package config object.
     * @returns {boolean}
     */
    static isValidConfig(packageConfig) {
        return packageConfig !== undefined 
            && typeof packageConfig === 'object' 
            && packageConfig.hasOwnProperty(this.NAME_KEY) 
            && packageConfig.hasOwnProperty(this.VERSION_KEY)
        ;
    }

    /**
     * Returns the package name from the config.
     * 
     * @since alpha-3.0.0
     * @readonly
     * @static
     * @param {packageJsonTypes.Schema} packageConfig The package config object.
     * @returns {string}
     */
    static getName(packageConfig) {
        return packageConfig[this.NAME_KEY];
    }

    /**
     * Returns the package version from the config.
     * 
     * @since alpha-3.0.0
     * @readonly
     * @static
     * @param {packageJsonTypes.Schema} packageConfig
     * @returns {string}
     */
    static getVersion(packageConfig) {
        return packageConfig[this.VERSION_KEY];
    }
};