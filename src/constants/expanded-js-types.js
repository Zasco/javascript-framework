/**
 * Constants representing expanded JavaScript data types with values dynamically derived of {@link JS_TYPES}.
 * 
 * @since alpha-3.0.0
 */

import * as expandedJSTypes from '../types/expanded-js.def.js';
import * as JS_TYPES from './js-types.js';

/**
 * @since alpha-3.0.0
 * @type {expandedJSTypes.ClassInstanceObjectLiteral}
 */
export const CLASS_INSTANCE_OBJECT = `class-instance-${JS_TYPES.OBJECT}`;

/**
 * @since alpha-3.0.0
 * @type {expandedJSTypes.ClassFunctionLiteral}
 */
export const CLASS_FUNCTION = `class-${JS_TYPES.FUNCTION}`;


// Deprecated

/**
 * All expanded JavaScript types.
 * 
 * @since alpha-3.0.0
 * @deprecated Use individual named exports instead
 * @readonly
 * @type {{
 *   'CLASS_INSTANCE_OBJECT': expandedJSTypes.ClassInstanceObjectLiteral, 
 *   'CLASS_FUNCTION': expandedJSTypes.ClassFunctionLiteral, 
 * }}
 */
const EXPANDED_TYPES = Object.freeze({
   CLASS_INSTANCE_OBJECT, 
   CLASS_FUNCTION, 
});

export default EXPANDED_TYPES;