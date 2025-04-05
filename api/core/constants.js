import * as SPECIAL_CHARS from '../../src/constants/special-chars.js';
import * as JS_TYPES from '../../src/constants/js-types.js';
import * as EXPANDED_JS_TYPES from '../../src/constants/expanded-js-types.js';

export {
    /** @since ${NEXT_VERSION} */
    SPECIAL_CHARS,

    /** @since alpha-5.0.0 */
    JS_TYPES,

    /** @since alpha-6.0.0 */
    EXPANDED_JS_TYPES as EXPANDED_JS_TYPES,


    // Deprecated

    /**
     * @since alpha-5.0.0
     * @deprecated alpha-6.0.0 Use {@link EXPANDED_JS_TYPES} instead
     */
    EXPANDED_JS_TYPES as EXPANDED_TYPES,
};