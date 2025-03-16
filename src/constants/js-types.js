/**
 * Constants representing JavaScript data types with values dynamically derived using `typeof` operations.
 * 
 * @since 0.0.3
 * @type {{
 *   'STRING': string, 
 *   'NUMBER': string, 
 *   'BOOLEAN': string, 
 *   'OBJECT': string, 
 *   'UNDEFINED': string, 
 *   'FUNCTION': string, 
 *   'SYMBOL': string, 
 *   'BIGINT': string, 
 *   'NULL': string, 
 * }}
 */
const JSTYPES = {
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

export default Object.freeze(JSTYPES);