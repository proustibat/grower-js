'use strict';
module.exports = {
    local : {
        path: '<%= config.host.local %>',
        app: '<%= config.browser || \'Chrome\' %>'
    },
    github: {
        path: 'http://<%= gitinfo.local.branch.current.currentUser %>.github.io/<%= pkg.name %>',
        app: '<%= config.browser || \'Chrome\' %>'
    }
};