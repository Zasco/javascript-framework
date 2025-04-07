/**
 * @since ${NEXT_VERSION}
 * @see {@link actionTypes}
 */

import type * as actionTypes from './action.def.js';

import { 
    DeriveDefaultConfigSchema, 
    DeriveExecuteConfigSchema, 
    DeriveCompleteConfigSchema, 

    DefaultActionConfig, 
} from "./action.def.js";

export {
    // Schema derivation utilities
    
    /** @since ${NEXT_VERSION} */
    DeriveDefaultConfigSchema, 
    /** @since ${NEXT_VERSION} */
    DeriveExecuteConfigSchema, 
    /** @since ${NEXT_VERSION} */
    DeriveCompleteConfigSchema, 


    // Deprecated

    DefaultActionConfig, 
};