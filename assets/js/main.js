var $container = $("#works-container").imagesLoaded( function() {
    $container.packery({});
    // BUG: when the container is clicked, the image is revealed and therefore we no longer click on the same element.
    // As a result, items with the "gigante" class stay big no matter what.
    $container.on( "click", ".item", function( event ) {
        // change size of item via class
        $( event.target ).toggleClass("gigante");
        // trigger layout
        $container.packery();
    });
});
