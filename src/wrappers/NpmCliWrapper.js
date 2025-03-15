import * as childProcess from 'child_process';
import { execSync } from 'child_process';

import { 
    SingletonTrait, 
    
    NpmTypes, 
    NpmConstants, 
    
    ErrorUtils, 
    ErrorHandler,
    PackageJsonHelper, 
     
    FileSystemPath 
} from 'javascript-framework';

/**
 * A wrapper to interact with `npm`.
 * 
 * @since ${NEXT_VERSION}
 */
export default class NpmCliWrapper {
    /**
     * The `npm` CLI command identifier.
     * 
     * @protected
     * @static
     * @type {string}
     */
    static _CLI_COMMAND = 'npm';
    
    /** @throws If instantiated (see {@link SingletonTrait.singletonConstructor}) */
    constructor() {
        SingletonTrait.singletonConstructor.call(this);
    }

    /**
     * Checks if `npm` is installed and available in the system.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @returns {true} If `npm` is installed
     * @throws {Error} If `npm` is not installed or available (see {@link ErrorHandler.withErrorHandling}). The original error may come from:
     * - An unexpected error
     * - {@link execSync}
     */
    static checkNpmIsAvailable() {
        return ErrorHandler.withErrorHandling(
            () => {
                execSync('npm --version', { stdio: 'pipe' });
                return true;
            }, 
            '"npm" is not available on the system.', 
        );
    }

    /**
     * Checks if the given directory is a valid `npm` directory.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {FileSystemPath | string} directory The path to check
     * @returns {true} If the directory is a valid `npm` directory
     * @throws If the directory is not a valid `npm` directory (see {@link ErrorHandler.withErrorHandling}). The orginal error may come from:
     * - An unexpected error
     * - {@link PackageJsonHelper.checkConfigFileExists}
     */
    static checkIsNpmDirectory(directory) {
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
     * @since ${NEXT_VERSION}
     * @static
     * @param {string} type
     * @returns {true} If the version bump type is valid
     * @throws {TypeError} If the version bump type is not valid
     * @throws If an unexpected error happens during check
     */
    static checkIsValidBumpType(type) {
        // @ts-ignore TypeScript isn't typed so that includes() can safely check any string against a readonly tuple of strings
        if (!NpmConstants.VERSION_BUMP_TYPES.includes(type)) throw new TypeError(ErrorUtils.getStdSubjectMsg(`Invalid version bump type`, type));

        return true;
    }

    /**
     * Returns the complete `npm` command with {@link _CLI_COMMAND}.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {string} command
     * @returns {string}
     * @throws If an unexpected error happens during completion
     */
    static getCompleteCommand(command) {
        return `${this._CLI_COMMAND} ${command}`;
    }

    /**
     * Executes the provided `npm` command in the provided directory.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {string} command
     * @param {FileSystemPath | string} targetDir
     * @param {childProcess.ExecSyncOptions} [options]
     * @returns {true} If the command was executed successfully
     * @throws If an error happens during execution (see {@link ErrorHandler.withErrorHandling}). The original error may come from:
     * - An unexpected error
     * - {@link NpmCliWrapper.checkNpmIsAvailable}
     * - {@link NpmCliWrapper.checkIsNpmDirectory}
     * - {@link execSync}
     */
    static executeCommand(command, targetDir, options = undefined) {
        const targetDirStr = String(targetDir);
        
        return ErrorHandler.withErrorHandling(
            () => {
                this.checkNpmIsAvailable();
                this.checkIsNpmDirectory(targetDir);
                
                execSync(this.getCompleteCommand(command), { cwd: targetDirStr, stdio: 'inherit', ...options });
                
                return true;
            },
            ErrorUtils.getStdErrorMsg(`executing command ${command}`, 'in directory', targetDirStr)
        );
    }

    // [TODO] Add static version(targetDir, versionBumpType, handleGit) {}

    /**
     * Executes `npm version` in the target directory with the provided version bump type and `Git tag` flag.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {FileSystemPath | string} targetDir The path of the directory in which to execute the command
     * @param {NpmTypes.VersionBumpType} versionBumpType The type of version bump to perform
     * @param {boolean} handleGit Whether to include the `--no-git-tag-version` flag and prevent `npm` to run Git operations.
     * @throws If an error happens during execution (see {@link ErrorHandler.withErrorHandling}). The original error may come from:
     * - An unexpected error
     * - {@link NpmCliWrapper.checkIsValidBumpType}
     * - {@link NpmCliWrapper.executeCommand}
     */
    static executeNpmVersion(targetDir, versionBumpType, handleGit) {
        const directoryStr = String(targetDir);
        
        return ErrorHandler.withErrorHandling(
            () => {
                this.checkIsValidBumpType(versionBumpType);
        
                const gitFlag = handleGit ? 
                    '' : 
                    '--no-git-tag-version'
                ;
                const command = `version ${versionBumpType} ${gitFlag}`;
                
                console.log('');
                console.log(this.getCompleteCommand(command));
                
                this.executeCommand(command, targetDir);
            }, 
            ErrorUtils.getStdErrorMsg('executing "npm version"', 'in directory', directoryStr)
        );
    }
}