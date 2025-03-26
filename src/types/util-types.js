/**
 * Utility type definitions.
 * 
 * @since alpha-6.0.0
 */

/**
 * Makes all properties in `T` mutable (removes `readonly`). Top-level only.
 * 
 * @since alpha-6.0.0
 * @template T
 * @typedef {{-readonly [K in keyof T]: T[K]}} Mutable
 */