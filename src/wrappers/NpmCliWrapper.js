import * as childProcess from 'child_process';
import { execSync } from 'child_process';

import { traits, TypeUtils } from 'javascript-framework/module/core';
import { FileSystemPath } from 'javascript-framework/module/fs';
import { BaseWrapper as BaseCliWrapper } from 'javascript-framework/module/cli';
import { Utils as ErrorUtils, Handler as ErrorHandler } from 'javascript-framework/module/error';
import { Helper as PackageJsonHelper } from 'javascript-framework/module/packageJson';

import * as npmTypes from '../types/npm-types.js';
import * as npmCliWrapperTypes from '../types/npm-cli-wrapper-types.js';
import * as npmConstants from '../constants/npm-constants.js';

/**
 * A wrapper to interact with `npm`.
 * 
 * @since 0.0.4
 */
export default class NpmCliWrapper extends BaseCliWrapper {
    /**
     * @inheritdoc
     * @see {@link BaseCliWrapper._CLI_COMMAND}
     */
    static _CLI_COMMAND = 'npm';
    
    /** @throws If instantiated (see {@link traits.SingletonTrait.singletonConstructor}) */
    constructor() {
        const singletonConstructor = () => traits.SingletonTrait.singletonConstructor.call(this);
        try {super();} finally {singletonConstructor();}
    }

    /**
     * @inheritdoc
     * @see {@link CliWrapper._checkToolIsAvailable}
     * @throws {Error} If `npm` is not installed or available (see {@link ErrorHandler.withErrorHandling}). The original error may come from:
     * - An unexpected error
     * - {@link execSync}
     */
    static _checkToolIsAvailable() {
        return ErrorHandler.withErrorHandling(
            () => {
                execSync(`${this._CLI_COMMAND} --version`, { stdio: 'pipe' });
                return true;
            }, 
            `"${this._CLI_COMMAND}" is not available on the system.`, 
        );
    }

    /**
     * Checks if the given directory is a valid `npm` directory.
     * 
     * @static
     * @param {FileSystemPath | string} directory The path to check
     * @returns {true} If the directory is a valid `npm` directory
     * @throws If the directory is not a valid `npm` directory (see {@link ErrorHandler.withErrorHandling}). The orginal error may come from:
     * - An unexpected error
     * - {@link PackageJsonHelper.checkConfigFileExists}
     */
    static _checkIsNpmDirectory(directory) {
        return ErrorHandler.withErrorHandling(
            () => {
                PackageJsonHelper.checkConfigFileExists(directory);

                return true;
            }, 
            ErrorUtils.getStdSubjectMsg(`The provided directory is not a valid "npm" directory`, directory.toString()),
        );
    }

    /**
     * Checks if the given string is valid version bump type.
     * 
     * @static
     * @param {string} type
     * @returns {true} If the version bump type is valid
     * @throws {TypeError} If the version bump type is not valid
     * @throws If an unexpected error happens during check
     */
    static _checkIsValidBumpType(type) {
        // @ts-expect-error TypeScript isn't typed so that includes() can safely check any string against a readonly tuple of strings
        if (!npmConstants.VERSION_BUMP_TYPES.includes(type)) throw new TypeError(ErrorUtils.getStdSubjectMsg(`Invalid version bump type`, type));

        return true;
    }

    // [TODO] Add static version(targetDir, versionBumpType, handleGit) {}

    /**
     * Executes `npm version` with the provided version bump type and options.
     * 
     * @since 0.0.4
     * @static
     * @param {npmTypes.VersionBumpType} versionBumpType The type of version bump to perform
     * @param {npmCliWrapperTypes.VersionOptions} cmdOptions
     * @param {childProcess.ExecSyncOptions} [execOptions]
     * @throws If an error happens during execution (see {@link ErrorHandler.withErrorHandling}). The original error may come from:
     * - An unexpected error
     * - {@link NpmCliWrapper.checkIsValidBumpType}
     * - {@link NpmCliWrapper._convertOptionsToArgs}
     * - {@link NpmCliWrapper._executeCommand}
     */
    static executeNpmVersion(versionBumpType, cmdOptions = {}, execOptions = {}) {
        // [TODO] Improve this...
        const completeCommand = `${this._CLI_COMMAND} ${versionBumpType}`;
        
        return ErrorHandler.withErrorHandling(
            () => {
                this._checkIsValidBumpType(versionBumpType);
                
                console.log('');
                console.log(completeCommand);

                const cmdArgs = [
                    npmConstants.COMMANDS.VERSION, 
                    versionBumpType, 
                    ...this._convertOptionsToArgs(cmdOptions)
                ];
                
                this._executeCommand(cmdArgs, execOptions);
            }, 
            ErrorUtils.getStdErrorMsg(`executing "${completeCommand}"`, 'in directory', String(execOptions.cwd)), 
        );
    }
}