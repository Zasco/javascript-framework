import * as expandedTypes from '../types/expanded-types.js';

import JS_TYPES from './js-types.js';

/**
 * Constants representing expanded JavaScript data types with values dynamically derived of {@link EXPANDED_TYPES}.
 * 
 * @since 0.0.3
 * @type {{
*   'CLASS_INSTANCE_OBJECT': expandedTypes.ClassInstanceObjectLiteral, 
*   'CLASS_FUNCTION': expandedTypes.ClassFunctionLiteral, 
* }}
*/
const EXPANDED_TYPES = {
   CLASS_INSTANCE_OBJECT: `class-instance-${JS_TYPES.OBJECT}`, 
   CLASS_FUNCTION: `class-${JS_TYPES.FUNCTION}`,
};

export default Object.freeze(EXPANDED_TYPES);