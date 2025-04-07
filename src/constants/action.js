/**
 * Constants for the abstract `Action` model.
 * Also serves as a model for defining the ones of a concrete implementation.
 * 
 * @since alpha-7.11.0
 */

import * as actionTypes from '../types/action.def.js';


// Configuration keys
// Optional

/**
 * The configuration for sub-actions.
 * 
 * @since alpha-7.11.0
 */
export const SUB_ACTIONS_CONFIG_KEY = 'subActionsConfig';

// Defaulted

/**
 * If the action should be executed in `dry-run` mode.
 * 
 * @since alpha-7.11.0
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
 * @since alpha-7.11.0
 * @readonly
 * @see {@link actionTypes.DefaultConfigSchema}
 */
export const DEFAULT_CONFIG = Object.freeze({
    /**
     * @since alpha-7.11.0
     * @see {@link DRY_RUN_KEY}
     */
    [DRY_RUN_KEY]: false, 
});

/**
 * The mandatory configuration keys in the {@link actionTypes.ExecuteConfigSchema|`execute()` configuration object}.
 * Must contain all the mandatory configuration keys.
 * 
 * @since alpha-7.11.0
 * @readonly
 * @type {readonly actionTypes.ConfigKey[]}
 */
const REQUIRED_CONFIG_KEYS = Object.freeze([]);