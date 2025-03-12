import { LOG_LEVELS, ErrorUtils, LogHelper } from 'javascript-framework';

import ERROR_LEVELS from "../config/ErrorLevelsConfig.js";

/**
 * @typedef {import('../config/ErrorLevelsConfig.js').ErrorLevel} ErrorLevel
 * @typedef {import('../config/LogLevelsConfig.js').LogLevel} LogLevel
 */

/**
 * @since 0.0.1
 */
export default class ErrorHandler {
    /** Wether warnings are critical. If true, warnings are treated as errors. Defaults to false. */
    static WARNINGS_ARE_CRITICAL = false;

    /** @throws {Error} If instantiated */
    constructor() {
        ErrorUtils.checkIsSingletonInstance(this, ErrorHandler);
    }

    /**
     * Returns the log level for a given error level.
     * 
     * @since 0.0.2
     * @static
     * @param {ErrorLevel} level The error level. Defaults to `ERROR`.
     * @returns {LogLevel} The log level for the given error level.
     */
    static getLogLevelForErrorLevel(level) {
        return level === ERROR_LEVELS.ERROR 
            ? LOG_LEVELS.ERROR
            : LOG_LEVELS.WARNING
        ;
    }
    
    /**
     * Creates a new error with a cause.
     * 
     * @since 0.0.1
     * @static
     * @param {string} errorMessage The error message.
     * @param {Error} causingError The error that caused this error.
     * @returns {Error} The new error with a cause.
     */
    static getCausedError(errorMessage, causingError) {
        const error = new Error(errorMessage);
        error.cause = causingError;
        return error;
    }

    /**
     * Handles an error and displays it appropriately.
     * 
     * @since 0.0.1
     * @static
     * @param {Error} handledError The error to handle.
     * @param {ErrorLevel} [level] The failure level (error or warning). Defaults to `ERROR`.
     * @param {boolean} [rethrow] Whether to rethrow the error after handling. Only applies to `ERROR`.
     * @param {*} [fallbackValue] The value to return. Only applies to WARNING.
     * @returns {* | undefined} The fallback value if handling a warning, undefined if handling an error and not rethrowing.
     * @throws {Error} The rethrown error.
     */
    static handle(
        handledError, 
        level = ERROR_LEVELS.ERROR, 
        rethrow = true, 
        fallbackValue = undefined, 
    ) {
        // [TODO] Implement the validity check...
        /* if (!(handledError instanceof Error)) {
            console.ERROR('The provided error must be an instance of "Error"');
        } */
        
        try {
            LogHelper.fullDisplay(handledError, this.getLogLevelForErrorLevel(level));
            
            // If handling a warning and warnings are treated as critical, treat it as an error.
            if (this.WARNINGS_ARE_CRITICAL && level === ERROR_LEVELS.WARNING) {
                level = ERROR_LEVELS.ERROR;
                rethrow = true;
            }

            if (level === ERROR_LEVELS.ERROR) {
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
    }

    /**
    * Runs a function with warning/error handling.
    * 
    * @since 0.0.1
    * @static
    * @param {() => (* | Promise<*>)} fn The function to execute.
    * @param {string} message The message if the function fails.
    * @param {ErrorLevel} [level] The error level (`WARNING` or `ERROR`).
    * @param {boolean} [rethrow] Whether to rethrow the error. For ERROR only.
    * @param {*} [fallbackValue] The value to return on failure. Defaults to `undefined`. For WARNING only.
    * @returns {(* | undefined) | Promise<* | undefined>} The result of the function or, if the function fails, the fallback value if WARNING or undefined if ERROR. A promise if the function is async.
    */
    static withHandling(
        fn, 
        message, 
        level = ERROR_LEVELS.ERROR, 
        rethrow = level === ERROR_LEVELS.ERROR, 
        fallbackValue = undefined, 
    ) {
        // Prevent rethrow for warnings
        if (level === ERROR_LEVELS.WARNING) rethrow = false;
        
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
    }

    /**
     * Runs a function with warning handling. Never rethrows and always returns a fallback value on failure.
     * 
     * @since 0.0.1
     * @static
     * @param {() => (* | Promise<*>)} fn The function to execute.
     * @param {string} message The warning message if the function fails.
     * @param {*} [fallbackValue] The value to return on failure. Defaults to `undefined`.
     * @returns {* | Promise<*>} The result of the function or the fallback value if the function fails. A promise if the function is async.
     */
    static withWarningHandling(fn, message, fallbackValue = undefined) {
        return this.withHandling(
            fn, 
            message, 
            ERROR_LEVELS.WARNING, 
            false, // Never rethrow warnings
            fallbackValue, 
        );
    }

    /**
     * Runs a function with error handling.
     * 
     * @since 0.0.1
     * @static
     * @param {() => (* | Promise<*>)} fn The function to execute.
     * @param {string} message The error message if the function fails.
     * @param {boolean} [rethrow] Whether to rethrow the error.
     * @returns {* | Promise<*>} The result of the function or undefined if the function fails. A promise if the function is async.
     */
    static withErrorHandling(fn, message, rethrow = true) {
        return this.withHandling(
            fn, 
            message, 
            ERROR_LEVELS.ERROR, 
            rethrow, 
        );
    }
};