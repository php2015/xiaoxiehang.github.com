define(function(require,exports,module){
    var zepto = require('zepto');
    require('gmu');
    require('../plugins/menu');
    require('../plugins/imglazyload');
        
    var ul = $('.m-print-list').find('ul');
    var user_name='',user_tel='',user_address='';
    $.ajax({
        type : 'GET',
        url : 'img.json',
        dataType : 'json',
        success : function(data){
            var print_imgH = window.innerWidth*0.33,
                print_bottom = window.innerWidth*0.005;
            for(var i=0; i<data.imgs.length; i++){
                ul.append('<li id="'+ data.imgs[i].id +'" style="height:'+ print_imgH +'px;margin-bottom:'+ print_bottom +'px"><a href="javascript:;"><img class="m-print-img ui-imglazyload" data-url="'+ data.imgs[i].path +'" height="'+ print_imgH +'"></a><a class="checkbox"></a></li>');
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
            user_name = data.name;
            user_tel = data.tel;
            user_address = data.address;
        }
    })
    $(document.body).on('click',function(e){
        var el = $(e.target);
        if(el.hasClass('m-print-img')){
            el.parents('li').toggleClass('crt');
            $('.u-select').find('em').text($('.m-print-list').find('li.crt').length);
        }
        if(el.hasClass('u-realback')){
            $('div.m-print').remove();
        }
        if(el.hasClass('u-checkbox')){
            el.toggleClass('u-checkbox-true');
        }
        if(el.closest('.u-select').length){
            var id_list = [];
            $('.m-print-list').find('li.crt').each(function(){
                id_list.push($(this).attr('id'));
            })
            if(id_list.length<2){
                var st = require('../plugins/showTips');
                new st.showTips().show({txt:'请至少选着两张照片进行打印'});
            }else{
                var sel = {
                    id : id_list
                };
                console.log(sel);
                var h = ['<div class="confirm-info">',
                    '<header class="g-hd">',
                        '<a class="u-return-btn" href="javascript:;">返回上一页</a>',
                        '<h1>确认信息</h1>',
                    '</header>',
                    '<div class="g-bd g-bd-isft">',
                        '<ul class="print-info">',
                            '<li><span>金额：</span><strong class="print-price">￥'+ sel.id.length*2 +'</strong></li>',
                            '<li><span>数量：</span><em class="print-num">'+ sel.id.length +'</em>张</li>',
                            '<li><label><span>姓名：</span><input type="text" name="u_name" value="'+ user_name +'"></label></li>',
                            '<li><label><span>手机：</span><input type="text" name="u_tel" value="'+ user_tel +'"></label></li>',
                            '<li><label><span>地址：</span><textarea name="u_address">'+ user_address +'</textarea></label></li>',
                            '<li><span>邮费：</span><em class="point-postage">到付</em></li>',
                        '</ul>',
                    '</div>',
                    '<footer class="g-ft"><a class="u-base-btn print-btn" href="javascript:;">确定</a></footer>',
                '</div>'];
                $(document.body).append(h.join(''));
            }
        }
        if(el.hasClass('u-return-btn')){
            $('.confirm-info').remove();
        }
        if(el.hasClass('print-btn')){
            var p_info = $('.print-info');
            var json = {
                "price":p_info.find('.print-price').text(),
                "num":p_info.find('.print-num').text(),
                "name":p_info.find('input[name="u_name"]').val(),
                "tel":p_info.find('input[name="u_tel"]').val(),
                "address":p_info.find('textarea[name="u_address"]').val(),
                "youfei":p_info.find('.point-postage').text(),
            }
            console.log(json);
        }
    })
    
//    //点击图片显示大图
//    $(document.body).on('click','.m-print-img img',function(){
//        var el = $(this);
//        var h = [
//            '<div class="m-print" data-id="'+ el.parents('li').attr('id') +'">',
//                '<div class="m-print-hd">',
//                    '<a href="#" class="u-realback"></a>',
//                    '<a href="#" class="u-checkbox">选择</a>',
//                '</div>',
//                '<div class="m-print-bd"><img src="'+ el.attr('src') +'" alt=""></div>',
//            '</div>'
//        ];
//        $(document.body).append(h.join(''));
//    }).on('click','.u-realback',function(){
//        $('div.m-print').remove();
//    })
})