$('.nav').find('li').hover(function(){
	if($(this).hasClass('selected')){
		$(this).data('isSelected',true);
	}else{
		$(this).data('isSelected',false);
		$(this).addClass('selected')
	}
	$(this).find('dd').show();
},function(){
	if(!$(this).data('isSelected')){
		$(this).removeClass('selected');
	}
	$(this).find('dd').hide();
})

$('.platform').find('.platform-hd a').each(function(i){
	$(this).click(function(e){
		e.preventDefault();
		$(this).addClass('selected').siblings().removeClass('selected');
		$(this).parent().siblings('.platform-bd').eq(i).show().siblings('.platform-bd').hide();
	})
})