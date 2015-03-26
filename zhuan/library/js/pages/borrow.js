define(function(require,exports){
    var zepto = require('zepto');
    
    $('body').on('click','.get-yzm',function(){
        var el = $(this);
        if(el.hasClass('get-yzm')){
            if(!el.hasClass('disable')){
                el.addClass('disable').html('<em>59</em>s后重新获取');
                yzmTime();
            }
        }
    })
    
    function yzmTime(){
        var $em = $('.get-yzm').find('em');
        var t = parseInt($em.text());
        setInterval(function(){
            $em.text(t--);
            if(t<0){
                $em.parent().removeClass('disable').html('获取验证码');
            }
        },1000);
    }
})