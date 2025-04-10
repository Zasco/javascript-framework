import { traits } from 'javascript-framework/module/core';
import { Utils as ErrorUtils } from 'javascript-framework/module/error';

import * as actionTypes from '../types/action.def.js'
import * as actionConstants from '../constants/action.js'

/**
 * A base class with standardized execution flow and configuration handling for actions.
 * 
 * @since alpha-3.0.0
 * @abstract
 */
export default class Action {
    /**
     * Default configuration object that will be merged with user-provided config.
     * 
     * @protected
     * @readonly
     * @static
     * @type {actionTypes.DefaultConfigSchema}
     * @see {@link actionConstants.DEFAULT_CONFIG} & {@link actionTypes.DefaultConfigSchema}
     */
    static _DEFAULT_CONFIG = actionConstants.DEFAULT_CONFIG;

    /**
     * Storage for the merged configuration.
     * 
     * @protected
     * @static
     * @type {actionTypes.CompleteConfigSchema}
     * @see {@link actionTypes.CompleteConfigSchema}
     */
    static _config;


    // Placeholder properties for proxied getters (IDE support).
    // Defaulted
    
    /**
     * @protected
     * @readonly
     * @static
     * @type {actionTypes.DefaultConfigSchema[actionConstants.DRY_RUN_KEY]}
     * @see {@link actionConstants.DRY_RUN_KEY}
     */
    static _isDryRun;

    // Mandatory
    // None in base class.


    /** @throws If instantiated (see {@link traits.AbstractClassTrait.abstractClassConstructor}) */
    constructor() {
        traits.AbstractClassTrait.abstractClassConstructor.call(this);
    }

    /**
     * Executes the provided function only if not in `dry-run` mode.
     * 
     * @protected
     * @static
     * @param {Function} fn
     */
    static _executeIfNotDryRun(fn) {
        if (!this._isDryRun) fn();
    }

    /**
     * Cleans up the action's state after execution.
     * 
     * @protected
     * @static
     */
    static _cleanup() {
        this._config;
    }

    // [TODO] Improve typing here...
    /**
     * Defines action-specific logic in child classes.
     * 
     * @protected
     * @abstract
     * @static
     * @param {actionTypes.SubActionsConfigSchema} [subActionsConfig]
     * @returns {boolean} Indicates whether the action-specific logic executed successfully
     * @throws {Error} When called directly without implementation in child class
     */
    static _executeAction(subActionsConfig = undefined) {
        throw ErrorUtils.getStdAbstractMethodErr(this._executeAction.name, Action.name, this.name);
    }

    /**
     * The main execution method for the action. Handles configuration, logging, and error management.
     * 
     * @since alpha-3.0.0
     * @static
     * @param {actionTypes.ExecuteConfigSchema} config The configuration to merge with defaults
     * @param {actionTypes.SubActionsConfigSchema} [subActionsConfig] The configuration for sub-actions
     * @returns {boolean} Whether the action executed successfully
     */
    static execute(config, subActionsConfig = undefined) {
        // [TODO] Add async support in here...
        // [TODO] Add error handling with `ErrorHandler`...
        // [TODO] Implement validation prior to execution...
        try {
            const ProxiedAction = new Proxy(this, {
                // [TODO] Add parameter types (infered from `get())...
                get(target, prop) {
                    const stringProp = String(prop);
                    
                    /** If the accessed protected property is part of {@link Action._config} */
                    if (stringProp.startsWith('_')) {
                        const slicedProp = stringProp.slice(1);
                        if (target._config !== undefined && slicedProp in target._config) {
                            return target._config[slicedProp];
                        }
                    }
                    
                    // Otherwise
                    // If it's a getter
                    const descriptor = Object.getOwnPropertyDescriptor(target, prop);
                    if (descriptor?.get) return descriptor.get.call(ProxiedAction);
                    
                    // It's a regular method
                    // @ts-expect-error See types TODO higher.
                    const value = target[prop];
                    return typeof value === 'function' 
                        ? value.bind(ProxiedAction) 
                        : value
                    ;
                }
            });

            const { subActionsConfig: extractedSubActionsConfig, ...definedConfig } = config;
            
            // [TODO] Ensure config is properly typed to be merged into _config...
            ProxiedAction._config = { ...ProxiedAction._DEFAULT_CONFIG, ...definedConfig };
            
            console.log(`Executing "${ProxiedAction.name}"${ProxiedAction._isDryRun ? ' [DRY-RUN]' : ''}...`);
            console.log('.....');
            
            const result = ProxiedAction._executeAction(subActionsConfig ?? extractedSubActionsConfig);
            
            console.log(`Execution of "${ProxiedAction.name}" completed!`);
            console.log('-----');
            
            ProxiedAction._cleanup();
            return result;
        } catch (error) {
            console.error(`Error executing "${this.name}":`, error.message);
            this._cleanup();
            return false;
        }
    }
}