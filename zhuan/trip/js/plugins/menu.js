define(function(require,exports,module){
    var zepto = require('zepto');    
    
    //显示导航
    $(document.body).on('touchstart',function(e){
        var el = $(e.target);
        
        if($('.g-nav-show').length){
            $('nav.g-nav').removeClass('g-nav-show');
            if(!el.closest('.g-nav').length){
                console.log(1);
                return false;
            }else{
                console.log(2);
            }
        }
        if(el.hasClass('u-menu')){
            $('.g-nav').addClass('g-nav-show');
        }
    })
    
    //导航显示时，移动动作return
    $(document).on('touchmove','nav.g-nav-show',function(){
        return false;
    })
})