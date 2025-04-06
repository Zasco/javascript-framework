/**
 * Public type definitions for the abstract {@link Action} model.
 * 
 * @since ${NEXT_VERSION}
 */

import type Action from "../models/Action.js";

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