import * as dargsTypes from './dargs-types.ts';
import { POSITIONAL_OPTIONS_KEY, SEPARATED_OPTIONS_KEY } from '../constants/dargs.js';

/**
 * The type of the string-like options.
 * 
 * @since alpha-7.4.0
 */
type StrLikeOption = string | number;

/**
 * The type of the array options.
 * 
 * @since alpha-7.4.0
 */
type ArrayOption = StrLikeOption[];

/**
 * The type of a {@link StrLikeOption|string like option} OR {@link ArrayOption|array option}.
 * 
 * @since alpha-7.4.0
 */
type SingleOrArrayOption = StrLikeOption | ArrayOption;

/**
 * The positional CLI options.
 * 
 * @since alpha-7.4.0
 */
type PositionalOptions = {[POSITIONAL_OPTIONS_KEY]: SingleOrArrayOption;};

/**
 * The separated CLI options.
 * 
 * @since alpha-7.4.0
 */
type SeparatedOptions = {[SEPARATED_OPTIONS_KEY]: SingleOrArrayOption;}

/**
 * The named CLI options.
 * 
 * @since alpha-6.0.0
 */
type NamedOptions = Record<string, string | number | boolean | ArrayOption>;

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
type CliOptionType = CliOptions[keyof CliOptions];

/**
 * A mapping of options to their CLI flag counterpart.
 * 
 * @since alpha-5.0.0
 */
type OptionFlagsMap = Record<string, string>;

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
 * @deprecated alpha-7.4.0 Use {@link dargsTypes.NamedOptions} instead.
 */
export type dargsNamedOptions = Record<string, string | number | boolean | string[]>;

/**
 * The converted CLI options.
 * 
 * @since alpha-6.0.0
 * @deprecated alpha-7.4.0 Use {@link dargsTypes.ConvertedOptions} instead.
 */
export type dargsConvertedOptions = PositionalOptions & SeparatedOptions & dargsNamedOptions;


/**
 * The positional CLI options.
 * 
 * @since alpha-6.0.0
 * @deprecated alpha-7.4.0 Use {@link PositionalOptions} instead.
 */
export type positionalOptions = PositionalOptions;

/**
 * The separated CLI options.
 * 
 * @since alpha-6.0.0
 * @deprecated alpha-7.4.0 Use {@link SeparatedOptions} instead.
 */
export type separatedOptions = SeparatedOptions;