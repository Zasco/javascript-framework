import * as childProcess from 'child_process';
import { execSync } from 'child_process';
import * as dargs from 'dargs';

import { traits, TypeUtils } from 'javascript-framework/module/core';
import { Utils as ErrorUtils, Handler as ErrorHandler } from 'javascript-framework/module/error';

import * as cliWrapperTypes from '../types/cli-wrapper-types.js';

/**
 * The base model for CLI wrappers.
 * 
 * @since 0.0.5
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
        // [TODO] Check tool version is supported...
    }
    
    /**
     * Executes the provided {@link command} in the {@link targetDir}.
     * 
     * @since 0.0.4
     * @protected
     * @static
     * @param {cliWrapperTypes.CliArgs} args
     * @param {childProcess.ExecSyncOptions} [options]
     * @returns {Buffer | string} The result of the command (if using `stdio: pipe`)
     * @throws If an error happens during execution (see {@link ErrorHandler.withErrorHandling}). The original error may come from:
     * - An unexpected error
     * - {@link execSync}
     */
    static _executeCommand(args, options = undefined) {
        const fullCommand = `${this._CLI_COMMAND} ${args.join(' ')}`;

        return ErrorHandler.withErrorHandling(
            () => {
                this._checkToolIsAvailable();
                
                return execSync(
                    fullCommand,
                    options, 
                );
            },
            ErrorUtils.getStdErrorMsg('executing', 'command', fullCommand)
        );
    }

    /**
     * Converts an object of {option: value} to an array (option, value) of command-line arguments.
     * - Internaly uses `dargs` with custom improvements:
     *   - Add check for spaces in keys and throws if any found
     *   - Quotes values containing spaces
     * - Supports positional arguments (`_`)
     * - Supports separated arguments (`--`)
     * 
     * @protected
     * @static
     * @param {cliWrapperTypes.CliOptions} options
     * @param {dargs.Options | undefined} dargsOptions
     * @returns {string[]}
     */
    static _convertOptionsToArgs(options, dargsOptions = undefined) {
        Object.keys(options).forEach(key => {
            if (key !== '_' && key !== '--' && key.includes(' ')) {
                throw new Error(`Option key "${key}" contains spaces, which is not supported for command-line arguments`);
            }
        });

        /** @type {cliWrapperTypes.dargsConvertedOptions} */
        const convertedOptions = {};
        Object.entries(options).forEach(([key, value]) => {
            if (Array.isArray(value)) convertedOptions[key] = value.map(item => String(item));
            else convertedOptions[key] = value;
        });
        
        // Use dargs to convert the object to args array
        const args = dargs.default(convertedOptions, dargsOptions);
        
        // Add quotes around string values if needed
        return args.map(arg => {
            // If the argument doesn't start with - and contains spaces, quote it
            if (!arg.startsWith('-') && arg.includes(' ')) {
                return `"${arg}"`;
            }
            return arg;
        });
    }
}