'use strict';
module.exports = {
    options: {
        forever: false
    },
    configs: {
        files: [
            '<%= config.gruntfile %>',
            '<%= config.dir_grunt %>/**/*.js'
        ],
        options: {
            reload: true
        }
    },
    app: {
        files: '<%= config.root_src %>/<%= config.dir_js %>/**/*.js',
        tasks: ['newer:uglify:app_development']
    },
    vendors: {
        files: [
            '<%= bower.directory %>/**/*.js',
            '!<%= bower.directory %>/_bower.js',
            '<%= bower.directory %>/**/*.css',
            '!<%= bower.directory %>/_bower.css',
            '<%= config.root_src %>/<%= config.dir_vendors %>/**/*.js'
        ],
        tasks: ['newer:bower_concat:dev', 'newer:uglify:vendors_dev']
    }
};