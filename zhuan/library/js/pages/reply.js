define(function(require,exports,module){
    
    $(document.body).on('click',function(e){
        var el = $(e.target);
        //回复
        if(el.hasClass('u-reply') || el.hasClass('reply-comment')){
            
            var is_ft = true;
            if(!$('.g-ft').length){
                $(document.body).append('<footer class="g-ft"></footer>');
            }
            
            if(!$('.g-ft').find('.u-reply-txt').length){
                $('.g-ft').append('<input class="u-reply-txt" type="text" placeholder="添加评论："><a href="javascript:;" class="u-reply-btn">发送</a>').find('.u-write-btn').hide();
            }else{
                $('.g-ft').show().find('.u-reply-txt,.u-reply-btn').show();
            }
            
            var id = '';
            if(el.hasClass('u-reply')){
                id = el.parents('.m-dynamic').attr('id');
            }else if(el.hasClass('reply-comment')){
                id = el.parents('.m-dynamic-reply').attr('id');
            }
            
            $('.u-reply-txt').data('dynamicID',id).focus();
            $('.g-ft').find('.u-write-btn').hide();
        }
    }).on('touchmove',function(){
        var ft = $('.g-ft');
        if(!$('.g-bd-isft').length && $('.g-ft').length){
            $('.g-ft').hide();
        }
        if(ft.find('.u-write-btn').length && ft.find('.u-reply-txt').length){
            ft.find('.u-write-btn').show().siblings().hide();
        }
    })
})