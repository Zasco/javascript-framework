/**
 * Types for the `Git` command line tool.
 * 
 * Verified with version `2.43.0` and likely compatible with `^2.0.0`.
 * 
 * @since alpha-6.0.0
 */

// Commands

/**
 * The available commands.
 * 
 * @since alpha-6.0.0
 */
export type Commands = readonly [
    'add',
    'commit',
    'diff',
    'push',
    'rev-parse',
    'tag',
    'version',
];

/**
 * A single command.
 * 
 * @since alpha-6.0.0
 */
export type Command = Commands[number];


// Subcommands

// `add`

/**
 * Boolean-typed CLI option for the `add` command.
 * 
 * @since alpha-6.0.0
 */
export type AddBooleanOptions = readonly [
    'all'
];

/**
 * The CLI options for the `add` command.
 * 
 * @since alpha-6.0.0
 */
export type AddCliOptions = readonly [
    ...AddBooleanOptions
];

/**
* A single CLI option for the `add` command.
* 
* @since alpha-6.0.0
 */
export type AddCliOption = AddCliOptions[number];

/**
* The types of the `add` command options.
* 
* @since alpha-6.0.0
 */
export type AddOptionTypes = Readonly<Record<AddBooleanOptions[number], boolean>>;


// `commit`

/**
 * String-typed CLI option for the `commit` command.
 * 
 * @since alpha-6.0.0
 */
export type CommitStringOptions = readonly [
    'message'
];

/**
 * The CLI options for the `commit` command.
 * 
 * @since alpha-6.0.0
 */
export type CommitCliOptions = readonly [
    ...CommitStringOptions
];

/**
 * A single CLI option for the `commit` command.
 * 
 * @since alpha-6.0.0
 */
export type CommitCliOption = CommitCliOptions[number];

/**
 * The types of the `commit` command options.
 * 
 * @since alpha-6.0.0
 */
export type CommitOptionTypes = Readonly<Record<CommitStringOptions[number], string>>;


// `diff`

/**
 * Boolean-typed CLI option for the `diff` command.
 * 
 * @since alpha-6.0.0
 */
export type DiffBooleanOptions = readonly [
    'cached',
    'name-only',
];

/**
 * The CLI options for the `diff` command.
 * 
 * @since alpha-6.0.0
 */
export type DiffCliOptions = readonly [
    ...DiffBooleanOptions
];

/**
 * A single CLI option for the `diff` command.
 * 
 * @since alpha-6.0.0
 */
export type DiffCliOption = DiffCliOptions[number];

/**
 * The types of the `diff` command options.
 * 
 * @since alpha-6.0.0
 */
export type DiffOptionTypes = Readonly<Record<DiffBooleanOptions[number], boolean>>;


// `rev-parse`

/**
 * Boolean-typed CLI option for the `rev-parse` command.
 * 
 * @since alpha-6.0.0
 */
export type RevParseBooleanOptions = readonly [
    'is-inside-work-tree'
];

/**
* The CLI options for the `rev-parse` command.
* 
* @since alpha-6.0.0
 */
export type RevParseCliOptions = readonly [
    ...RevParseBooleanOptions
];

/**
* A single CLI option for the `rev-parse` command.
* 
* @since alpha-6.0.0
 */
export type RevParseCliOption = RevParseCliOptions[number];

/**
* The types of the `rev-parse` command options.
* 
* @since alpha-6.0.0
 */
export type RevParseOptionTypes = Readonly<Record<RevParseBooleanOptions[number], boolean>>;


// `tag`

/**
 * Array-typed CLI option for the `tag` command.
 * 
 * @since alpha-6.0.0
 */
export type TagArrayOptions = readonly [
    'list'
];

/**
 * The CLI options for the `tag` command.
 * 
 * @since alpha-6.0.0
 */
export type TagCliOptions = readonly [...TagArrayOptions];

/**
 * A single CLI option for the `tag` command.
 * 
 * @since alpha-6.0.0
 */
export type TagCliOption = TagCliOptions[number];

/**
 * The types of the `tag` command options.
 * 
 * @since alpha-6.0.0
 */
export type TagOptionTypes = Readonly<Record<TagArrayOptions[number], string[]>>;