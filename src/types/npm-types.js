/**
 * The available commands with `npm`.
 * 
 * @since {NEXT_VERSION}
 * @typedef {['version']} CommandsType
 */

/**
 * A single command.
 * 
 * @since ${NEXT_VERSION}
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
 * @since ${NEXT_VERSION}
 * @typedef {VersionBumpTypes[number]} VersionBumpType
 */

/**
 * Boolean-typed CLI `version` options.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {[
 *   'no-git-tag-version', 
 * ]} VersionBooleanOptions
 */

/**
 * The CLI options for command `version`.
 * 
 * Verified with version `11.2.0` and likely compatible with `^11.0.0`.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {[
 *  ...VersionBooleanOptions, 
 * ]} VersionCliOptions
 */

/**
 * A single CLI option for command `version`.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {VersionCliOptions[number]} VersionCliOption
 */

 /**
 * The types of the options.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {Record<VersionBooleanOptions[number], boolean>} VersionOptionTypes
 */