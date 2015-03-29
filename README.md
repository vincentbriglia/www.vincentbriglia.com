vincentbriglia.com
======================

## Features

  * Use ES6 with Angular 1.3
  * Use ES6 Modules via SystemJS and ES6 Module Loader Polyfill
  * Manage development and production workflow with JSPM, SystemJS builder and Gulp
  * Unit tests using mocha
  * e2e tests using protractor & selenium
  * TravisCI and Sauce Labs integration
  
## Installation

### Pre-Requirements

[Node.js](http://nodejs.org/download/) (requires node.js version >= 0.12.0)

Node.js comes with npm, one of the package managers required for this repository. We need to update that to latest, you can use npm to update itself.

```bash
$ sudo npm install -g npm
```

### Global Packages

```bash
$ sudo npm install -g gulp
$ sudo npm install -g jspm
$ sudo npm install -g protractor

```

#### Added Dependency for e2e tests

Protractor requires a webdriver and the stand-alone selenium jar, you can easily  install those as a global dependency using the link created by the global install of protractor.

```bash
$ sudo webdriver-manager update

```

## Additional Configuration

Todo

  * jspm configra
  * travis configuration & local rubygem for secure hash generation

