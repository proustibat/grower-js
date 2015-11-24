define('main',[
    'app/module'
], function(Module){
    "use strict";

    $('h1').html( 'Hello Main !' );

    var fooModule = new Module();
    fooModule.init( $('.foo') );

    var barModule = new Module();
    barModule.init( $('.bar') );
});


$(document).ready(function() {
    'use strict';
    require( ['main'] );
});
