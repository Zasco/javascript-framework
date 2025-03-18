/**
 * A list of CLI options.
 * 
 * @since 0.0.5
 * @typedef {Record<string, string | number | boolean | Array<string | number>>} CliOptions
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