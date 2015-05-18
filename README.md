vincentbriglia.com
======================

[![Build Status](https://travis-ci.org/vincentbriglia/www.vincentbriglia.com.svg?branch=master)](https://travis-ci.org/vincentbriglia/www.vincentbriglia.com)
[![Dependency Status](https://gemnasium.com/vincentbriglia/www.vincentbriglia.com.svg)](https://gemnasium.com/vincentbriglia/www.vincentbriglia.com)

## Features

  * Use ES6 with Angular 1.3
  * Use ES6 Modules via SystemJS and ES6 Module Loader Polyfill
  * Manage development and production workflow with JSPM, SystemJS builder and Gulp

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

### Travis CI integration

in order to add your encrypted keys you have to install the travis cli

below is a crude explanation, if it makes no sense, please go to [the official guide](https://github.com/jspm/jspm-cli/wiki/Registries) for jspm registries

```bash
$ gem install travis
$ travis login
```

#### Divshot

in order to add the DIVSHOT key you have to do

```bash
$ sudo npm install -g divshot-cli
$ travis encrypt DIVSHOT_AUTH="$(divshot auth:token)" --add
```

#### Github

if you're running off of a private repository from github

```bash
$ jspm registry config github
```
enter your credentials

```bash
$ jspm registry export github
```
from that output, copy the key after registries.github.auth
```bash
$ travis encrypt JSPM_AUTH=COPYHERE --add
```




Todo

  * jspm configuration
  * travis configuration & local rubygem for secure hash generation
  * Unit tests using mocha
  * e2e tests using protractor & selenium
  * Sauce Labs integration
