/**
 * The available commands with `npm`.
 * 
 * @since alpha-5.0.0
 * @typedef {['version']} CommandsType
 */

/**
 * A single command.
 * 
 * @since alpha-5.0.0
 * @typedef {CommandsType[number]} CommandType
 */

/**
 * The available version bump types.
 * 
 * Verified with version `11.2.0` and likely compatible with `^11.0.0`.
 * 
 * @since alpha-5.0.0
 * @typedef {readonly [
 *  'major', 
 *  'minor', 
 *  'patch', 
 *  'premajor', 
 *  'preminor', 
 *  'prepatch', 
 *  'prerelease', 
 *  'from-git', 
 * ]} VersionBumpTypes
 */

/**
 * A single version bump type.
 * 
 * @since alpha-5.0.0
 * @typedef {VersionBumpTypes[number]} VersionBumpType
 */

/**
 * Boolean-typed CLI `version` options.
 * 
 * @since alpha-5.0.0
 * @typedef {[
 *   'no-git-tag-version', 
 * ]} VersionBooleanOptions
 */

/**
 * The CLI options for command `version`.
 * 
 * Verified with version `11.2.0` and likely compatible with `^11.0.0`.
 * 
 * @since alpha-5.0.0
 * @typedef {[
 *  ...VersionBooleanOptions, 
 * ]} VersionCliOptions
 */

/**
 * A single CLI option for command `version`.
 * 
 * @since alpha-5.0.0
 * @typedef {VersionCliOptions[number]} VersionCliOption
 */

 /**
 * The types of the options.
 * 
 * @since alpha-5.0.0
 * @typedef {Record<VersionBooleanOptions[number], boolean>} VersionOptionTypes
 */