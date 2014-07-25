define(function(require,exports,module){
    var zepto = require('zepto');
    require('gmu');
    require('../plugins/menu');
    
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
            }else if(!tel.match(/^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/)) {
            	alert('手机格式不对');
            	return;
            }else {
            	king.find('.m-king-txt').each(function(){
                    len += parseInt( $(this).val() );
                })
                
                json = {
                    king : [],
                    len : len,
                    price : amount,
                    username : name,
                    usertel : tel
                };

                king.each(function(){
                    var t = $(this);
                    var j = {
                        name : t.find('h2').text(),
                        ticket : [],
                        price : t.find('.m-king-price em').text()
                    };
                    if(j.price>0){
                        for(var i=0;i<t.find('li').length;i++){
                            if(t.find('.m-king-txt').eq(i).val()>0){
                                j.ticket.push({
                                    "kId":t.find('li').eq(i).attr('id'),
                                    "kName":t.find('strong').eq(i).text(),
                                    "kNum":t.find('.m-king-txt').eq(i).val()
                                });
                            }
                        }
                        json.king.push(j);
                    }
                })
                
                
                var h = ['<div class="orders-info"><div class="orders-info-cont" id="orderinfo"><div><h3>订单信息确认</h3>'];
                for(var m=0;m<json.king.length;m++){
                    h.push('<dl><dt>'+ json.king[m].name +'</dt>');
                    for(var n=0;n<json.king[m].ticket.length;n++){
                        h.push('<dd id="'+json.king[m].ticket[n].kId+'">'+json.king[m].ticket[n].kName+'：'+ json.king[m].ticket[n].kNum +'张</dd>');
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
        
        
        var order = '';
        //订单详情
        if(el.closest('.my-order-detail').length){
            console.log(1);
        	if(order == ''){
                $.ajax({
                    type : 'GET',
                    url : 'img.json',
                    async : false,
                    dataType : 'json',
                    success : function(data){
                        order = data;
                    }
                })
            }
            var h = ['<div class="orders-info"><div class="orders-info-cont" id="orderinfo"><div><h3>订单信息确认</h3>'];
            for(var m=0;m<order.king.length;m++){
                h.push('<dl><dt>'+ order.king[m].name +'</dt>');
                for(var n=0;n<json.king[m].ticket.length;n++){
                    h.push('<dd id="'+order.king[m].ticket[n].kId+'">'+order.king[m].ticket[n].kName+'：'+ order.king[m].ticket[n].kNum +'张</dd>');
                }
                h.push('<dd>小计：￥'+ order.king[m].price +'</dd>');
                h.push('</dl>');
            }
            h.push('<dl><dt>综合信息</dt><dd>票数：' + order.len + '张</dd><dd>总额：￥' + order.price + '</dd><dd>取票人：' + order.username + '</dd><dd>联系方式：' + order.usertel + '</dd><dd>使用日期：2014-07-14</dd></dl>');
            h.push('<div class="orders-info-btns"><a class="u-base-btn orders-submit" href="javascript:;">确定</a><a class="u-base-btn orders-cancel" href="javascript:;">取消</a></div></div><a class="orders-info-close"></a></div></div>');

            _this.append(h.join(''));
            new iScroll("orderinfo",{bounce:false,checkDOMChanges:true,fadeScrollbar:true,hScrollbar:false});
        }
        
        //提交
        if(el.hasClass('orders-submit')){
        	console.log(json);
        }
        //取消、关闭
        if(el.hasClass('orders-cancel')||el.hasClass('orders-info-close')){
            $('.orders-info').remove();
        }
        
        //tab 切换
        if(el.closest('.my-orders-hd').length){
        	var i = el.index(),panel = el.parents('.my-orders-hd').siblings('.my-orders-bd').find('.my-orders-panel').eq(i);
            
            el.addClass('crt').siblings().removeClass('crt');
            panel.show().siblings().hide();
            
            if(panel.find('.u-loadtips').length){
                var jsonUrl = '';
                if(el.name == 'nPay'){
                    jsonUrl = 'img.json';
                }else{
                    jsonUrl = 'img.json';
                }
                
                $.ajax({
                    type : 'GET',
                    url : jsonUrl,
                    dataType : 'json',
                    success : function(data){
                        var h = [];
                        for(var m=0; m<data.imgs.length; m++){
                            h.push(
                                '<section class="my-order"><a href="#" class="my-order-detail"><img src="'+ data.imgs[m].path +'" alt="" width="60" height="60"><ul><li>'+ data.imgs[m].id +'</li><li>总价：￥'+ data.imgs[m].praiseCount +'</li><li>总数：'+ data.imgs[m].praiseCount +'</li><li>购买时间：'+ data.imgs[m].nickName +' </li></ul>',
    '</a></section>'
                            );
                        }
                        console.log(h)
                        panel.html(h.join(''));
                    },
                    error : function(){
                        penel.find('.u-loadtips').text('出错了！');
                    }
                })
            }
        }
        
        
        
        if(el.hasClass('m-explain-close')){
            el.parents('.m-explain').remove();
        }
        
        
    }).on('change','.m-king-txt',function(){
        reckonPrice($(this).parents('.m-king'));
    })
    
    //总价计算
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
    
    $('.m-orders-calendar').on('focus', function(){
        $(this).calendar('show');
    });
    
    
    function showExplain(tit,cont){
        $(document.body).append('<div class="m-explain"><div class="m-explain-hd"><h2>'+tit+'</h2><a href="#" class="m-explain-close"></a></div><div class="m-explain-bd">'+cont+'</div></div>');
    }
    
    //购票须知
    $('.view-explain').click(function(){
        showExplain('购票须知','购票须知购票须知购票须知购票须知购票须知购票须知购票须知购票须知购票须知购票须知购票须知购票须知购票须知购票须知');
    })
    
    //使用说明
    $('.view-explain').click(function(){
        showExplain('购票须知','购票须知购票须知购票须知购票须知购票须知购票须知购票须知购票须知购票须知购票须知购票须知购票须知购票须知购票须知');
    })
    
    
    
    
    
//    //取票人验证
//    $("#username").blur(function(){
//    	if($("#username").val() == '') {
//    		alert("取票人不能为空");
//    		$("#username").focus();
//    	}
//    })
//    
//    //取票人联系方式验证
//    $("#usertel").blur(function(){
//    	if($("#usertel").val() == '') {
//    		alert("联系方式不能为空");
//    		$("#usertel").focus();
//    	}else {
//    		if(!$("#usertel").val().match(/^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/)) {
//    			alert("手机格式不对");
//    			$("#usertel").focus();
//    		}
//    	}
//    })
    
    
//    $(document.body).on('touchstart','.my-orders-hd li',function(){
//        var el = $(this),i = el.index();
//        el.addClass('crt').siblings().removeClass('crt');
//        
//        el.parents('.my-orders-hd').siblings('.my-orders-bd').find('.my-orders-panel').eq(i).show().siblings().hide();
//    })
    
})