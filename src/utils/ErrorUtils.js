/**
 * @since ${NEXT_VERSION}
 */
export default {
    /**
     * Returns an error indicating that an abstract class cannot be instantiated directly.
     * 
     * @since ${NEXT_VERSION}
     * @param {string} [className] The name of the abstract class.
     * @returns {Error} The error indicating that the abstract class cannot be instantiated directly.
     */
    getAbstractClassError(className = undefined) {
        return new Error(`Cannot instantiate abstract class "${className}".`);
    },
    
    /**
     * Returns an error indicating that an abstract method must be implemented.
     * 
     * @since ${NEXT_VERSION}
     * @param {string} [methodName] The name of the abstract method.
     * @returns {Error} The error indicating that the abstract method must be implemented.
     */
    getAbstractMethodError(methodName = undefined) {
        return new Error(`Abstract method "${methodName}" must be implemented.`);
    },

    /**
     * Returns a standardized message with subject.
     * 
     * @since ${NEXT_VERSION}
     * @param {string} message The message to display.
     * @param {string} subject The subject of the message.
     * @returns {string}
     */
    getStdSubjectMessage(message, subject) {
        return `${message} : ${subject}`;
    },

    /**
     * Builds a formatted error message including all causes.
     * 
     * @since ${NEXT_VERSION}
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
};