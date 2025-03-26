/**
 * Types for the `Git` command line tool.
 * 
 * Verified with version `2.43.0` and likely compatible with `^2.0.0`.
 * 
 * @since 0.0.6
 */

// Commands

/**
 * The available commands.
 * 
 * @since 0.0.6
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
 * @since 0.0.6
 * @typedef {Commands[number]} Command
 */


// Subcommands

// `add`

/**
 * Boolean-typed CLI option for the `add` command.
 * 
 * @since 0.0.6
 * @typedef {readonly [
*   'all', 
* ]} AddBooleanOptions
*/

/**
 * The CLI options for the `add` command.
 * 
 * @since 0.0.6
 * @typedef {readonly [
*  ...AddBooleanOptions, 
* ]} AddCliOptions
*/

/**
* A single CLI option for the `add` command.
* 
* @since 0.0.6
* @typedef {AddCliOptions[number]} AddCliOption
*/

/**
* The types of the `add` command options.
* 
* @since 0.0.6
* @typedef {Readonly<Record<AddBooleanOptions[number], boolean>>} AddOptionTypes
*/


// `commit`

/**
 * String-typed CLI option for the `commit` command.
 * 
 * @since 0.0.6
 * @typedef {readonly [
 *   'message', 
 * ]} CommitStringOptions
 */

/**
 * The CLI options for the `commit` command.
 * 
 * @since 0.0.6
 * @typedef {readonly [
 *  ...CommitStringOptions, 
 * ]} CommitCliOptions
 */

/**
 * A single CLI option for the `commit` command.
 * 
 * @since 0.0.6
 * @typedef {CommitCliOptions[number]} CommitCliOption
 */

/**
 * The types of the `commit` command options.
 * 
 * @since 0.0.6
 * @typedef {Readonly<Record<CommitStringOptions[number], string>>} CommitOptionTypes
 */


// `diff`

/**
 * Boolean-typed CLI option for the `diff` command.
 * 
 * @since 0.0.6
 * @typedef {readonly [
 *   'cached', 
 *   'name-only', 
 * ]} DiffBooleanOptions
 */

/**
 * The CLI options for the `diff` command.
 * 
 * @since 0.0.6
 * @typedef {readonly [
 *  ...DiffBooleanOptions, 
 * ]} DiffCliOptions
 */

/**
 * A single CLI option for the `diff` command.
 * 
 * @since 0.0.6
 * @typedef {DiffCliOptions[number]} DiffCliOption
 */

/**
 * The types of the `diff` command options.
 * 
 * @since 0.0.6
 * @typedef {Readonly<Record<DiffBooleanOptions[number], boolean>>} DiffOptionTypes
 */


// `rev-parse`

/**
 * Boolean-typed CLI option for the `rev-parse` command.
 * 
 * @since 0.0.6
 * @typedef {readonly [
 *   'is-inside-work-tree', 
* ]} RevParseBooleanOptions
*/

/**
* The CLI options for the `rev-parse` command.
* 
* @since 0.0.6
* @typedef {readonly [
*  ...RevParseBooleanOptions, 
* ]} RevParseCliOptions
*/

/**
* A single CLI option for the `rev-parse` command.
* 
* @since 0.0.6
* @typedef {RevParseCliOptions[number]} RevParseCliOption
*/

/**
* The types of the `rev-parse` command options.
* 
* @since 0.0.6
* @typedef {Readonly<Record<RevParseBooleanOptions[number], boolean>>} RevParseOptionTypes
*/


// `tag`

/**
 * Array-typed CLI option for the `tag` command.
 * 
 * @since 0.0.6
 * @typedef {readonly [
 *   'list', 
 * ]} TagArrayOptions
 */

/**
 * The CLI options for the `tag` command.
 * 
 * @since 0.0.6
 * @typedef {readonly [...TagArrayOptions]} TagCliOptions
 */

/**
 * A single CLI option for the `tag` command.
 * 
 * @since 0.0.6
 * @typedef {TagCliOptions[number]} TagCliOption
 */

/**
 * The types of the `tag` command options.
 * 
 * @since 0.0.6
 * @typedef {Readonly<Record<TagArrayOptions[number], string[]>>} TagOptionTypes
 */