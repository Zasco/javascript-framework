/**
 * Type definitions for the `package.json` file.
 * 
 * @since ${NEXT_VERSION}
 */

import { DEFAULT_NAME_KEY, DEFAULT_VERSION_KEY } from "../constants/package-json.js";

// [TODO] Make extend from base file name type (once available)...
/** @since ${NEXT_VERSION} */
type FileName = string;

// [TODO] Make extend from base JSON key type (once available)...
/** @since ${NEXT_VERSION} */
type KeyName = string;

/** @since ${NEXT_VERSION} */
type FieldValue = string;

/** @since ${NEXT_VERSION} */
export type Schema = {
    [DEFAULT_NAME_KEY]: FieldValue, 
    [DEFAULT_VERSION_KEY]: FieldValue, 
} & Record<KeyName, FieldValue>;

/**
 * The type of a `package.json` file.
 * 
 * @since alpha-3.0.0
 * @deprecated ${NEXT_VERSION}; Will be removed in `alpha-8.0.0`. Use {@link Schema} instead.
 */
export type PackageJson = Schema;