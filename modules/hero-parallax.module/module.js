jQuery(document).ready(function($){
    //call the function when ready
    slideShow();

    // call the function after delay when load
    //setTimeout(slideShow, 2000);
  
  
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
            in_speed = 10;
            count = 0;
            setTimeout(function(){
              count = 0;
              $(element).css('opacity', '1');
              $(element + ' span').each(function () {
                if(method == 'fade'){
                  $(this).delay(0 + in_speed * count).animate({ opacity: '1' }, 200);
                } else if(method == 'bounce'){
                  $(this).delay(0 + in_speed * count).animate({ opacity: '1','top':'-4px'}, 220,'easeOutCubic');
                  $(this).delay(0 + in_speed * count/4).animate({ opacity: '1','top':'0px'}, 220);
                }
                count++;
              });
              $(element).delay(20000).animate({ opacity: '0' }, 400);
            },delay);
        };
    
        //*** Conditional & Variables ***//
        var current = $('.hero-subheading .show');
        var next = current.next().length ? current.next() : current.siblings().first();
        current.hide().removeClass('show');
        next.addClass('show');
        textify('.show','fade', 100);
        setTimeout(slideShow, 5000);
    };

}); 