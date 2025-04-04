/**
 * Type definitions for the `package.json` file.
 * 
 * @since alpha-7.10.0
 */

import { NAME_KEY, VERSION_KEY } from "../constants/package-json.js";

// [TODO] Make extend from base file name type (once available)...
/** @since alpha-7.10.0 */
type FileName = string;

// [TODO] Make extend from base JSON key type (once available)...
/** @since alpha-7.10.0 */
type KeyName = string;

/** @since alpha-7.10.0 */
type FieldValue = 
    | string 
    | boolean 
    | null
    | FieldValue[] 
    | { [key: string]: FieldValue }
;

/** @since alpha-7.10.0 */
export type Schema = {
    [NAME_KEY]: FieldValue, 
    [VERSION_KEY]: FieldValue, 
} & Record<KeyName, FieldValue>;

/**
 * The type of a `package.json` file.
 * 
 * @since alpha-3.0.0
 * @deprecated alpha-7.10.0; Will be removed in `alpha-8.0.0`. Use {@link Schema} instead.
 */
export type PackageJson = Schema;