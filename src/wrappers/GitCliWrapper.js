import * as childProcess from 'child_process';
import { execSync } from 'child_process';

import * as gitCliWrapperTypes from '../types/git-cli-wrapper-types.js';
import * as gitConstants from '../constants/git-constants.js';
import { traits } from 'javascript-framework/module/core';
import { Handler as ErrorHandler} from 'javascript-framework/module/error';
import { BaseWrapper as BaseCliWrapper } from 'javascript-framework/module/cli';

/**
 * A CLI wrapper to interact with `Git`.
 * 
 * @since ${NEXT_VERSION}
 */
export default class GitCliWrapper extends BaseCliWrapper {
    /**
     * The `Git` CLI command identifier.
     * 
     * @inheritdoc
     * @see {@link BaseCliWrapper._CLI_COMMAND}
     */
    static _CLI_COMMAND = 'git';
    
    /** @throws If instantiated (see {@link traits.SingletonTrait.singletonConstructor}) */
    constructor() {
        const singletonConstructor = () => traits.SingletonTrait.singletonConstructor.call(this);
        try {super();} finally {singletonConstructor();}
    }
    
    /**
     * @inheritdoc
     * @see {@link BaseCliWrapper._checkToolIsAvailable}
     * @throws {Error} If `Git` is not installed or available (see {@link ErrorHandler.withErrorHandling}). The original error may come from:
     * - An unexpected error
     * - {@link execSync}
     */
    static _checkToolIsAvailable() {
        return ErrorHandler.withErrorHandling(
            () => {
                execSync(`${this._CLI_COMMAND} --${gitConstants.COMMANDS.VERSION}`, { stdio: 'pipe' });
                return true;
            }, 
            `"${this._CLI_COMMAND}" is not available on the system.`, 
        );
    }
    

    // Subcommands
    
    /**
     * Executes the `add` command with the provided options.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {gitCliWrapperTypes.AddOptions} [cmdOptions]
     * @param {childProcess.ExecSyncOptions} [execOptions]
     * @returns {ReturnType<BaseCliWrapper._executeSubcommand>}
     * @throws All errors that happen in {@link BaseCliWrapper._executeSubcommand}
     */
    static add(cmdOptions = undefined, execOptions = undefined) {
        return this._executeSubcommand(
            gitConstants.COMMANDS.ADD, 
            cmdOptions, 
            execOptions, 
        );
    }

    /**
     * Executes the `commit` command with the provided options.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {gitCliWrapperTypes.CommitOptions} [cmdOptions]
     * @param {childProcess.ExecSyncOptions} [execOptions]
     * @returns {ReturnType<BaseCliWrapper._executeSubcommand>}
     * @throws All errors that happen in {@link BaseCliWrapper._executeSubcommand}
     */
    static commit(cmdOptions = undefined, execOptions = undefined) {
        return this._executeSubcommand(
            gitConstants.COMMANDS.COMMIT, 
            cmdOptions, 
            execOptions, 
        );
    }

    /**
     * Executes the `diff` command with the provided options.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {gitCliWrapperTypes.DiffOptions} [cmdOptions]
     * @param {childProcess.ExecSyncOptions} [execOptions]
     * @returns {ReturnType<BaseCliWrapper._executeSubcommand>}
     * @throws All errors that happen in {@link BaseCliWrapper._executeSubcommand}
     */
    static diff(cmdOptions = undefined, execOptions = undefined) {
        return this._executeSubcommand(
            gitConstants.COMMANDS.DIFF, 
            cmdOptions, 
            execOptions, 
        );
    }
    
    /**
     * Executes the `tag` command with the provided options.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {gitCliWrapperTypes.TagOptions} [cmdOptions]
     * @param {childProcess.ExecSyncOptions} [execOptions]
     * @returns {ReturnType<BaseCliWrapper._executeSubcommand>}
     * @throws All errors that happen in {@link BaseCliWrapper._executeSubcommand}
     */
    static tag(cmdOptions = undefined, execOptions = undefined) {
        return this._executeSubcommand(
            gitConstants.COMMANDS.TAG, 
            cmdOptions, 
            execOptions, 
        );
    }

    /**
     * Executes the `push` command with the provided options.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {gitCliWrapperTypes.PushOptions} [cmdOptions]
     * @param {childProcess.ExecSyncOptions} [execOptions]
     * @throws All errors that happen in {@link BaseCliWrapper._executeSubcommand}
     */
    static push(cmdOptions = undefined, execOptions = undefined) {
        return this._executeSubcommand(
            gitConstants.COMMANDS.PUSH, 
            cmdOptions, 
            execOptions, 
        );
    }
};