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

$(function(){
    $(".header-text").typed({
        strings: [
            "Mariana Cute was born in Athens but works all over the place, never missing the chance for a creative getaway.",
            "Her art draws from a fantasy world located inside her head, but is also largely inspired by the world of advertising, branding and society’s consumerist mentality.",
            "She is a street artist, with an emphasis on the literal «street» aspect: she is passionate about creating works either in situ or with the purpose of leaving them on the streets.",
            "Partial to large scale and prone to exuberant statements, Mariana’s work is positively optimistic; her characters usually emerge in awkward locations (from building sites to remote beaches) and love to surprise and interact with people."
        ],
        typeSpeed: 30
    });
});
