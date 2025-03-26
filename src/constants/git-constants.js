/**
 * Constants for the `Git` command line tool.
 * 
 * @since 0.0.6
 */

import * as gitTypes from '../types/git-types.js';


// Commands

/**
 * The supported commands for `Git`.
 * 
 * @since 0.0.6
 * @see {@link npmTypes.CommandsType}
 * @readonly
 * @type {Object<string, gitTypes.Command>}
 */
export const COMMANDS = Object.freeze({
    VERSION: 'version', 
    REV_PARSE: 'rev-parse', 
    DIFF: 'diff', 
    TAG: 'tag', 
    ADD: 'add', 
    COMMIT: 'commit', 
    PUSH: 'push', 
});


// `add` command (see https://git-scm.com/docs/git-add)

/**
 * The CLI options for the `add` command.
 * 
 * @since 0.0.6
 * @see {@link gitTypes.AddCliOptions}
 * @readonly
 * @type {Object<string, gitTypes.AddCliOption>}
 */
export const ADD_OPTIONS = Object.freeze({
    ALL: 'all', 
});


// `commit` command (see https://git-scm.com/docs/git-commit)

/**
 * The CLI options for the `commit` command.
 * 
 * @since 0.0.6
 * @see {@link gitTypes.CommitCliOptions}
 * @readonly
 * @type {Object<string, gitTypes.CommitCliOption>}
 */
export const COMMIT_OPTIONS = Object.freeze({
    MESSAGE: 'message', 
});


// `diff` command (see https://git-scm.com/docs/git-diff)

/**
 * The CLI options for the `diff` command.
 * 
 * @since 0.0.6
 * @see {@link gitTypes.DiffCliOptions}
 * @readonly
 * @type {Object<string, gitTypes.DiffCliOption>}
 */
export const DIFF_OPTIONS = Object.freeze({
    CACHED: 'cached', 
    NAME_ONLY: 'name-only', 
});


// `rev-parse` command (see https://git-scm.com/docs/git-rev-parse)

/**
 * The CLI options for the `rev-parse` command.
 * 
 * @since 0.0.6
 * @see {@link gitTypes.RevParseCliOptions}
 * @readonly
 * @type {Object<string, gitTypes.RevParseCliOption>}
 */
export const REV_PARSE_OPTIONS = Object.freeze({
    IS_INSIDE_WORK_TREE: 'is-inside-work-tree', 
});


// `tag` command (see https://git-scm.com/docs/git-tag)

/**
 * The CLI options for the `tag` command.
 * 
 * @since 0.0.6
 * @see {@link gitTypes.RevParseCliOptions}
 * @readonly
 * @type {Object<string, gitTypes.TagCliOption>}
 */
export const TAG_OPTIONS = Object.freeze({
    LIST: 'list', 
});