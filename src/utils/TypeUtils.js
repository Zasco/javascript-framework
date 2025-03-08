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
    isPlainObject, 
    isFunction, 

    // Nullish
    isNull, 
    isUndefined, 
} from 'is-what';

import ErrorUtils from './ErrorUtils.js';

import JSTYPES from '../constants/JSTypes.js';
import EXPANDED_TYPES from '../constants/ExpandedTypes.js';

/**
 * @typedef {import('../constants/ExpandedTypes.js').ClassInstanceObject} ClassInstanceObject
 * @typedef {import('../constants/ExpandedTypes.js').ClassFunction} ClassFunction
 */

/**
 * An utility for type operations and validations.
 * 
 * @since ${NEXT_VERSION}
 */
export default class TypeUtils {
    // String
    
    /**
     * @since ${NEXT_VERSION}
     * @static
     * @param {unknown} payload
     */
    static isString = isString;

    /**
     * @since ${NEXT_VERSION}
     * @static
     * @param {unknown} payload
     */
    static isEmptyString = isEmptyString;


    // Number
    
    /**
     * @since ${NEXT_VERSION}
     * @static
     * @param {unknown} payload
     */
    static isNumber = isNumber;

    /**
     * @since ${NEXT_VERSION}
     * @static
     * @param {unknown} payload
     */
    static isNegativeNumber = isNegativeNumber;

    /**
     * @since ${NEXT_VERSION}
     * @static
     * @param {unknown} payload
     */
    static isPositiveNumber = isPositiveNumber;


    // Array-related
    
    /**
     * @since ${NEXT_VERSION}
     * @static
     * @param {unknown} payload
     */
    static isArray = isArray;

    /**
     * @since ${NEXT_VERSION}
     * @static
     * @param {unknown} payload
     */
    static isEmptyArray = isEmptyArray;


    // Object-related
    
    /**
     * @since ${NEXT_VERSION}
     * @static
     * @param {unknown} payload
     */
    static isPlainObject = isPlainObject;

    /**
     * @since ${NEXT_VERSION}
     * @static
     * @param {unknown} payload
     */
    static isFunction = isFunction;


    // Nullish
    
    /**
     * @since ${NEXT_VERSION}
     * @static
     * @param {unknown} payload
     */
    static isNull = isNull;
    
    /**
     * @since ${NEXT_VERSION}
     * @static
     * @param {unknown} payload
     */
    static isUndefined = isUndefined;

    /** @throws {Error} If trying to create an instance. */
    constructor() {
        throw ErrorUtils.getSingletonInstanceErr(this.constructor.name);
    }
}