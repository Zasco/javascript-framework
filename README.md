# javascript-framework
A set of reusable components for building **JavaScript** applications.

## Roadmap
### Planned
#### **0.0.4**
- Implement error handling in the `Action` model through `ErrorHandler`.
- Use the `FileSystemPath` model where applicable.
- Fix type definitions
  - Fix blocks content and structure (ensure each definition has a description for display in the IDE).
  - Move to separate files and common folder.
  - Adopt new types structure (see npm types/constants).

### Backlog
- Refactor `Logger` interface from being "class-based" to "type-based".
- Refactor and move `GitHelper` to `GitCliWrapper` and dedicated folder.
- Merge `ErrorUtils.getStdSubjectMsg` and `ErrorUtils.getStdErrorMsg` into a single function (to evaluate first).
- Add possibility to provide error type in `ErrorHandler.withHandling()`.
- Improve `PackageJsonHelper.checkConfigFileExists()` to traverse up the directory tree.
- Implement various new modules:
  - An `AbstractClassTrait` (like singleton)
  - A `CheckHelper` of a sort in which to move common `check` logics to.
  - A `ProcessHelper` for ocmmon process operations
  - A `CliHelper` with `promptWithRetry()` and standard format headers methods.
  - A `StringUtils` for string manipulations like uppercase/lowercase.
  - A `FileHelper` for common file operations (ex.: check if exists (used in `PackageJsonHelper` and `GitHelper`))
  - A `CliWrapper` base model for CLI wrappers (*npm* and *Git*) to group common logic in.