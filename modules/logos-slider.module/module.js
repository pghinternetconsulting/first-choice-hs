jQuery(document).ready(function($) { 
  $(".slick-logo").slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    arrows: false,
    responsive: [
      {
          breakpoint: 1300,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: false,
              centerPadding: 50,
          }
      },
      {
        breakpoint: 1150,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            centerPadding: 50,
        }
    },
      {
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
            centerPadding: 50,
        }
    }
      ]
  });
  $(window).resize(function(){
      $('.slick-logo')[0].slick.refresh();
  });
});
