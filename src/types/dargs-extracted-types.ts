/**
 * Type definitions extracted directly from the `dargs` library (the installed and available version).
 * 
 * Valid with version `8.1.0`.
 * 
 * @since alpha-7.3.0
 */

import dargs from 'dargs';

/**
 * The parameters of the `dargs` function.
 * 
 * @since alpha-7.3.0
 */
export type DargsParams = Parameters<typeof dargs>;

/**
 * The converted options parameter from the {@link DargsParams|dargs function parameters}.
 * 
 * @since alpha-7.3.0
 */
export type ConvertedOptions = DargsParams[0];