/** 
 * @typedef {(import('./Commit.js').optionalStringComponent)} optionalStringComponent
 * @typedef {(import('./Commit.js').isBreakingChange)} isBreakingChange
 */

/**
 * @since ${NEXT_VERSION}
 */
export default class CommitMessageSubjectLine {
    /**
     * @type {optionalStringComponent}
     */
    _type;
    /**
     * @type {optionalStringComponent}
     */
    _scope;
    /**
     * @type {isBreakingChange}
     */
    _isBreakingChange;
    /**
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
     * @since ${NEXT_VERSION}
     * @readonly
     */
    get type() {
        return this._type;
    }

    /**
     * @since ${NEXT_VERSION}
     * @readonly
     */
    get scope() {
        return this._scope;
    }

    /**
     * @since ${NEXT_VERSION}
     * @readonly
     */
    get isBreakingChange() {
        return this._isBreakingChange;
    }

    /**
     * @since ${NEXT_VERSION}
     * @readonly
     */
    get subject() {
        return this._subject;
    }
    
    /**
     * Returns the string representation of the {@link CommitMessageSubjectLine}.
     * 
     * @since ${NEXT_VERSION}
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
     * @since ${NEXT_VERSION}
     * @readonly
     */
    get length() {
        return this.toString().length;
    }
}