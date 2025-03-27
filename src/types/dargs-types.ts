/**
 * Type definitions for the `dargs` library.
 * 
 * Valid with version `8.1.0`.
 * 
 * @since ${NEXT_VERSION}
 */

/**
 * The positional options in the {@link ConvertedOptions|options object}.
 * 
 * @since ${NEXT_VERSION}
 */
export type PositionalOptions = {'_': string[]};

/**
 * The key for the {@link PositionalOptions|positional options} in the {@link ConvertedOptions|options object}.
 * 
 * @since ${NEXT_VERSION}
 */
export type PositionalOptionsKey = keyof PositionalOptions;

/**
 * The separated options in the {@link ConvertedOptions|options object}.
 * 
 * @since ${NEXT_VERSION}
 */
export type SeparatedOptions = {'--': string[]};

/**
 * The key for the {@link SeparatedOptions|separated options} in the {@link ConvertedOptions|options object}.
 * 
 * @since ${NEXT_VERSION}
 */
export type SeparatedOptionsKey = keyof SeparatedOptions;

/**
 * The name of an option in the {@link NamedOptions|named options}.
 * 
 * @since ${NEXT_VERSION}
 */
export type NamedOption = string;

/**
 * The value of an option in the {@link NamedOptions|named options}.
 * 
 * @since ${NEXT_VERSION}
 */
export type NamedOptionValue = string | boolean | number | readonly string[];

/**
 * The named options in the {@link ConvertedOptions|options object}.
 * 
 * @since ${NEXT_VERSION}
 */
export type NamedOptions = Record<NamedOption, NamedOptionValue>;

/**
 * The converted options object.
 * 
 * @since ${NEXT_VERSION}
 */
export type ConvertedOptions = Partial<PositionalOptions & SeparatedOptions> & NamedOptions;
//export type ConvertedOptions = Partial<PositionalOptions & SeparatedOptions & NamedOptions>;

/**
 * The conversion options object.
 * 
 * @since ${NEXT_VERSION}
 */
export { Options as ConversionOptions } from 'dargs';