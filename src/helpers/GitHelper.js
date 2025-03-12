import { execSync } from 'child_process';

import { ErrorHandler, ErrorUtils, Repository } from 'javascript-framework';

/**
 * @typedef {import('child_process').ExecSyncOptions} ExecSyncOptions
 * @typedef {import('child_process').StdioOptions} StdioOptions
 */

/**
 * @since 0.0.2
 */
export default class GitHelper {
    /** @throws {Error} If instantiated */
    constructor() {
        ErrorUtils.checkIsSingletonInstance(this, GitHelper);
    }
    
    /**
     * Checks if the given path is a valid repository.
     * 
     * @since 0.0.2
     * @static
     * @param {string} path The path to check.
     * @returns {true} If the path is a repository.
     * @throws {Error} If the path is not a repository.
     */
    static checkPathIsRepo(path) {
        return ErrorHandler.withErrorHandling(
            () => {
                /** @type {ExecSyncOptions} */
                const options = {cwd: path, stdio: 'pipe'};
                // [NOTE] When running `git rev-parse --is-inside-work-tree` in a non-Git directory, Git will exit with an error status, which will cause execSync() to throw an error itself.
                execSync('git rev-parse --is-inside-work-tree', options);
                return true;
            },
            ErrorUtils.getStdSubjectMsg('The path is not a repository', path),
        );
    }

    /**
     * Returns if the given path is a valid repository.
     * 
     * @since 0.0.2
     * @static
     * @param {string} path The path to check.
     * @returns {boolean}
     */
    static pathIsRepo(path) {
        try {
            return this.checkPathIsRepo(path);
        } catch (error) {
            return false;
        }
    }

    /**
     * Returns the repository object for the given path.
     * 
     * @since 0.0.2
     * @static
     * @param {string} path The path of the repository.
     * @returns {Repository} The target repository object.
     * @throws {Error} If could not get the repository object for the path.
     */
    static getRepoForPath(path) {
        this.checkPathIsRepo(path);

        return new Repository(path);
    }
    
    /**
     * Runs a git command.
     * 
     * @since 0.0.2
     * @static
     * @param {string} command The command to run.
     * @param {Repository} repo The target repository object.
     * @param {StdioOptions} [stdio] The stdio mode.
     * @returns {Buffer} The output of the command.
     */
    static runCommand(command, repo, stdio = undefined) {
        return ErrorHandler.withErrorHandling(
            () => {
                const repoPath = repo.path;
                this.checkPathIsRepo(repoPath);
            
                const options = {cwd: repoPath, stdio};
                return execSync('git '+ command, options);
            },
            ErrorUtils.getStdSubjectMsg('Failed to run git command', command),
        );
    }
    
    /**
     * Returns if the repository has staged changes.
     * 
     * @since 0.0.2
     * @static
     * @param {Repository} repo The target repository object.
     * @returns {boolean}
     * @throws {Error} If could not check for staged changes.
     */
    static repoHasStagedChanges(repo) {
        return ErrorHandler.withErrorHandling(
            () => {
                const gitDiff = this.runCommand(`diff --cached --name-only`, repo);
                return gitDiff.length > 0;
            },
            ErrorUtils.getStdSubjectMsg('Could not check if repository has staged changes', repo.path),
        );
    }

    /**
     * Returns if a tag with the given name already exists in the provided repository.
     * 
     * @since 0.0.2
     * @static
     * @param {string} tagName The tag name to check.
     * @param {Repository} repo The target repository object.
     * @returns {boolean}
     * @throws {Error} If could not check if tag exists.
     */
    static tagExists(tagName, repo) {
        return ErrorHandler.withErrorHandling(
            () => {
                const result = this.runCommand(`tag -l ${tagName}`, repo, 'pipe').toString().trim();
                return result === tagName;
            },
            ErrorUtils.getStdSubjectMsg(`Could not check if tag "${tagName}" exists in repository`, repo.path),
        );
    }

    /**
     * Stages all changes in the repository.
     * 
     * @since 0.0.2
     * @static
     * @param {Repository} repo The target repository object.
     * @returns {true} If the changes were staged successfully.
     * @throws {Error} If the changes could not be staged.
     */
    static stageAllChanges(repo) {
        return ErrorHandler.withErrorHandling(
            () => {
                this.runCommand('add -A', repo);
                return true;
            },
            'Could not stage all changes in repository.',
        );
    }

    /**
     * Commits the changes with the given message in the repository.
     * 
     * @since 0.0.2
     * @static
     * @param {string} message The commit message.
     * @param {Repository} repo The target repository object.
     * @returns {true} If the changes were committed successfully.
     * @throws {Error} If there were no staged changes to commit.
     * @throws {Error} If the changes could not be committed.
     */
    static commit(message, repo) {
        return ErrorHandler.withErrorHandling(
            () => {
                if (!this.repoHasStagedChanges(repo)) throw new Error('No changes staged for commit.');
                
                this.runCommand(`commit -m "${message}"`, repo);
                return true;
            },
            ErrorUtils.getStdSubjectMsg('Could not commit changes in repository', repo.path),
        )
    }

    /**
     * Creates a new tag with the given name in the repository.
     * 
     * @since 0.0.2
     * @static
     * @param {string} tagName The tag name to create.
     * @param {Repository} repo The target repository object.
     * @returns {true} If the tag was created successfully.
     * @throws {Error} If the tag could not be created.
     */
    static createTag(tagName, repo) {
        // [NOTE] Currently limited to lightweight tags.
        return ErrorHandler.withErrorHandling(
            () => {
                this.runCommand(`tag ${tagName}`, repo);
                return true;
            },
            ErrorUtils.getStdSubjectMsg(`Could not create new tag "${tagName}" in repository`, repo.path),
        )
    }

    /**
     * Pushes the changes to the remote repository.
     * 
     * @since 0.0.2
     * @static
     * @param {Repository} repo The target repository object.
     * @returns {true} If the changes were pushed successfully.
     * @throws {Error} If the changes could not be pushed.
     */
    static push(repo) {
        return ErrorHandler.withErrorHandling(
            () => {
                this.runCommand('push', repo);
                return true;
            },
            ErrorUtils.getStdSubjectMsg('Could not push changes to remote repository.', repo.path),
        )
    }
};