/**
 * The options to pass to various methods of `GitCliWrapper`.
 * 
 * @since alpha-6.0.0
 */

import * as utilTypes from './utils.def.js';
import * as cliWrapperTypes from './cli-wrapper.def.js';
import * as gitTypes from './git.def.js';

/**
 * The options to pass to `add()`.
 * 
 * @since alpha-6.0.0
 */
export type AddOptions = Partial<utilTypes.Mutable<gitTypes.AddOptionTypes>>;

/**
 * The options to pass to `commit()`.
 * 
 * @since alpha-6.0.0
 */
export type CommitOptions = Partial<utilTypes.Mutable<gitTypes.CommitOptionTypes>>;

/**
 * The options to pass to `diff()`.
 * 
 * @since alpha-6.0.0
 */
export type DiffOptions = Partial<utilTypes.Mutable<gitTypes.DiffOptionTypes>>;

/**
 * The options to pass to `tag()`.
 * 
 * @since alpha-6.0.0
 */
export type TagOptions = Partial<
    cliWrapperTypes.positionalOptions &
    utilTypes.Mutable<gitTypes.TagOptionTypes>
>;

/**
 * The options to pass to `push()`.
 * 
 * @since alpha-6.0.0
 */
export type PushOptions = Partial<{}>;