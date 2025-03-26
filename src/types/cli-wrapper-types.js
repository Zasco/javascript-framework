/**
 * The positional CLI options.
 * 
 * @since 0.0.6
 * @typedef {{'_'?: string[]}} positionalOptions
 */

/**
 * The separated CLI options.
 * 
 * @since 0.0.6
 * @typedef {{'--'?: string[]}} separatedOptions
 */

/**
 * The named CLI options.
 * 
 * @since 0.0.6
 * @typedef {Record<string, string | number | boolean | (string | number)[]>} namedOptions
 */

/**
 * A list of CLI options.
 * 
 * @since 0.0.5
 * @typedef {positionalOptions 
 *  & separatedOptions 
 *  & namedOptions
 * } CliOptions
 */

/**
 * A single CLI option.
 * 
 * @since 0.0.5
 * @typedef {CliOptions[keyof CliOptions]} CliOptionType
 */

/**
 * A mapping of options to their CLI flag counterpart.
 * 
 * @since 0.0.5
 * @typedef {Record<string, string>} OptionFlagsMap
 */

/**
 * A list of CLI arguments.
 * 
 * @since 0.0.5
 * @typedef {string[]} CliArgs
 */


// dargs (see https://github.com/sindresorhus/dargs)

/**
 * The named CLI options.
 * 
 * @since 0.0.6
 * @typedef {Record<string, string | number | boolean | string[]>} dargsNamedOptions
*/

/**
 * The converted CLI options.
 * 
 * @since 0.0.6
 * @typedef {positionalOptions 
 *  & separatedOptions 
 *  & dargsNamedOptions} dargsConvertedOptions
 */