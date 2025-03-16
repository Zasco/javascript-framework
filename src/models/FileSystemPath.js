import { Utils as TypeUtils } from 'javascript-framework/module/types';
import { Utils as ErrorUtils } from 'javascript-framework/module/error';

import JS_TYPES from '../constants/js-types.js';

/**
 * Represents a filesystem path as an object for type-safe operations.
 * 
 * @since 0.0.3
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
     * @since 0.0.3
     * @returns {string}
     */
    toString() {
        return this._path;
    }
}