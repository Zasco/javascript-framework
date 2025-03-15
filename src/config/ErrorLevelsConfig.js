/** 
 * @since 0.0.2
 * @typedef {{'WARNING': 1, 'ERROR': 2}} ErrorLevelsConfig
 * @typedef {ErrorLevelsConfig[keyof ErrorLevelsConfig]} ErrorLevel
 */

/** 
 * Defines the different levels of error.
 * 
 * @since 0.0.2
 * @type {ErrorLevelsConfig}
 */
const ERROR_LEVELS = {
    WARNING: 1, 
    ERROR: 2, 
};

export default Object.freeze(ERROR_LEVELS);