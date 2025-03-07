import { 
    // String
    isString, 
    isEmptyString, 
    
    // Number
    isNumber, 
    isNegativeNumber, 
    isPositiveNumber, 
    
    // Array-related
    isArray, 
    isEmptyArray, 
    
    // Object-related
    isObject, 
    isFunction, 

    // Nullish
    isNull, 
    isUndefined, 
} from 'is-what';

import ErrorUtils from './ErrorUtils';

/**
 * An utility for type operations and validations.
 * 
 * @since ${NEXT_VERSION}
 */
export default class TypeUtils {
    // String
    
    /**
     * Returns if the provided value is a string.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {*} value
     * @returns {boolean}
     */
    static isString = isString;

    /**
     * Returns if the provided value is an empty string.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {*} value
     * @returns {boolean}
     */
    static isEmptyString = isEmptyString;


    // Number
    
    /**
     * Returns if the provided value is a number.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {*} value
     * @returns {boolean}
     */
    static isNumber = isNumber;

    /**
     * Returns if the provided value is a negative number.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {*} value
     * @returns {boolean}
     */
    static isNegativeNumber = isNegativeNumber;

    /**
     * Returns if the provided value is a positive number.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {*} value
     * @returns {boolean}
     */
    static isPositiveNumber = isPositiveNumber;


    // Array-related
    
    /**
     * Returns if the provided value is an array.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {*} value
     * @returns {boolean}
     */
    static isArray = isArray;

    /**
     * Returns if the provided value is an empty array.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {*} value
     * @returns {boolean}
     */
    static isEmptyArray = isEmptyArray;


    // Object-related
    
    /**
     * Returns if the provided value is an object.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {*} value
     * @returns {boolean}
     */
    static isObject = isObject;

    /**
     * Returns if the provided value is a function.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {*} value
     * @returns {boolean}
     */
    static isFunction = isFunction;


    // Nullish
    
    /**
     * Returns if the provided value is `null`.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {*} value
     * @returns {boolean}
     */
    static isNull = isNull;
    
    /**
     * Returns if the provided value is `undefined`.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {*} value
     * @returns {boolean}
     */
    static isUndefined = isUndefined;

    /** @throws {Error} If trying to create an instance. */
    constructor() {
        throw ErrorUtils.getSingletonInstanceErr(this.constructor.name);
    }
}