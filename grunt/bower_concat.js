'use strict';
module.exports = {
    dev: {
        dest: '<%= bower.directory %>/_bower.js',
        cssDest: '<%= config.root_public %>/<%= config.dir_css %>/bower.css',
        exclude: [
            'almond'
        ],
        dependencies: {
            'underscore': 'jquery'
        },
        mainFiles: {}
    },

    prod: {
        dest: '<%= bower.directory %>/_bower.js',
        cssDest: '<%= config.root_public %>/<%= config.dir_css %>/bower.css',
        exclude: [
            'almond',
            'requirejs'
        ],
        dependencies: {
            'underscore': 'jquery'
        },
        mainFiles: {}
    }
};