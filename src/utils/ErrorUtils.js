import TypeUtils from './TypeUtils.js';

/**
 * @since 0.0.2
 */
export default class ErrorUtils {
    /** Whether to display stack traces in error messages. Defaults to false.*/
    static DISPLAY_STACKS = false;

    /** @throws {Error} If instantiated directly and not as a child class */
    constructor() {
        const className = this.constructor.name;
        if (className === ErrorUtils.name) throw ErrorUtils.getSingletonInstanceErr(className);
    }
    
    
    // Messages

    /**
     * Returns a standard format message with subject.
     * 
     * @since ${NEXT_VERSION}
     * @readonly
     * @static
     * @param {string} message The message
     * @param {string} subject The subject of the message
     * @returns {string}
     */
    static getStdSubjectMsg(message, subject) {
        return `${message}: ${subject}`;
    }

    /**
     * Returns an error message with standard format:
     * - Error while <{@link action}>.
     * - Error while <{@link action}> <{@link subject}>.
     * - Error while <{@link action}> <{@link subject}>: <{@link value}>
     * 
     * @since ${NEXT_VERSION}
     * @readonly
     * @static
     * @param {string} action The action that was performed when the error happened
     * @param {string} [subject] The subject of the action
     * @param {string} [value] The value associated with the action/subject
     * @returns {string}
     */
    static getStdErrorMsg(action, subject = undefined, value = undefined) {
        let msg = 'Error while '+ action;
        
        if (subject !== undefined) msg += ' '+ subject;
        
        if (value === undefined) msg += '.';
        else msg += ': '+ value;
        
        return msg;
    }

    /**
     * Returns a detailed message for the provided {@link Error} including stack trace and causes.
     * 
     * @since ${NEXT_VERSION}
     * @readonly
     * @static
     * @param {Error} error
     * @returns {string}
     */
    static getDetailedErrMsg(error) {
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
    }

    
    // Getters
    
    /**
     * Returns a {@link TypeError} with the standard "mismatch" message.
     * 
     * @since ${NEXT_VERSION}
     * @readonly
     * @static
     * @param {string} expectedType The expected type
     * @param {string} actualType The actual type
     * @returns {TypeError}
     */
    static getStdTypeMismatchErr(expectedType, actualType) {
        return new TypeError(`Expected a "${expectedType}" but got a "${actualType}".`);
    }
    
    /**
     * Returns a {@link TypeError} with the provided message.
     * 
     * @since ${NEXT_VERSION}
     * @readonly
     * @static
     * @param {string} errorMessage
     * @returns {TypeError}
     */
    static getRestrictedInstanceErr(errorMessage) {
        return new TypeError(errorMessage);
    }
    
    /**
     * Returns an error indicating that an abstract class cannot be instantiated directly.
     * 
     * @since 0.0.2
     * @readonly
     * @static
     * @param {string} className The name of the abstract class.
     * @returns {ReturnType<typeof ErrorUtils.getRestrictedInstanceErr>}
     */
    static getAbstractInstanceErr(className) {
        return this.getRestrictedInstanceErr(`Cannot instantiate abstract class "${className}".`);
    }
    
    /**
     * Returns an error indicating that an abstract method must be implemented.
     * 
     * @since 0.0.2
     * @readonly
     * @static
     * @param {string} methodName The name of the abstract method.
     * @returns {Error} The error indicating that the abstract method must be implemented.
     */
    static getAbstractMethodError(methodName) {
        return new Error(`Abstract method "${methodName}" must be implemented.`);
    }

    /**
     * Returns an error indicating that a singleton class cannot be instantiated.
     * 
     * @since ${NEXT_VERSION}
     * @readonly
     * @static
     * @param {string} className The name of the class
     * @returns {ReturnType<typeof ErrorUtils.getRestrictedInstanceErr>}
     */
    static getSingletonInstanceErr(className) {
        return this.getRestrictedInstanceErr(`Cannot instantiate singleton class "${className}". Singleton classes are used statically and cannot be instantiated directly.`);
    }


    // Checks

    /**
     * Checks if the provided instance is directly of the provided class and throws a {@link TypeError} if not.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {Object} instance The instance to check
     * @param {Function} instanceClass The class to check against
     * @throws {TypeError}
     */
    static checkIsDirectInstanceOf(instance, instanceClass) {
        if (!TypeUtils.isDirectInstanceOf(instance, instanceClass)) throw new TypeError(`"${instance.constructor.name}" is not a direct instance of "${instanceClass.name}".`);
    }


    /**
     * Checks if the provided instance is of the provided class and throws a {@link TypeError} if not.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {Object} instance The instance to check
     * @param {Function} instanceClass The class to check against
     * @throws {TypeError}
     */
    static checkIsInstanceOf(instance, instanceClass) {
        if (!TypeUtils.isInstanceOf(instance, instanceClass)) throw new TypeError(`${instance.constructor.name}" is not an instance of "${instanceClass.name}".`);
    }

    /**
     * Checks if the provided instance is of a restricted class and throws a {@link TypeError} if so.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {Object} instance The instance to check
     * @param {Function} restrictedClass The class to check against
     * @param {Error} error
     * @throws {TypeError}
     */
    static checkIsRestrictedInstance(instance, restrictedClass, error) {
        try {
            this.checkIsDirectInstanceOf(instance, restrictedClass);
            throw error;
        } catch (error) {}
    }
    
    /**
     * Checks if the provided instance is of the provided singleton class and throws a {@link TypeError} if so.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {Object} instance The instance to check
     * @param {Function} singletonClass The class to check against
     * @throws {TypeError}
     */
    static checkIsSingletonInstance(instance, singletonClass) {
        this.checkIsRestrictedInstance(instance, singletonClass, this.getSingletonInstanceErr(singletonClass.name));
    }
    
    /**
     * Checks if the provided instance is of the provided abstract class and throws a {@link TypeError} if so.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {Object} instance The instance to check
     * @param {Function} abstractClass The class to check against
     * @throws {TypeError}
     */
    static checkIsAbstractInstance(instance, abstractClass) {
        this.checkIsRestrictedInstance(instance, abstractClass, this.getAbstractInstanceErr(abstractClass.name));
    }


    // Deprecated

    /**
     * Returns a standardized message with subject.
     * 
     * @since 0.0.2
     * @deprecated ${NEXT_VERSION}
     * @readonly
     * @static
     * @param {string} message The message to display.
     * @param {string} subject The subject of the message.
     * @returns {string}
     */
    static getStdSubjectMessage(message, subject) {
        return this.getStdSubjectMsg(message, subject);
    }

    /**
     * Returns an error indicating that an abstract class cannot be instantiated directly.
     * 
     * @since 0.0.2
     * @deprecated ${NEXT_VERSION}
     * @readonly
     * @static
     * @param {string} className The name of the abstract class.
     * @returns {Error} The error indicating that the abstract class cannot be instantiated directly.
     */
    static getAbstractClassError(className) {
        return this.getAbstractInstanceErr(className);
    }

    /**
     * Builds a formatted error message including all causes.
     * 
     * @since 0.0.2
     * @deprecated ${NEXT_VERSION}
     * @readonly
     * @static
     * @param {Error} error The error to process
     * @returns {string} Consolidated error message
     */
    static buildFormattedErrorMessage(error) {
        return this.getDetailedErrMsg(error);
    }
};