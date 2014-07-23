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

    
    var t1 = null;
    $(document.body).on('touchstart','a,img',function(){
        if (t1 == null){
            t1 = new Date().getTime();
        }else{       
            var t2 = new Date().getTime();
            if(t2 - t1 < 500){
                t1 = t2;
                return;
            }else{
                t1 = t2;
            }
        }
    })
    
    $(document.body).on('click',function(e){
        var el = $(e.target);
        
        if(el.hasClass('u-praise')){
            if(!el.hasClass('u-praise-true')){
                el.addClass('u-praise-true');
            }else{
                el.removeClass('u-praise-true');
            }
        }
        
        if(el.hasClass('u-reply')){
            if(!$('.g-ft').find('.u-reply-txt').length){
                $('.g-ft').append('<input class="u-reply-txt" type="text" placeholder="添加评论："><a href="javascript:;" class="u-reply-btn">发送</a>').find('.u-write-btn').hide();
            }else{
                $('.g-ft').find('.u-reply-txt,.u-reply-btn').show();
            }
            $('.g-ft').find('.u-write-btn').hide();
            $('.u-reply-txt').data('dynamicID',el.parents('.m-dynamic').attr('id')).focus();
        }
        
        if(el.closest('.g-bd').length){
            var write_btn = $('.g-ft').find('.u-write-btn');
//            if()
//            $('.g-ft').find('.u-write-btn').show();
        }
    }).on('blur','.u-reply-txt',function(){
        $('.g-ft').find('.u-write-btn').show().siblings().hide();
    })
    
    //添加评论
    $(document.body).on('touchend','.u-reply-btn',function(){
        var el = $(this),txt = el.siblings('.u-reply-txt'),dynamic_ID = txt.data('dynamicID');
        if(txt.val() == ''){
            txt.focus();
            return false;
        }else{
            $('#'+dynamic_ID).find('.m-dynamic-list').append('<article class="m-dynamic-reply"><header class="m-dynamic-hd"><a class="m-dynamic-name">捷克</a><span class="m-dynamic-time">2014-05-30</span><a class="m-dynamic-face"><img src="http://img0.bdstatic.com/img/image/shouye/sjbztmxdg.jpg" alt="李米" width="40" height="40"></a></header><section class="m-dynamic-bd"><p>'+txt.val()+'</p></section></article>')
            
            if($('.g-ft').find('.u-write-btn').length){
                $('.g-ft').find('.u-write-btn').show().siblings().hide();
            }
        }
    })
})