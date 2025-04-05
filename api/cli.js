import BaseWrapper from '../src/models/BaseCliWrapper.js';
import * as wrapperTypes from '../src/types/cli-wrapper.def.js';
import * as wrapperConstants from '../src/constants/cli-wrapper.js';


// Deprecated

import * as dargsTypes from '../src/types/dargs.def.js';
import * as dargsConstants from '../src/constants/dargs.js';


export {
    /**
     * @since alpha-5.0.0
     * @see {@link BaseWrapper}
     */
    BaseWrapper,
    
    /**
     * @since alpha-7.4.0
     * @see {@link wrapperTypes}
     */
    wrapperTypes,
    
    /**
     * @since alpha-7.4.0
     * @see {@link wrapperConstants}
     */
    wrapperConstants,
    
    
    // Deprecated
    
    /**
     * @since alpha-7.2.0
     * @deprecated alpha-7.10.1; Will be removed in `alpha-8.0.0`; No replacement, stop using.
     * @see {@link dargsTypes}
     */
    dargsTypes,
    
    /**
     * @since alpha-7.2.0
     * @deprecated alpha-7.10.1; Will be removed in `alpha-8.0.0`; No replacement, stop using.
     * @see {@link dargsConstants}
     */
    dargsConstants,
};