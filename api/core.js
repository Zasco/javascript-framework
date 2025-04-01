import AbstractClassTrait from '../src/traits/AbstractClassTrait.js';
import SingletonTrait from '../src/traits/SingletonTrait.js';

import * as expandedJsTypes from '../src/types/js/expanded-js-types.js';

import * as SPECIAL_CHARS from '../src/constants/special-chars.js';
import * as JS_TYPES from '../src/constants/js-types.js';
import * as EXPANDED_JS_TYPES from '../src/constants/expanded-js-types.js';

import TypeUtils from '../src/utils/TypeUtils.js';


// [NOTE] Here will also be the anticipated StringUtils.
export { 
  /** @since alpha-6.0.0 */
  SPECIAL_CHARS, 
  /** @since alpha-5.0.0 */
  JS_TYPES, 
  /** @since alpha-6.0.0 */
  EXPANDED_JS_TYPES, 
  
  TypeUtils, 

  /**
   * @since alpha-5.0.0
   * @deprecated alpha-6.0.0; Will be removed in `alpha-8.0.0`; Use {@link EXPANDED_JS_TYPES} instead
   */
  EXPANDED_JS_TYPES as EXPANDED_TYPES, 
}

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
  JS_TYPES,
  /** @since alpha-6.0.0 */
  EXPANDED_JS_TYPES, 

  /**
   * @since alpha-5.0.0
   * @deprecated alpha-6.0.0 Use {@link EXPANDED_JS_TYPES} instead
   */
  EXPANDED_TYPES: EXPANDED_JS_TYPES, 
}

/** @since alpha-5.0.0 */
export const traits = {
  /** @since alpha-5.0.0 */
  AbstractClassTrait, 
  /** @since alpha-5.0.0 */
  SingletonTrait, 
}