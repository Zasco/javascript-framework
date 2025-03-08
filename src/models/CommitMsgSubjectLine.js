/** 
 * @typedef {(import('./Commit.js').optionalStringComponent)} optionalStringComponent
 * @typedef {(import('./Commit.js').isBreakingChange)} isBreakingChange
 */

/**
 * @since 0.0.4
 */
export default class CommitMessageSubjectLine {
    /**
     * @since 0.0.4
     * @type {optionalStringComponent}
     */
    _type;
    /**
     * @since 0.0.4
     * @type {optionalStringComponent}
     */
    _scope;
    /**
     * @since 0.0.4
     * @type {isBreakingChange}
     */
    _isBreakingChange;
    /**
     * @since 0.0.4
     * @type {string}
     */
    _subject;

    /**
     * @param {string} subject
     * @param {optionalStringComponent} [type]
     * @param {optionalStringComponent} [scope]
     * @param {isBreakingChange} [isBreakingChange]
     */
    constructor(subject, type = undefined, scope = undefined, isBreakingChange = undefined) {
        this._type = type;
        this._scope = scope;
        this._isBreakingChange = isBreakingChange;
        this._subject = subject;
    }

    /**
     * @since 0.0.4
     * @readonly
     */
    get type() {
        return this._type;
    }

    /**
     * @since 0.0.4
     * @readonly
     */
    get scope() {
        return this._scope;
    }

    /**
     * @since 0.0.4
     * @readonly
     */
    get isBreakingChange() {
        return this._isBreakingChange;
    }

    /**
     * @since 0.0.4
     * @readonly
     */
    get subject() {
        return this._subject;
    }
    
    /**
     * Returns the string representation of the {@link CommitMessageSubjectLine}.
     * 
     * @since 0.0.4
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
     * Returns the length of the {@link CommitMessageSubjectLine}.
     * 
     * @since 0.0.4
     * @readonly
     */
    get length() {
        return this.toString().length;
    }
}