/**
 * A trait for abstract classes.
 * 
 * This trait provides a method to be used in constructors of abstract classes to prevent direct instantiation.
 * Abstract classes must be inherited from and cannot be instantiated directly.
 * 
 * @since ${NEXT_VERSION}
 */
export default {
    /**
     * The constructor for abstract classes.
     * 
     * @since ${NEXT_VERSION}
     * @throws If instantiated (see {@link ErrorUtils.getAbstractInstanceErr})
     */
    abstractClassConstructor() {
        const { default: ErrorUtils } = require('../utils/ErrorUtils.js');
        throw ErrorUtils.getAbstractInstanceErr(this.constructor.name);
    }
}