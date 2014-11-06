define(function(require,exprots,module){
    var zepto = require('zepto');
    require('gmu');
    require('../plugins/imglazyload');
    
    $('#albums').iScroll({useTransition:true,fadeScrollbar:true,hScrollbar:false,onScrollEnd:function(){
        //console.log(this.maxScrollY)
        if((this.y-this.maxScrollY)<10){
            var albums = $('.m-albums');
            albums.append('<p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>');
            $('#albums').iScroll('refresh');
        }
    }});
    
    $('#photos').iScroll({bounce:false,fadeScrollbar:true,hScrollbar:false,onScrollEnd:function(){
        
    }});
    
    $(document.body).on('click','.m-photos img',function(){
        var el = $(this);
        var h = [
            '<div class="m-winpic">',
                '<div class="m-winpic-hd">',
                    '<a href="#" class="u-realback"></a>',
                    '<time>2014-05-16</time>',
                '</div>',
                '<div class="m-winpic-bd"><img src="'+ el.attr('src') +'" alt=""></div>',
            '</div>'
        ];
        $(document.body).append(h.join(''));
    }).on('click','.u-realback',function(){
        $('div.m-winpic').remove();
    })
})