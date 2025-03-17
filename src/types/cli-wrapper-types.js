/**
 * A list of CLI options.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {Record<string, string | number | boolean | Array<string | number>>} CliOptions
 */

/**
 * A single CLI option.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {CliOptions[keyof CliOptions]} CliOptionType
 */

/**
 * A mapping of options to their CLI flag counterpart.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {Record<string, string>} OptionFlagsMap
 */

/**
 * A list of CLI arguments.
 * 
 * @since ${NEXT_VERSION}
 * @typedef {string[]} CliArgs
 */