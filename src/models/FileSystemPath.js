import ErrorUtils from '../utils/ErrorUtils.js';
import TypeUtils from '../utils/TypeUtils.js';

import JSTYPES from '../constants/JSTypes.js';

/**
 * Represents a filesystem path as an object for type-safe operations.
 * 
 * @since ${NEXT_VERSION}
 */
export class FileSystemPath {
    /**
     * The path string.
     * 
     * @protected
     * @type {string}
     */
    _path;

    /** @param {string} pathString A path string */
    constructor(pathString) {
        if (!TypeUtils.isString(pathString)) throw ErrorUtils.getStdTypeMismatchErr(JSTYPES.STRING, pathString);

        this._path = pathString;
    }

    /**
     * Returns the string representation.
     * 
     * @since ${NEXT_VERSION}
     * @returns {string}
     */
    toString() {
        return this._path;
    }
}