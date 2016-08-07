# AngularJS TS

> A starting point for building web applications with AngularJS 1.5 using TypeScript, JSPM and PostCSS.


## Prerequisites

- [Node.js](https://nodejs.org/en/download/).
- [npm](https://www.npmjs.com/), installed with Node.js.
- [jspm](http://jspm.io/), a package manager for SystemJS.


## Install dependencies

#### 1) Check Node.js version.
```sh
node --version
```
The version should be at or above 6.x.

#### 2) If you don't have Node.js intalled go to [nodejs](https://nodejs.org/en/download/) and install the appropiate version or use [nvm](http://www.sergiolepore.net/2014/06/30/nvm-instalando-y-usando-node-version-manager/) (Recommended).

#### 3) Install the workspace `npm` dependencies.
```sh
# cd to your project folder
npm install
```

#### 4) Install `JSPM` globally.
```sh
# cd to your project folder
npm install jspm -g
```
This lets you run `jspm` from the command line.

#### 5) Install `jspm` dependencies.
```sh
# cd to your project folder
jspm install
# answer yes to all questions
```
This install packages used in the application. jspm modify src/config.js file. Please fix this file using git

#### 6) (Development) Install a manager for TypeScript definitions `typings`.
You can use `typings` for intellisense (I use this in VScode).

```sh
# install typings globally
npm install typings -g

# cd to your project folder
typings install
```
This create a typings folder which you can reference in your JavaScript files to get intellisense.


## Workflow

### Development workflow

#### Static server with live reload
```sh
# cd to your project folder
npm run dev
# After this, a message indicate the url to run the application
```
This create a server using [browser-sync](https://www.npmjs.com/package/browser-sync) to serve the application in development environment.  
The browser reloads the app when any file change.

#### Lite server
:warning: **Important**: Avoid opening the application in multiple browser windows to improve performance in development.
If you like open in various windows, use a lite server:

```sh
# cd to your project folder
npm run lite-serve
# After this, a message indicate the url to run the application
```
This create a server for the application in a diferent port without hot reload option.

#### Watch css files
```sh
# cd to your project folder
npm run watch
```

This task process css files using `PostCSS`. All files in `src/styles` folder are compiled in a single file and copy in `dist`
folder. The `*.css` files in `src/app` folder (also called component styles) are compiled individually in `dist/app` folder preserving the file for each component folder with `*.build.css` suffix.

:warning: **Important**: Use this script if you only like inspect css files and don't run `dev` script.

### Test workflow
```sh
# cd to your project folder
npm run build-test
```
Put all in dist folder ready to be served.

### Production workflow
```sh
# cd to your project folder
npm run build
```
Put all in dist folder ready for production.

### Others scripts

To clean environment variables and distribution folders type:

```sh
# cd to your project folder
npm run clean
```

To run eslint in console type:

```sh
# cd to your project folder
npm run eslint
```

To run tslint in console type:

```sh
# cd to your project folder
npm run tslint
```

To run all linters in console type:

```sh
# cd to your project folder
npm run lint
```

To update npm dependencies after change a version in packages

```sh
# cd to your project folder
npm run update
```


## Styling

#### CSS Framework **[niduscss-framework](https://github.com/nimedev/niduscss-framework)**.

#### Naming conventions **[SuitCSS naming conventions](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)**.

## Angular HTML5 mode or pretty URLs

This mode is set by default. If use it consider this:

- All call related to links like `href="/link/to/anyware"`, `$location.path('/link/to');`, etc. result as a hit to server. Use it only for SEO porpuses.
- To avoid unnecesary hits to server (SPA) you can use `ui-sref="/link/to"` in html files or `$state` service in angular files.


## Editors
This project is configured to use with `VScode`. Also contain pre-configured task for development. See `.vscode` folder to explore the options.


## [Contributing](CONTRIBUTING.md)


## [Changelog](CHANGELOG.md)


## [License](LICENSE.md)