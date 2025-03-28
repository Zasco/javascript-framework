/**
 * Type definitions for the `dargs` library (see https://github.com/sindresorhus/dargs).
 * 
 * Valid with version `8.1.0`.
 * 
 * @since alpha-7.2.0
 */

/**
 * The positional options in the {@link ConvertedOptions|options object}.
 * 
 * @since alpha-7.2.0
 */
export type PositionalOptions = {'_': string[]};

/**
 * The key for the {@link PositionalOptions|positional options} in the {@link ConvertedOptions|options object}.
 * 
 * @since alpha-7.2.0
 */
export type PositionalOptionsKey = keyof PositionalOptions;

/**
 * The separated options in the {@link ConvertedOptions|options object}.
 * 
 * @since alpha-7.2.0
 */
export type SeparatedOptions = {'--': string[]};

/**
 * The key for the {@link SeparatedOptions|separated options} in the {@link ConvertedOptions|options object}.
 * 
 * @since alpha-7.2.0
 */
export type SeparatedOptionsKey = keyof SeparatedOptions;

/**
 * The name of an option in the {@link NamedOptions|named options}.
 * 
 * @since alpha-7.2.0
 */
export type NamedOption = string;

/**
 * The value of an option in the {@link NamedOptions|named options}.
 * 
 * @since alpha-7.2.0
 */
export type NamedOptionValue = string | boolean | number | readonly string[];

/**
 * The named options in the {@link ConvertedOptions|options object}.
 * 
 * @since alpha-7.2.0
 */
export type NamedOptions = Record<NamedOption, NamedOptionValue>;

/**
 * The converted options object.
 * 
 * @since alpha-7.2.0
 */
export type ConvertedOptions = Partial<PositionalOptions & SeparatedOptions> & NamedOptions;
//export type ConvertedOptions = Partial<PositionalOptions & SeparatedOptions & NamedOptions>;

/**
 * The conversion options object.
 * 
 * @since alpha-7.2.0
 */
export { Options as ConversionOptions } from 'dargs';