/**
 * The available commands with `npm`.
 * 
 * @since alpha-5.0.0
 */
export type CommandsType = ['version'];

/**
 * A single command.
 * 
 * @since alpha-5.0.0
 */
export type CommandType = CommandsType[number];

/**
 * The available version bump types.
 * 
 * Verified with version `11.2.0` and likely compatible with `^11.0.0`.
 * 
 * @since alpha-5.0.0
 */
export type VersionBumpTypes = readonly [
    'major',
    'minor',
    'patch',
    'premajor',
    'preminor',
    'prepatch',
    'prerelease',
    'from-git',
];

/**
 * A single version bump type.
 * 
 * @since alpha-5.0.0
 */
export type VersionBumpType = VersionBumpTypes[number];

/**
 * Boolean-typed CLI `version` options.
 * 
 * @since alpha-5.0.0
 */
export type VersionBooleanOptions = [
    'no-git-tag-version'
];

/**
 * The CLI options for command `version`.
 * 
 * Verified with version `11.2.0` and likely compatible with `^11.0.0`.
 * 
 * @since alpha-5.0.0
 */
export type VersionCliOptions = [
    ...VersionBooleanOptions
];

/**
 * A single CLI option for command `version`.
 * 
 * @since alpha-5.0.0
 */
export type VersionCliOption = VersionCliOptions[number];

 /**
 * The types of the options.
 * 
 * @since alpha-5.0.0
 */
export type VersionOptionTypes = Record<VersionBooleanOptions[number], boolean>;