(function($){
	$.fn.slide=function(options){
		var defaults={
			next:'',	//下一个按钮（可不填）
			prev:'',	//上一个按钮（可不填）
			speed:'500',	//速度
			autotime:'3000', //间隔时间
			arrow:false,//
			pages:true
		}
		var opts=$.extend(defaults,options);
		var t = $(this),
			len = t.find('li').length,
			slide_box=t.find('ul');

		if(opts.pages){
			t.append('<ul class="m-slide-page"></ul>')
			for(var i=0;i<len;i++){
				t.find('.m-slide-page').append('<li>'+t.find('span').eq(i).text()+'</li>');
			}
		}
		if(opts.arrow){
			t.append('<span class="'+opts.prev+'"></span><span class="'+opts.next+'"></span>');
		}
		t.css('position','relative').find('.m-slide-page').find('i').eq(0).addClass('selected');
		slide_box.css({position:'absolute',width:'9999px',height:t.height()});

		var page=1;
		function slide_animate(k){
			if(!slide_box.is(':animated')){
				if(k==undefined){
					if(page==len){
						slide_box.animate({left:0},opts.speed);
						page=1;
					}else{
						slide_box.animate({left:'-='+t.width()},opts.speed);
						page++;
					}
				}else{
					if(page==1){
						slide_box.animate({left:'-='+(t.width()*(len-1))},opts.speed);
						page=len;
					}else{
						slide_box.animate({left:'+='+t.width()},opts.speed);
						page--;
					}
				}
				t.find('.slide_page').find('i').eq(page-1).addClass('selected').siblings().removeClass('selected');
			}
		}

		var s;
		t.hover(function(){
			clearInterval(s);
			t.children('span').show();
		},function(){
			s=setInterval(slide_animate,opts.autotime);
			t.children('span').hide();
		}).trigger('mouseleave');

		t.find('.m-slide-page').find('li').mouseover(function(){
			var self=$(this)
			var i=self.index();
			self.addClass('selected').siblings().removeClass('selected');
			slide_box.stop(true,false).animate({left:'-'+t.width()*i},opts.speed);
			page=i+1;
		})
        if(opts.next){
            $('.'+opts.next).click(function() {
                slide_animate();
            });
        }
        if(opts.prev){
            $('.'+opts.prev).click(function() {
                slide_animate(0);
            })
        }
	}
})(jQuery);