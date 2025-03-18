/**
 * The available commands with `npm`.
 * 
 * @since {NEXT_VERSION}
 * @typedef {['version']} CommandsType
 */

/**
 * A single command.
 * 
 * @since 0.0.5
 * @typedef {CommandsType[number]} CommandType
 */

/**
 * The available version bump types.
 * 
 * Verified with version `11.2.0` and likely compatible with `^11.0.0`.
 * 
 * @since {NEXT_VERSION}
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
 * @since 0.0.5
 * @typedef {VersionBumpTypes[number]} VersionBumpType
 */

/**
 * Boolean-typed CLI `version` options.
 * 
 * @since 0.0.5
 * @typedef {[
 *   'no-git-tag-version', 
 * ]} VersionBooleanOptions
 */

/**
 * The CLI options for command `version`.
 * 
 * Verified with version `11.2.0` and likely compatible with `^11.0.0`.
 * 
 * @since 0.0.5
 * @typedef {[
 *  ...VersionBooleanOptions, 
 * ]} VersionCliOptions
 */

/**
 * A single CLI option for command `version`.
 * 
 * @since 0.0.5
 * @typedef {VersionCliOptions[number]} VersionCliOption
 */

 /**
 * The types of the options.
 * 
 * @since 0.0.5
 * @typedef {Record<VersionBooleanOptions[number], boolean>} VersionOptionTypes
 */