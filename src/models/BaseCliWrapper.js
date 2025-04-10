import { execSync } from 'child_process';
import * as dargs from 'dargs';

import { traits, TypeUtils } from 'javascript-framework/module/core';
import { Utils as ErrorUtils, Handler as ErrorHandler } from 'javascript-framework/module/error';

import * as cliWrapperTypes from '../types/cli-wrapper.def.js';
import * as dargsTypes from '../types/dargs.def.js';

import { POSITIONAL_OPTIONS_KEY, SEPARATED_OPTIONS_KEY } from '../constants/cli-wrapper.js'; 

/**
 * The base model for CLI wrappers.
 * 
 * @since alpha-5.0.0
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
     * @deprecated alpha-7.7.0; Will be removed in `alpha-8.0.0`; Use {@link BaseCliWrapper._getCommandString} instead.
     * @protected
     * @static
     * @param {string} command The partial command
     * @returns {string}
     */
    static _getCompleteCommand(command) {
        return `${this._CLI_COMMAND} ${command}`;
    }

    /**
     * Returns the command's string with the provided {@link args|arguments}.
     * 
     * @since alpha-7.7.0
     * @protected
     * @static
     * @param {cliWrapperTypes.CliArgs} args
     * @returns {string}
     */
    static _getCommandString(args) {
        return `${this._CLI_COMMAND} ${args.join(' ')}`;
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
     * Returns if the tool is available on the system.
     * 
     * @since alpha-6.0.0
     * @readonly
     * @static
     * @returns {boolean}
     */
    static get isAvailable() {
        try {
            this._checkToolIsAvailable();
            return true;
        } catch (error) {
            return false;
        }
    }
    
    /**
     * Executes a command.
     * 
     * @since alpha-4.0.0
     * @protected
     * @static
     * @param {cliWrapperTypes.CliArgs} args The command arguments
     * @param {cliWrapperTypes.ExecuteProcessOptions} [execOptions] The process execution options
     * @returns {cliWrapperTypes.ExecuteReturn} The output of the command
     * @throws If an error happens during execution (see {@link ErrorHandler.withErrorHandling}). The original error may come from:
     * - An unexpected error
     * - {@link execSync}
     */
    static _executeCommand(args, execOptions = undefined) {
        const commandStr = this._getCommandString(args);

        return ErrorHandler.withErrorHandling(
            () => {
                this._checkToolIsAvailable();
                
                return execSync(
                    commandStr,
                    execOptions, 
                );
            },
            ErrorUtils.getStdErrorMsg('executing', 'command', commandStr)
        );
    }

    /**
     * Converts an object of {option: value} to an array (option, value) of command-line arguments.
     * - Internaly uses [`dargs`](https://github.com/sindresorhus/dargs) with custom improvements:
     *   - Added check for spaces in options names and throws if any found
     *   - Quotes values containing spaces
     * - Supports:
     *   - Positional arguments (`_`)
     *   - Separated arguments (`--`)
     *   - Any string-named argument
     * 
     * @protected
     * @static
     * @param {cliWrapperTypes.CliOptions} [options]
     * @param {dargsTypes.ConversionOptions} [dargsOptions]
     * @returns {cliWrapperTypes.CliArgs}
     */
    static _convertOptionsToArgs(options, dargsOptions = undefined) {
        if (TypeUtils.isUndefined(options)) return [];
        
        Object.keys(options).forEach(key => {
            if (key !== POSITIONAL_OPTIONS_KEY && key !== SEPARATED_OPTIONS_KEY && key.includes(' ')) {
                throw new Error(`Option key "${key}" contains spaces, which is not supported for command-line arguments`);
            }
        });

        /** @type {dargsTypes.ConvertedOptions} */
        const convertedOptions = {};
        Object.entries(options).forEach(([key, value]) => {
            // [NOTE] dargs only supports an array for _ and --, contrary to this wrapper...
            if ((key === POSITIONAL_OPTIONS_KEY || key === SEPARATED_OPTIONS_KEY) && TypeUtils.isString(value)) {
                convertedOptions[key] = [value];
                return;
            }
            
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

    /**
     * Returns the wrapper or subcommand specific {@link dargs} convertion options.
     * 
     * @since alpha-6.0.0
     * @protected
     * @static
     * @param {string} [subcommand]
     * @returns {dargs.Options | undefined}
     */
    static _getConvertOptions(subcommand = undefined) {
        return undefined;
    }

    /**
     * Executes a subcommand.
     * 
     * @since alpha-6.0.0
     * @protected
     * @static
     * @param {string} subcommand
     * @param {cliWrapperTypes.CliOptions} [cmdOptions]
     * @param {cliWrapperTypes.ExecuteProcessOptions} [execOptions]
     * @returns {ReturnType<BaseCliWrapper._executeCommand>}
     */
    static _executeSubcommand(subcommand, cmdOptions = {}, execOptions = undefined) {
        return ErrorHandler.withErrorHandling(
            () => {
                // Convert options to arguments
                const args = this._convertOptionsToArgs(cmdOptions, this._getConvertOptions());
                
                const allArgs = [subcommand, ...args];
                
                // Execute the command
                return this._executeCommand(allArgs, execOptions);
            },
            ErrorUtils.getStdErrorMsg('executing', 'subcommand', subcommand), 
        );
    }
}