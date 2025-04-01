import AbstractClassTrait from '../src/traits/AbstractClassTrait.js';
import SingletonTrait from '../src/traits/SingletonTrait.js';

import * as expandedJsTypes from '../src/types/js/expanded-js-types.js';

import * as SPECIAL_CHARS_CONSTANTS from '../src/constants/special-chars.js';
import * as JS_TYPES_CONSTANTS from '../src/constants/js-types.js';
import * as EXPANDED_JS_TYPES_CONSTANTS from '../src/constants/expanded-js-types.js';

import TypeUtilsClass from '../src/utils/TypeUtils.js';

/**
 * @since alpha-6.0.0
 * @see {@link SPECIAL_CHARS_CONSTANTS}
 */
export const SPECIAL_CHARS = SPECIAL_CHARS_CONSTANTS;

/**
 * @since alpha-5.0.0
 * @see {@link JS_TYPES_CONSTANTS}
 */
export const JS_TYPES = JS_TYPES_CONSTANTS;

/**
 * @since alpha-6.0.0
 * @see {@link EXPANDED_JS_TYPES_CONSTANTS}
 */
export const EXPANDED_JS_TYPES = EXPANDED_JS_TYPES_CONSTANTS;

/**
 * @since alpha-5.0.0
 * @see {@link TypeUtilsClass}
 */
export const TypeUtils = TypeUtilsClass;

/**
 * @since alpha-5.0.0
 * @deprecated alpha-6.0.0; Will be removed in `alpha-8.0.0`; Use {@link expandedJsTypesConstants} instead
 * @see {@link EXPANDED_JS_TYPES_CONSTANTS}
 */
export const EXPANDED_TYPES = EXPANDED_JS_TYPES_CONSTANTS;

/** @since alpha-5.0.0 */
export const types = {
  /** @since alpha-6.0.0 */
  expandedJsTypes, 
  
  /**
   * @since alpha-5.0.0
   * @deprecated alpha-6.0.0; Will be removed in `alpha-8.0.0`; Use {@link expandedJsTypes} instead
   */
  expandedTypes: expandedJsTypes, 
}

/** @since alpha-5.0.0 */
export const constants = {
  /** @since alpha-5.0.0 */
  JS_TYPES: JS_TYPES_CONSTANTS,
  /** @since alpha-6.0.0 */
  EXPANDED_JS_TYPES: EXPANDED_JS_TYPES_CONSTANTS, 

  /**
   * @since alpha-5.0.0
   * @deprecated alpha-6.0.0 Use {@link EXPANDED_JS_TYPES_CONSTANTS} instead
   */
  EXPANDED_TYPES: EXPANDED_JS_TYPES_CONSTANTS, 
}

/** @since alpha-5.0.0 */
export const traits = {
  /** @since alpha-5.0.0 */
  AbstractClassTrait, 
  /** @since alpha-5.0.0 */
  SingletonTrait, 
}