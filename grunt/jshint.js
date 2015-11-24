'use strict';
module.exports = {
    options: {
        jshintrc: '.jshintrc',
        reporter: require( 'jshint-stylish' )
    },
    files: [
        '<%= config.gruntfile %>',
        '<%= config.root_src %>/<%= config.dir_js %>/**/*.js'
    ]
};