'use strict';
module.exports = {
    options: {
        base: '<%= config.root_public %>',
        push: true,
        message: 'Auto-generated commit with grunt-gh-pages',
        clone: '<%= config.dir_tmp %>/gh-pages'
    },
    src: ['**/*']
};