/**
 * Utility type definitions.
 * 
 * @since ${NEXT_VERSION}
 */

/**
 * Makes all properties in `T` mutable (removes `readonly`). Top-level only.
 * 
 * @since ${NEXT_VERSION}
 * @template T
 * @typedef {{-readonly [K in keyof T]: T[K]}} Mutable
 */