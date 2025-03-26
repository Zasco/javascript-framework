/**
 * A trait for singleton classes.
 * 
 * This trait provides a method to be used in constructors of singleton classes to prevent direct instantiation.
 * Singleton classes should be used statically.
 * 
 * @since alpha-4.0.0
 */
export default {
    /**
     * The constructor for singleton classes.
     * 
     * @since alpha-4.0.0
     * @throws If instantiated (see {@link ErrorUtils.getSingletonInstanceErr})
     */
    singletonConstructor() {
        const { default: ErrorUtils } = require('../utils/ErrorUtils.js');
        throw ErrorUtils.getSingletonInstanceErr(this.constructor.name);
    }
}