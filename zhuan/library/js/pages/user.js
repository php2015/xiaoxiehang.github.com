define(function(require,exprots,module){
    var zepto = require('zepto');
    require('../plugins/tabs')($);
    $('.m-tab').tabs();
    require('../pages/borrow');
    
    $('body').on('click',function(e){
        var el = $(e.target);
        if(el.hasClass('j-accept')){
            var html = [
                '<article id="selsite" class="g-bd">',
                    '<ul class="m-site-list">',
                        '<li>',
                            '<label class="u-sel">',
                                '<input class="icon-ck" type="radio" name="1" checked>',
                                '<span>收货人：<em class="name">小黑黑</em><em class="tel">13743585555</em></span>',
                                '<span><i>[默认]</i>收货地址：<em class="site">浙江省杭州市滨江区江陵路88号</em></span>',
                            '</label>',
                        '</li>',
                        '<li class="j-add-site"><label class="u-sel"><input class="icon-ck" type="radio" name="1"><span>添加新地址</span></label></li>',
                    '</ul>',
                    '<a href="#" class="u-btn">确定</a>',
                '</article>'
            ];
            $('.g-ft').before(html.join(''));
        }
        if(el.closest('.j-add-site').length){
            if(!$('.m-pickup').length){
                var html = [
                    '<div class="m-pickup" style="margin:-21px 0 20px;height:auto;">',
                        '<ul class="m-form">',
                            '<li>',
                                '<label class="m-form-sel"><select class="u-txt"><option>浙江</option></select></label>',
                                '<label class="m-form-sel"><select class="u-txt"><option>杭州</option></select></label>',
                                '<label class="m-form-sel"><select class="u-txt"><option>西湖区</option></select></label>',
                            '</li>',
                            '<li><label><input class="u-txt" type="text" placeholder="详细地址 如XX大楼XX室"></label></li>',
                            '<li><label><input class="u-txt" type="text" placeholder="收件人"></label></li>',
                            '<li><label><input class="u-txt" type="text" placeholder="手机号码"></label></li>',
                            '<li><label><input class="u-txt yzm" type="text" placeholder="验证码"></label>',
                                '<a href="javascript:;" class="get-yzm">获取验证码</a>',
                            '</li>',
                            '<li><label class="fr u-sel"><input class="icon-ck" type="checkbox">设为默认地址</label></li>',
                        '</ul>',
                    '</div>'
                ];
                $('.m-site-list').after(html.join(''));
            }
        }
        
        
        if($('.m-site-list').find('.icon-ck').last().attr("checked")){
            $('.m-pickup').show();
        }else{
            $('.m-pickup').hide();
        }
        
        //查看头像
        if(el.closest('.m-user-face').length){
            var sw = require('../plugins/showWin');
            var url = el.is('img') ? el.attr('src') : el.find('img').attr('src');
            var img = '<img src="'+ url +'" alt="">';
            new sw.showWin().show({
                id:'win-imgbig',
                bd:img,
                type:'img'
            });
        }
        
        //关注
        if(el.hasClass('m-user-follow')){
            if(el.hasClass('crt')){
                el.text('关注');
            }else{
                el.text('已关注');
            }
            el.toggleClass('crt');
        }
    })
})