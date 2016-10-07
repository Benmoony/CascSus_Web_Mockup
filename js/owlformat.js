window.onload = function() {

	$('.owl-carousel').owlCarousel({
        loop:true,
        width:150,
        height:100, 
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });
}