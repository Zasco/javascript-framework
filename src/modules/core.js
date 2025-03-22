import AbstractClassTrait from '../traits/AbstractClassTrait.js';
import SingletonTrait from '../traits/SingletonTrait.js';

import * as expandedTypes from '../constants/expanded-types.js';
import * as SPECIAL_CHARS from '../constants/special-chars.js';
import JS_TYPES from '../constants/js-types.js';
import EXPANDED_TYPES from '../constants/expanded-types.js';
import TypeUtils from '../utils/TypeUtils.js';


// [NOTE] Here will also be the anticipated StringUtils.
export { SPECIAL_CHARS, JS_TYPES, EXPANDED_TYPES, TypeUtils };

export const types = {
    expandedTypes, 
}

export const constants = {
  JS_TYPES,
  EXPANDED_TYPES
}

export const traits = {
  AbstractClassTrait,
  SingletonTrait
}