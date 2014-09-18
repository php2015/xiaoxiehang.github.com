$('.m-search').find('label').click(function(){
	$(this).hide().siblings('input').focus();
}).end().find('input').blur(function(){
	if($(this).val()==''){
		$(this).siblings('label').show();
	}
})



$('.g-nav').children('ul').children('li').hover(function(){
    $(this).children('ul').toggle();
})