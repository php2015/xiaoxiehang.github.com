define(function(require,exports,module){
    var zepto = require('zepto');
    require('gmu');
    new iScroll("wrap",{bounce:false});
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
    
    //导航显示时，移动动作return
    $(document).on('touchmove','nav.g-nav-show',function(){
        return false;
    })

    //话题图片展示
    $('.m-dynamic-slide ul').slider( { imgZoom: true });

    //点击图片显示大图
    $('.m-dynamic-slide').find('img').on('click',function(){
        var el = $(this);
        $(document.body).append('<div class="m-light-box"><ul><li><a href="javascript:;"><img lazyload ="http://img0.bdstatic.com/img/image/shouye/mnzqbb12.jpg" alt="李米" width="240" height="120"></a><span></span></li><li><a href="javascript:;"><img lazyload ="http://img0.bdstatic.com/img/image/shouye/syfj-9631057513.jpg" alt="李米" width="240" height="120"></a><span></span></li><li><a href="javascript:;"><img lazyload ="http://img0.bdstatic.com/img/image/shouye/bzstch.jpg" alt="李米" width="240" height="120"></a><span></span></li><li><a href="javascript:;"><img lazyload ="http://img0.bdstatic.com/img/image/shouye/qcxkpc.jpg" alt="李米" width="240" height="120"></a><span></span></li></ul></div>');

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
            el.addClass('u-praise-true').text('已赞');
        }else{
            el.removeClass('u-praise-true').text('点赞');
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
})