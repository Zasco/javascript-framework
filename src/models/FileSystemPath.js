import { JS_TYPES, TypeUtils } from 'javascript-framework/module/core';
import { Utils as ErrorUtils } from 'javascript-framework/module/error';

/**
 * Represents a filesystem path as an object for type-safe operations.
 * 
 * @since alpha-3.0.0
 */
export default class FileSystemPath {
    /**
     * The path string.
     * 
     * @protected
     * @type {string}
     */
    _path;

    /** @param {string} pathString A path string */
    constructor(pathString) {
        // [TODO] Add validation for empty path string...
        // [TODO] Validation should be handled in a dedicated service instead of in models...
        if (!TypeUtils.isString(pathString)) throw ErrorUtils.getStdTypeMismatchErr(JS_TYPES.STRING, pathString);

        this._path = pathString;
    }

    /**
     * Returns the string representation.
     * 
     * @since alpha-3.0.0
     * @returns {string}
     */
    toString() {
        return this._path;
    }
}