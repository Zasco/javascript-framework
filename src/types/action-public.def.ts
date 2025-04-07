/**
 * @since alpha-7.11.0
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
    
    /** @since alpha-7.11.0 */
    DeriveDefaultConfigSchema, 
    /** @since alpha-7.11.0 */
    DeriveExecuteConfigSchema, 
    /** @since alpha-7.11.0 */
    DeriveCompleteConfigSchema, 


    // Deprecated

    DefaultActionConfig, 
};