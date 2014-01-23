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


//切换
function Switch(Parent,Sibling,num){
	$(this).live('click',function(e){
		$(this).addClass('selected').siblings().removeClass('selected');
		$(this).parents(Parent).find(Sibling).addClass('hide').eq(num).removeClass('hide');
		e.preventDefault();
	})
}

//交易平台
$('.platform').find('.platform-hd a').each(function(i){
	Switch.call(this,'.forum-bd','.platform-bd',i)
})
//登录注册切换
$('div.login-hd').find('li').each(function(i){
	Switch.call(this,'.login-box','.login-bd',i);
})
//产品与交易
$('div.trading-hd').find('li').each(function(i){
	Switch.call(this,'.trading','.trading-bd',i);
})
$('div.trading-tab-hd').find('li').each(function(){
	var i=$(this).index();
	Switch.call(this,'.trading-tab','.trading-tab-bd',i);
})
//直播间
$('div.studio-hd').find('li').each(function(i){
	$(this).live('click',function(e){
		if($(this).text()=='我的纸条'){
			return;
		}else if(i==3){
			i--;
		}
		$(this).addClass('selected').siblings().removeClass('selected');
		$(this).parents('.studio-tab').find('.studio-bd').addClass('hide').eq(i).removeClass('hide');
		e.preventDefault();
	})
	//Switch.call(this,'.studio-tab','.studio-bd',i);
})
//财经日历
$('ul.economic-tab-hd').find('li').each(function(i){
	Switch.call(this,'.economic-tab','.economic-tab-bd',i);
})

$('.team').delegate('li','mouseover',function(){
	$(this).find('span').stop(true,false).animate({height:$(this).find('em').outerHeight()+$(this).find('strong').outerHeight()},150);
}).delegate('li','mouseout',function(){
	$(this).find('span').animate({height:'20px'},150);
})

	
$('div.market-news tbody:eq(0)').find('td').click(function(){
	var h=[
		'<tr class="economic">',
		'<td colspan="5">',
		'<div class="economic-tit"><strong><span title="美国" class="ceFlags United_States">&nbsp;</span>克利夫兰消费者价格指数 (月度)</strong></div>',
		'<div class="clearfix">',
		'<dl class="real-data">',
		'<dt>今值：</dt>',
		'<dd>预报：2.8%</dd>',
		'<dd>前一页：1.8%</dd>',
		'</dl>',
		'<ul class="details">',
		'<li><strong>重要性：</strong>为什么是欧洲这么强？</li>',
		'<li><strong>利率：</strong>0.85%</li>',
		'<li><strong>发行方：</strong></li>',
		'</ul>',
		'</div>',
		'<div class="economic-tab">',
		'<ul class="economic-tab-hd"><li class="selected">简介</li><li>图</li><li>历史</li></ul>',
		'<div class="economic-tab-bd">111111</div>',
		'<div class="economic-tab-bd hide">222222</div>',
		'<div class="economic-tab-bd hide">3333333</div>',
		'</div>',
		'</td>',
		'</tr>'
	];
	var _this=$(this),tr=_this.parent();
	tr.addClass('hover').after(h.join('')).siblings().removeClass('hover').next('.economic').remove();
})

$(document.body).delegate('.win-close','click',function(){
	$(this).parents('.win').hide();
})
if($.browser.msie && $.browser.version<'7'){
	$('div.live').hover(function(){
		$(this).find('.arrow').toggle();
	})
}