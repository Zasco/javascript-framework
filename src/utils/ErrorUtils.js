/**
 * @since 0.0.2
 */
export default {
    /** Whether to display stack traces in error messages. Defaults to false.*/
    DISPLAY_STACKS: false,
    
    
    // Messages

    /**
     * Returns a standard format message with subject.
     * 
     * @since ${NEXT_VERSION}
     * @param {string} message The message
     * @param {string} subject The subject of the message
     * @returns {string}
     */
    getStdSubjectMsg(message, subject) {
        return `${message}: ${subject}`;
    },

    /**
     * Returns a standardized error message with an action, an optional subject and a value.
     * 
     * @since ${NEXT_VERSION}
     * @param {string} action The action that was performed when the error happened.
     * @param {string} [subject] The subject of the action.
     * @param {string} [value] The value associated with the action/subject.
     * @returns {string} `Error while [action] [subject?].` OR `Error while [action] [subject]: [value]`
     */
    generateStdErrorMsg(action, subject = undefined, value = undefined) {
        let msg = 'Error while '+ action;
        
        if (subject !== undefined) msg += ' '+ subject;
        
        if (value === undefined) msg += '.';
        else msg += ': '+ value;
        
        return msg;
    },

    /**
     * Builds a formatted error message including all causes.
     * 
     * @since 0.0.2
     * @param {Error} error The error to process
     * @returns {string} Consolidated error message
     */
    buildFormattedErrorMessage(error) {
        let message = error.message;
        
        // Add main error stack in a collapsible group
        if (error.stack && this.DISPLAY_STACKS) {
            message += '\nStack trace:';
            message += '\n┌─────────────────────';
            message += `\n${error.stack.split('\n').slice(1).join('\n')}`;
            message += '\n└─────────────────────';
        }
        
        let errorCause = error.cause;
        let depth = 0;
        
        while (errorCause) {
            const indent = '   '.repeat(depth);
            const causeMessage = errorCause instanceof Error 
                ? /* errorCause.stack || */ errorCause.message
                : errorCause;
                
            message += `\n${indent}└─ ${depth + 1}. Caused by: ${causeMessage}`;

            // Add cause stack in a collapsible group
            if (errorCause instanceof Error && errorCause.stack && this.DISPLAY_STACKS) {
                message += `\n${indent}  Stack trace:`;
                message += `\n${indent}  ┌─────────────────────`;
                message += `\n${indent}  ${errorCause.stack.split('\n').slice(1).join(`\n${indent}  `)}`;
                message += `\n${indent}  └─────────────────────`;
            }
            
            errorCause = errorCause instanceof Error 
                ? errorCause.cause 
                : undefined;
            depth++;
        }
        message += '\n';
        
        return message;
    },

    
    // Getters
    
    /**
     * Returns a {@link TypeError} with the standard "mismatch" message.
     * 
     * @since ${NEXT_VERSION}
     * @param {string} expectedType The expected type
     * @param {string} actualType The actual type
     * @returns {TypeError}
     */
    getStdTypeMismatchErr(expectedType, actualType) {
        return new TypeError(`Expected a "${expectedType}" but got a "${actualType}".`);
    },
    
    /**
     * Returns an error indicating that an abstract class cannot be instantiated directly.
     * 
     * @since 0.0.2
     * @param {string} className The name of the abstract class.
     * @returns {Error} The error indicating that the abstract class cannot be instantiated directly.
     */
    getAbstractClassError(className) {
        return new Error(`Cannot instantiate abstract class "${className}".`);
    },
    
    /**
     * Returns an error indicating that an abstract method must be implemented.
     * 
     * @since 0.0.2
     * @param {string} methodName The name of the abstract method.
     * @returns {Error} The error indicating that the abstract method must be implemented.
     */
    getAbstractMethodError(methodName) {
        return new Error(`Abstract method "${methodName}" must be implemented.`);
    },

    /**
     * Returns an error indicating that a singleton class cannot be instantiated.
     * 
     * @since ${NEXT_VERSION}
     * @param {string} className The name of the class
     * @returns {Error}
     */
    getSingletonInstanceErr(className) {
        return new Error(`Cannot instantiate singleton class "${className}". Singleton classes are used statically and cannot be instantiated directly.`);
    },


    // Deprecated

    /**
     * Returns a standardized message with subject.
     * 
     * @since 0.0.2
     * @deprecated ${NEXT_VERSION}
     * @param {string} message The message to display.
     * @param {string} subject The subject of the message.
     * @returns {string}
     */
    getStdSubjectMessage(message, subject) {
        return this.getStdSubjectMsg(message, subject);
    },
};