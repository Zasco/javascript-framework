/**
 * Utility type definitions.
 * 
 * @since ${NEXT_VERSION}
 */

/**
 * Makes all properties in `T` mutable (removes `readonly`). Top-level only.
 * 
 * @since ${NEXT_VERSION}
 */
export type Mutable<T> = {
    -readonly [K in keyof T]: T[K]
};