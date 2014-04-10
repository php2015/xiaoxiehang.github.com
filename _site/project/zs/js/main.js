$('div.fixed-list').find('dt a').click(function(e){
	$('div.fixed-list').find('dd').hide().end().find('.arrow').removeClass('arrow-down');
	var _this=$(this);
	_this.next('i').toggleClass('arrow-down').end()
		.parent().siblings('dd').toggle();
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

