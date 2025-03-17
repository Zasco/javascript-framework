import * as childProcess from 'child_process';
import { execSync } from 'child_process';

import { traits, TypeUtils } from 'javascript-framework/module/core';
import { Utils as ErrorUtils, Handler as ErrorHandler } from 'javascript-framework/module/error';

import * as cliWrapperTypes from '../types/cli-wrapper-types.js';

/**
 * The base model for CLI wrappers.
 * 
 * @since ${NEXT_VERSION}
 * @abstract
 */
export default class BaseCliWrapper {
    /** @throws If instantiated (see {@link AbstractClassTrait.abstractClassConstructor}) */
    constructor() {
        traits.AbstractClassTrait.abstractClassConstructor.call(this);
    }

    /**
     * The CLI command identifier.
     * 
     * @abstract
     * @protected
     * @static
     * @type {string}
     */
    static get _CLI_COMMAND() {
        return traits.AbstractClassTrait.abstractMethod(this._CLI_COMMAND);
    }

    /**
     * Returns the complete CLI command with identifier.
     * 
     * @protected
     * @static
     * @param {string} command The partial command
     * @returns {string}
     */
    static _getCompleteCommand(command) {
        return `${this._CLI_COMMAND} ${command}`;
    }

    /**
     * Checks if the tool is available on the system.
     * 
     * @abstract
     * @protected
     * @static
     * @returns {true} If the tool is available
     * @throws If an unexpected error happens during check
     * @throws If the tool is not available 
     */
    static _checkToolIsAvailable() {
        return traits.AbstractClassTrait.abstractMethod(this._checkToolIsAvailable.name);
    }
    
    /**
     * Executes the provided {@link command} in the {@link targetDir}.
     * 
     * @since 0.0.4
     * @protected
     * @static
     * @param {string} command
     * @param {FileSystemPath | string} targetDir
     * @param {childProcess.ExecSyncOptions} [options]
     * @returns {true} The result of the command (if using `stdio: pipe`)
     * @throws If an error happens during execution (see {@link ErrorHandler.withErrorHandling}). The original error may come from:
     * - An unexpected error
     * - {@link execSync}
     */
    static _executeCommand(command, targetDir, options = undefined) {
        const fullCommand = this._getCompleteCommand(command);

        return ErrorHandler.withErrorHandling(
            () => {
                this._checkToolIsAvailable();
                
                return execSync(
                    fullCommand,
                    { cwd: String(targetDir), ...options }, 
                );
            },
            ErrorUtils.getStdErrorMsg('executing', 'command', fullCommand)
        );
    }

    /**
     * Converts an object of {option: value} to an array (option, value) of command-line arguments.
     * 
     * @protected
     * @static
     * @param {cliWrapperTypes.CliOptions} options
     * @param {cliWrapperTypes.OptionFlagsMap} [optionFlagsMap]
     * @returns {string[]}
     */
    static _convertOptionsToArgs(options, optionFlagsMap = {}) {
        /** @type {string[]} */
        const cmdArgs = [];
        
        Object.entries(options)
            .filter(([_, value]) => value !== undefined)
            .forEach(([key, value]) => {
                // Get the CLI option format from the map or generate it
                const cliOption = optionFlagsMap[key]
                    ? `-${optionFlagsMap[key]}` 
                    : `--${key}`
                ;
                
                if (TypeUtils.isBoolean(value)) {
                    // For boolean true values, just add the flag
                    if (value === true) cmdArgs.push(cliOption);
                } 
                else if (TypeUtils.isArray(value)) {
                    // Add each value separately with the same flag
                    value.forEach(item => {
                        cmdArgs.push(cliOption);
                        cmdArgs.push(`"${String(item)}"`);
                    });
                }
                else if (TypeUtils.isString(value) || TypeUtils.isNumber(value)) {
                    cmdArgs.push(cliOption);
                    cmdArgs.push(`"${String(value)}"`);
                }
            });
        
        return cmdArgs;
    }
}