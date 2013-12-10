/*
无缝滚动
jQuery("#ID").j_scroll({type:"x",cycle:false,action:"single",speed:500,auto:true,autotime:3000,prevId:"prev",nextId:"next"});

type:   "x",         //滚动方向{x|y} 横向、纵向 默认x
action: "single",    //滚动方式{single|group}单张、组 默认single
cycle:  false,       //是否循环 默认false
auto:  false,        //是否自动播放，自动播放时cycle默认为true 默认false
autotime: 3000,      //自动播放间隔时间 默认为3000毫秒(3秒)
speed: 500           //速度 300 默认500毫秒(5秒)
prevId:ID			//上一个按钮（可不填）
nextId:ID			//下一个按钮（可不填）
*/
(function($){
	$.fn.j_scroll = function(options){
		var opt = $.extend({},$.fn.j_scroll.defaults,options);
		var $this = $(this);
		var scrollPause = false //是否暂停自动播放
		var scrollWrapId = "scrollWrap_"+$this.attr('id');//包裹对象id
		var $scrollWrap;//包裹对象
		var ChildSize = $this.children().size(); //获得子节点数量
		var singleSize = opt.type == "x" ? $this.children().outerWidth() : $this.children().outerHeight(); //获得单个子节点尺寸
		var overPlus = opt.type == "x" ? $this.width() - ChildSize* singleSize : $this.height() - ChildSize* singleSize;
		
		if(overPlus >= 0) {return false} //内容不够多时候自动退出
		if(opt.auto){
			opt.cycle = true;
			opt.action = "single";
		}
		
		//初始化
		var init = function(){
			$this.css({position:"relative",zIndex:0});
			if(opt.cycle){ //循环播放时将类容复制3份
				opt.action = "single";
				$this.html("<div id='"+scrollWrapId+"' style='position:absolute;z-index:0;'>"+$this.html() + $this.html() + $this.html()+"</div>");
			}else{
				$this.html("<div id='"+scrollWrapId+"' style='position:absolute;z-index:0;'>"+$this.html()+"</div>");
			}
			$scrollWrap = $this.find("#"+scrollWrapId);

			if(opt.type == "x"){
				$scrollWrap.width(singleSize*$scrollWrap.children().size()).css({left:0,top:0});
				if(opt.cycle){
					$scrollWrap.css("left",singleSize*ChildSize*(-1));
				}
			}else{
				$scrollWrap.height(singleSize*$scrollWrap.children().size()).css({top:0,left:0});
				if(opt.cycle){
					$scrollWrap.css("top",singleSize*ChildSize*(-1));
				}
			}
			
			//绑定事件
			if(opt.nextId){
				$("#" + opt.nextId).click(function(){
					if(opt.auto) {clearInterval(timeout);}
					if(opt.action == "single"){
						doanimate(-(opt.doanimate||1));
					}else	if(opt.action == "group"){
						if(opt.type == "x"){
							doanimate(0-$this.width()/singleSize);
						}else{
							doanimate(0-$this.height()/singleSize);
						}
					}
					return false;
				});
			};
			if(opt.prevId){
				$("#" + opt.prevId).click(function(){
					if(opt.auto) {clearInterval(timeout);}
					if(opt.action == "single"){
						doanimate((opt.doanimate||1));
					}else	if(opt.action == "group"){
						if(opt.type == "x"){
							doanimate($this.width()/singleSize);
						}else{
							doanimate($this.height()/singleSize);
						}
					}
					return false;
				});
			}
			if(opt.auto){
				$this.hover(function(){
						clearInterval(timeout);
						timeout = "mmover";
					},
					function(){
						timeout = window.setInterval(function(){
							doanimate(-1);
						},opt.autotime)
					}
				)
			}
		}

		//移动事件
		var doanimate = function(n){
			if(scrollPause){return false;}
			scrollPause = true;
			var tmpPosVal = opt.type == "x" ? parseInt($scrollWrap.css("left")) : parseInt($scrollWrap.css("top"));
			if(tmpPosVal == 0  && n >0){scrollPause = false;return false;}
			if(tmpPosVal <= overPlus && !opt.cycle && n<0){scrollPause = false;return false;}
			if(opt.type == "x"){
				$scrollWrap.animate({left:tmpPosVal + n*singleSize},opt.speed,function(){
					checkPosition(tmpPosVal + n*singleSize,"x");
				});
			}else{
				$scrollWrap.animate({top:tmpPosVal + n*singleSize},opt.speed,function(){
					checkPosition(tmpPosVal + n*singleSize,"y");
				});
			}
		}
		
		//检测
		var checkPosition = function(v,p){
			scrollPause = false;
			if(opt.cycle){
				if(v == 0){
					if(p == "x"){
						$scrollWrap.css("left",singleSize*ChildSize*(-1));
					}else{
						$scrollWrap.css("top",singleSize*ChildSize*(-1));
					}
				}
				if(v <= singleSize*ChildSize*(-2)){
					if(p == "x"){
						$scrollWrap.css({left:singleSize*ChildSize*(-1)});
					}else{
						$scrollWrap.css({top:singleSize*ChildSize*(-1)});
					}
				}
			}
			if(opt.auto && timeout != "mmover"){
				clearInterval(timeout);
				timeout = window.setInterval(function(){
					doanimate(-1);
				},opt.autotime)
			}
		}

		if(opt.auto){
			var timeout = window.setInterval(function(){
				doanimate(-1);
			},opt.autotime)
		}
		
		init();

	}

	$.fn.j_scroll.defaults = {
		type:   "x", 
		action: "single",
		cycle:  false,
		auto:  false,
		autotime: 3000,
		speed: 500
	}
})(jQuery);