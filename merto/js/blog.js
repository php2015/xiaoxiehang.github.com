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

/*
 * window
*/
function page(title){
	this.title=title;

	var $obj=$('.'+this.title);

	this.top=$obj.offset().top;
	this.left=$obj.offset().left;
	this.width=$obj.outerWidth();
	this.height=$obj.outerHeight();
	this.bg=$obj.css('backgroundColor');

	this.page=$('#'+this.title);
}
page.prototype={
	/*
	 * 显示页面
	*/
	pageShow:function(){
		var self=this,page=self.page,title=self.title;
		if(!page.length){
			$('body').append('<div id="'+title+'" class="page"></div>');
		}

		console.log( $('#'+title) == self.page );//为何为false;

		$('#'+title).css({	top:self.top , left:self.left , width:self.width , height:self.height , backgroundColor:self.bg	}).fadeIn(1,function(){
			$(this).addClass('w_show').css({ width:w.W() , height:w.H() , top:0 , left:0 });
		});

		/*
		 * 请求页面
		*/

		$(document).ajaxStart(function(){
			//开始请求
			$("#loading").show();
		}).ajaxStop(function(){
			//请求结束
			$("#loading").fadeOut();
		})

		$.ajax({
			type : 'GET',
			url : 'http://f2es.net/merto/'+title+'.html',
			cache : false,
			dataType : 'html'
		}).done(function(data){
			//请求成功
			$('#'+title).html(data);
			$('.'+title+'-main').fadeIn(500);
		}).fail(function(){
			//请求失败
		})

		// 显示关闭按钮
		this.pageCloseBtn();
	},
	/*
	 * 关闭页面
	*/
	pageClose:function(){
		var self=this,page=self.page;
		page.children().fadeOut(300);
		$('#close-page').animate({top:-40},300,function(){
			page.removeClass('w_show').css({top:self.top , left:self.left , width:self.width , height:self.height , opacity:0}).delay(300).fadeOut(500);
		});
	},
	/*
	 * 显示关闭按钮
	*/
	pageCloseBtn:function(){
		var closeBtn=$('#close-page');
		if(!closeBtn.length){
			$('body').append('<a href="javascript:;" id="close-page" title="'+this.title+'">X</a>');
		}else{
			closeBtn.attr('title',this.title);
		}
		$('#close-page').delay(500).animate({top:0},500);
	}
}


/*
 * 点击关闭页面
*/
$('body').delegate('#close-page','click',function(){
	if($('.post-content').is(':visible')){
		$('.post-content').fadeOut();
	}else{
		var self=$(this);
		var title=self.attr('title');

		var p=new page(title);
		p.pageClose();

		//hideList();
		//closePage($(this).attr('title'));
	}
});

/*
 * 点击显示页面
*/
$('#menu').find('li').click(function(){
	var self=$(this);
	var title=self.attr('title');

	var p=new page(title);
	p.pageShow();

	//showPage(title);
});


/*
 * window
*/
function win(){
	this.win = $(window);
}
win.prototype={
	W : function(){
		return this.win.width();
	},
	H : function(){
		return this.win.height();
	},
	bgSize : function(){
		$('#bg').find('img').css({'width':this.W(),'height':this.H()});
		if($('.page').is(':visible')){
			$('.page').css({'width':this.W(),'height':this.H()})
		}
	},
	bgImage : function(){
		var i=Math.ceil(Math.random()*10);
		var h='<div id="bg"><img src="http://xiaoxiehang.h5.5vv.cc/blog/bg/'+i+'.jpg" alt=""  ></div>';
		$('body').append(h);
		this.bgSize();
	}
}

var w=new win();
w.bgImage();

$(window).bind('scroll resize',function(){
	w.bgSize();
});



/*
 *随机背景图片

function bgImage(){
	var i=Math.ceil(Math.random()*10);
	var h='<div id="bg"><img alt="" src="http://xiaoxiehang.h5.5vv.cc/blog/bg/'+i+'.jpg"/></div>'
		$('body').append(h);
	$('#bg').find('img').load(function(){
	})
	win.bgSize();
};

*/

/*
 *定义背景大小

function bgSize(){
	var w_width=$(window).width();
	var w_height=$(window).height();
	$('#bg').find('img').css({'width':w_width,'height':w_height});
};

*/

/*
 *显示

function showPage(title){
	var o=$('.'+title),
		o_page=$('#'+title);
	if(o_page.length==0){
		$('body').append('<div id="'+title+'" class="page" style=""></div>');
	}
	$('#'+title).css({position:'fixed',
				  top:o.offset().top,
				  left:o.offset().left,
				  backgroundColor:o.css('background-color'),
				  width:o.outerWidth(),
				  height:o.outerHeight()
	}).fadeIn(1,function(){
		$('#'+title).addClass('w_show').css({width:w.W(),height:w.H(),top:0,left:0});
	});
	
	setTimeout(function(){
		if(o_page.length!=0){
			setTimeout(function(){
				$('.'+title+'-main').fadeIn(500);
			},500);
		}else{
			$(document).ajaxStart(function(){
				$("#loading").show();
			})

			$.ajax({
				type : 'GET',
				url : 'http://f2es.net/merto/'+title+'.html',
				cache : false,
				dataType : 'html'
			}).done(function(data){
				//var data = data.match(/<body>((.|\s|\r|\n|\f)*)<\/body>/)[1];
				$('#'+title).html(data);
				setTimeout(function(){
					$('.'+title+'-main').fadeIn(500);
					//showList();
				},500);
			}).fail(function(){
				//closePage(title);
			})
			$(document).ajaxStop(function(){
				$('#loading').fadeOut();
			})

		}
	},900);

	//显示关闭按钮
	setTimeout(function(){
		var close_page=$('#close-page');
		if(close_page.length==0){
			$('body').append('<a href="javascript:;" id="close-page" title="'+title+'">X</a>');
		}else{
			close_page.attr('title',title);
		}
		$('#close-page').animate({top:0},500);
	},500)
};
*/

/*
 *关闭

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
*/