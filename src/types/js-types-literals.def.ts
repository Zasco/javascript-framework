/**
 * Type definitions for JavaScript type literals.
 * These types represent the string literals returned by the JavaScript `typeof` operator.
 * 
 * @since alpha-6.0.0
 */

/** 
 * @since alpha-6.0.0
 */
export type String = 'string';

/** 
 * @since alpha-6.0.0
 */
export type Number = 'number';

/** 
 * @since alpha-6.0.0
 */
export type Boolean = 'boolean';

/** 
 * @since alpha-6.0.0
 */
export type Object = 'object';

/** 
 * @since alpha-6.0.0
 */
export type Undefined = 'undefined';

/** 
 * @since alpha-6.0.0
 */
export type Function = 'function';

/** 
 * @since alpha-6.0.0
 */
export type Symbol = 'symbol';

/** 
 * @since alpha-6.0.0
 */
export type BigInt = 'bigint';

/** 
 * @since alpha-6.0.0
 * @description This is 'object' due to a historical quirk in JavaScript where `typeof null` returns this value.
 */
export type Null = 'object';
