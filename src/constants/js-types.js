/**
 * Constants representing JavaScript type identifiers with values dynamically derived using `typeof` operations.
 * 
 * @since alpha-3.0.0
 */

import * as JsTypesLiterals from '../types/js-types-literals.js';

/** @since alpha-3.0.0 */
export const STRING = /** @type {JsTypesLiterals.String} */ (typeof String());

/** @since alpha-3.0.0 */
export const NUMBER = /** @type {JsTypesLiterals.Number} */ (typeof Number());

/** @since alpha-3.0.0 */
export const BOOLEAN = /** @type {JsTypesLiterals.Boolean} */ (typeof Boolean());

/** @since alpha-3.0.0 */
export const OBJECT = /** @type {JsTypesLiterals.Object} */ (typeof {});

/** @since alpha-3.0.0 */
export const UNDEFINED = /** @type {JsTypesLiterals.Undefined} */ (typeof undefined);

/** @since alpha-3.0.0 */
export const FUNCTION = /** @type {JsTypesLiterals.Function} */ (typeof function(){});

/** @since alpha-3.0.0 */
export const SYMBOL = /** @type {JsTypesLiterals.Symbol} */ (typeof Symbol());

/** @since alpha-3.0.0 */
export const BIGINT = /** @type {JsTypesLiterals.BigInt} */ (typeof BigInt(0));

/** @since alpha-3.0.0 */
export const NULL = /** @type {JsTypesLiterals.Null} */ (typeof null);


// Deprecated

/**
 * All JavaScript types.
 * 
 * @since alpha-3.0.0
 * @deprecated Use individual named exports instead
 * @readonly
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
const JS_TYPES = Object.freeze({
  STRING,
  NUMBER,
  BOOLEAN,
  OBJECT,
  UNDEFINED,
  FUNCTION,
  SYMBOL,
  BIGINT,
  NULL,
});

export default JS_TYPES;