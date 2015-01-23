define(function(require,exports,module){
    var zepto = require('zepto');
    require('../plugins/menu');
    
    $(function(){
        loadImage($('.m-slide').find('img').eq(0).data('url'),function(w,h){
            $('.m-slide').height( $(document.body).width() / w * h).show().siblings('.m-loading').remove();;
            
            require('../plugins/swipeSlide')($);
            
            $('.m-slide').swipeSlide({
                continuousScroll : true,
                lazyLoad : true
            },function(i){
                $('.dot').children().eq(i).addClass('crt').siblings().removeClass('crt');
            });
        });
    })
    
    function loadImage(url,callback){
        var html = '' , imgH = 0;
        var img = new Image;
        img.onload = function(){
            img.onload = null;
            callback.call(img,img.width,img.height,img.src);
        }
        img.src = url;
    }
})