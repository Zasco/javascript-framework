/**
 * The positional CLI options.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {{'_'?: string[]}} positionalOptions
 */

/**
 * The separated CLI options.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {{'--'?: string[]}} separatedOptions
 */

/**
 * A list of CLI options.
 * 
 * @since 0.0.5
 * @typedef {positionalOptions 
 *  & separatedOptions 
 *  & Record<string, string | number | boolean | (string | number)[]>
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


// dargs

/**
 * `dargs` converted options (see {@link https://github.com/sindresorhus/dargs#api})
 * 
 * @since ${NEXT_VERSION}
 * @typedef {positionalOptions 
 *  & separatedOptions 
 *  & Record<string, string | number | boolean | string[]>} dargsConvertedOptions
 */