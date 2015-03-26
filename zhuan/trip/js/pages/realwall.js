define(function(require,exports,module){
    var zepto = require('zepto');
    require('gmu');
    require('../plugins/menu');
    require('../plugins/imglazyload');
    
    $(document.body).on('click','.m-realwall img',function(){
        var el = $(this);
        var h = [
            '<div class="m-winreal m-winreal-touch">',
                '<div class="m-winreal-hd">',
                    '<a href="#" class="u-realback"></a>',
                    '<a href="#" class="u-realparise">1</a>',
                '</div>',
                '<div class="m-winreal-bd"><img src="'+ el.attr('src') +'" alt=""></div>',
                '<div class="m-winreal-ft">',
                    '<div class="fl"><em>灰太狼</em><br><time>2014-05-16</time></div>',
                    '<a href="javascript:;" class="u-realimg-btn">图片打印</a>',
                '</div>',
            '</div>'
        ];
        $(document.body).append(h.join(''));
//        setTimeout(function(){
//            $('.m-winreal').removeClass('m-winreal-touch');
//        },2000);
        
    }).on('click','.u-realback',function(){
        $('div.m-winreal').remove();
    }).on('click','.u-realparise,.m-realwall-praise',function(){
        var num = parseInt($(this).text());
        num++;
        $(this).html(num);
    }).on('touchmove','.m-winreal',function(){
        return false;
    })
//    }).on('touchstart','.m-winreal-bd',function(){
//        var el = $(this);
//        el.parent().toggleClass('m-winreal-touch');
//    })
    
    $('.m-realwall').append('<ul></ul><ul></ul><ul></ul>');
        
    function getMin(){
        var ul = $('.m-realwall').find('ul');
        var hg=[];
        for(var i=0; i<ul.length; i++){
            hg.push( ul.eq(i).height() );
        }
        var min = hg[0];
        var len = hg.length;
        var n=0;
        for(var i=0; i<len ;i++){
            if(hg[i]<min){
                min = hg[i];
                n = i;
            }
        }
        return n;
    }
    
    function waterfall(){
        $.ajax({
            type : 'GET',
            url : 'img.json',
            dataType : 'json',
            success : function(data){
                var ul = $('.m-realwall').find('ul'),n = getMin();
                for(var i=0; i<data.imgs.length; i++){
                    var n = getMin();
                    ul.eq(n).append('<li id="'+ data.imgs[i].id +'" style="height:'+ data.imgs[i].height +'px"><a href="javascript:;"><img class="ui-imglazyload" data-url="'+ data.imgs[i].path +'" height="'+ data.imgs[i].height +'"></div></a><a class="m-realwall-praise" href="javascript:;">'+ data.imgs[i].praiseCount +'</a><a class="m-realwall-name" href="#">'+ data.imgs[i].nickName +'</a></li>');
                }
                
                var realwall = new iScroll('wrap',{checkDOMChanges :true,onScrollEnd: function () {
                        $.fn.imglazyload.detect();
                    }
                });
                $('.ui-imglazyload').imglazyload({
                    container: $('#wrap'),
                    innerScroll: true
                }).on('loadcomplete', function () {
                    realwall.refresh();
                });
            }
        })
    }
    waterfall();
})