import fs from 'fs';

import { ErrorHandler, ErrorUtils } from 'javascript-framework';

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
export default {
    /**
     * The default package config file name.
     * 
     * @since 0.0.3
     * @type {string}
     */
    FILE_NAME: 'package.json',
    
    /**
     * The key holding the package name in the package config.
     * 
     * @since 0.0.3
     * @type {string}
     */
    NAME_KEY: 'name',
    
    /**
     * The key holding the package version in the package config.
     * 
     * @since 0.0.3
     * @type {string}
     */
    VERSION_KEY: 'version',
    
    /**
     * Returns the package config object.
     * 
     * @since 0.0.3
     * @readonly
     * @param {string} packageConfigFilePath The path to the package config file.
     * @returns {PackageJsonType} The package config object.
     * @throws {Error} If the file does not exist or is not a valid JSON file.
     */
    getPackageConfig(packageConfigFilePath) {
        return ErrorHandler.withErrorHandling(
            () => {
                const packageConfig = fs.readFileSync(packageConfigFilePath, 'utf8');
                return JSON.parse(packageConfig);
            },
            ErrorUtils.getStdSubjectMsg(`Could not load package config at`, packageConfigFilePath),
        );
    },
    
    /**
     * Returns if the package config is valid.
     * 
     * @since 0.0.3
     * @param {PackageJsonType} packageConfig The package config object.
     * @returns {boolean}
     */
    isValidConfig(packageConfig) {
        return packageConfig !== undefined 
            && typeof packageConfig === 'object' 
            && packageConfig.hasOwnProperty(this.NAME_KEY) 
            && packageConfig.hasOwnProperty(this.VERSION_KEY)
        ;
    },

    /**
     * Returns the package name from the config.
     * 
     * @since 0.0.3
     * @readonly
     * @param {PackageJsonType} packageConfig The package config object.
     * @returns {string}
     */
    getName(packageConfig) {
        return packageConfig[this.NAME_KEY];
    },

    /**
     * Returns the package version from the config.
     * 
     * @since 0.0.3
     * @readonly
     * @param {PackageJsonType} packageConfig
     * @returns {string}
     */
    getVersion(packageConfig) {
        return packageConfig[this.VERSION_KEY];
    },
};