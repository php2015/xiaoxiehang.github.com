define(function(require,exports,module){
    var zepto = require('zepto');
    require('gmu');
    
    $('.m-raider-slider ul').slider( { imgZoom: true });
    
    //显示导航
    $(document.body).on('touchstart',function(e){
        var el = $(e.target);
        if(el.hasClass('u-menu')){
            $('.g-nav').addClass('g-nav-show');
        }else if(el.closest('.g-nav').length){
            return true;
        }else{
            if($('.g-nav-show').length){
                $('nav.g-nav').removeClass('g-nav-show');
                return false;
            }
        }
    })
})