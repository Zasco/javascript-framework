import CommitMsg from './CommitMsg.js';
import SubjectLine from './CommitMsgSubjectLine.js';

/**
 * @since 0.0.4
 * @typedef {string | undefined} optionalStringComponent A string component of the {@link CommitMsg} that is optional.
 * 
 * @typedef {boolean | undefined} isBreakingChange A flag indicating whether the {@link Commit} is a breaking change or not. `undefined` for neither `true` nor `false`.
 * @typedef {optionalStringComponent} CommitMsgContentComponent A component of the {@link CommitMsgContent}.
 * @typedef {optionalStringComponent} CommitMsgBody The body of the {@link CommitMsg}.
 * @typedef {optionalStringComponent} CommitMsgFooter The footer of the {@link CommitMsg}.
 * @typedef {CommitMsgBody & CommitMsgFooter} CommitMsgContent The content of the {@link CommitMsg}.
 */

/**
 * @since 0.0.4
 * @typedef {{
 *   'hash': string, 
 *   'commitDate': Date, 
 *   'msg': CommitMsg, 
* }} CommitConstructorParams The required params to construct a {@link Commit} object.
*/


/**
 * Represents a Git commit implementing the `Conventional Commits` specification (https://www.conventionalcommits.org)
 * 
 * @since 0.0.4
 */
export default class Commit {
    /**
     * @since 0.0.4
     * @protected
     * @type {string}
     */
    _hash;

    /**
     * @since 0.0.4
     * @protected
     * @type {Date}
     */
    _commitDate;

    /**
     * @since 0.0.4
     * @protected
     * @type {CommitMsg}
     */
    _msg;

    /**
     * @param {CommitConstructorParams} params
     */
    constructor({hash, commitDate, msg}) {
        this._hash = hash;
        this._commitDate = commitDate;
        this._msg = msg;
    }

    /**
     * Returns the hash of the commit.
     * 
     * @since 0.0.4
     * @readonly
     */
    get hash() {
        return this._hash;
    }

    /**
     * Return the commit date of the commit.
     * 
     * @since 0.0.4
     * @readonly
     */
    get commitDate() {
        return this._commitDate;
    }

    /**
     * Returns the {@link SubjectLine.type} of the commit.
     * 
     * @since 0.0.4
     * @readonly
     */
    get type() {
        return this._msg.subjectLine.type;
    }

    /**
     * Returns if the commit {@link isBreakingChange}.
     * 
     * @since 0.0.4
     * @readonly
     */
    get isBreakingChange() {
        return this._msg.subjectLine.isBreakingChange;
    }

    /**
     * Returns the {@link SubjectLine.subject} of the commit.
     * 
     * @since 0.0.4
     * @readonly
     */
    get subject() {
        return this._msg.subjectLine.subject;
    }
}