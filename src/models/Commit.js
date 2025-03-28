/**
 * @since alpha-3.0.0
 * @typedef {{
 *   'hash'?: string, 
 *   'commitDate'?: Date, 
 *   'msg'?: string, 
* }} CommitConstructorParams The required params to construct a {@link Commit} object.
*/


/**
 * Represents a git commit.
 * 
 * @since alpha-3.0.0
 */
export default class Commit {
    /**
     * @see {@link Commit.hash}
     * @protected
     * @type {string | undefined}
     */
    _hash;

    /**
     * @see {@link Commit.commitDate}
     * @protected
     * @type {Date | undefined}
     */
    _commitDate;

    /**
     * @see {@link Commit.msg}
     * @protected
     * @type {string | undefined}
     */
    _msg;

    /** @param {CommitConstructorParams} params */
    constructor({hash, commitDate, msg}) {
        this._hash = hash;
        this._commitDate = commitDate;
        this._msg = msg;
    }

    /**
     * The hash of the commit.
     * 
     * @since alpha-3.0.0
     * @readonly
     */
    get hash() {
        return this._hash;
    }

    /**
     * The commit date of the commit.
     * 
     * @since alpha-3.0.0
     * @readonly
     */
    get commitDate() {
        return this._commitDate;
    }

    /**
     * The message of the commit.
     * 
     * @since alpha-4.0.0
     * @readonly
     */
    get msg() {
        return this._msg;
    }
}