import * as npmTypes from '../types/npm-types.js';


// Commands

/**
 * The supported commands for `npm`.
 * 
 * @since 0.0.5
 * @see {@link npmTypes.CommandsType}
 * @readonly
 * @type {Object<string, npmTypes.CommandType>}
 */
export const COMMANDS = Object.freeze({
    VERSION: 'version', 
});


// Version options

/**
 * The CLI options for command `version`.
 * 
 * @since 0.0.5
 * @see {@link npmTypes.VersionCliOptions}
 * @readonly
 * @type {Object<string, npmTypes.VersionCliOption>}
 */
export const VERSION_OPTIONS = Object.freeze({
    NO_GIT_TAG_VERSION: 'no-git-tag-version', 
});

/**
 * The version bump types for `npm version`.
 * 
 * @since 0.0.5
 * @see {@link npmTypes.VersionBumpTypes}
 * @readonly
 * @type {npmTypes.VersionBumpTypes}
 */
export const VERSION_BUMP_TYPES = Object.freeze([
    'major', 
    'minor', 
    'patch', 
    'premajor', 
    'preminor', 
    'prepatch', 
    'prerelease', 
    'from-git', 
]);