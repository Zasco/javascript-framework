/**
 * Type definitions for the abstract {@link Action} model.
 * Also serves as a model for defining the ones of a concrete implementation.
 * 
 * @since alpha-7.11.0
 */

import * as utilTypes from "../types/utils.def.js";
import { DEFAULT_CONFIG, SUB_ACTIONS_CONFIG_KEY } from "../constants/action.js";
import type Action from "../models/Action.js";


// Configuration components

/**
 * The allowed type for a configuration key.
 * 
 * @since alpha-7.11.0
 */
export type ConfigKey = string;

// [TODO] Expand supported value types...
/**
 * The allowed types for a configuration value.
 * 
 * @since alpha-7.11.0
 */
type ConfigValue = string | number | boolean | object | string[];

/**
 * A configuration schema.
 * 
 * @since alpha-7.11.0 */
type ConfigSchema = Record<ConfigKey, ConfigValue>;


// Schema derivation utilities

/**
 * Derives the {@link DefaultConfigSchema} from a {@link DefaultConfigType}.
 * Widens the types from a {@link DefaultConfigType}.
 * 
 * @since alpha-7.11.0
 */
export type DeriveDefaultConfigSchema<DefaultConfigType> = utilTypes.WidenLiterals<DefaultConfigType>;

/**
 * Derives the {@link CoreExecuteConfigSchema} (action-specific) from the {@link DefaultConfigSchema} and {@link MandatoryConfigSchema}.
 * Makes {@link DefaultConfigSchema} partial and all of it's properties {@link utilTypes.Mutable}.
 * 
 * @since alpha-7.11.0
 */
type DeriveCoreExecuteConfigSchema<TDefaultConfigSchema, TMandatoryConfigSchema> = 
    Partial<utilTypes.Mutable<TDefaultConfigSchema>> 
    & TMandatoryConfigSchema
;

/**
 * Derives the {@link ExecuteConfigSchema} from the {@link DefaultConfigSchema} and {@link MandatoryConfigSchema} and optional {@link SubActionsConfigSchema}.
 * 
 * @since alpha-7.11.0
 */
export type DeriveExecuteConfigSchema<
    TDefaultConfigSchema, 
    TMandatoryConfigSchema, 
    TSubActionsConfigSchema = undefined
> = 
    DeriveCoreExecuteConfigSchema<TDefaultConfigSchema, TMandatoryConfigSchema> 
    & (TSubActionsConfigSchema extends undefined 
        ? {} 
        : Partial<{[SUB_ACTIONS_CONFIG_KEY]: TSubActionsConfigSchema}>)
;

/**
 * Derives the {@link CompleteConfigSchema} from the {@link ExecuteConfigSchema}.
 * Makes all properties from {@link ExecuteConfigSchema} required.
 * 
 * @since alpha-7.11.0
 */
export type DeriveCompleteConfigSchema<ExecuteConfigSchema> = Required<ExecuteConfigSchema>;


// Configuration schemas

/**
 * The default configuration schema as accessed from {@link Action._DEFAULT_CONFIG}.
 * 
 * @since alpha-7.11.0
 * @see {@link DEFAULT_CONFIG}
 */
export type DefaultConfigSchema = DeriveDefaultConfigSchema<typeof DEFAULT_CONFIG>;

/**
 * The mandatory configuration schema.
 * To be defined for concrete implementations of {@link Action}.
 * 
 * @since alpha-7.11.0
 */
type MandatoryConfigSchema = ConfigSchema;

/**
 * The core configuration schema (action-specific) of the {@link ExecuteConfigSchema}.
 * 
 * @since alpha-7.11.0
 */
export type CoreExecuteConfigSchema = DeriveExecuteConfigSchema<
    DefaultConfigSchema, 
    MandatoryConfigSchema
>;

/**
 * A sub-actions configuration schema.
 * 
 * @since alpha-7.11.0 */
export type SubActionsConfigSchema = Record<ConfigKey, ConfigSchema>;

/**
 * The configuration schema (with sub-actions config) provided to the {@link Action.execute} method.
 * 
 * @since alpha-7.11.0
 */
export type ExecuteConfigSchema = DeriveExecuteConfigSchema<
    DefaultConfigSchema, 
    MandatoryConfigSchema, 
    SubActionsConfigSchema
>;

/**
 * The complete configuration schema as stored in {@link Action._config}.
 * 
 * @since alpha-7.11.0 */
export type CompleteConfigSchema = DeriveCompleteConfigSchema<CoreExecuteConfigSchema>;

// [TODO] Add file config schema...

// Configuration keys

/** @since alpha-7.11.0 */
type DefaultConfigKey = keyof DefaultConfigSchema;

/** @since alpha-7.11.0 */
type ExecuteConfigKey = keyof ExecuteConfigSchema;

/** @since alpha-7.11.0 */
type CompleteConfigKey = keyof CompleteConfigSchema;


// Deprecated

/**
 * @since alpha-3.0.0
 * @deprecated alpha-7.11.0; Will be removed in `alpha-8.0.0`; Use {@link DEFAULT_CONFIG} instead.
 */
export type DefaultActionConfig = DefaultConfigSchema;