jQuery(document).ready(function($){
  //call the function when ready
  slideShow();

  //Actually define the slideShow()
  function slideShow(){
      split = function (element) {
          words = $(element).text().split('');
          for (i in words) {
            words[i] = '<span>' + words[i] + '</span>';
          }
          text = words.join('');
          $(element).html(text);
      }; 

      textify = function(element,method,delay) {
          split(element);
          $(element + ' span').css('opacity','0')
          $(element + ' span').css('position','relative');
          in_speed = 20; // NOTE 1: Here is the speed of the transition of each character, the bigger the number, the slower it moves
          count = 0;
          setTimeout(function(){
            count = 0;
            $(element).css('opacity', '1');
            $(element + ' span').each(function () {
              if(method == 'fade'){
                $(this).delay(0 + in_speed * count).animate({ opacity: '1' }, 400);
              } else if(method == 'bounce'){
                $(this).delay(0 + in_speed * count).animate({ opacity: '1','top':'-4px'}, 220,'easeOutCubic');
                $(this).delay(0 + in_speed * count/4).animate({ opacity: '1','top':'0px'}, 220);
              }
              count++;
            });
            $(element).delay(8600).animate({ opacity: '0' }, 400); // NOTE 2: The delay is the duration of the whole prhase being displayed, the higher the longer it last
          },delay);
      };

      //*** Conditional & Variables ***//
      var current = $('.hero-subheading .show');
      var next = current.next().length ? current.next() : current.siblings().first();
      current.hide().removeClass('show');
      next.addClass('show');
      textify('.show','fade', 500);
      setTimeout(slideShow, 10000); // NOTE 3: Here you can change the transition time between phrases, the higher the slower it changes
  };
});