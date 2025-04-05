import { ConvertedOptions } from './dargs.def.js';
import { ConvertedOptions as ExtractedConvertedOptions } from './dargs-extracted.def.js';

// Type assertion to verify compatibility between custom types and extracted types
type _ConvertedOptionsMatchCheck = ConvertedOptions extends ExtractedConvertedOptions ? true : false;
type _ExtractedConvertedOptionsMatchCheck = ExtractedConvertedOptions extends ConvertedOptions ? true : false;

// Both should resolve to 'true' type; if either resolves to 'false', there's a mismatch
type _BidirectionalCompatibilityCheck = _ConvertedOptionsMatchCheck & _ExtractedConvertedOptionsMatchCheck;

// This will display a warning if there's a mismatch between the custom types and the extracted types
const compatibility: _BidirectionalCompatibilityCheck = true;