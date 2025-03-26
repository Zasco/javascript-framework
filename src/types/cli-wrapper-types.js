/**
 * The positional CLI options.
 * 
 * @since alpha-6.0.0
 * @typedef {{'_'?: string[]}} positionalOptions
 */

/**
 * The separated CLI options.
 * 
 * @since alpha-6.0.0
 * @typedef {{'--'?: string[]}} separatedOptions
 */

/**
 * The named CLI options.
 * 
 * @since alpha-6.0.0
 * @typedef {Record<string, string | number | boolean | (string | number)[]>} namedOptions
 */

/**
 * A list of CLI options.
 * 
 * @since alpha-5.0.0
 * @typedef {positionalOptions 
 *  & separatedOptions 
 *  & namedOptions
 * } CliOptions
 */

/**
 * A single CLI option.
 * 
 * @since alpha-5.0.0
 * @typedef {CliOptions[keyof CliOptions]} CliOptionType
 */

/**
 * A mapping of options to their CLI flag counterpart.
 * 
 * @since alpha-5.0.0
 * @typedef {Record<string, string>} OptionFlagsMap
 */

/**
 * A list of CLI arguments.
 * 
 * @since alpha-5.0.0
 * @typedef {string[]} CliArgs
 */


// dargs (see https://github.com/sindresorhus/dargs)

/**
 * The named CLI options.
 * 
 * @since alpha-6.0.0
 * @typedef {Record<string, string | number | boolean | string[]>} dargsNamedOptions
*/

/**
 * The converted CLI options.
 * 
 * @since alpha-6.0.0
 * @typedef {positionalOptions 
 *  & separatedOptions 
 *  & dargsNamedOptions} dargsConvertedOptions
 */