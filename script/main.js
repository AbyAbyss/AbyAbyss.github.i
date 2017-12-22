 // for parallax background
      $(document).ready(function () {
        // for parallax background
        $('.parallax').parallax();
        // side nav bar
        //$(".button-collapse").sideNav();
        // Hide sideNav
        $('.button-collapse').sideNav({
          menuWidth: 300, // Default is 300
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
          draggable: true, // Choose whether you can drag to open on touch screens,
        });


        // modal with option... can also use $('.modal').modal();
        $('.modal').modal({
          dismissible: true, // Modal can be dismissed by clicking outside of the modal
          opacity: .7, // Opacity of modal background
          inDuration: 300, // Transition in duration
          outDuration: 200, // Transition out duration
          startingTop: '4%', // Starting top style attribute
          endingTop: '10%', // Ending top style attribute
        });
        // collapse/ accordion
        $('.collapsible').collapsible();
        $(".title_animation").addClass("animated bounceInLeft");
        $(".discrption").addClass("animated bounceInRight");
        $("button").addClass("animated fadeIn");
        $(".nav_info").addClass("animated bounceInDown");
      });