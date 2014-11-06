define(function(require,exports,module){
    var zepto = require('zepto');
    require('gmu');
    require('../plugins/menu')
    require('../pages/reply')
    
    $('.m-raider-slider ul').slider({ imgZoom: true });
    
    var myScroll = new iScroll("wrap",{bounce:false});
    
    //添加评论
    $(document.body).on('touchstart','.u-reply-btn',function(){
        var el = $(this),txt = el.siblings('.u-reply-txt'),dynamic_ID = txt.data('dynamicID');
        if(txt.val() == ''){
            txt.focus();
            return false;
        }else{
            $('#'+dynamic_ID).find('.m-dynamic-list').append('<article class="m-dynamic-reply"><header class="m-dynamic-hd"><a class="m-dynamic-name">捷克</a><span class="m-dynamic-time">2014-05-30</span><a class="m-dynamic-face"><img src="http://img0.bdstatic.com/img/image/shouye/sjbztmxdg.jpg" alt="李米" width="40" height="40"></a></header><section class="m-dynamic-bd"><p>'+txt.val()+'</p></section></article>');
            txt.val('');
            myScroll.refresh();
            
            $('.g-ft').hide();
        }
    })
})