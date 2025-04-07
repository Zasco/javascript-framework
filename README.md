# javascript-framework
A set of reusable components for building **JavaScript** applications.

## Build
This project uses `TypeScript` definition files (`.d.ts`) that are imported in `JavaScript` as (`.js`) files for runtime support. 

>[!WARNING]
Before running the application, you **MUST** ensure every `.d.ts` file imported as a `.js` file has it's `JavaScript` "*shell*" counterpart or expect runtime errors (`Error: Cannot find module './path/to/missing-file'`).

This package is configured to use the "shell" file generator from `coding-utils` to automate the process and has it registered to run on the `npm postinstall` hook.

>[!IMPORTANT]
This process is also required on type definitions change.

For more details on this `TypeScript`/`JavaScript` interoperability approach, see the related [documentation](https://github.com/Zasco/coding-utils/blob/a8.1.0/docs/ts-in-js.md) in [`coding-utils`](https://github.com/Zasco/coding-utils).

## Dependency Requirements
`coding-utils` is a development dependency that is **required for production** functionality (see [build section](#build)). When installing this package as a dependency in your project, `coding-utils` won't be automatically installed as it's defined as a "*development dependency*".

Additionally, even if it were a "*regular dependency*", *Git* dependencies don't benefit from *npm*'s version resolution like registry packages do. If your project or its dependencies require different versions of `coding-utils`, only one version will be installed (typically the one directly specified in the root `package.json`).

>[!WARNING]
>To ensure proper functionality:
>1. Check the `engines` field (in [`package.json`](package.json)) for the required version range of `coding-utils`
>2. Ensure that version is installed in your root project

Without the proper version of `coding-utils` installed, you will get this error during installation:
```sh
npm info run javascript-framework@1.0.0-alpha7.6.1 postinstall node_modules/javascript-framework coding-utils.generate-d-ts-shells -d ./src/types/
npm info run javascript-framework@1.0.0-alpha7.6.1 postinstall { code: 127, signal: null }
npm verbose stack Error: command failed
npm verbose pkgid javascript-framework@1.0.0-alpha7.6.1
npm error code 127
npm error path <root project path>/node_modules/javascript-framework
npm error command failed
npm error command sh -c coding-utils.generate-d-ts-shells -d ./src/types/
npm error sh: 1: coding-utils.generate-d-ts-shells: not found
npm verbose cwd <root project path>
```

>[!NOTE]
>This issue will be addressed in future versions by either:
>- Migrating to the use of a regular registry (supporting version resolution) instead of *Git* dependencies and moving `coding-utils` to a regular dependency
>- Publishing the artifacts files

## Roadmap
### Planned
#### **alpha-7.12.0**
**Improvements in `Action` model**
- Implement config validation.
- Automatic command generation from configuration (see [`commander`](https://github.com/tj/commander.js)).

#### **alpha-7.X.X**
- Move the [`Build`](#build) section of `README` to a reusable common location.
- Add feature documentation about `BaseCliWrapper`.
- Migrate **CLI** wrapper types to simply **CLI** types and re-export `cliOptions` and `cliArgs` in wrapper types.

#### **alpha-8.0.0**
- Migrate CLI wrappers and features to a dedicated package.

#### **alpha-8.1.0**
- Use the `FileSystemPath` model where applicable.
- Implement various new modules:
  - A `CheckHelper` of a sort in which to move common `check` logics to.
  - A `ProcessHelper` for common process operations
  - A `FileHelper` for common file operations (ex.: check file exists (used in `PackageJsonHelper`))
  - A `StringUtils` for string manipulations like uppercase/lowercase.

#### **alpha-9.0.0**
- Rename package to use `@zasco/` scope and publish to registry to enable version resolution.

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

#### ErrorHandler & LogHelper
- Make `ErrorHandler` somehow configurable
- Make `LogHelper` instantiable so you can have multiple registries of loggers (ex.: one for errors and one for debug)

#### **CLI** Wrapper
- Add and implement `command` and `subcommand` models for better OOP design. Make it somehow wrappers arround [`commander`](https://github.com/tj/commander.js)'s [`Command` model](https://github.com/tj/commander.js/blob/master/lib/command.js).