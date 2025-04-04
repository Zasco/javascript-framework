import * as types from './types.js';
import * as constants from './constants.js';
import * as traits from './traits.js';
import TypeUtils from '../../src/utils/TypeUtils.js';

export {
    /** @since alpha-5.0.0 */
    types, 
    /** @since alpha-5.0.0 */
    constants, 
    /** @since alpha-5.0.0 */
    traits, 
    /** @since alpha-5.0.0 */
    TypeUtils, 
};


/**
 * @since alpha-6.0.0
 * @see {@link SPECIAL_CHARS_CONSTANTS}
 */
export const SPECIAL_CHARS = constants.SPECIAL_CHARS;

/**
 * @since alpha-5.0.0
 * @see {@link JS_TYPES_CONSTANTS}
 */
export const JS_TYPES = constants.JS_TYPES;

/**
 * @since alpha-6.0.0
 * @see {@link EXPANDED_JS_TYPES_CONSTANTS}
 */
export const EXPANDED_JS_TYPES = constants.EXPANDED_JS_TYPES;

/**
 * @since alpha-5.0.0
 * @deprecated alpha-6.0.0; Will be removed in `alpha-8.0.0`; Use {@link expandedJsTypesConstants} instead
 * @see {@link EXPANDED_JS_TYPES_CONSTANTS}
 */
export const EXPANDED_TYPES = constants.EXPANDED_JS_TYPES;