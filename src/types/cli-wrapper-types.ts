import * as dargsTypes from './dargs-types.ts';
import { POSITIONAL_OPTIONS_KEY, SEPARATED_OPTIONS_KEY } from '../constants/dargs.js';

/**
 * The positional CLI options.
 * 
 * @since ${NEXT_VERSION}
 */
export type PositionalOptions = {[POSITIONAL_OPTIONS_KEY]: string[];};

/**
 * The separated CLI options.
 * 
 * @since ${NEXT_VERSION}
 */
export type SeparatedOptions = {[SEPARATED_OPTIONS_KEY]: string[];}

/**
 * The named CLI options.
 * 
 * @since alpha-6.0.0
 */
export type NamedOptions = Record<string, string | number | boolean | (string | number)[]>;

/**
 * A list of CLI options.
 * 
 * @since alpha-5.0.0
 */
export type CliOptions = Partial<PositionalOptions & SeparatedOptions> & NamedOptions;

/**
 * A single CLI option.
 * 
 * @since alpha-5.0.0
 */
export type CliOptionType = CliOptions[keyof CliOptions];

/**
 * A mapping of options to their CLI flag counterpart.
 * 
 * @since alpha-5.0.0
 */
export type OptionFlagsMap = Record<string, string>;

/**
 * A list of CLI arguments.
 * 
 * @since alpha-5.0.0
 */
export type CliArgs = string[];


// Deprecated

// dargs (see https://github.com/sindresorhus/dargs)

/**
 * The named CLI options.
 * 
 * @since alpha-6.0.0
 * @deprecated ${NEXT_VERSION} Use {@link dargsTypes.NamedOptions} instead.
 */
export type DargsNamedOptions = Record<string, string | number | boolean | string[]>;

/**
 * The converted CLI options.
 * 
 * @since alpha-6.0.0
 * @deprecated ${NEXT_VERSION} Use {@link dargsTypes.ConvertedOptions} instead.
 */
export type DargsConvertedOptions = PositionalOptions & SeparatedOptions & DargsNamedOptions;


/**
 * The positional CLI options.
 * 
 * @since alpha-6.0.0
 * @deprecated ${NEXT_VERSION} Use {@link PositionalOptions} instead.
 */
export type positionalOptions = PositionalOptions;

/**
 * The separated CLI options.
 * 
 * @since alpha-6.0.0
 * @deprecated ${NEXT_VERSION} Use {@link SeparatedOptions} instead.
 */
export type separatedOptions = SeparatedOptions;