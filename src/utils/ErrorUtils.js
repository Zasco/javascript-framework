export default {
    /**
     * Returns an error indicating that an abstract class cannot be instantiated directly.
     * 
     * @param {string} [className] The name of the abstract class.
     * @returns {Error} The error indicating that the abstract class cannot be instantiated directly.
     */
    getAbstractClassError(className = undefined) {
        return new Error(`Cannot instantiate abstract class "${className}".`);
    },
    
    /**
     * Returns an error indicating that an abstract method must be implemented.
     * 
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
}