'use strict';
module.exports = {
    default: {
        src: [
            '<%= config.root_src %>/<%= config.dir_js %>/**/*.js',
            '<%= config.dir_grunt %>/**/*.js'
        ],
        exclude: [],
        options: {
            breakOnErrors: true,
            errorsOnly: false,               // show only maintainability errors
            cyclomatic: [3, 7, 12],          // or optionally a single value, like 3
            halstead: [8, 13, 20],           // or optionally a single value, like 8
            maintainability: 90,
            hideComplexFunctions: false,     // only display maintainability
            broadcast: false                 // broadcast data over event-bus
        }
    }
};