# javascript-framework
A set of reusable components for building **JavaScript** applications.

## Roadmap
### Planned
#### **alpha-7.3.0**
- Implement `dargs` types validation

#### **alpha-8.0.0**
- Migrate CLI wrappers and features to a dedicated package.

#### **alpha-8.1.0**
- Use the `FileSystemPath` model where applicable.
- Implement various new modules:
  - A `CheckHelper` of a sort in which to move common `check` logics to.
  - A `ProcessHelper` for common process operations
  - A `FileHelper` for common file operations (ex.: check file exists (used in `PackageJsonHelper`))
  - A `StringUtils` for string manipulations like uppercase/lowercase.

### Backlog
- Implement error handling in the `Action` model through `ErrorHandler`.
- Fix type definitions
  - Fix blocks content and structure (ensure each definition has a description for display in the IDE).
  - Move to separate files and common folder.
  - Adopt new types structure (see npm types/constants).
  - Split types from constant in error/log levels/config
- Refactor `Logger` interface from being "class-based" to "type-based".
- Merge `ErrorUtils.getStdSubjectMsg` and `ErrorUtils.getStdErrorMsg` into a single function (to evaluate first).
- Add possibility to provide error type in `ErrorHandler.withHandling()`.
- Improve `PackageJsonHelper.checkConfigFileExists()` to traverse up the directory tree.
- Generate the `exports` section of the `package.json` accordingly to the `src/modules/` directory.
- In a **CLI** wrapper, ensure tool version installed is supported by framework (config -> constants/types). Check tool version running is in the range of the constants.
- Look into and implement [`type-fest`](https://github.com/sindresorhus/type-fest) (replace `util-types` with `type-fest`).