define(function(require,exports,module){
    var zepto = require('zepto');
//    var sw = require('../plugins/swiper');
    require('../plugins/swipeSlide')($);
    require('../plugins/imglazyload')($);
    var bs = require('../plugins/bookSlider');
    
    
    new bs.bookSlider();
    
//    $('.m-slide').swipeSlide({
//        continuousScroll : true,
//        lazyLoad : true
//    },function(i){
//        $('.dot').children().eq(i).addClass('crt').siblings().removeClass('crt');
//    });
    
    
//  new sw.Swiper('.m-slide',{
//    pagination: '.dot',
//    loop:true,
//    grabCursor: true,
//    paginationClickable: true
//  })
    
    $(function(){    
        $('img').imglazyload({
            container : $('.m-booklist-bd')
        })
    })
})