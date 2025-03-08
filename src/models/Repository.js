/**
 * @since 0.0.2
 */
export default class Repository {
    /**
     * The path of the repository.
     * 
     * @since 0.0.2
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
     * @since 0.0.2
     * @readonly
     * @returns {string}
     */
    get path() {
        return this._path;
    };
};