import JS_TYPES from './js-types.js';

/**
 * The type of a `class instance` object.
 * 
 * @since 0.0.3
 * @typedef {Object} ClassInstanceObject
 */

/**
 * The type of a `class` function.
 * 
 * @since 0.0.3
 * @typedef {Function} ClassFunction
 */

/**
 * Constants representing expanded JavaScript data types with values dynamically derived of {@link EXPANDED_TYPES}.
 * 
 * @since 0.0.3
 * @type {{
*   'CLASS_INSTANCE_OBJECT': string, 
*   'CLASS_FUNCTION': string, 
* }}
*/
const EXPANDED_TYPES = {
   CLASS_INSTANCE_OBJECT: `class instance ${JS_TYPES.OBJECT}`, 
   CLASS_FUNCTION: `class ${JS_TYPES.FUNCTION}`,
};

export default Object.freeze(EXPANDED_TYPES);