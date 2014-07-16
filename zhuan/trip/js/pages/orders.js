define(function(require,exports,module){
    var zepto = require('zepto');
    require('gmu');
    require('../plugins/menu');
    
    new iScroll("wrap",{bounce:false,checkDOMChanges:true,fadeScrollbar:true,hScrollbar:false});

    $(document.body).on('touchstart',function(e){
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
            var amount= $('.m-orders-price').find('em').text();
            var name = $('#username').val();
            var tel = $('#usertel').val();
            
            if(amount == 0) {
            	alert('购买票的张数不能为0');
            	return;
            }else if(name == '') {
            	alert('取票人不能为空');
            	return;
            }else if(tel == '') {
            	alert('联系方式不能为空');
            	return;
            }else {
            	king.find('.m-king-txt').each(function(){
                    len += parseInt( $(this).val() );
                })
                
                var json = {
                    king : [],
                    len : len,
                    price : amount,
                    username : name,
                    usertel : tel
                };

                king.each(function(){
                    var t = $(this);
                    var j = {
                        kingId : t.attr('id'),
                        name : t.find('h2').text(),
                        ticket : [],
                        price : t.find('.m-king-price em').text()
                    };
                    if(j.price>0){
                        for(var i=0;i<t.find('li').length;i++){
                            if(t.find('.m-king-txt').eq(i).val()>0){
                                j.ticket.push({"key":t.find('strong').eq(i).text(),"val":t.find('.m-king-txt').eq(i).val()})
                            }
                        }
                        json.king.push(j);
                    }
                })
                console.log(json);
                
                
                var h = ['<div class="orders-info"><div class="orders-info-cont" id="orderinfo"><div><h3>订单信息确认</h3>'];
                for(var m=0;m<json.king.length;m++){
                    h.push('<dl><dt>'+ json.king[m].name +'</dt>');
                    for(var n=0;n<json.king[m].ticket.length;n++){
                        h.push('<dd>'+json.king[m].ticket[n].key+'：'+ json.king[m].ticket[n].val +'张</dd>');
                    }
                    h.push('<dd>小计：￥'+ json.king[m].price +'</dd>');
                    h.push('</dl>');
                }
                h.push('<dl><dt>综合信息</dt><dd>票数：' + json.len + '张</dd><dd>总额：￥' + json.price + '</dd><dd>取票人：' + json.username + '</dd><dd>联系方式：' + json.usertel + '</dd><dd>使用日期：2014-07-14</dd></dl>');
                h.push('<div class="orders-info-btns"><a class="u-base-btn orders-submit" href="javascript:;">确定</a><a class="u-base-btn orders-cancel" href="javascript:;">取消</a></div></div><a class="orders-info-close"></a></div></div>');
                
                _this.append(h.join(''));
                new iScroll("orderinfo",{bounce:false,checkDOMChanges:true,fadeScrollbar:true,hScrollbar:false});
            }
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
    
    //取票人验证
    $("#username").blur(function(){
    	if($("#username").val() == '') {
    		alert("取票人不能为空");
    		$("#username").focus();
    	}
    })
    
    //取票人联系方式验证
    $("#usertel").blur(function(){
    	if(!$("#usertel").val().match(/^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/)) {
    		alert("手机格式不对");
    		$("#usertel").focus();
    	}
    })
    
})