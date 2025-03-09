## Changelog






### [v0.0.2](https://github.com/Zasco/javascript-framework/compare/0.0.1...v0.0.2) -  22 February 2025 








#### New Features

- feat: Add standardized message with subject getter  ([05bc3e5](https://github.com/Zasco/javascript-framework/commit/05bc3e563a78def930bc6579a877b8e15f21782a))
- feat: Export log levels config  ([490ca8c](https://github.com/Zasco/javascript-framework/commit/490ca8ce12d99920689c6ea60077648043c8e098))
- feat: Add type definitions for log levels  ([408a6ba](https://github.com/Zasco/javascript-framework/commit/408a6ba0f67e1c4eca6f92f42411ff5f153637a5))
- feat: Export log level type definition  ([f9951bb](https://github.com/Zasco/javascript-framework/commit/f9951bb54404ec2d0fbca4fd9aaf864409e4fe1b))
- feat(ConsoleLogger): add log level support  ([f51d275](https://github.com/Zasco/javascript-framework/commit/f51d275a5f04a9a5072b8b4da62a725248d49792))
- feat(ConsoleLogger): implement log level handling  ([a1745a8](https://github.com/Zasco/javascript-framework/commit/a1745a83a94cf5526780213b855b33f3bd1a2f00))
- feat(LogHelper): add disabled direct console log  ([ee85207](https://github.com/Zasco/javascript-framework/commit/ee852074e2f17c3e5aee91811f9e8f2c67f462fc))
- feat: add error to log levels mapping method  ([9ca76ef](https://github.com/Zasco/javascript-framework/commit/9ca76ef9e55a6fa3b0f3688a9e50a167278e734f))
- feat: add error message formatting to console logger  ([a6e3917](https://github.com/Zasco/javascript-framework/commit/a6e3917381a669a62de9e4d53bfd3e4d398e77a9))
- feat: integrate LogHelper into error handling  ([87bf327](https://github.com/Zasco/javascript-framework/commit/87bf3271587b5ac4d8e7e0374d5d1b3e6e24e29b))
- feat: add Response object exposure method  ([5ff29d8](https://github.com/Zasco/javascript-framework/commit/5ff29d801096b5b3bc2179087a9f336ce201af4b))
- feat: add Response logging utility method  ([3bdb442](https://github.com/Zasco/javascript-framework/commit/3bdb442bbcad1d311e247c91210ee4db0282dda5))
- feat: add error levels configuration  ([54b2aea](https://github.com/Zasco/javascript-framework/commit/54b2aea684981aaa705ba21efe1eb33208815236))

#### Fixes

- fix(LogHelper): Add missing level parameters  ([d60cfca](https://github.com/Zasco/javascript-framework/commit/d60cfca4f7576312e1fae0b090a012b49ce09bc9))
- fix(LogHelper): add missing level parameters  ([a22efed](https://github.com/Zasco/javascript-framework/commit/a22efed9b7dbac53e1793cc8acac3700fb375c9b))
- fix: prevent an infinite loop in LogHelper.output()  ([e76a1fa](https://github.com/Zasco/javascript-framework/commit/e76a1fab5ad9019b033e2a63980839379c0322fa))
- fix(ErrorUtils): move DISPLAY_STACK  ([24f4050](https://github.com/Zasco/javascript-framework/commit/24f405028e529b48515cac8820e52875b77c10b9))
- fix(ConsoleLogger): use buildFormattedErrorMessage()  ([66192d6](https://github.com/Zasco/javascript-framework/commit/66192d67371d9160c298c733bf7feb0d1d00932f))

#### Chores And Housekeeping

- chore: add Node.js specific gitignore rules  ([f283e2a](https://github.com/Zasco/javascript-framework/commit/f283e2a82befadce0f4f438fba39b002d6a187e2))
- chore: add coding-utils as dev dependency  ([4f3c59f](https://github.com/Zasco/javascript-framework/commit/4f3c59f2429b90692cd3e0a1db776df8eaddb5da))
- chore: add auto-release config file  ([e667d28](https://github.com/Zasco/javascript-framework/commit/e667d28ad03c2a82822972678178ea107e134b46))

#### Documentation Changes

- docs: Add missing JSDoc @since tags  ([c529e19](https://github.com/Zasco/javascript-framework/commit/c529e19bce3fe2799228f55cf2077ab1fcc3d7e6))
- docs: remove duplicated JSDoc for log() method  ([81f8993](https://github.com/Zasco/javascript-framework/commit/81f89933c51c38283539db3436932c097a06093a))
- docs: add missing @since JSDoc tags  ([0cccd69](https://github.com/Zasco/javascript-framework/commit/0cccd69ef91326e59b0907a92025e066ce6323d6))
- docs(fullDisplay): Add TODO for summary message handling  ([b8e2159](https://github.com/Zasco/javascript-framework/commit/b8e21595cc0bf33e04642c164855fd8d09e8e268))
- docs(LogHelper.log): update JSDoc  ([2cab227](https://github.com/Zasco/javascript-framework/commit/2cab2271cd428f3df268060c26f0495e567abb56))
- docs(LogHelper.fullDisplay): Use LogLevel type  ([4f1afd3](https://github.com/Zasco/javascript-framework/commit/4f1afd30cf1c0e68f29628d3d925123aa99a8c43))
- docs: improve JSDoc @returns definitions  ([13dcdef](https://github.com/Zasco/javascript-framework/commit/13dcdefb3b5ef95d653362639d86eb071ab1f3d3))
- docs(types): add type definitions for error levels  ([1d250dd](https://github.com/Zasco/javascript-framework/commit/1d250dd13d8d1acd11c586d6c98ecc0051561b07))
- docs: improve JSDoc consistency and readability  ([1465deb](https://github.com/Zasco/javascript-framework/commit/1465debebd32098138f1ac41de18e2f431043e6c))
- docs: fix JSDoc @since version placeholders  ([9b609cd](https://github.com/Zasco/javascript-framework/commit/9b609cdc359967613a43d2c40438f6236e1ae4db))
- docs: add TODO for error instance validation  ([4f76b8e](https://github.com/Zasco/javascript-framework/commit/4f76b8e61a8ba0f4d9f1e4bd24ecfec4bd63a71b))
- docs: improve exposeObject return type definition  ([4b9e463](https://github.com/Zasco/javascript-framework/commit/4b9e463de0772d509f464efec5150282316d4c74))

#### Refactoring and Updates

- refactor: Create and use log levels config  ([49853d2](https://github.com/Zasco/javascript-framework/commit/49853d287b9a30ab2fffcc60fd7e9311b21b4b10))
- refactor: Add level parameter to log method  ([b9b3784](https://github.com/Zasco/javascript-framework/commit/b9b37842e43c94077f44cf1fae4d0895b839c829))
- refactor: Simplify the log levels type definition  ([ab5b6fd](https://github.com/Zasco/javascript-framework/commit/ab5b6fd2a4022c706ee164bc3a10b11699991190))
- refactor(config): move to src/ folder  ([f91b88a](https://github.com/Zasco/javascript-framework/commit/f91b88ac95a056d44a1c65248204d7da5ac1d860))
- refactor(entity): move to src/ folder  ([d839bed](https://github.com/Zasco/javascript-framework/commit/d839bed31417c49e64bf8da55dcdcd73cc7efac5))
- refactor(interface): move to src/ folder  ([979d82e](https://github.com/Zasco/javascript-framework/commit/979d82e31591b72a886cffbe827f41a11357a3ec))
- refactor(utils): move to src/ folder  ([5fffb16](https://github.com/Zasco/javascript-framework/commit/5fffb16b451255c6c7f8d1f1811c80722e3e549b))
- refactor(entities): rename folder to plural form  ([f8d22a5](https://github.com/Zasco/javascript-framework/commit/f8d22a58f4ec95bab2b070d77f5413394932b208))
- refactor(interfaces): rename folder to plural form  ([2e67522](https://github.com/Zasco/javascript-framework/commit/2e67522ff58d521445167a1fbf042e49ef9ab4b9))
- refactor(LogHelper): delegate console logging  ([585caf3](https://github.com/Zasco/javascript-framework/commit/585caf39c8c3784c6566941d95e4521e641ab9a4))
- refactor: improve conditions order in error handling  ([3d0c59b](https://github.com/Zasco/javascript-framework/commit/3d0c59b661f43e793104e3f78069ca88d73bec5d))
- refactor(ErrorUtils)!: make name parameters required  ([949be00](https://github.com/Zasco/javascript-framework/commit/949be0045c10e6631c5718da8ede701beb7101d9))


#### Tidying of Code eg Whitespace

- style: adopt JSDoc layout convention  ([2f1e4e6](https://github.com/Zasco/javascript-framework/commit/2f1e4e63e9bee272ace04581c152ae03edcf9576))
- style(index): add missing space between imports  ([fa63ddf](https://github.com/Zasco/javascript-framework/commit/fa63ddf5216d93a1cd03883bd51fc85bd051cacb))
- style: adopt JSDoc layout convention  ([774a60d](https://github.com/Zasco/javascript-framework/commit/774a60dc4d425aab505b87db1563e1326380ce0e))
- style: implement code layout conventions  ([3742886](https://github.com/Zasco/javascript-framework/commit/374288672f1834b48126ad1c74b12aaff4e27262))
- style: remove needless line return  ([a70a18c](https://github.com/Zasco/javascript-framework/commit/a70a18c35b19fc1ba208eae7832e4c8d5b0d1b39))
- style: replace VSCode by VS Code  ([3a86e2f](https://github.com/Zasco/javascript-framework/commit/3a86e2f0a68563023fb1ac43cc978a5864f930ff))
- style: implement JSDoc spacing convention  ([5802211](https://github.com/Zasco/javascript-framework/commit/5802211fcc2a88038ca3f6a4f4e64c8a089c4557))
- style: implement line ending convention  ([ae172ed](https://github.com/Zasco/javascript-framework/commit/ae172ed2adeb97d68bc970c22df9c59768e6764d))
- style: remove space in getStdSubjectMessage()  ([93387d9](https://github.com/Zasco/javascript-framework/commit/93387d93d8da205e85d34332b9b66451d0a49b74))
- style: standardize package.json indentation  ([f00fa9b](https://github.com/Zasco/javascript-framework/commit/f00fa9bf7b0dae44eb492aca74694f56bfd638b3))
- style: implement package.json ordering convention  ([1919693](https://github.com/Zasco/javascript-framework/commit/1919693a788d69221f743392d39d393b7c624d4a))
- style: standardize package.json indentation  ([97807c6](https://github.com/Zasco/javascript-framework/commit/97807c648cae11972c352691429e76a5b1963277))


#### General Changes

- Move error handler and log helper to "utils/" folder  ([70266d6](https://github.com/Zasco/javascript-framework/commit/70266d6da8a56a1789a9ef4afde1e5ae65526ec9))
- Improve index.js organisation  ([cc8c6c4](https://github.com/Zasco/javascript-framework/commit/cc8c6c470cb1c1b70780cefdc037ed9c3f708736))
- Add error utils  ([8675590](https://github.com/Zasco/javascript-framework/commit/8675590bc03dcc75e366a12d6af672d1d0e5694a))
- Remove not required @ts-check  ([90f69d5](https://github.com/Zasco/javascript-framework/commit/90f69d5fe0268039fb4c12e396735648b893bcc7))
- Use error utils in logger interface  ([c9219f0](https://github.com/Zasco/javascript-framework/commit/c9219f0624791f20faf748e075bec90b2f26cfbf))
- refactor!: move getStdSubjectMessage() from handler to utils  ([e363e25](https://github.com/Zasco/javascript-framework/commit/e363e25d3de1ddc6a750e56260185859d66c2c4e))
- refactor!: move buildConsolidatedMessage() to utils  ([d63c477](https://github.com/Zasco/javascript-framework/commit/d63c4772f974551f8a92d6bbe083151b7c712fea))
- refactor!: move exposeObject() from helper to utils  ([d801058](https://github.com/Zasco/javascript-framework/commit/d801058338d0ae356da67bc411389d606031cdd6))
- refactor!: extract error levels to separate config  ([121ff54](https://github.com/Zasco/javascript-framework/commit/121ff54e4e38708ec72809977bdade7dc638595f))
- build: use coding-utils auto-release script  ([a918471](https://github.com/Zasco/javascript-framework/commit/a9184718163ae00f0a7d6af0de22cca96f14595d))
- Release version 0.0.2  ([eaf02e1](https://github.com/Zasco/javascript-framework/commit/eaf02e1345477f14ae5133c12cfc208e8ecda271))

### 0.0.1















#### General Changes

- Initial commit  ([95f7e71](https://github.com/Zasco/javascript-framework/commit/95f7e716b9245af5971375eab7f4cf6a2c4c294a))
- Add error handler  ([f3092fc](https://github.com/Zasco/javascript-framework/commit/f3092fca065943959894744a160d688a77981f85))
- Adder log helper and logger interface  ([bb1d159](https://github.com/Zasco/javascript-framework/commit/bb1d15952c93bc4aea849f2f9ba4db1d2ad230a1))
- Add console logger  ([56946fc](https://github.com/Zasco/javascript-framework/commit/56946fc2202639d4e1401ed1033d2e597a28fafe))
- Added package index  ([9b03f08](https://github.com/Zasco/javascript-framework/commit/9b03f08ae8f75067e7645548139fb2c214a03014))
- Added package.json  ([3aeabff](https://github.com/Zasco/javascript-framework/commit/3aeabff653f2c11dc5527604d1a71d50e0db0263))

