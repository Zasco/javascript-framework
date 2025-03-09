import CommitMsg from './CommitMsg.js';
import SubjectLine from './CommitMsgSubjectLine.js';

/**
 * @since ${NEXT_VERSION}
 * @typedef {string | undefined} optionalStringComponent A string component of the {@link CommitMsg} that is optional.
 * 
 * @typedef {boolean | undefined} isBreakingChange A flag indicating whether the {@link Commit} is a breaking change or not. `undefined` for neither `true` nor `false`.
 * @typedef {optionalStringComponent} CommitMsgContentComponent A component of the {@link CommitMsgContent}.
 * @typedef {optionalStringComponent} CommitMsgBody The body of the {@link CommitMsg}.
 * @typedef {optionalStringComponent} CommitMsgFooter The footer of the {@link CommitMsg}.
 * @typedef {CommitMsgBody & CommitMsgFooter} CommitMsgContent The content of the {@link CommitMsg}.
 */

/**
 * @since ${NEXT_VERSION}
 * @typedef {{
 *   'hash': string, 
 *   'commitDate': Date, 
 *   'msg': CommitMsg, 
* }} CommitConstructorParams The required params to construct a {@link Commit} object.
*/


/**
 * Represents a git commit implementing the `Conventional Commits` specification (https://www.conventionalcommits.org)
 * 
 * @since ${NEXT_VERSION}
 */
export default class Commit {
    /**
     * @see {@link Commit.hash}
     * @protected
     * @type {string}
     */
    _hash;

    /**
     * @see {@link Commit.commitDate}
     * @protected
     * @type {Date}
     */
    _commitDate;

    /**
     * @see {@link Commit.msg}
     * @protected
     * @type {CommitMsg}
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
     * @since ${NEXT_VERSION}
     * @readonly
     */
    get hash() {
        return this._hash;
    }

    /**
     * The commit date of the commit.
     * 
     * @since ${NEXT_VERSION}
     * @readonly
     */
    get commitDate() {
        return this._commitDate;
    }

    /**
     * The {@link SubjectLine.type} of the commit.
     * 
     * @since ${NEXT_VERSION}
     * @readonly
     */
    get type() {
        return this._msg.subjectLine.type;
    }

    /**
     * If the commit {@link isBreakingChange}.
     * 
     * @since ${NEXT_VERSION}
     * @readonly
     */
    get isBreakingChange() {
        return this._msg.subjectLine.isBreakingChange;
    }

    /**
     * Returns the {@link SubjectLine.subject} of the commit.
     * 
     * @since ${NEXT_VERSION}
     * @readonly
     */
    get subject() {
        return this._msg.subjectLine.subject;
    }
}