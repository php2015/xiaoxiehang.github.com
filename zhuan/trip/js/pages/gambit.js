$(document.body).on('touchstart',function(e){
    var el = $(e.target);
    if(el.closest('.u-menu-link').length){
        $('.g-nav').addClass('g-nav-show');
    }else if(el.closest('.g-nav').length){
        return true;
    }else{
        if($('.g-nav-show').length){
            $('nav.g-nav').removeClass('g-nav-show');
        }
    }
})


$(document).on('touchmove','nav.g-nav-show',function(){
    return false;
})




$('#j-gambit-slide ul').slider( { imgZoom: true });

$('#j-gambit-slide').find('img').on('click',function(){
    var el = $(this);
    $(document.body).append('<div><div class="m-light-box" id="j-light-box"><ul><li><a href="javascript:;"><img lazyload ="http://img0.bdstatic.com/img/image/shouye/mnzqbb12.jpg" alt="李米" width="240" height="120"></a></li><li><a href="javascript:;"><img lazyload ="http://img0.bdstatic.com/img/image/shouye/syfj-9631057513.jpg" alt="李米" width="240" height="120"></a></li><li><a href="javascript:;"><img lazyload ="http://img0.bdstatic.com/img/image/shouye/bzstch.jpg" alt="李米" width="240" height="120"></a></li><li><a href="javascript:;"><img lazyload ="http://img0.bdstatic.com/img/image/shouye/qcxkpc.jpg" alt="李米" width="240" height="120"></a></li></ul></div></div>');

    $('#j-light-box ul').slider( { index:el.parents('li').index(), imgZoom: true });
})

$(document.body).on('click','.m-light-box',function(){
    var el = $(this);
    el.hide();
})

$(document.body).on('click','.j-praise-btn',function(){
    var el = $(this);
    if(!el.data('praise')){
        el.data('praise','true').html('<i class="icon-u-praises"></i>已赞');
    }else{
        el.data('praise','false').html('<i class="icon-u-praise"></i>点赞');
    }
})