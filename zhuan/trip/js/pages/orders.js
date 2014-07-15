define(function(require,exports,module){
    var zepto = require('zepto');
    require('gmu');
    require('../plugins/menu')
    
    new iScroll("wrap",{bounce:false,checkDOMChanges:true,fadeScrollbar:true,hScrollbar:false});

    $(document.body).on('click',function(e){
        var _this = $(this),el = $(e.target);
        
        //减少数量
        if(el.hasClass('num-minus')){
            var inp = el.siblings('.m-king-txt'),
                num = inp.val();
            num--;
            if(num >= 0){
                inp.val(num);
            }
            reckonPrice(el.parents('.m-king'));
        }
        //增加数量
        if(el.hasClass('num-add')){
            var inp = el.siblings('.m-king-txt'),
                num = inp.val();
            num++;
            inp.val(num);
            reckonPrice(el.parents('.m-king'));
        }
        
        //立即预定
        if(el.hasClass('u-schedule-btn')){
            var king = $('.m-king'),len = 0;
            king.find('.m-king-txt').each(function(){
                len += parseInt( $(this).val() );
            })
            
            var json = {
                king : [],
                len : len,
                price : $('.m-orders-price').find('em').text(),
                username : $('input[name="username"]').val(),
                usertel : $('input[name="usertel"]').val()
            };
            
            
            king.each(function(){
                var t = $(this);
                var j = {
                    name : t.find('h2').text(),
                    a_ticket : t.find('.m-king-txt').eq(0).val(),
                    c_ticket : t.find('.m-king-txt').eq(1).val(),
                    s_ticket : t.find('.m-king-txt').eq(2).val(),
                    price : t.find('.m-king-price em').text()
                };
                json.king.push(j);
            })
            
            var h = ['<div class="orders-info"><div class="orders-info-cont" id="orderinfo"><div><h3>订单信息确认</h3>'];
            for(var i=0;i<json.king.length;i++){
                h.push('<dl><dt>'+ json.king[i].name +'</dt><dd>成人票：'+ json.king[i].a_ticket +'张</dd><dd>学生票：'+ json.king[i].c_ticket +'张</dd><dd>儿童票：'+ json.king[i].s_ticket +'张</dd><dd>小计：￥'+ json.king[i].price +'</dd></dl>');
            }
            h.push('<dl><dt>综合信息</dt><dd>票数：' + json.len + '张</dd><dd>总额：￥' + json.price + '</dd><dd>取票人：' + json.username + '</dd><dd>联系方式：' + json.usertel + '</dd><dd>使用日期：2014-07-14</dd></dl>');
            h.push('<div class="orders-info-btns"><a class="u-base-btn orders-submit" href="javascript:;">确定</a><a class="u-base-btn orders-cancel" href="javascript:;">取消</a></div></div><a class="orders-info-close"></a></div></div>');
            
            _this.append(h.join(''));
            new iScroll("orderinfo",{bounce:false,checkDOMChanges:true,fadeScrollbar:true,hScrollbar:false});
        }
        
        //提交
        if(el.hasClass('orders-submit')){
            alert('提交');
        }
        //取消、关闭
        if(el.hasClass('orders-cancel')||el.hasClass('orders-info-close')){
            $('.orders-info').remove();
        }
    }).on('change','.m-king-txt',function(){
        reckonPrice($(this).parents('.m-king'));
    })
    
    function reckonPrice(obj){
        var a = b = 0;
        obj.find('li').each(function(){
            a += parseInt($(this).find('.m-king-uprice em').text()) * $(this).find('.m-king-txt').val();
        })
        obj.find('.m-king-price em').text(a);
        
        $('.m-king-price em').each(function(){
            b += parseInt($(this).text());
        })
        $('.m-orders-price em').text(b);
    }
    
    
})