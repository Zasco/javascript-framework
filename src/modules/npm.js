import NpmCliWrapper from '../wrappers/NpmCliWrapper.js';

export * as types from '../types/npm-types.js';
export * as constants from '../constants/npm-constants.js';

export const executeNpmVersion = NpmCliWrapper.executeNpmVersion;