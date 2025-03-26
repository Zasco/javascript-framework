/**
 * @since alpha-3.0.0
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
     * @since alpha-3.0.0
     * @readonly
     */
    get path() {
        return this._path;
    };
};