/**
 * Utility type definitions.
 * 
 * @since 0.0.6
 */

/**
 * Makes all properties in `T` mutable (removes `readonly`). Top-level only.
 * 
 * @since 0.0.6
 * @template T
 * @typedef {{-readonly [K in keyof T]: T[K]}} Mutable
 */