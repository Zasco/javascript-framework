/**
 * A trait for singleton classes.
 * 
 * This trait provides a method to be used in constructors of singleton classes to prevent direct instantiation.
 * Singleton classes should be used statically.
 * 
 * @since ${NEXT_VERSION}
 */
export default {
    /**
     * The constructor for singleton classes.
     * 
     * @since ${NEXT_VERSION}
     * @throws If instantiated (see {@link ErrorUtils.getSingletonInstanceErr})
     */
    singletonConstructor() {
        const { default: ErrorUtils } = require('../utils/ErrorUtils.js');
        throw ErrorUtils.getSingletonInstanceErr(this.constructor.name);
    }
}