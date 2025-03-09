/**
 * @since ${NEXT_VERSION}
 */
export default class Repository {
    /**
     * The path of the repository.
     * 
     * @type {string}
     */
    _path;

    /**
     * @param {string} path The path of the repository.
     */
    constructor(path) {
        this._path = path;
    };
    
    /**
     * The path of the repository.
     * 
     * @since ${NEXT_VERSION}
     * @readonly
     * @returns {string}
     */
    get path() {
        return this._path;
    };
};