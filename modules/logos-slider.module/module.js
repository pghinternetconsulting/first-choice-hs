jQuery(document).ready(function($) { 
  $(".slick-logo").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
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
      $('.slick-logo')[0].slick.refresh();
  });
});
