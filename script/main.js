 // for parallax background
      $(document).ready(function () {
        // for parallax background
        $('.parallax').parallax();
        // animate on startup
        
        
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