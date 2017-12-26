$(document).ready(function () {
    /* for materilize */
    // for parallax background
    $('.parallax').parallax();
    //carousel
    //$('.carousel').carousel();
     $('.carousel.carousel-slider').carousel();
     
    // slider
    $('.slider').slider();
    // animate on startup
    $('.font_animL').addClass("animated bounceInLeft");
    $('.font_animR').addClass("animated bounceInRight");
    $('.my-button').addClass("animated fadeIn");
    $('.circle').addClass("animated fadeInDown")
});


const Portfolio = function() {
    function typeAnimation() {
        Typed.new("#writing-text", {
            strings: [
                "am a Developer.", "love everything about code.", "solve problems.","love to work with you"
            ],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 1,
            contentType: 'text',
            callback: function() {
                $("#writing-text").css({ "color": "#fff", "background-color": "#774296"});
                $(".depth").addClass("z-depth-2 hoverable");
            },
            preStringTyped: function() {},
            onStringTyped: function() {}
        });
    }
    return {
        typeAnimation: typeAnimation
    }

}();

Portfolio.typeAnimation();