(function($){
    $.fn.slide=function(options){
        var defaults={
        	autotime:3000
        }

        var opts = $.extend({},defaults,options);

        var _this = $(this),
            hd =_this.find('.'+_this.attr('class') + '-hd'),
            bd =_this.find('.'+_this.attr('class') + '-bd');

        function Switch(i){
            var bimg =hd.find('li').eq(i);

            hd.find('li').eq(i).addClass('selected').siblings().removeClass('selected');

            var img = new Image();
            img.onload = function(){
                img.onload = null;
            }
            bd.find('img').attr('src',bimg.attr('ssrc')).end().find('.buy-now').attr('href',bimg.attr('shref'));
        }

        var s,i=1;
        _this.hover(function(){
            clearInterval(s);
        },function(){
            s = setInterval(function(){
	            console.log(i)
	            Switch(i);
	            i>=hd.find('li').length-1 ? i=0 : i++;
            },opts.autotime);
        }).trigger('mouseleave');

        //单击事件
        hd.find('li').each(function(i){
            var self = $(this);
            self.click(function(){
                Switch(i);
            })
        })
    }
})(jQuery);


$('div.fixed-list').find('dt a').click(function(e){
	// $('div.fixed-list').find('dd').hide().end().find('.arrow').removeClass('arrow-down');
	var _this=$(this);
	// _this.next('i').toggleClass('arrow-down').end()
	// 	.parent().siblings('dd').toggle();
	_this.next('i').toggleClass('arrow-down').end().parent().siblings('dd').toggle();
	e.preventDefault();
}).end().find('li').on('mouseover',function(){
	var _this=$(this);
	_this.addClass('selected');
}).on('mouseout',function(){
	var _this=$(this);
	_this.removeClass('selected');
}).end().find('dl').eq(0).find('dd').show();
$('.top-ad-close').click(function(){
	$(this).parent().hide();
})

$('.pro-list-img').find('li').click(function(){
	$(this).addClass('selected').siblings('li').removeClass('selected');
	$('.pro-big-img').find('img').attr('src',$(this).find('img').attr('big-src'));
})


$('.nav-item-cont').find('dt a').toggle(function(e){
	var _this=$(this);
	_this.addClass('selected').parent().siblings('dd').show().end().parents('dl').siblings('dl').hide();
	e.preventDefault();
},function(){
	var _this=$(this);
	_this.removeClass('selected').parent().siblings('dd').hide().end().parents('dl').siblings('dl').show();
	e.preventDefault();
})
var navItem=false;
$('.nav-item').hover(function(){
	if($(this).find('a').hasClass('active')){
		navItem=true;
	}
	var _this=$(this);
	if(_this.find('.nav-item-cont').length){
		_this.children('a').addClass('active');
	}
	_this.find('.nav-item-cont').show();
},function(){
	var _this=$(this);
	_this.find('.nav-item-cont').hide();
	_this.find('dl').show().find('dd').hide().end().find('a').removeClass('selected');

	if(navItem){
		navItem=false;
		return false;
	}

	if(_this.children('a').hasClass('active')){
		_this.children('a').removeClass('active');
	}
})


$('dl.logined').hover(function(){
	$(this).find('dd').show();
},function(){
	$(this).find('dd').hide();
})

$('.icon-dress-big').hover(function(){
	if($(this).hasClass('selected')){return false;}
	$(this).siblings('.dress-big-cont').show();
},function(){
	$(this).siblings('.dress-big-cont').hide();
})

$('.icon-share').hover(function(){
	var top=$(this).offset().top-30,
		left=$(this).offset().left-22;
	if($('.icon-share-cont').length){
		$('.icon-share-cont').css({top:top,left:left}).show();
	}else{
		$('body').append('<span class="icon-share-cont" style="top:'+top+'px;left:'+left+'px">Share here<i class="arrow"></i></span>')
	}
},function(){
	$('.icon-share-cont').hide();
})

$('.icon-like').hover(function(){
	var top=$(this).offset().top+28,
		left=$(this).offset().left-46;
	if($('.icon-like-cont').length){
		$('.icon-like-cont').css({top:top,left:left}).show();
	}else{
		$('body').append('<span class="icon-like-cont" style="top:'+top+'px;left:'+left+'px">Add to my favourite<i class="arrow"></i></span>')
	}
},function(){
	$('.icon-like-cont').hide();
})

$('.j-price').hover(function(){
	var top=$(this).offset().top-60,
		left=$(this).offset().left-46;
	if($('.j-price-cont').length){
		$('.j-price-cont').css({top:top,left:left}).show();
	}else{
		$('body').append('<span class="j-price-cont" style="top:'+top+'px;left:'+left+'px"><span style="color:#fff600;">Total save</span><br>'+$(this).data('total-save')+'<i class="arrow"></i></span>')
	}
},function(){
	$('.j-price-cont').hide();
})


$('.pro-details-hd').find('li').click(function(){
	$(this).addClass('selected').siblings('li').removeClass('selected').parents('.pro-details-tab').find('.pro-details-bd').eq($(this).index()).removeClass('hide').siblings('.pro-details-bd').addClass('hide');
})


$('.icon-dress-big').click(function(e){
	e.preventDefault();
	$(this).toggleClass('selected');
})

$('.icon-like').click(function(e){
	e.preventDefault();
	$(this).toggleClass('icon-like-gray');
})