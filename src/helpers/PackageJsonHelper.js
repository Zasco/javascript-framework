import fs from 'fs';

import { SingletonTrait, ErrorHandler, ErrorUtils } from 'javascript-framework';

/** @typedef {import('../types/package-json-types.js').PackageJson} PackageJson */

/**
 * @since 0.0.3
 */
export default class PackageJsonHelper {
    /**
     * @see {@link PackageJsonHelper.FILE_NAME}
     * @protected
     * @static
     * @type {string}
     */
    static _FILE_NAME = 'package.json';
    
    /**
     * @see {@link PackageJsonHelper.NAME_KEY}
     * @protected
     * @static
     * @type {string}
     */
    static _NAME_KEY = 'name';
    
    /**
     * @see {@link PackageJsonHelper.VERSION_KEY}
     * @protected
     * @static
     * @type {string}
     */
    static _VERSION_KEY = 'version';
    
    /** @throws If instantiated (see {@link SingletonTrait.singletonConstructor}) */
    constructor() {
        SingletonTrait.singletonConstructor.call(this);
    }

    /**
     * The default package config file name.
     * 
     * @since 0.0.3
     * @readonly
     * @static
     */    
    static get FILE_NAME() {
        return this._FILE_NAME;
    }

    /**
     * The key holding the package name in the package config.
     * 
     * @since 0.0.3
     * @readonly
     * @static
     */
    static get NAME_KEY() {
        return this._NAME_KEY;
    }

    /**
     * The key holding the package version in the package config.
     * 
     * @since 0.0.3
     * @readonly
     * @static
     */
    static get VERSION_KEY() {
        return this._VERSION_KEY;
    }
    
    /**
     * Returns the package config object.
     * 
     * @since 0.0.3
     * @readonly
     * @static
     * @param {string} packageConfigFilePath The path to the package config file.
     * @returns {PackageJson} The package config object.
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
     * @param {PackageJson} packageConfig The package config object.
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
     * @param {PackageJson} packageConfig The package config object.
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
     * @param {PackageJson} packageConfig
     * @returns {string}
     */
    static getVersion(packageConfig) {
        return packageConfig[this.VERSION_KEY];
    }
};