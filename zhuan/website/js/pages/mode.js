define(function(require,exports,module){
    var jquery = require('jquery');
    
    $('div.m-tab-hd').find('li').click(function(){
        var _this = $(this);
        _this.addClass('crt').siblings().removeClass('crt');
        _this.parents('.m-tab-hd').siblings('.m-tab-bd').eq(_this.index()).show().siblings('.m-tab-bd').hide();
    })
    
    var step5 = true;
    $(window).on('scroll',function(){
        if($('.pro-step').is(':visible')){
            $('.pro-step').each(function(){
                var _this = $(this);
                if($(document.body).scrollTop()+$(window).height() > _this.offset().top+150){
                    _this.addClass('pro-step-show');
                }
                if($('.pro-step-5').hasClass('pro-step-show')){
                    if(step5){
                        var i=0;
                        var s= setInterval(function(){
                            if(i<=70){
                                $('.pro-step-count em').text(i++);
                            }else{
                                clearInterval(s);
                            }
                            console.log(1);
                        },10)
                    }
                    step5 = false;
                }
            })
        }
    })
})