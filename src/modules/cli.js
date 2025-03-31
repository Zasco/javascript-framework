/** @since alpha-5.0.0 */
export { default as BaseWrapper } from '../models/BaseCliWrapper.js';

import * as cliWrapperTypes from '../types/cli-wrapper-types.js';
/**
 * @since alpha-7.4.0
 * @see {@link cliWrapperTypes}
 */
export const wrapperTypes = cliWrapperTypes;
import * as cliWrapperConstants from '../constants/cli-wrapper.js';
/**
 * @since alpha-7.4.0
 * @see {@link cliWrapperConstants}
 */
export const wrapperConstants = cliWrapperConstants;


// Deprecated

import * as rootDargsTypes from '../types/dargs-types.js';
/**
 * @since alpha-7.2.0
 * @deprecated ${NEXT_VERSION}; Will be removed in `alpha-8.0.0`; No replacement.
 */
export const dargsTypes = rootDargsTypes;
import * as rootDargsConstants from '../constants/dargs.js';
/**
 * @since alpha-7.2.0
 * @deprecated ${NEXT_VERSION}; Will be removed in `alpha-8.0.0`; No replacement.
 */
export const dargsConstants = rootDargsConstants;