import fs from 'fs';

import { SingletonTrait, ErrorHandler, ErrorUtils } from 'javascript-framework';

/**
 * @since 0.0.3
 * @typedef {{
 *  'name': string,
 *  'version': string,
 *  [key: string]: any, 
 * }} PackageJsonType
 */

/**
 * @since 0.0.3
 */
export default class PackageJsonHelper {
    /**
     * The default package config file name.
     * 
     * @since 0.0.3
     * @static
     * @type {string}
     */
    static FILE_NAME = 'package.json';
    
    /**
     * The key holding the package name in the package config.
     * 
     * @since 0.0.3
     * @static
     * @type {string}
     */
    static NAME_KEY = 'name';
    
    /**
     * The key holding the package version in the package config.
     * 
     * @since 0.0.3
     * @static
     * @type {string}
     */
    static VERSION_KEY = 'version';
    
    /** @throws If instantiated (see {@link SingletonTrait.singletonConstructor}) */
    constructor() {
        SingletonTrait.singletonConstructor.call(this);
    }
    
    /**
     * Returns the package config object.
     * 
     * @since 0.0.3
     * @readonly
     * @static
     * @param {string} packageConfigFilePath The path to the package config file.
     * @returns {PackageJsonType} The package config object.
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
     * @since 0.0.3
     * @static
     * @param {PackageJsonType} packageConfig The package config object.
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
     * @since 0.0.3
     * @readonly
     * @static
     * @param {PackageJsonType} packageConfig The package config object.
     * @returns {string}
     */
    static getName(packageConfig) {
        return packageConfig[this.NAME_KEY];
    }

    /**
     * Returns the package version from the config.
     * 
     * @since 0.0.3
     * @readonly
     * @static
     * @param {PackageJsonType} packageConfig
     * @returns {string}
     */
    static getVersion(packageConfig) {
        return packageConfig[this.VERSION_KEY];
    }
};