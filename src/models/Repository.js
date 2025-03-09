/**
 * @since ${NEXT_VERSION}
 */
export default class Repository {
    /**
     * @see {@link Repository.path}
     * @protected
     * @type {string}
     */
    _path;

    /** @param {string} path See {@link Repository.path} */
    constructor(path) {
        this._path = path;
    };
    
    /**
     * The path of the repository.
     * 
     * @since ${NEXT_VERSION}
     * @readonly
     */
    get path() {
        return this._path;
    };
};