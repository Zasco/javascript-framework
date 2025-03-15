import * as childProcess from 'child_process';
import { execSync } from 'child_process';

import { AbstractClassTrait, ErrorUtils, ErrorHandler, FileSystemPath } from 'javascript-framework';

/**
 * The base model for CLI wrappers.
 * 
 * @since ${NEXT_VERSION}
 * @abstract
 */
export default class CliWrapper {
    /** @throws If instantiated (see {@link AbstractClassTrait.abstractClassConstructor}) */
    constructor() {
        AbstractClassTrait.abstractClassConstructor.call(this);
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
        return AbstractClassTrait.abstractMethod(this._CLI_COMMAND);
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
     * Checks wether the tool can execute in the {@link targetDir}.
     * 
     * @protected
     * @param {FileSystemPath | string} targetDir
     * @return {true} If the tool can execute
     * @throws If the tool is not available (see {@link CliWrapper._checkToolIsAvailable})
     */
    static _checkCanExecute(targetDir) {
        this._checkToolIsAvailable();

        return true;
    }

    /**
     * Checks if the tool is available on the system.
     * 
     * @abstract
     * @protected
     * @returns {true} If the tool is available
     * @throws If the tool is not available 
     */
    static _checkToolIsAvailable() {
        return AbstractClassTrait.abstractMethod(this._checkToolIsAvailable.name);
    }
    
    /**
     * Executes the provided `npm` {@link command} in the {@link targetDir}.
     * 
     * @since 0.0.4
     * @protected
     * @static
     * @param {string} command
     * @param {FileSystemPath | string} targetDir
     * @param {childProcess.ExecSyncOptions} [options]
     * @returns {true} If the command was executed successfully
     * @throws If an error happens during execution (see {@link ErrorHandler.withErrorHandling}). The original error may come from:
     * - An unexpected error
     * - {@link CliWrapper._checkCanExecute}
     * - {@link execSync}
     */
    static _executeCommand(command, targetDir, options = undefined) {
        const fullCommand = this._getCompleteCommand(command);

        return ErrorHandler.withErrorHandling(
            () => {
                this._checkCanExecute(targetDir);
                execSync(
                    fullCommand,
                    { cwd: String(targetDir), ...options }, 
                );
            },
            ErrorUtils.getStdErrorMsg('executing', 'command', fullCommand)
        );
    }
}