export default {
    /** Wether warnings are critical. If true, warnings are treated as errors. Defaults to false. */
    WARNINGS_ARE_CRITICAL: false,
    /** Whether to display stack traces in error messages. Defaults to false.*/
    DISPLAY_STACKS: false,
    
    LEVELS: {
        WARNING: 1,
        ERROR: 2,
    },
    
    /**
     * Creates a new error with a cause.
     * 
     * @param {string} errorMessage The error message.
     * @param {Error} causingError The error that caused this error.
     * @returns {Error} The new error with a cause.
     */
    getCausedError(errorMessage, causingError) {
        const error = new Error(errorMessage);
        error.cause = causingError;
        return error;
    },

    /**
     * Builds a consolidated error message including all causes
     * 
     * @param {Error} error The error to process
     * @returns {string} Consolidated error message
     */
    buildConsolidatedMessage(error) {
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

    /**
     * Handles an error and displays it appropriately.
     * 
     * @param {Error} handledError The error to handle.
     * @param {number} [level] The failure level (error or warning). Defaults to ERROR.
     * @param {boolean} [rethrow] Whether to rethrow the error after handling. Only applies to ERROR.
     * @param {*} [fallbackValue] The value to return. Only applies to WARNING.
     * @returns {* | undefined} The fallback value if handling a warning, undefined if handling an error and not rethrowing.
     * @throws {Error} The rethrown error.
     */
    handle(
        handledError, 
        level = this.LEVELS.ERROR, 
        rethrow = true, 
        fallbackValue = undefined
    ) {
        /* if (!(handledError instanceof Error)) {
            console.ERROR('The provided error must be an instance of "Error"');
        } */
        
        try {
            // If handling a warning and warnings are treated as critical, treat it as an error.
            if (level === this.LEVELS.WARNING && this.WARNINGS_ARE_CRITICAL) {
                level = this.LEVELS.ERROR;
                rethrow = true;
            }

            if (level === this.LEVELS.ERROR) {
                if (rethrow) throw handledError;
                // If handling an error and it is not rethrown, treat it as a warning.
                return undefined;
            }
            
            return fallbackValue; // Only warnings return fallback values
        } catch (handlingError) {
            if (handlingError !== handledError) {
                handlingError.cause = handledError;
                console.error('Error while handling an error:', handlingError.message, 'caused by:', handlingError.cause.message);
            }
            
            throw handlingError;
        }
    },

    /**
    * Runs a function with warning/error handling.
    * 
    * @param {() => (* | Promise<*>)} fn The function to execute.
    * @param {string} message The message if the function fails.
    * @param {number} [level] The error level (WARNING or ERROR).
    * @param {boolean} [rethrow] Whether to rethrow the error. For ERROR only.
    * @param {*} [fallbackValue] The value to return on failure. For WARNING only.
    * @returns {(* | undefined) | Promise<* | undefined>} The result of the function or, if the function fails, the fallback value if WARNING or undefined if ERROR.
    */
    withHandling(
        fn, 
        message, 
        level = this.LEVELS.ERROR, 
        rethrow = level === this.LEVELS.ERROR, 
        fallbackValue = undefined
    ) {
        // Prevent rethrow for warnings
        if (level === this.LEVELS.WARNING) rethrow = false;
        
        /** @param {Error} error The error to handle. */
        const handleError = (error) => {
            const causedError = this.getCausedError(message, error);
            return this.handle(causedError, level, rethrow, fallbackValue);
        };
    
        try {
            const result = fn();
            if (result instanceof Promise) return result.catch(handleError);
            return result;
        } catch (error) {
            return handleError(error);
        }
    },

    /**
     * Runs a function with warning handling. Never rethrows and always returns a fallback value on failure.
     * 
     * @param {() => (* | Promise<*>)} fn The function to execute.
     * @param {string} message The warning message if the function fails.
     * @param {*} [fallbackValue] The value to return on failure.
     * @returns {*} The result of the function or the fallback value.
     */
    withWarningHandling(fn, message, fallbackValue) {
        return this.withHandling(
            fn,
            message,
            this.LEVELS.WARNING,
            false, // Never rethrow warnings
            fallbackValue
        );
    },

    /**
     * Runs a function with error handling.
     * 
     * @param {() => (* | Promise<*>)} fn The function to execute.
     * @param {string} message The error message if the function fails.
     * @param {boolean} [rethrow] Whether to rethrow the error.
     * @returns {* | Promise<*>} The result of the function or undefined if the function fails.
     */
    withErrorHandling(fn, message, rethrow = true) {
        return this.withHandling(
            fn,
            message,
            this.LEVELS.ERROR,
            rethrow,
        );
    },
};