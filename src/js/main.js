/*jshint strict: true */
"use strict";
define('main',[
    'app/module'
], function(Module){

    $('h1').html( 'Hello Main !' );

    var fooModule = new Module();
    fooModule.init( $('.foo') );

    var barModule = new Module();
    barModule.init( $('.bar') );
});


$(document).ready(function() {
    require( ['main'] );
});
