/**
 * Constants representing expanded JavaScript data types with values dynamically derived of {@link JS_TYPES}.
 * 
 * @since 0.0.3
 */

import * as expandedJSTypes from '../types/expanded-js-types.js';
import * as JS_TYPES from './js-types.js';

/**
 * @since 0.0.3
 * @type {expandedJSTypes.ClassInstanceObjectLiteral}
 */
export const CLASS_INSTANCE_OBJECT = `class-instance-${JS_TYPES.OBJECT}`;

/**
 * @since 0.0.3
 * @type {expandedJSTypes.ClassFunctionLiteral}
 */
export const CLASS_FUNCTION = `class-${JS_TYPES.FUNCTION}`;


// Deprecated

/**
 * All expanded JavaScript types.
 * 
 * @since 0.0.3
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