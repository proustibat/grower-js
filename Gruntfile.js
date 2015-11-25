/*global module:false*/
module.exports = function( grunt ) {
    'use strict';

    // Measures the time each task takes
    require( 'time-grunt' )( grunt );

    var config = grunt.file.readJSON( 'config.json' );

    // CONFIGURATION =================================================/
    grunt.initConfig({

        // METADATA =================================================/
        config: config,
        pkg: grunt.file.readJSON( config.pkgjson_file ),
        bower: grunt.file.readJSON( config.bowerrc_file ),
        //bowerjson: grunt.file.readJSON( bower.json ),

        // INDIVIDUAL CONFIG FOR EACH TASKS =========================/

        // Validate files with JSHint
        jshint: require( config.dir_grunt + '/jshint' ),

        // Bower components concatenator for Grunt
        bower_concat: require( config.dir_grunt + '/bower_concat' ),

        // Minify files with UglifyJS
        uglify: require( config.dir_grunt + '/uglify' ),

        // Optimize RequireJS projects using r.js
        requirejs: require( config.dir_grunt + '/requirejs' ),

        // Run tasks whenever watched files change
        watch: require( config.dir_grunt + '/watch' ),

        // Adds a simple banner to files
        usebanner: require( config.dir_grunt + '/usebanner' ),

        // Analysis grunt task
        complexity: require( config.dir_grunt + '/complexity' ),

        // Open urls and files
        open: require( config.dir_grunt + '/open' ),

        // List available Grunt tasks & targets.
        availabletasks: require( config.dir_grunt + '/availabletasks' )

        // Publish to GitHub pages
        /*'gh-pages': {
            options: {
                base: 'public'
            },
            src: ['**']
        }*/

    });



    // LOAD DEPENDENT TASKS ========================================/
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-bower-concat' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-requirejs' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-newer' );
    grunt.loadNpmTasks( 'grunt-banner' );
    grunt.loadNpmTasks( 'grunt-available-tasks' );
    grunt.loadNpmTasks( 'grunt-gh-pages' );



    // TASKS =======================================================/
    grunt.registerTask( 'default', [ "dev" ] );

    // Production.
    grunt.registerTask( 'prod', [
        'jshint',
        'bower_concat:prod',
        'uglify:vendors_prod',
        'requirejs:production',
        'usebanner',
        'open-browser'
    ]);

    // Development
    grunt.registerTask( 'dev', [
        'jshint',
        'bower_concat:dev',
        'uglify:vendors_dev',
        'uglify:app_development',
        'watch'
    ]);
    


    // INDEPENDENT TASKS ===========================================/

    // Run it to analyze js complexity (http://jscomplexity.org/complexity)
    grunt.registerTask( 'analyze', 'Analyze js files complexity (http://jscomplexity.org/complexity)', function () {
        grunt.loadNpmTasks( 'grunt-complexity' );
        grunt.task.run( 'complexity' );
    });

    // Run it to open browser in local environment
    grunt.registerTask( 'open-browser', 'Open browser in local environment', function() {
        grunt.loadNpmTasks( 'grunt-open' );
        grunt.task.run( 'open:local' );
    });
};
