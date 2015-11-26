Grower-js [![Code Climate](https://codeclimate.com/github/proustibat/grower-js/badges/gpa.svg)](https://codeclimate.com/github/proustibat/grower-js) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/proustibat/grower-js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
========

> A simple boilerplate for frontend developers for building modular web apps or sites with [Node.js](https://nodejs.org/en/), [Bower](http://bower.io/), [RequireJS](http://requirejs.org/) (amd) and [Grunt](http://gruntjs.com/).

___


`⚠``⚠``⚠``⚠``⚠``⚠``⚠``⚠``⚠``⚠``⚠`
---
/!\ WARNING ! This project is in progress, use at you own risk! /!\
`⚠``⚠``⚠``⚠``⚠``⚠``⚠``⚠``⚠``⚠``⚠`
---



<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Features](#features)
    - [Include all dependencies](#include-all-dependencies)
    - [Workflow Automation](#workflow-automation)
    - [Flexibility](#flexibility)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Getting started](#getting-started)
  - [Running boilerplate](#running-boilerplate)
  - [Available tasks](#available-tasks)
- [Working on your app](#working-on-your-app)
  - [Launching Watcher](#launching-watcher)
  - [Default folder tree](#default-folder-tree)
  - [How to load javascript in a page ?](#how-to-load-javascript-in-a-page-)
  - [What does a module look like?](#what-does-a-module-look-like)
  - [Create a new module](#create-a-new-module)
  - [Add a frontend library](#add-a-frontend-library)
    - [With Bower](#with-bower)
    - [Without Bower](#without-bower)
- [Advanced Usage](#advanced-usage)
  - [Customize config.json](#customize-configjson)
  - [Customize grunt tasks](#customize-grunt-tasks)
  - [Add grunt tasks](#add-grunt-tasks)
- [Examples](#examples)
- [FAQ/Troubleshotting](#faqtroubleshotting)
- [Contribute](#contribute)
- [Author](#author)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

___

## Features
#### All dependencies included
* **Npm** is the tool provided with Node.JS. It is used to get tools and frameworks while automatically resolving their dependencies via the package.json file.
* **Bower** simplify dependency management. It's a package manager for frontend libraries which are listed in a bower.json file. 

#### Workflow Automation
* **Grunt** is a task runner. It can be set to automatically load plugins. Those tasks combine and minify javaScript files; check code for errors; compile SASS to CSS.
* **Grower-JS** can run essential tasks for a frontend developer : watch changed files to rerun automatically tasks, run build task to generate files to deploy,  check code quality with jsHint and analyze code complexity to get a better maintainability.

#### Flexibility
* A config.json file allows to change most of paths and folders either for the architecture in source files or for the generated files.
* Easily customizable: can integrate lots of libraries which can be installed with Bower tool or manually added in a vendors directory. By default, it includes jQuery and Underscore.js, which could be uninstalled if those aren't necessary.
* No framework, no skeleton. The core app hasn't to follow the rules of a base structure. All types of sites or web app can be developed from this kickstarter.

___

## Prerequisites
* Node.js & [npm](https://docs.npmjs.com/getting-started/what-is-npm)
* [grunt-cli](https://github.com/gruntjs/grunt-cli)

## Installation
1. Clone git repository (or download sources) :
    ```shs
    $ git clone git@github.com:proustibat/grower-js.git
    ```
    
2. Run *npm install* script
    ```sh
    $ npm install 
    ```

Npm will download all plugins listed in the packages.json file then a bower install command will download all libraries listed in the bower.json file.  

## Getting started
### Running boilerplate
```sh
$ grunt prod 
```
It launches automatically a browser at for example [http://localhost/grower-js/public](http://localhost/grower-js/public) after all tasks have run.

### Available tasks
```sh
$ grunt availabletasks 
$ grunt dev 
$ grunt prod 
$ grunt analyze 
$ grunt open-browser 
$ grunt deploy-github 
```
## Working on your app

### Launching Watcher
```sh
$ grunt dev 
```
or simply :
```sh
$ grunt  
```
### Default folder tree
```
|-- grower-js
    |-- .bowerrc
    |-- .gitignore
    |-- .jshintrc
    |-- bower.json
    |-- config.json
    |-- Gruntfile.js
    |-- LICENSE
    |-- package.json
    |-- README.md
    |-- grunt
    |   |-- availabletasks.js
    |   |-- bower_concat.js
    |   |-- complexity.js
    |   |-- jshint.js
    |   |-- open.js
    |   |-- requirejs.js
    |   |-- uglify.js
    |   |-- usebanner.js
    |   |-- watch.js
    |-- public
    |   |-- index.html
    |   |-- js
    |   |   |-- grower-js-1.0.0.min.js
    |   |   |-- grower-js-1.0.0.min.js.map
    |   |-- vendors
    |       |-- vendors.min.js
    |-- src
        |-- js
        |   |-- main.js
        |   |-- app
        |       |-- module.js
        |-- vendors
            |-- put-vendor-here.js
```


### How to load javascript in a page ?
For information use: 
```html
    ...
    <script src="vendors/vendors.min.js"></script> 
    <script src="js/grower-js-1.0.0.min.js"></script>
</body>
```

### What does a module look like? 
This is the "module" demo :
 ```
 define('app/module',\[
 
 \], function\(\)\{
     "use strict";
     return function\(\) \{
         return \{
             message: 'Hello Module\!',
             element: null,
             init: function\( element \) \{
                 console.log\( 'Module.init : ', element \);
                 this.element = element;
                 this.element.html\( this.message \);
                 var button = $\('<button type="button">Click Me\!</button>'\);
                 this.element.append\( button \);
                 $\(button\).on\( 'click', \_.bind\( this.onClick, this \) \);
                 $\(button\).trigger\( 'click' \);
             },
             onClick: function\( e \) {
                 console.log\( 'Module.onClick' \);
                 e.preventDefault\(\);
                 e.stopPropagation\(\);
                 this.element.css\(\{
                     color: '\#'\+\(\(1\<\<24\)\*Math.random\(\)|0\).toString\(16\),
                     backgroundColor: '\#'\+\(\(1\<\<24\)\*Math.random\(\)|0\).toString\(16\)
                 \}\);
             \}
         \};
     \};
 \}\);
 ```
Note that returning a function is a way to access the "new" constructor as below.

This is the "main" module in the demo : 
```js
define('main',\[                     \/\/ Module name
    'app/module'                    \/\/ Path to module file required 
\], function(Module){                \/\/ Alias for the class name of the required module
    "use strict";

    $('h1').html( 'Hello Main !' );

    var fooModule = new Module();   \/\/ Instanciation
    fooModule.init( $('.foo') );    \/\/ init call method

    var barModule = new Module();
    barModule.init( $('.bar') );
});
```
The "main" module instanciates 2 "Module" objects and call its "init" method.

### Create a new module
...

### Add a frontend library
#### With Bower
```sh
$ bower install vendor-lib.js --save 
```
#### Without Bower
Download library file in /src/vendors. It will automatically compile grunt dev or grunt
## Advanced Usage
### Customize config.json
```json
{
  "root_src": "src",
  "root_public": "public",
  "dir_vendors": "vendors",
  "dir_js": "js",
  "dir_css": "css",
  "gruntfile": "Gruntfile.js",
  "pkgjson_file": "package.json",
  "bowerrc_file": ".bowerrc",
  "dir_grunt": "./grunt",
  "output_js_app": false,
  "output_js_vendors": false,
  "host": {
    "local": "http://localhost/grower-js/public"
  },
  "global_namespace": "grwr",
  "browser": "Chrome"
}
```
### Customize grunt tasks
> TODO

* availabletask
* bower_concat
* analyze with complexity 
* gh-pages and deploy-github
* jshint
* open
* requirejs
* uglify
* usebanner
* watch

### Add grunt tasks
> // TODO

## Examples
**Single one page app**
> // TODO

**Multi-pages site**
> // TODO

**Simple templating with Underscore**
> // TODO 

## FAQ/Troubleshotting
**Localhost / open-browser**
> // TODO

* Check wamp configuration
* Check root location
* Check browser configuration in config.json

**RequireJS / Almond**
> // TODO

**// Todo**
> // TODO

## Contribute
* Issue Tracker: https://github.com/proustibat/grower-js/issues
* Source Code: https://github.com/proustibat/grower-js

## Author
**Jennifer Proust**
* [github/proustibat](https://github.com/proustibat)
* [twitter/proustibat](http://twitter.com/proustibat)

## License
[GPL-3.0 License](http://www.gnu.org/licenses/gpl-3.0.en.html/) © Proustibat, Inc. 2015
