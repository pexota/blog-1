
  $(document).ready(function(){
    $('.slick-slider-1').slick({
        arrows:true, 
        dots:false, 
        autoplay:true, 
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            }
        ]

    });

    $('.slider-2').slick({
        arrows:true, 
        dots:true, 
        autoplay:true,
        slidesPerView:1,
        slidesToScroll: 1,
    });

    $('.slider-2-mobile').slick({ 
        dots:true, 
        autoplay:true,
        slidesPerView:1,
        slidesToScroll: 1,
    });

    $('.slick-slider-3').slick({
        arrows:true, 
        dots:false, 
        autoplay:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            }
        ]
    });

});