/**
 * Constants for the abstract `Action` model.
 * Also serves as a model for defining the ones of a concrete implementation.
 * 
 * @since ${NEXT_VERSION}
 */

import * as actionTypes from '../types/action.def.js';


// Configuration keys
// Optional

/**
 * The configuration for sub-actions.
 * 
 * @since ${NEXT_VERSION}
 */
export const SUB_ACTIONS_CONFIG_KEY = 'subActionsConfig';

// Defaulted

/**
 * If the action should be executed in `dry-run` mode.
 * 
 * @since ${NEXT_VERSION}
 * @see {@link DEFAULT_CONFIG.isDryRun}
 * @default DEFAULT_CONFIG.isDryRun
 */
export const DRY_RUN_KEY = 'isDryRun';

// Mandatory
// (None in base class)


/**
 * The default configuration object.
 * Must contain all the defaulted configuration keys.
 * 
 * @since ${NEXT_VERSION}
 * @readonly
 * @see {@link actionTypes.DefaultConfigSchema}
 */
export const DEFAULT_CONFIG = Object.freeze({
    /**
     * @since ${NEXT_VERSION}
     * @see {@link DRY_RUN_KEY}
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
const REQUIRED_CONFIG_KEYS = Object.freeze([]);