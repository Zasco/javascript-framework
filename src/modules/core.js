import AbstractClassTrait from '../traits/AbstractClassTrait.js';
import SingletonTrait from '../traits/SingletonTrait.js';

import * as expandedJsTypes from '../types/expanded-js-types.js';

import * as SPECIAL_CHARS from '../constants/special-chars.js';
import * as JS_TYPES from '../constants/js-types.js';
import * as EXPANDED_JS_TYPES from '../constants/expanded-js-types.js';

import TypeUtils from '../utils/TypeUtils.js';


// [NOTE] Here will also be the anticipated StringUtils.
export { 
  /** @since 0.0.6 */
  SPECIAL_CHARS, 
  /** @since 0.0.5 */
  JS_TYPES, 
  /** @since 0.0.6 */
  EXPANDED_JS_TYPES, 
  
  TypeUtils, 

  /**
   * @since 0.0.5
   * @deprecated 0.0.6 Use {@link EXPANDED_JS_TYPES} instead
   */
  EXPANDED_JS_TYPES as EXPANDED_TYPES, 
}

/** @since 0.0.5 */
export const types = {
  /** @since 0.0.6 */
  expandedJsTypes, 
  
  /**
   * @since 0.0.5
   * @deprecated 0.0.6 Use {@link expandedJsTypes} instead
   */
  expandedTypes: expandedJsTypes, 
}

/** @since 0.0.5 */
export const constants = {
  /** @since 0.0.5 */
  JS_TYPES,
  /** @since 0.0.6 */
  EXPANDED_JS_TYPES, 

  /**
   * @since 0.0.5
   * @deprecated 0.0.6 Use {@link EXPANDED_JS_TYPES} instead
   */
  EXPANDED_TYPES: EXPANDED_JS_TYPES, 
}

/** @since 0.0.5 */
export const traits = {
  /** @since 0.0.5 */
  AbstractClassTrait, 
  /** @since 0.0.5 */
  SingletonTrait, 
}