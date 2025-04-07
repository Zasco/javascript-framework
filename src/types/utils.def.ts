/**
 * Utility type definitions.
 * 
 * @since alpha-7.11.0
 */

/**
 * Makes all properties in `T` mutable (removes `readonly`).
 * Top-level only.
 * 
 * @since alpha-7.11.0
 */
export type Mutable<T> = {
    -readonly [K in keyof T]: T[K]
};

/**
 * Converts boolean literal types to the wider `boolean` type.
 * Top-level only.
 * 
 * @since alpha-7.11.0
 */
export type WidenBoolean<T> = T extends boolean ? boolean : T;

/**
 * Converts string literal types to the wider `string` type.
 * Top-level only.
 * 
 * @since alpha-7.11.0
 */
export type WidenString<T> = T extends string ? string : T;

/**
 * Applies both {@link WidenBoolean} and {@link WidenString} to all properties in an object type.
 * Top-level only.
 * 
 * @since alpha-7.11.0
 */
export type WidenLiterals<T> = {
    [K in keyof T]: WidenBoolean<WidenString<T[K]>>;
};