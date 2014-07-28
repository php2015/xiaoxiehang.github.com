define(function(require,exports,module){
    var zepto = require('zepto');
    require('gmu');
    require('../pages/reply');
    require('http://gmu.baidu.com/src/extend/imglazyload.js');
    var myScroll = new iScroll("wrap",{bounce:false});

    //话题图片展示 
    //$('.m-dynamic-slide ul').slider( { imgZoom: true,stop: true });
    
    $('.m-dynamic-img img').imglazyload();

    //点击图片显示大图
    $(document.body).on('click','.m-dynamic-img a',function(){
        var el = $(this);
        $(document.body).append('<div class="m-light-box"><ul>'+el.parents('ul').html()+'</ul></div>');

        $('.m-light-box ul').slider( { index:el.parents('li').index(), imgZoom: true });
        
    }).on('click',function(e){
        var el = $(e.target);
        
        //移除light-box
        if(el.closest('.m-light-box').length){
            el.closest('.m-light-box').remove();
        }
        
        //赞
        if(el.hasClass('u-praise')){
            if(!el.hasClass('u-praise-true')){
                el.addClass('u-praise-true');
            }else{
                el.removeClass('u-praise-true');
            }
        }

    })

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
            
            if($('.g-ft').find('.u-write-btn').length){
                $('.g-ft').find('.u-write-btn').show().siblings().hide();
            }
        }
    })
})