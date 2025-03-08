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
     * Returns whether the payload is any {@link JSTYPES.OBJECT} (excluding {@link JSTYPES.NULL} but including special classes or objects with other prototypes).
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {unknown} payload
     * @returns {boolean}
     */
    static isAnyObject(payload) {
        return typeof payload === JSTYPES.OBJECT && !this.isNull(payload);
    }
    
    /**
     * @since ${NEXT_VERSION}
     * @static
     * @param {unknown} payload
     */
    static isPlainObject = isPlainObject;

    /**
     * Returns whether the payload is a {@link EXPANDED_TYPES.CLASS_INSTANCE_OBJECT}.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {unknown} payload
     * @returns {boolean}
     */
    static isClassInstanceObject(payload) {
        return this.isAnyObject(payload) 
            && !this.isPlainObject(payload) 
            && !this.isUndefined(payload?.constructor)
            && payload.constructor.name !== Object.constructor.name
        ;
    }

    /**
     * @since ${NEXT_VERSION}
     * @static
     * @param {unknown} payload
     */
    static isFunction = isFunction;

    /**
     * Returns whether the payload is a {@link EXPANDED_TYPES.CLASS_FUNCTION}.
     * 
     * WARNING: Will also return `true` for {@link JSTYPES.FUNCTION}s with a manually set `prototype`.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {unknown} payload
     * @returns {boolean}
     */
    static isClassFunction(payload) {
        if (!this.isFunction(payload)) return false;
        
        try {
            Reflect.construct(payload, []);
            return true;
        } catch (error) {
            return error instanceof TypeError && error.message.includes('cannot be invoked without "new"');
        }
    }


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

    
    // Instance of

    /**
     * Returns if the provided object instance is of the provided class.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {ClassInstanceObject} instance
     * @param {ClassFunction} instanceClass
     * @param {boolean} [direct] If true, checks if {@link instance} is directly of the {@link instanceClass}
     * @returns {boolean}
     * @throws {TypeError} If {@link instance} is not of types {@link JSTYPES.OBJECT} and {@link EXPANDED_TYPES.CLASS_INSTANCE_OBJECT} or {@link instanceClass} is not of types {@link JSTYPES.FUNCTION} AND {@link EXPANDED_TYPES.CLASS_FUNCTION}
     */
    static isInstanceOf(instance, instanceClass, direct = false) {
        if (!this.isAnyObject(instance)) throw ErrorUtils.getStdTypeMismatchErr(JSTYPES.OBJECT, typeof instance);
        if (!this.isFunction(instanceClass)) throw ErrorUtils.getStdTypeMismatchErr(JSTYPES.FUNCTION, typeof instanceClass);

        if (!this.isClassInstanceObject(instance)) throw ErrorUtils.getStdTypeMismatchErr('class instance', 'plain object');
        if (!this.isClassFunction(instanceClass)) throw ErrorUtils.getStdTypeMismatchErr('class constructor', 'plain function');
        
        if (direct) return instance.constructor.name === instanceClass.name;
        return instance instanceof instanceClass;
    }
    
    /**
     * Returns if the provided object instance is directly of the provided class.
     * 
     * An alias of {@link TypeUtils.isInstanceOf} with `direct` set to `true`.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {object} instance
     * @param {Function} instanceClass
     * @returns {boolean}
     * @throws All errors that happen in {@link TypeUtils.isInstanceOf}.
     */
    static isDirectInstanceOf(instance, instanceClass) {
        return this.isInstanceOf(instance, instanceClass, true);
    }
}