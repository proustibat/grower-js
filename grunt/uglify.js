'use strict';
module.exports = {

    vendors_prod: {
        options: {
            mangle: true,
            sourceMap: false,
            preserveComments: false,
            compress: {
                drop_console: true,
                warnings: false,
                drop_debugger: true
            }
        },
        files: {
            '<%= config.root_public %>/<%= config.dir_vendors %>/<%= config.output_js_vendors || \'vendors.min\'%>.js': [
                '<%= bower.directory %>/_bower.js',
                '<%= config.root_src %>/<%= config.dir_vendors %>/**/*.js'
            ]
        }
    },

    vendors_dev: {
        files: {
            '<%= config.root_public %>/<%= config.dir_vendors %>/<%= config.output_js_vendors || \'vendors.min\'%>.js': [
                '<%= bower.directory %>/_bower.js',
                '<%= config.root_src %>/<%= config.dir_vendors %>/**/*.js'
            ]
        }
    },

    app_development: {
        options: {
            mangle: false,
            sourceMap: true,
            sourceMapIncludeSources: true,
            compress: false,
            beautify: true,
            preserveComments: 'all'
        },
        files: {
            '<%= config.root_public %>/<%= config.dir_js %>/<%= config.output_js_app || pkg.name + \'-\' + pkg.version %>.min.js': [
                '<%= config.root_src %>/<%= config.dir_js %>/**/*.js'
            ]
        }
    }

};