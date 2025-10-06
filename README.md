# Custom Element Part Assigment Utilties

## Overview
Utilities for adding `part` and `exportparts` attributes to custom HTML elements, using classes, ids, tags and other element properties.


## Quick Start
```js
import { assignClassAndIdToPart} from 'ce-part-utils';

const customElement = document.querySelector('custom-element');
assignClassAndIdToPart(customElement.shadowRoot);
```

## Links
### Demo:
https://catapart.github.io/ce-part-utils/
### Documentation:
https://catapart.github.io/ce-part-utils/documentation
### Automated Testing:
https://catapart.github.io/ce-part-utils/test-runner

## Repo Notes
This section provides instructions for how to use the repo to develop the library.

### Installation
Install the repo using a package manager:
```npm
npm install
```

### Configuration
#### `tsconfig.json`
Default from vite build
#### `vite.config`
Defines custom inputs and outputs to exclude tests and create both es and umd modules
#### `vite.config.tests.ts`
Defines custom inputs and outputs to include tests and output to the test-runner directory

### Scripts
#### `dev`
Use `vite` to begin a server with Hot Module Replacement, which will automatically reload any time a change in the source files is saved.
#### `build`
Use `vite` to transpile the source code into code chunks or library files. Files are output into `dist` directory by default.
#### `preview`
Use `vite` to serve the `dist` directory. Useful for non-library projects, where the `dist` directory will contain an `index.html` file, or other browse-able entry point.
#### `test:build`
Use `vite` to transpile all files with a `.tests.[ts|js|tsx|jsx]` extension into the `test-runner` subdirectory. Creates javascript files that can be served to the `<test-runner>` and `<code-tests>` components.
#### `test`
Runs the `test:build` script and then serves the library website using `serve`, to prevent module resolution issues that occur when running the `dev` script.
#### `release`
Use `vite` to transpile the source code and then use `changesets` to begin the publication procedure for the repo environment (github or gitlab).  
If code script is run during CI/CD for the `main` branch, the library is published. Otherwise, the library is linted and compiled.

### Publishing
#### Releasing with `changesets`
##### Github Steps
1. **Run `changeset` command**: `npx @changesets/cli` | `bun ` | `pnpm changesets` | `yarn changesets`
1. **Log version info**: Add a message that describes the changes in this version
1. **Check in**: Push changes to repo
1. **Merge**: Merge branch into `main`
1.  **Merge Automation Branch**: Await repo automation's creation of a new pull request from a newly created branch. Accept the pull request, merging the branch into main.

After automation completes, the new version will be published to `NPM`.

##### Gitlab Steps
// TODO: Fix these steps
1. **Run `changeset` command**: `npx @changesets/cli` | `bun ` | `pnpm changesets` | `yarn changesets`
1. **Log version info**: Add a message that describes the changes in this version
1. **Check in**: Push changes to repo
1. **Merge**: Merge branch into `main`
1.  **Merge Automation Branch**: Await repo automation's creation of a new pull request from a newly created branch. Accept the pull request, merging the branch into main.

After automation completes, the new version will be published to `NPM`.

### Dependencies
#### Library Dependencies
*none*
#### Development Dependencies
##### [`typescript`](https://www.typescriptlang.org/)
Type checking
##### [`@changesets/cli`](https://github.com/changesets/changesets)
Publishing and version management
##### [`vite`](https://vite.dev/)
Rapid development. Hot Module Reload and transpiliation
##### [`vite-plugin-dts`](https://www.npmjs.com/package/vite-plugin-dts)
Create types for es and umd modules on build
##### [`@rollup/plugin-terser`](https://www.npmjs.com/package/@rollup/plugin-terser)
Minification
##### [`@magnit-ce/test-runner`](https://github.com/catapart/magnitce-test-runner)
Automated tests
##### [`glob`](https://www.npmjs.com/package/glob)
Search for files that are tests
##### [`serve`](https://www.npmjs.com/package/serve)
Serve project directory without module resolution conflicts between vite and test-runner

# Warning - Non-production package
This project is being prepared for production, but is not ready to be used as a dependency for anything. There will be breaking changes and unrecoverable states. Do not use until this warning has been removed.

When the library reaches the `1.0.0` designation, that will be a production package. From that point, you can use the major version number (`1` in `1.0.0`) to recognize when breaking changes are introduced.