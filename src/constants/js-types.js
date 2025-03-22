import * as JsTypesLiterals from '../types/js-types-literals.js';

/**
 * Constants representing JavaScript data types with values dynamically derived using `typeof` operations.
 * 
 * @since 0.0.3
 * @type {{
 *   STRING: JsTypesLiterals.String, 
 *   NUMBER: JsTypesLiterals.Number, 
 *   BOOLEAN: JsTypesLiterals.Boolean, 
 *   OBJECT: JsTypesLiterals.Object, 
 *   UNDEFINED: JsTypesLiterals.Undefined, 
 *   FUNCTION: JsTypesLiterals.Function, 
 *   SYMBOL: JsTypesLiterals.Symbol, 
 *   BIGINT: JsTypesLiterals.BigInt, 
 *   NULL: JsTypesLiterals.Null
 * }}
 */
const JS_TYPES = {
    STRING: typeof String(), 
    NUMBER: typeof Number(), 
    BOOLEAN: typeof Boolean(), 
    OBJECT: typeof {}, 
    UNDEFINED: typeof undefined, 
    FUNCTION: typeof function(){}, 
    SYMBOL: typeof Symbol(), 
    BIGINT: typeof BigInt(0), 
    NULL: typeof null, /** Same as `OBJECT` */
};

export default Object.freeze(JS_TYPES);