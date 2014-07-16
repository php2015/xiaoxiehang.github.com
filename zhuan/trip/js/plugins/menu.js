define(function(require,exports,module){
    var zepto = require('zepto');    
    
    //显示导航
    $(document.body).on('click',function(e){
        var el = $(e.target);
        if(!el.closest('.g-nav-show').length){
            console.log(1);
            $('nav.g-nav').removeClass('g-nav-show');
            return false;
        }
    })
    
    //导航显示
    $(document.body).on('touchstart','.u-menu',function(){
        $('.g-nav').addClass('g-nav-show');
    })
    
    //导航显示时，移动动作return
    $(document).on('touchmove','nav.g-nav-show',function(){
        return false;
    })
})