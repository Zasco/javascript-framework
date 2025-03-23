
import AbstractClassTrait from '../traits/AbstractClassTrait.js';
import SingletonTrait from '../traits/SingletonTrait.js';

import * as expandedJsTypes from '../types/expanded-js-types.js';

import * as SPECIAL_CHARS from '../constants/special-chars.js';
import * as JS_TYPES from '../constants/js-types.js';
import * as EXPANDED_JS_TYPES from '../constants/expanded-js-types.js';

import TypeUtils from '../utils/TypeUtils.js';


// [NOTE] Here will also be the anticipated StringUtils.
export { 
  SPECIAL_CHARS, 
  JS_TYPES, 
  EXPANDED_JS_TYPES, 
  
  TypeUtils, 

  /** @deprecated ${NEXT_VERSION} Use {@link EXPANDED_JS_TYPES} instead */
  EXPANDED_JS_TYPES as EXPANDED_TYPES, 
}

export const types = {
  expandedJsTypes, 
  
  /** @deprecated ${NEXT_VERSION} Use {@link expandedJsTypes} instead */
  expandedTypes: expandedJsTypes, 
}

export const constants = {
  JS_TYPES,
  EXPANDED_JS_TYPES, 

  /** @deprecated ${NEXT_VERSION} Use {@link EXPANDED_JS_TYPES} instead */
  EXPANDED_TYPES: EXPANDED_JS_TYPES, 
}

export const traits = {
  AbstractClassTrait,
  SingletonTrait
}