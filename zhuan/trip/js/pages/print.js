define(function(require,exports,module){
    var zepto = require('zepto');
    require('gmu');
    require('../plugins/menu');
    require('../plugins/imglazyload');
        
    var ul = $('.m-print-list').find('ul');
    $.ajax({
        type : 'GET',
        url : 'img.json',
        dataType : 'json',
        success : function(data){
            var print_imgH = window.innerWidth*0.33,
                print_bottom = window.innerWidth*0.005;
            for(var i=0; i<data.imgs.length; i++){
                ul.append('<li id="'+ data.imgs[i].id +'" style="height:'+ print_imgH +'px;margin-bottom:'+ print_bottom +'px"><a class="m-print-img" href="javascript:;"><img class="ui-imglazyload" data-url="'+ data.imgs[i].path +'" height="'+ print_imgH +'"></a><a class="checkbox"></a></li>');
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
    $(document.body).on('click',function(e){
        var el = $(e.target);
        if(el.hasClass('checkbox')){
            el.parent().toggleClass('crt');
        }
        if(el.hasClass('u-realback')){
            $('div.m-print').remove();
        }
        if(el.hasClass('u-checkbox')){
            el.toggleClass('u-checkbox-true');
        }
    })
    
    //点击图片显示大图
    $(document.body).on('click','.m-print-img img',function(){
        var el = $(this);
        var h = [
            '<div class="m-print" data-id="'+ el.parents('li').attr('id') +'">',
                '<div class="m-print-hd">',
                    '<a href="#" class="u-realback"></a>',
                    '<a href="#" class="u-checkbox">选择</a>',
                '</div>',
                '<div class="m-print-bd"><img src="'+ el.attr('src') +'" alt=""></div>',
            '</div>'
        ];
        $(document.body).append(h.join(''));
    })
//    .on('click','.u-realback',function(){
//        $('div.m-print').remove();
//    }).on
})