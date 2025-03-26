/**
 * The options to pass to various methods of `GitCliWrapper`.
 * 
 * @since ${NEXT_VERSION}
 */

import * as utilTypes from './util-types.js';
import * as cliWrapperTypes from './cli-wrapper-types.js';
import * as gitTypes from './git-types.js';

/**
 * The options to pass to `add()`.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {Partial<utilTypes.Mutable<gitTypes.AddOptionTypes>>} AddOptions
 */

/**
 * The options to pass to `commit()`.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {Partial<utilTypes.Mutable<gitTypes.CommitOptionTypes>>} CommitOptions
 */

/**
 * The options to pass to `diff()`.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {Partial<utilTypes.Mutable<gitTypes.DiffOptionTypes>>} DiffOptions
 */

/**
 * The options to pass to `tag()`.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {Partial<
 *  cliWrapperTypes.positionalOptions 
 *  & utilTypes.Mutable<gitTypes.TagOptionTypes>
 * >} TagOptions
 */

/**
 * The options to pass to `push()`.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {Partial<{}>} PushOptions
 */