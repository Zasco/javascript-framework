/**
 * The options to pass to various methods of `GitCliWrapper`.
 * 
 * @since 0.0.6
 */

import * as utilTypes from './util-types.js';
import * as cliWrapperTypes from './cli-wrapper-types.js';
import * as gitTypes from './git-types.js';

/**
 * The options to pass to `add()`.
 * 
 * @since 0.0.6
 * @typedef {Partial<utilTypes.Mutable<gitTypes.AddOptionTypes>>} AddOptions
 */

/**
 * The options to pass to `commit()`.
 * 
 * @since 0.0.6
 * @typedef {Partial<utilTypes.Mutable<gitTypes.CommitOptionTypes>>} CommitOptions
 */

/**
 * The options to pass to `diff()`.
 * 
 * @since 0.0.6
 * @typedef {Partial<utilTypes.Mutable<gitTypes.DiffOptionTypes>>} DiffOptions
 */

/**
 * The options to pass to `tag()`.
 * 
 * @since 0.0.6
 * @typedef {Partial<
 *  cliWrapperTypes.positionalOptions 
 *  & utilTypes.Mutable<gitTypes.TagOptionTypes>
 * >} TagOptions
 */

/**
 * The options to pass to `push()`.
 * 
 * @since 0.0.6
 * @typedef {Partial<{}>} PushOptions
 */