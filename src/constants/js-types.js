/**
 * Constants representing JavaScript type identifiers with values dynamically derived using `typeof` operations.
 * 
 * @since 0.0.3
 */

import * as JsTypesLiterals from '../types/js-types-literals.js';

/** @since 0.0.3 */
export const STRING = /** @type {JsTypesLiterals.String} */ (typeof String());

/** @since 0.0.3 */
export const NUMBER = /** @type {JsTypesLiterals.Number} */ (typeof Number());

/** @since 0.0.3 */
export const BOOLEAN = /** @type {JsTypesLiterals.Boolean} */ (typeof Boolean());

/** @since 0.0.3 */
export const OBJECT = /** @type {JsTypesLiterals.Object} */ (typeof {});

/** @since 0.0.3 */
export const UNDEFINED = /** @type {JsTypesLiterals.Undefined} */ (typeof undefined);

/** @since 0.0.3 */
export const FUNCTION = /** @type {JsTypesLiterals.Function} */ (typeof function(){});

/** @since 0.0.3 */
export const SYMBOL = /** @type {JsTypesLiterals.Symbol} */ (typeof Symbol());

/** @since 0.0.3 */
export const BIGINT = /** @type {JsTypesLiterals.BigInt} */ (typeof BigInt(0));

/** @since 0.0.3 */
export const NULL = /** @type {JsTypesLiterals.Null} */ (typeof null);


// Deprecated

/**
 * All JavaScript types.
 * 
 * @since 0.0.3
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