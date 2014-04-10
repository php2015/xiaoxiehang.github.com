(function($){
	$.fn.slide=function(options){
		var defaults={
			next:'',
			prev:'',
			speed:'500',
			autotime:'3000',
			arrow:false,
			pages:true
		}
		var opts=$.extend(defaults,options);
		var t = $(this),
			len = t.find('li').length,
			slide_box=t.find('ul');

		if(opts.pages){
			t.append('<div class="slide_page"></div>')
			for(var i=0;i<len;i++){
				t.find('.slide_page').append('<i>'+(i+1)+'</i>');
			}
		}
		if(opts.arrow){
			t.append('<span class="'+opts.prev+'"></span><span class="'+opts.next+'"></span>');
		}
		t.css('position','relative').find('.slide_page').find('i').eq(0).addClass('selected');
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

		t.find('.slide_page').find('i').mouseover(function(){
			var self=$(this)
			var i=self.index();
			self.addClass('selected').siblings().removeClass('selected');
			slide_box.stop(true,false).animate({left:'-'+t.width()*i},opts.speed);
			page=i+1;
		})

		$('.'+opts.next).click(function() {
			slide_animate();
		});
		$('.'+opts.prev).click(function() {
			slide_animate(0);
		})
	}
})(jQuery);
