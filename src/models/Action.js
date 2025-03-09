import ErrorUtils from '../utils/ErrorUtils.js';

/**
 * @since ${NEXT_VERSION}
 * @typedef {{'isDryRun': boolean}} DefaultActionConfig
 */

/**
 * A base class with standardized execution flow and configuration handling for actions.
 * 
 * @since ${NEXT_VERSION}
 * @abstract
 */
export default class Action {
    /**
     * Default configuration object that will be merged with user-provided config.
     * 
     * @protected
     * @readonly
     * @static
     * @type {DefaultActionConfig}
     */
    static get _DEFAULT_CONFIG() {
        return {
            /** @see {@link Action._isDryRun} */
            isDryRun: false, 
        }
    };

    /**
     * Storage for the merged configuration.
     * 
     * @protected
     * @static
     * @type {DefaultActionConfig}
     */
    static _config;

    /**
     * Whether the action is running in `dry-run` mode.
     * 
     * @protected
     * @readonly
     * @static
     * @type {boolean}
     */
    static _isDryRun;

    /** @throws {Error} If instantiated directly and not as a child class */
    constructor() {
        const className = this.constructor.name;
        if (className === Action.name) throw ErrorUtils.getAbstractClassError(className);
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

    /**
     * Defines action-specific logic in child classes.
     * 
     * @protected
     * @abstract
     * @static
     * @returns {boolean} Indicates whether the action-specific logic executed successfully
     * @throws {Error} When called directly without implementation in child class
     */
    static _executeAction() {
        throw ErrorUtils.getAbstractMethodError(this._executeAction.name);
    }

    /**
     * The main execution method for the action. Handles configuration, logging, and error management.
     * 
     * @since ${NEXT_VERSION}
     * @static
     * @param {Object} config The configuration to merge with defaults
     * @returns {boolean} Whether the action executed successfully
     */
    static execute(config) {
        // [TODO] Add async support in here...
        // [TODO] Add error handling with `ErrorHandler`...
        // [TODO] Implement validation prior to execution...
        try {
            const ProxiedAction = new Proxy(this, {
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
                    const value = target[prop];
                    return typeof value === 'function' 
                        ? value.bind(ProxiedAction) 
                        : value;
                }
            });
            
            ProxiedAction._config = { ...ProxiedAction._DEFAULT_CONFIG, ...config };
            
            console.log(`Executing "${ProxiedAction.name}"${ProxiedAction._isDryRun ? ' [DRY-RUN]' : ''}...`);
            console.log('.....');
            
            const result = ProxiedAction._executeAction();
            
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