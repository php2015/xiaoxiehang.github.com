define(function(require,exports,module){
    var zepto = require('zepto');
    require('../plugins/swipeSlide')($);
    
    
    $('.m-slide').swipeSlide({
        continuousScroll : true,
        lazyLoad : true
    },function(i){
        $('.dot').children().eq(i).addClass('crt').siblings().removeClass('crt');
    });
    
    $(function(){
        $('.m-slide').height($('.m-slide').find('img').height());
    })
})