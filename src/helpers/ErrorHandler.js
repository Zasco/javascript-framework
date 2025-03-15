import { SingletonTrait, LOG_LEVELS, LogHelper } from 'javascript-framework';

import * as LogLevelsTypes from '../config/LogLevelsConfig.js';
import * as ErrorLevelTypes from "../config/ErrorLevelsConfig.js";
import ERROR_LEVELS from "../config/ErrorLevelsConfig.js";

/**
 * @since 0.0.1
 */
export default class ErrorHandler {
    /** Wether warnings are critical. If true, warnings are treated as errors. Defaults to false. */
    static WARNINGS_ARE_CRITICAL = false;

    /** @throws If instantiated (see {@link SingletonTrait.singletonConstructor}) */
    constructor() {
        SingletonTrait.singletonConstructor.call(this);
    }

    /**
     * Returns the {@link LOG_LEVELS} for a given {@link ERROR_LEVELS}.
     * 
     * @since 0.0.2
     * @static
     * @param {ErrorLevelTypes.ErrorLevel} level The error level. Defaults to {@link ERROR_LEVELS.ERROR}.
     * @returns {LogLevelsTypes.LogLevel}
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
     * @param {ErrorLevelTypes.ErrorLevel} [level] The failure level ({@link ERROR_LEVELS.ERROR} or {@link ERROR_LEVELS.WARNING}). Defaults to {@link ERROR_LEVELS.ERROR}.
     * @param {boolean} [rethrow] Whether to rethrow the error after handling. Only applies to {@link ERROR_LEVELS.ERROR}.
     * @param {*} [fallbackValue] The value to return. Only applies to {@link ERROR_LEVELS.WARNING}.
     * @returns {* | undefined} The {@link fallbackValue} if handling a {@link ERROR_LEVELS.WARNING}, `undefined` if handling an {@link ERROR_LEVELS.ERROR} and {@link rethrow} is `false`.
     * @throws If an unexpected error happens during handling
     * @throws The {@link handledError} if handling an {@link ERROR_LEVELS.ERROR} and if {@link rethrow} is `true`
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
    * @param {ErrorLevelTypes.ErrorLevel} [level] The error level ({@link ERROR_LEVELS}).
    * @param {boolean} [rethrow] Whether to rethrow the error. For {@link ERROR_LEVELS.ERROR} only.
    * @param {*} [fallbackValue] The value to return on failure. Defaults to `undefined`. For {@link ERROR_LEVELS.WARNING} only.
    * @returns {(* | undefined) | Promise<* | undefined>} The result of the function or, if the function fails, the fallback value if {@link ERROR_LEVELS.WARNING} or undefined if {@link ERROR_LEVELS.ERROR}. A promise if {@link fn} is async.
    * @throws If an unexpected error happens during handling
    * @throws All errors that happen in {@link ErrorHandler.handle}
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
     * @throws If an unexpected error happens during handling
     * @throws All errors that happen in {@link ErrorHandler.withHandling}
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
     * @throws If an unexpected error happens during handling
     * @throws All errors that happen in {@link ErrorHandler.withHandling}
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