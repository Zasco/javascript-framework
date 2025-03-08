import JSTypes from './JSTypes.js';

/**
 * @typedef {Object} ClassInstanceObject
 * @typedef {Function} ClassFunction
 */

/**
 * Constants representing expanded JavaScript data types with values dynamically derived of {@link EXPANDED_TYPES}.
 * 
 * @since ${NEXT_VERSION}
 * @type {{
*   'CLASS_INSTANCE_OBJECT': string, 
*   'CLASS_FUNCTION': string, 
* }}
*/
const EXPANDED_TYPES = {
   CLASS_INSTANCE_OBJECT: `class instance ${JSTypes.OBJECT}`, 
   CLASS_FUNCTION: `class ${JSTypes.FUNCTION}`,
};

export default Object.freeze(EXPANDED_TYPES);