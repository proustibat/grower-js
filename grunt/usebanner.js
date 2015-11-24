'use strict';
module.exports = {
    taskName: {
        options: {
            position: 'top',
            banner: '/*! <%= pkg.title %> - <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= pkg.license %> */\n',
            linebreak: false
        },
        files: {
            src: [
                '<%= config.root_public %>/<%= config.dir_js %>/**/*.js',
                '<%= config.root_public %>/<%= config.dir_vendors %>/**/*.js' ]
        }
    }
};