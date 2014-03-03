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



$('.nav-item-cont').find('dt a').click(function(e){
	var _this=$(this);
	_this.addClass('selected').parent().siblings('dd').show().end().parents('dl').siblings('dl').hide();
	e.preventDefault();
})

$('.nav-item').hover(function(){
	var _this=$(this);
	if(_this.find('.nav-item-cont').length){
		_this.children('a').addClass('active');
	}
	_this.find('.nav-item-cont').show();
},function(){
	var _this=$(this);
	_this.find('.nav-item-cont').hide();
	if(_this.children('a').hasClass('active')){
		_this.children('a').removeClass('active');
	}
	_this.find('dl').show().find('dd').hide().end().find('a').removeClass('selected');
})


$('.slide-hd').find('li').click(function(){
	$(this).addClass('selected').siblings('li').removeClass('selected');
	var img=new Image();
	img.onload=function(){
		img.onload=null;
		img.src=null;
	}
	img.src=$(this).attr('ssrc');
	$('.slide-bd').find('li img').attr('src',img.src);
})