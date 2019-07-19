



$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        // "singleItem:true" is a shortcut for:
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
   
    });

    $("#owl-example").owlCarousel({
        autoPlay: 2000,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            
            767:{
                items:2,
                nav:true,
                loop:false
            },
            1200:{
                items:4,
                nav:true,
                loop:false
            }
        }
   
      });

      $("#owl-example1").owlCarousel({
        autoPlay: 2000,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            
            767:{
                items:2,
                nav:true,
                loop:false
            },
            1200:{
                items:4,
                nav:true,
                loop:false
            }
        }
      });

      $("#owl-example2").owlCarousel({
        autoPlay: 2000,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            
            767:{
                items:2,
                nav:true,
                loop:false
            },
            1200:{
                items:4,
                nav:true,
                loop:false
            }
        }
   
     
      });

      $("#owl-example2").owlCarousel({
        autoPlay: 2000,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            
            767:{
                items:2,
                nav:true,
                loop:false
            },
            1200:{
                items:4,
                nav:true,
                loop:false
            }
        }
   
   
      });

      $("#owl-example3").owlCarousel({
        autoPlay: 2000,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            
            767:{
                items:2,
                nav:true,
                loop:false
            },
            1200:{
                items:4,
                nav:true,
                loop:false
            }
        }
   
      });
    
  });

document.getElementById("mobile-trigger").addEventListener("click", function(){
     $(".custom-menu").slideToggle();
     document.body.classList.toggle("menu-open");
  })



