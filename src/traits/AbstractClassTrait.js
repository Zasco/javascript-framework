/**
 * A trait for abstract classes.
 * 
 * This trait provides a method to be used in constructors of abstract classes to prevent direct instantiation.
 * Abstract classes must be inherited from and cannot be instantiated directly.
 * 
 * @since 0.0.5
 */
export default {
    /**
     * The constructor for abstract classes.
     * 
     * @since 0.0.5
     * @throws If instantiated (see {@link ErrorUtils.getAbstractInstanceErr})
     */
    abstractClassConstructor() {
        const { default: ErrorUtils } = require('../utils/ErrorUtils.js');
        throw ErrorUtils.getAbstractInstanceErr(this.constructor.name);
    },

    /**
     * The function called in abstract methods to enfore implementation in child classes.
     * 
     * @since 0.0.5
     * @param {string} methodName The name of the abstract method that is being called
     * @throws If the method is called and is not implemented in the chil class (see {@link ErrorUtils.getAbstractMethodErr})
     */
    abstractMethod(methodName) {
        const { default: ErrorUtils } = require('../utils/ErrorUtils.js');
        throw ErrorUtils.getAbstractMethodErr(methodName);
    }
}