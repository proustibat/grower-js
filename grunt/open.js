'use strict';
module.exports = {
    local : {
        path: '<%= config.host.local %>',
        app: '<%= config.browser || \'Chrome\' %>'
    }
};