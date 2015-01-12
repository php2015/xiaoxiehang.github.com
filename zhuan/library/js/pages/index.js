define(function(require,exports,module){
    var zepto = require('zepto');
    require('../plugins/swipeSlide')($);
    require('../plugins/imglazyload')($);
    
    
    $('.m-slide').swipeSlide({
        continuousScroll : true,
        lazyLoad : true
    },function(i){
        $('.dot').children().eq(i).addClass('crt').siblings().removeClass('crt');
    });
    
    $(function(){    
        $('img').imglazyload({
            container : $('.m-booklist-bd')
        })
    })
})