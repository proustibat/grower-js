define('app/module',[

], function(){
    "use strict";
    return function() {
        return {
            message: 'Hello Module!',
            element: null,
            init: function( element ) {
                console.log( 'Module.init : ', element );
                this.element = element;
                this.element.html( this.message );
                var button = $('<button type="button">Click Me!</button>');
                this.element.append( button );
                $(button).on( 'click', _.bind( this.onClick, this ) );
                $(button).trigger( 'click' );
            },
            onClick: function( e ) {
                console.log( 'Module.onClick' );
                e.preventDefault();
                e.stopPropagation();
                this.element.css({
                    color: '#'+((1<<24)*Math.random()|0).toString(16),
                    backgroundColor: '#'+((1<<24)*Math.random()|0).toString(16)
                });
            }
        };
    };
});
