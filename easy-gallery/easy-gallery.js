"use strict";

jQuery.fn.easygallery = function() { 
    //this = .gallery-item
    
    $(document).keydown(function(event) {
        if (event.key == "Escape") {
            $("#easy-gallery-overlay").remove();
            $("#easy-gallery-overlay-image-container").remove();
        }
    });

    $(this).click(function(event) {

        event.preventDefault();
        
        let overlay = $.parseHTML("<div id='easy-gallery-overlay'></div>");
        
        $("body").append(overlay);

        let image = $.parseHTML("<img id='easy-gallery-overlay-image'>");
        let href = $(this).attr("href");
        $(image).attr("src", href);

        let container = $.parseHTML("<div id='easy-gallery-overlay-image-container'></div>");
        $(container).append(image);

        $(container).click(function () {
            $("#easy-gallery-overlay").remove();
            $("#easy-gallery-overlay-image-container").remove();
        });

        $("body").append(container);
        
    });

    return this;
}