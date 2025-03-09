/** 
 * @typedef {(import('./Commit.js').optionalStringComponent)} optionalStringComponent
 * @typedef {(import('./Commit.js').isBreakingChange)} isBreakingChange
 */

/**
 * @since 0.0.3
 */
export default class CommitMessageSubjectLine {
    /**
     * @see {@link CommitMessageSubjectLine.type}
     * @protected
     * @type {optionalStringComponent}
     */
    _type;
    /**
     * @see {@link CommitMessageSubjectLine.scope}
     * @protected
     * @type {optionalStringComponent}
     */
    _scope;
    /**
     * @see {@link CommitMessageSubjectLine.isBreakingChange}
     * @protected
     * @type {isBreakingChange}
     */
    _isBreakingChange;
    /**
     * @see {@link CommitMessageSubjectLine.subject}
     * @protected
     * @type {string}
     */
    _subject;

    /**
     * @param {string} subject See {@link CommitMessageSubjectLine.subject}
     * @param {optionalStringComponent} [type] See {@link CommitMessageSubjectLine.type}
     * @param {optionalStringComponent} [scope] See {@link CommitMessageSubjectLine.scope}
     * @param {isBreakingChange} [isBreakingChange] See {@link CommitMessageSubjectLine.isBreakingChange}
     */
    constructor(subject, type = undefined, scope = undefined, isBreakingChange = undefined) {
        this._type = type;
        this._scope = scope;
        this._isBreakingChange = isBreakingChange;
        this._subject = subject;
    }

    /**
     * The type of the {@link CommitMessageSubjectLine}.
     * 
     * @since 0.0.3
     * @readonly
     */
    get type() {
        return this._type;
    }

    /**
     * The scope of the {@link CommitMessageSubjectLine}.
     * 
     * @since 0.0.3
     * @readonly
     */
    get scope() {
        return this._scope;
    }

    /**
     * The breaking change status of the {@link CommitMessageSubjectLine}.
     * 
     * @since 0.0.3
     * @readonly
     */
    get isBreakingChange() {
        return this._isBreakingChange;
    }

    /**
     * The subject of the {@link CommitMessageSubjectLine}.
     * 
     * @since 0.0.3
     * @readonly
     */
    get subject() {
        return this._subject;
    }
    
    /**
     * Returns the string representation of the {@link CommitMessageSubjectLine}.
     * 
     * @since 0.0.3
     * @return {string}
     */
    toString() {
        const scopePart = this.scope 
            ? `(${this.scope})` 
            : ''
        ;
        const breakingPart = this.isBreakingChange 
            ? '!' 
            : ''
        ;
        const metaPart = this.type 
            ? this.type + scopePart + breakingPart +': ' 
            : ''
        ;
        return `${metaPart}${this.subject}`;
    }
    
    /**
     * The length of the {@link CommitMessageSubjectLine}.
     * 
     * @since 0.0.3
     * @readonly
     * @type {number}
     */
    get length() {
        return this.toString().length;
    }
}