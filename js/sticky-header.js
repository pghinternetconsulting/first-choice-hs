jQuery(document).ready(function($){

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      $('div[data-global-resource-path="first-theme-hs/templates/partials/header.html"]').addClass('sticky');
      $('div[data-global-resource-path="first-theme-hs/templates/partials/header-home.html"]').addClass('sticky');
    } else {
      $('div[data-global-resource-path="first-theme-hs/templates/partials/header.html"]').removeClass('sticky');
      $('div[data-global-resource-path="first-theme-hs/templates/partials/header-home.html"]').removeClass('sticky');
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