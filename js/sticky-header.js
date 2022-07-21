jQuery(document).ready(function($){

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }
  }

  $('.mobile-search-icon').click(function(){
    $('.mobile-search').toggleClass('search-open');
  });

  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  });
  
}); //end ready