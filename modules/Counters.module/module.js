jQuery(document).ready(function($){
    $(allInView);
    $(window).scroll(allInView);
});

function allInView() {    
    var parent = $(".counter-bg").parent().parent().parent().parent().parent().parent().parent();
    if(isScrolledIntoView(parent)){
        $('.counter').each(function () {
            var $this = $(this).find('.counter-number span'),
                countTo = $this.attr('data-count');

            $({ countNum: $this.text()}).animate({
                countNum: countTo
            },
            {
                duration: 8000,
                easing:'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });  
        });
    }
}

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop() - $(elem).outerHeight(true);
    var docViewBottom = $(window).scrollTop() + $(window).height() + $(elem).outerHeight(true);

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).outerHeight(true);
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    
}