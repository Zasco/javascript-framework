/**
 * Type definitions for the abstract {@link Action} model.
 * Also serves as a model for defining the ones of a concrete implementation.
 * 
 * @since ${NEXT_VERSION}
 */

import * as utilTypes from "../types/utils.def.js";
import { DEFAULT_CONFIG } from "../constants/action.js";
import type Action from "../models/Action.js";


// Configuration components

/**
 * The allowed type for a configuration key.
 * 
 * @since ${NEXT_VERSION}
 */
export type ConfigKey = string;

// [TODO] Expand supported value types...
/**
 * The allowed types for a configuration value.
 * 
 * @since ${NEXT_VERSION}
 */
type ConfigValue = string | number | boolean | object | string[];

/**
 * The entries of a configuration schema.
 * 
 * @since ${NEXT_VERSION}
 */
type ConfigEntries = Record<ConfigKey, ConfigValue>;


// Schema derivation utilities

/**
 * Derives the {@link DefaultConfigSchema} from a {@link DefaultConfigType}.
 * Widens the types from a {@link DefaultConfigType}.
 * 
 * @since ${NEXT_VERSION}
 */
export type DeriveDefaultConfigSchema<DefaultConfigType> = utilTypes.WidenLiterals<DefaultConfigType>;

/**
 * Derives the {@link ExecuteConfigSchema} from the {@link DefaultConfigSchema} and {@link MandatoryConfigSchema}.
 * Makes {@link DefaultConfigSchema} partial and all of it's properties {@link utilTypes.Mutable}.
 * 
 * @since ${NEXT_VERSION}
 */
export type DeriveExecuteConfigSchema<TDefaultConfigSchema, TMandatoryConfigSchema> = 
    Partial<utilTypes.Mutable<TDefaultConfigSchema>> 
    & TMandatoryConfigSchema
;

/**
 * Derives the {@link CompleteConfigSchema} from the {@link ExecuteConfigSchema}.
 * Makes all properties from {@link ExecuteConfigSchema} required.
 * 
 * @since ${NEXT_VERSION}
 */
export type DeriveCompleteConfigSchema<ExecuteConfigSchema> = Required<ExecuteConfigSchema>;


// Configuration schemas

//// Validity

/**
 * A valid configuration schema.
 * 
 * @since ${NEXT_VERSION} */
type ValidConfigSchema = ConfigEntries;

/**
 * A sub-actions configuration schema.
 * 
 * @since ${NEXT_VERSION} */
export type BaseSubActionsConfigSchema = Record<ConfigKey, ValidConfigSchema>;


//// Implementations

/**
 * The default configuration schema as accessed from {@link Action._DEFAULT_CONFIG}.
 * 
 * @since ${NEXT_VERSION}
 * @see {@link DEFAULT_CONFIG}
 */
export type DefaultConfigSchema = DeriveDefaultConfigSchema<typeof DEFAULT_CONFIG>;

/**
 * The mandatory configuration schema.
 * To be defined for concrete implementations of {@link Action}.
 * 
 * @since ${NEXT_VERSION}
 */
type MandatoryConfigSchema = ValidConfigSchema;

/**
 * The configuration schema provided to the {@link Action.execute} method.
 * 
 * @since ${NEXT_VERSION}
 */
export type ExecuteConfigSchema = DeriveExecuteConfigSchema<DefaultConfigSchema, MandatoryConfigSchema>;

/**
 * The complete configuration schema as stored in {@link Action._config}.
 * 
 * @since ${NEXT_VERSION} */
export type CompleteConfigSchema = DeriveCompleteConfigSchema<ExecuteConfigSchema>;


// Configuration keys

/** @since ${NEXT_VERSION} */
type DefaultConfigKey = keyof DefaultConfigSchema;

/** @since ${NEXT_VERSION} */
type ExecuteConfigKey = keyof ExecuteConfigSchema;

/** @since ${NEXT_VERSION} */
type CompleteConfigKey = keyof CompleteConfigSchema;


// Deprecated

/**
 * @since alpha-3.0.0
 * @deprecated ${NEXT_VERSION}; Will be removed in `alpha-8.0.0`; Stop using.
 */
export type DefaultActionConfig = DefaultConfigSchema;