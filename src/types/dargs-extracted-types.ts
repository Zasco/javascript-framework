/**
 * Type definitions extracted directly from the `dargs` library (the installed and available version).
 * 
 * Valid with version `8.1.0`.
 * 
 * @since ${NEXT_VERSION}
 */

import dargs from 'dargs';

/**
 * The parameters of the `dargs` function.
 * 
 * @since ${NEXT_VERSION}
 */
export type DargsParams = Parameters<typeof dargs>;

/**
 * The converted options parameter from the {@link DargsParams|dargs function parameters}.
 * 
 * @since ${NEXT_VERSION}
 */
export type ConvertedOptions = DargsParams[0];