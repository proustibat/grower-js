Grower-js
========
> A simple boilerplate for frontend developers for building modular web apps or sites with Node.js, Bower, RequireJS (amd) and Grunt.

#### Include all dependencies 
* **Npm** is the tool provided with Node.JS. It is used to get tools and frameworks while automatically resolving their dependencies via the package.json file.
* **Bower** simplify dependency management. It's a package manager for frontend libraries which are listed in a bower.json file. 

#### Workflow Automation
* **Grunt** is a task runner. It can be set to automatically load plugins. Those tasks combine and minify javaScript files; check code for errors; compile SASS to CSS.
* **Grower-JS** can run essential tasks for a frontend developer : watch changed files to rerun automatically tasks, run build task to generate files to deploy,  check code quality with jsHint and analyze code complexity to get a better maintainability.

#### Flexibility
* A config.json file allows to change most of paths and folders either for the architecture in source files or for the generated files.
* Easily customizable: can integrate lots of libraries which can be installed with Bower tool or manually added in a vendors directory. By default, it includes jQuery and Underscore.js, which could be uninstalled if those aren't necessary.
* No framework, no skeleton. The core app hasn't to follow the rules of a base structure. All types of sites or web app can be developed from this kickstarter. 

## Table of Contents
*[DocToc](http://doctoc.herokuapp.com/)*

## Prerequisites
* Node.js & npm
* grunt-cli

## Installation
1. Clone git repository (or download sources) :
    ```sh
    $ git clone git@github.com:proustibat/grower-js.git
    ```
2. Run *npm install* script
    ```sh
    $ npm install 
    ```
Npm will download all plugins listed in the packages.json file then a bower install command will download all libraries listed in the bower.json file.  

## Start
### Running grower-js boilerplate
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
```
## Let's develop the web app
### Default folders structure
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
### Watcher
```sh
$ grunt dev 
```
or simply :
```sh
$ grunt  
```
### How is app called in the html page ?
For information use: 
```html
    ...
    <script src="vendors/vendors.min.js"></script>
    <script src="js/grower-js-1.0.0.min.js"></script>
</body>
```
### Create a new module
>> // TODO
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
* availabletask
* bower_concat
* complexity
* jshint
* open
* requirejs
* uglify
* usebanner
* watch

### Add grunt tasks
>> // TODO

## Running Demos
**Single one page app**
> // TODO

**Multi-pages site**
> // TODO

**Simple templating with Underscore**
> // TODO

## FAQ/Troubleshotting
**Localhost / open-browser**
>> // TODO
* Check wamp configuration
* Check root location
* Check browser configuration in config.json

**RequireJS / Almond**
>> // TODO

**// Todo**
>> // TODO

## Contribute
* Issue Tracker: https://github.com/proustibat/grower-js/issues
* Source Code: https://github.com/proustibat/grower-js

## Author
**Jennifer Proust**
* [github/proustibat](https://github.com/proustibat)
* [twitter/proustibat](http://twitter.com/proustibat)

## License
[GPL-3.0 License](http://www.gnu.org/licenses/gpl-3.0.en.html/) © Proustibat, Inc. 2015
