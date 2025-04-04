import { ExecSyncOptions, execSync } from 'child_process';

import * as dargsTypes from './dargs-types.def.js';
import { POSITIONAL_OPTIONS_KEY, SEPARATED_OPTIONS_KEY } from '../constants/dargs.js';

/**
 * The process options for `_execute()`.
 * 
 * @see {@link ExecSyncOptions}
 * @since alpha-7.9.0
 */

export type ExecuteProcessOptions = ExecSyncOptions;

/**
 * The return of `_execute()`.
 * 
 * @see {@link execSync}
 * @since alpha-7.9.0
 */
export type ExecuteReturn = ReturnType<typeof execSync>;


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
 * @since alpha-7.8.0
 * @see {@link dargsTypes.PositionalOptionsKey}
 */
export type PositionalOptionsKey = dargsTypes.PositionalOptionsKey;

/**
 * The separated CLI options.
 * 
 * @since alpha-7.4.0
 */
type SeparatedOptions = {[SEPARATED_OPTIONS_KEY]: SingleOrArrayOption;}

/**
 * @since alpha-7.8.0
 * @see {@link dargsTypes.SeparatedOptionsKey}
 */
export type SeparatedOptionsKey = dargsTypes.SeparatedOptionsKey;

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