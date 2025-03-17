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
    isAnyObject, 
    isPlainObject, 
    isFunction, 

    // Boolean
    isBoolean, 

    // Nullish
    isNull, 
    isUndefined, 
} from 'is-what';

import { traits } from 'javascript-framework/module/core';
import { Utils as ErrorUtils } from 'javascript-framework/module/error';

import * as expandedTypes from '../constants/expanded-types.js';
import JS_TYPES from '../constants/js-types.js';
import EXPANDED_TYPES from '../constants/expanded-types.js';

/**
 * An utility for type operations and validations.
 * 
 * @since 0.0.3
 */
export default class TypeUtils {
    /** @throws If instantiated (see {@link traits.SingletonTrait.singletonConstructor}) */
    constructor() {
        traits.SingletonTrait.singletonConstructor.call(this);
    }
    
    
    // String
    
    /**
     * @since 0.0.3
     * @static
     * @param {unknown} payload
     */
    static isString = isString;

    /**
     * Returns whether the payload is ''.
     * 
     * @since 0.0.3
     * @static
     * @param {unknown} payload
     * @returns {payload is ''}
     */
    static isEmptyString(payload) {
        return isEmptyString(payload);
    }


    // Number
    
    /**
     * @since 0.0.3
     * @static
     * @param {unknown} payload
     */
    static isNumber = isNumber;

    /**
     * Returns whether the payload is a negative number (but not 0).
     * 
     * @since 0.0.3
     * @static
     * @param {unknown} payload
     * @returns {payload is (number & { __negativeTag: true })}
     */
    static isNegativeNumber(payload) {
        return isNegativeNumber(payload);
    }

    /**
     * Returns whether the payload is a positive number (but not 0).
     * 
     * @since 0.0.3
     * @static
     * @param {unknown} payload
     * @returns {payload is (number & { __positiveTag: true })}
     */
    static isPositiveNumber(payload) {
        return isPositiveNumber(payload);
    }


    // Array-related
    
    /**
     * @since 0.0.3
     * @static
     * @param {unknown} payload
     */
    static isArray = isArray;

    /**
     * @since 0.0.3
     * @static
     * @param {unknown} payload
     */
    static isEmptyArray = isEmptyArray;


    // Object-related

    /**
     * Returns whether the payload is an any kind of object (including special classes or objects with different prototypes).
     * 
     * @since 0.0.3
     * @static
     * @param {unknown} payload
     * @returns {payload is object}
     */
    static isAnyObject(payload) {
        return isAnyObject(payload);
    }
    
    /**
     * @since 0.0.3
     * @static
     * @param {unknown} payload
     */
    static isPlainObject = isPlainObject;

    /**
     * Returns whether the payload is a {@link EXPANDED_TYPES.CLASS_INSTANCE_OBJECT}.
     * 
     * @since 0.0.3
     * @static
     * @param {unknown} payload
     * @returns {payload is (object & { constructor: Function })}
     */
    static isClassInstanceObject(payload) {
        return this.isAnyObject(payload) 
            && !this.isPlainObject(payload) 
            && !this.isUndefined(payload.constructor)
            && payload.constructor.name !== Object.constructor.name
        ;
    }

    /**
     * @since 0.0.3
     * @static
     * @param {unknown} payload
     */
    static isFunction = isFunction;

    /**
     * Returns whether the payload is a {@link EXPANDED_TYPES.CLASS_FUNCTION}.
     * 
     * WARNING: Will also return `true` for {@link JS_TYPES.FUNCTION}s with a manually set `prototype`.
     * 
     * @since 0.0.3
     * @static
     * @param {unknown} payload
     * @returns {payload is (new (...args: any[]) => any)}
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


    // Boolean
    /**
     * @since ${NEXT_VERSION}
     * @static
     * @param {unknown} payload
     */
    static isBoolean = isBoolean;


    // Nullish
    
    /**
     * @since 0.0.3
     * @static
     * @param {unknown} payload
     */
    static isNull = isNull;
    
    /**
     * @since 0.0.3
     * @static
     * @param {unknown} payload
     */
    static isUndefined = isUndefined;

    
    // Instance of

    /**
     * Returns if the provided object instance is of the provided class.
     * 
     * @since 0.0.3
     * @static
     * @param {expandedTypes.ClassInstanceObject} instance
     * @param {expandedTypes.ClassFunction} instanceClass
     * @param {boolean} [direct] If true, checks if {@link instance} is directly of the {@link instanceClass}
     * @returns {boolean}
     * @throws {TypeError} If {@link instance} is not of types {@link JS_TYPES.OBJECT} and {@link EXPANDED_TYPES.CLASS_INSTANCE_OBJECT} or {@link instanceClass} is not of types {@link JS_TYPES.FUNCTION} AND {@link EXPANDED_TYPES.CLASS_FUNCTION}
     */
    static isInstanceOf(instance, instanceClass, direct = false) {
        if (!this.isAnyObject(instance)) throw ErrorUtils.getStdTypeMismatchErr(JS_TYPES.OBJECT, typeof instance);
        if (!this.isFunction(instanceClass)) throw ErrorUtils.getStdTypeMismatchErr(JS_TYPES.FUNCTION, typeof instanceClass);

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
     * @since 0.0.3
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