/**
 * Constants for the abstract `Action` model.
 * Also serves as a model for defining the ones of a concrete implementation.
 * 
 * @since ${NEXT_VERSION}
 */

import * as actionTypes from '../types/action.def.js';

// Configuration keys
// Defaulted
/**
 * @since ${NEXT_VERSION}
 * @readonly
 */
export const DRY_RUN_KEY = 'isDryRun';

// Mandatory
// None in base class.

/**
 * The default configuration object.
 * Must contain all the defaulted configuration keys.
 * 
 * @since ${NEXT_VERSION}
 * @readonly
 */
export const DEFAULT_CONFIG = Object.freeze({
    /**
     * If the action should be executed in `dry-run` mode.
     * 
     * @since ${NEXT_VERSION}
     */
    [DRY_RUN_KEY]: false, 
});

/**
 * The mandatory configuration keys in the {@link actionTypes.ExecuteConfigSchema|`execute()` configuration object}.
 * Must contain all the mandatory configuration keys.
 * 
 * @since ${NEXT_VERSION}
 * @readonly
 * @type {readonly actionTypes.ConfigKey[]}
 */
export const REQUIRED_CONFIG_KEYS = Object.freeze([]);