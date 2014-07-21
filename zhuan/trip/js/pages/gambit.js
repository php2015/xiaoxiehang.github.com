define(function(require,exports,module){
    var zepto = require('zepto');
    require('gmu');
    new iScroll("wrap",{bounce:false});

    //话题图片展示
    $('.m-dynamic-slide ul').slider( { imgZoom: true });

    //点击图片显示大图
    $('.m-dynamic-slide').find('img').on('click',function(){
        var el = $(this);
        $(document.body).append('<div class="m-light-box"><ul><li><a href="javascript:;"><img lazyload ="http://triptest.qiniudn.com/trip8.JPG" alt="李米"></a><span></span></li><li><a href="javascript:;"><img lazyload ="http://triptest.qiniudn.com/trip9.JPG" alt="李米"></a><span></span></li><li><a href="javascript:;"><img lazyload ="http://triptest.qiniudn.com/trip13.JPG" alt="李米"></a><span></span></li><li><a href="javascript:;"><img lazyload ="http://triptest.qiniudn.com/trip6.JPG" alt="李米"></a><span></span></li></ul></div>');

        $('.m-light-box ul').slider( { index:el.parents('li').index(), imgZoom: true });
    })

    $(document.body).on('click','.m-light-box',function(){
        var el = $(this);
        el.remove();
    })

    //赞
    $(document.body).on('click','.u-praise',function(){
        var el = $(this);
        if(!el.hasClass('u-praise-true')){
            el.addClass('u-praise-true');
        }else{
            el.removeClass('u-praise-true');
        }
    })
    
    //添加评论
    $(document.body).on('touchend','.u-reply-btn',function(){
        var el = $(this),
            txt = el.siblings('.u-reply-txt');
        if(txt.val() == '')
        {
            txt.focus();
        }
    })
    
    $(document.body).on('click','.u-reply',function(){
        $('.g-ft').append('<input class="u-reply-txt" type="text" placeholder="添加评论："><a href="javascript:;" class="u-reply-btn">发送</a>').find('.u-write-btn').hide();
        $('.u-reply-txt').focus();
    })
})