jQuery(document).ready(function($){
    $(".partner-inner").slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        arrows: false,
        responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                centerMode: true,
                centerPadding: 50,
            }
        }
        ]
    });
    $(window).resize(function(){
        $('.partner-inner')[0].slick.refresh();
    });
});