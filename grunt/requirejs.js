'use strict';
module.exports = {
    production: {
        options: {
            baseUrl: '<%= config.root_src %>/js',
            include: ['main'],
            // take care this path depends on baseUrl depth path!
            name: '../../<%= bower.directory %>/almond/almond', // assumes a production build using almond
            out: '<%= config.root_public %>/<%= config.dir_js %>/<%= config.output_js_app || pkg.name + \'-\' + pkg.version %>.min.js',
            optimize: 'uglify2',
            generateSourceMaps: false,
            useStrict: true,
            namespace: '<%= config.global_namespace || \'grwr\' %>',
            findNestedDependencies: true,
            preserveLicenseComments: false,
            uglify2: {
                preserveComments: false,
                mangle: true,
                sourceMap: false,
                compress: {
                    drop_console: true,
                    warnings: false,
                    drop_debugger: true,
                    sequences: true,
                    dead_code: true,
                    conditionals: true,
                    booleans: true,
                    unused: true,
                    if_return: true,
                    join_vars: true
                }
            }
        }
    }
};