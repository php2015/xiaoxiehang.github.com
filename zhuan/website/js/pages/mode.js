define(function(require,exports,module){
    var jquery = require('jquery');
    
    var step5 = true;
    $(window).on('scroll',function(){
        show();
    })
    
    function show(){
        if($('.pro-step').is(':visible')){
            $('.pro-step').each(function(){
                var _this = $(this);

                if($(window).scrollTop()+$(window).height() > _this.offset().top+150){
                    _this.addClass('pro-step-show');
                }
                if($('.pro-step-5').hasClass('pro-step-show')){
                    if(step5){
                        var i=0;
                        var s= setInterval(function(){
                            if(i<=40){
                                $('.pro-step-count em').text(i++);
                            }else{
                                clearInterval(s);
                            }
                        },10)
                    }
                    step5 = false;
                }
            })
        }
    }
    
    exports.show = show;
})