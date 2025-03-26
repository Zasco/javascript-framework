/** 
 * @since alpha-2.0.0
 * @typedef {{'WARNING': 1, 'ERROR': 2}} ErrorLevels
 * @typedef {ErrorLevels[keyof ErrorLevels]} ErrorLevel
 */

/** 
 * Defines the different levels of error.
 * 
 * @since alpha-2.0.0
 * @type {ErrorLevels}
 */
const ERROR_LEVELS = {
    WARNING: 1, 
    ERROR: 2, 
};

export default Object.freeze(ERROR_LEVELS);