/**
 * Types for the `Git` command line tool.
 * 
 * Verified with version `2.43.0` and likely compatible with `^2.0.0`.
 * 
 * @since ${NEXT_VERSION}
 */

// Commands

/**
 * The available commands.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {readonly [
 *  'add', 
 *  'commit', 
 *  'diff', 
 *  'push', 
 *  'rev-parse', 
 *  'tag', 
 *  'version', 
 * ]} Commands
 */

/**
 * A single command.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {Commands[number]} Command
 */


// Subcommands

// `add`

/**
 * Boolean-typed CLI option for the `add` command.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {readonly [
*   'all', 
* ]} AddBooleanOptions
*/

/**
 * The CLI options for the `add` command.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {readonly [
*  ...AddBooleanOptions, 
* ]} AddCliOptions
*/

/**
* A single CLI option for the `add` command.
* 
* @since ${NEXT_VERSION}
* @typedef {AddCliOptions[number]} AddCliOption
*/

/**
* The types of the `add` command options.
* 
* @since ${NEXT_VERSION}
* @typedef {Readonly<Record<AddBooleanOptions[number], boolean>>} AddOptionTypes
*/


// `commit`

/**
 * String-typed CLI option for the `commit` command.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {readonly [
 *   'message', 
 * ]} CommitStringOptions
 */

/**
 * The CLI options for the `commit` command.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {readonly [
 *  ...CommitStringOptions, 
 * ]} CommitCliOptions
 */

/**
 * A single CLI option for the `commit` command.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {CommitCliOptions[number]} CommitCliOption
 */

/**
 * The types of the `commit` command options.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {Readonly<Record<CommitStringOptions[number], string>>} CommitOptionTypes
 */


// `diff`

/**
 * Boolean-typed CLI option for the `diff` command.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {readonly [
 *   'cached', 
 *   'name-only', 
 * ]} DiffBooleanOptions
 */

/**
 * The CLI options for the `diff` command.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {readonly [
 *  ...DiffBooleanOptions, 
 * ]} DiffCliOptions
 */

/**
 * A single CLI option for the `diff` command.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {DiffCliOptions[number]} DiffCliOption
 */

/**
 * The types of the `diff` command options.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {Readonly<Record<DiffBooleanOptions[number], boolean>>} DiffOptionTypes
 */


// `rev-parse`

/**
 * Boolean-typed CLI option for the `rev-parse` command.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {readonly [
 *   'is-inside-work-tree', 
* ]} RevParseBooleanOptions
*/

/**
* The CLI options for the `rev-parse` command.
* 
* @since ${NEXT_VERSION}
* @typedef {readonly [
*  ...RevParseBooleanOptions, 
* ]} RevParseCliOptions
*/

/**
* A single CLI option for the `rev-parse` command.
* 
* @since ${NEXT_VERSION}
* @typedef {RevParseCliOptions[number]} RevParseCliOption
*/

/**
* The types of the `rev-parse` command options.
* 
* @since ${NEXT_VERSION}
* @typedef {Readonly<Record<RevParseBooleanOptions[number], boolean>>} RevParseOptionTypes
*/


// `tag`

/**
 * Array-typed CLI option for the `tag` command.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {readonly [
 *   'list', 
 * ]} TagArrayOptions
 */

/**
 * The CLI options for the `tag` command.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {readonly [...TagArrayOptions]} TagCliOptions
 */

/**
 * A single CLI option for the `tag` command.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {TagCliOptions[number]} TagCliOption
 */

/**
 * The types of the `tag` command options.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {Readonly<Record<TagArrayOptions[number], string[]>>} TagOptionTypes
 */