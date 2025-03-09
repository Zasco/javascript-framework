import SubjectLine from './CommitMsgSubjectLine.js';

/**
 * @typedef {import('./Commit.js').CommitMsgContent} CommitMsgContent
 * @typedef {import('./Commit.js').CommitMsgBody} CommitMsgBody
 * @typedef {import('./Commit.js').CommitMsgFooter} CommitMsgFooter
 */

/**
 * @since ${NEXT_VERSION}
 */
export default class CommitMsg {
    /**
     * @see {@link CommitMsg.subjectLine}
     * @protected
     * @type {SubjectLine}
     */
    _subjectLine;
    
    /**
     * @see {@link CommitMsg.body}
     * @protected
     * @type {CommitMsgBody}
     */
    _body;
    
    /**
     * @see {@link CommitMsg.footer}
     * @protected
     * @type {CommitMsgFooter}
     */
    _footer;

    /**
     * @param {SubjectLine} subjectLine See {@link CommitMsg.subjectLine}
     * @param {CommitMsgBody} [body] See {@link CommitMsg.body}
     * @param {CommitMsgFooter} [footer] See {@link CommitMsg.footer}
     */
    constructor(subjectLine, body = undefined, footer = undefined) {
        this._subjectLine = subjectLine;
        this._body = body;
        this._footer = footer;
    }

    /**
     * The {@link SubjectLine} of the {@link CommitMsg}.
     * 
     * @since ${NEXT_VERSION}
     * @readonly
     */
    get subjectLine() {
        return this._subjectLine;
    }

    /**
     * The {@link CommitMsgBody} of the {@link CommitMsg}.
     * 
     * @since ${NEXT_VERSION}
     * @readonly
     */
    get body() {
        return this._body;
    }

    /**
     * The {@link CommitMsgFooter} of the {@link CommitMsg}.
     * 
     * @since ${NEXT_VERSION}
     * @readonly
     */
    get footer() {
        return this._footer;
    }

    /**
     * The {@link CommitMsgContent} of the {@link CommitMsg} as a single string.
     * 
     * @since ${NEXT_VERSION}
     * @readonly
     * @type {CommitMsgContent}
     */
    get content() {
        let content = '';
        
        if (this.body !== undefined) content += this.body;
        
        if (this.footer !== undefined) {
            content += content.length > 0 
                ? '\n\n' // [TODO] Improve new line handling here...
                : ''
            ;
            content += this.footer;
        }

        return content.length > 0 
            ? content 
            : undefined
        ;
    }

    /**
     * Returns the string representation of the {@link CommitMsg}.
     * 
     * @since ${NEXT_VERSION}
     * @return {string}
     */
    toString() {
        let commitMsg = this.subjectLine.toString();
        const commitContent = this.content;
        
        // [TODO] Improve new line handling here...
        if (commitContent !== undefined) commitMsg += '\n\n'+ commitContent;
        
        return commitMsg;
    }

    /**
     * The width of the {@link CommitMsg.content}.
     * 
     * @since ${NEXT_VERSION}
     * @readonly
     * @type {number}
     */
    get contentWidth() {
        if (this.content === undefined) return 0;
        const contentLines = this.content.split(/\r?\n/);
        return Math.max(...contentLines.map(line => line.length));
    }
}