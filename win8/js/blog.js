$(function(){
	bgImage();
});

var i=0;
window.onload=function(){
	menuColor();
	$('#loading').fadeOut(1000,function(){
		showMenu();
	});
}

/*定义menu背景颜色*/
function menuColor(){
	var bg_color=['#fb7f62','#07c1d5','#206290','#d9015d','#fb435d','#f4945e','#d69c22','#359c54','#9f0353','#a87ec1','#96d9ca','#98b02b'];
	$('#menu').find('li').each(function(){
		var i=$(this).index();
		$(this).css('backgroundColor',bg_color[i]);
	});
}

/*显示 menu */
function showMenu(){
	/*瀑布流*/
	$('#menu').masonry({
		itemSelector:'li'
	});
	showItem();
};

function showItem(){
	var li=$('#menu').find('li');
	$('#menu').find('li').eq(i++).addClass('show');
	if(i<li.length){
		setTimeout("showItem()",100)
	}else{
		i=0;
	}
};

function showPage(title){
	console.trace();
	var w_width=$(window).width(),
		w_height=$(window).height();
	var o=$('.'+title)
		o_page=$('#'+title);
	if(o_page.length==0){
		$('body').append('<div id="'+title+'" class="page" style=""></div>');
	}
	$('#'+title).css({position:'fixed',
				  top:o.position().top+(w_height-510)/2+10,
				  left:o.position().left+(w_width-1020)/2+10,
				  backgroundColor:o.css('background-color'),
				  width:o.outerWidth(),
				  height:o.outerHeight()
	}).show();
	if(o_page.length!=0){
		setTimeout(function(){
			$('#'+title).addClass('w_show').css({width:w_width,height:w_height,top:0,left:0});
			setTimeout(function(){
				$('.'+title+'-main').fadeIn(500);
			},500);
		},50);
	}else{
		$(document).ajaxStart(function(){
			$("#loading").show();
		})
		setTimeout(function(){
			$.ajax({
				type : 'GET',
				url : 'http://f2es.net/win8/'+title+'.html',
				cache : false,
				dataType : 'html'
			}).done(function(data){
				//var data = data.match(/<body>((.|\s|\r|\n|\f)*)<\/body>/)[1];
				$('#'+title).addClass('w_show').css({width:w_width,height:w_height,top:0,left:0}).html(data);
				setTimeout(function(){
					$('.'+title+'-main').fadeIn(500);
					//showList();
				},500);
			}).fail(function(){
				setTimeout(function(){
					//closePage(title);
					alert('暂无');
				},2000)
			})
		},50);
		$(document).ajaxStop(function(){
			$('#loading').fadeOut();
		})
	}
	setTimeout(function(){
		var close_page=$('#close-page');
		if(close_page.length==0){
			$('body').append('<a href="javascript:;" id="close-page" title="'+title+'">X</a>');
		}else{
			close_page.attr('title',title);
		}
		$('#close-page').animate({top:0},500);
	},1500)
};


//关闭
function closePage(title){
	var w_width=$(document).width(),w_height=$(document).height();
	var o=$('.'+title);
	$('#'+title).children().fadeOut(600);
	$('#close-page').animate({top:-40},500);
	setTimeout(function(){
		$('#'+title).removeClass('w_show')
			.css({top:o.position().top+(w_height-510)/2+10,left:o.position().left+(w_width-1020)/2+10,width:o.outerWidth(),height:o.outerHeight(),opacity:0}).delay(300).fadeOut();
	},600);
};

//点击关闭层
$('body').delegate('#close-page','click',function(){
	if($('.post-content').is(':visible')){
		$('.post-content').fadeOut();
	}else{
		//hideList();
		closePage($(this).attr('title'));
	}
});


/*
 *点击显示层
*/
$('#menu').find('li').click(function(){
	var title=$(this).attr('title');
	showPage(title);
});

/*
 *随机背景图片
*/
function bgImage(){
	var i=Math.ceil(Math.random()*10);
	var h='<div id="bg"><img alt="" src="http://xiaoxiehang.h5.5vv.cc/blog/bg/'+i+'.jpg"/></div>'
	$('body').append(h);
	bgSize();
};

/*
 *定义背景大小
*/
function bgSize(){
	var w_width=$(window).width();
	var w_height=$(window).height();
	$('#bg').find('img').css({'width':w_width,'height':w_height});
};

$(window).bind('scroll resize',function(){
	var w_width=$(window).width();
	var w_height=$(window).height();
	$('.page,#bg img').css({'width':w_width,'height':w_height});
});