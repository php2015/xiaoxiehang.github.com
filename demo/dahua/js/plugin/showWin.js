(function(){
	$.extend({
		showWin:function(opts){
			var defaults={
				obj:'',//ID，唯一标识，必填
				title:'弹窗标题',//标题
				content:'弹窗内容',//内容 html
				mask:1,//是否显示遮罩, 1 or 0 , 默认显示遮罩
				drag:0,//是否拖拽, 1 or 0 , 默认为不能拖拽
				/*按钮,不需要按钮 button:0 */
				button:[{ 
					id_name:'',//ID 可不填
					class_name:'submit-btn',//class
					title:'确定',//文案
					callback:function(){return true;}//回调函数
				},{
					id_name:'',
					class_name:'submit-btn',
					title:'取消',
					callback:function(){return true;}
				}],
				width:'',//弹框宽度
				height:''//win-bd弹框高度(弹框高度为 win-hd + win-bd + win-ft)
			};

			var winParent=window.parent.document;

			//按钮属性值替换
			if(opts.button){
				if(!$.isArray(opts.button)){
					var obj=opts.button;
					opts.button=[obj]
				}else if(opts.button.length<2){
					opts.button.push("");
				}
				$.each(opts.button,function(i){
					opts.button[i]=$.extend({},defaults.button[i],opts.button[i]);
				})
			}

			var opts=$.extend({},defaults,opts);
			
			if(!opts.obj) return false;//没有ID，直接返回

			
			var h = [
				'<div id="'+opts.obj+'" class="win" style="display:none;width:'+opts.width+';">',
				'<div class="win-hd"><h3>'+opts.title+'</h3><a href="javascript:;" class="win-close icon-del" title="关闭">删除</a></div>',
				'<div class="win-bd" style="height:'+opts.height+'">'+opts.content+'</div>',
				'</div>'
			];
			//添加遮罩
			if(opts.mask){
				h.push('<div class="win-mask"></div>');
			}
			$('body',winParent).append(h.join(''));
			
			//var o=$('#'+opts.obj);
			var o=$('#'+opts.obj,winParent);
			
			//判断按钮
			if(opts.button){
				o.append('<div class="win-ft"></div>');
				$.each(opts.button,function(i){
					$('.win-ft').append('<a href="javascript:;" id="'+this.id_name+'" class="'+this.class_name+'" title="'+this.title+'"><span>'+this.title+'</span></a>');
					var callback=this.callback;
					$('.win-ft').find('a').eq(i).click(function(){
						(callback())?win.hide():'';
					})
				})
			}

			var win={
				//显示弹窗
				show:function(){
					$('.win-mask',winParent).css('height',$(document,winParent).height());
					o.show();
				},
				//关闭弹窗
				hide:function(e){
					$('.win-mask',winParent).remove();
					o.remove();
				},
				//设置弹窗左边距
				left:function(){
					var w_obj=o.outerWidth();
					var w_window=$(window).width();
					o.css('left',(w_window-w_obj)/2);
				},
				//设置弹窗上边距
				top:function(){
					var h_obj=o.outerHeight();//获取弹框高度
					var h_window=$(window,winParent).height();
					o.css('top',(h_window-h_obj)/2);
				}
			}
			
			win.show();
			win.left();
			win.top();

			//浏览器窗口大小改变后居中弹框
			$(window,winParent).bind('resize',function(){
				win.left();
				win.top();
			})
			
			$('.win-close',winParent).bind('click',function(){
				win.hide();
			})

			if(opts.drag){
				$.winDrag('.win','.win-hd');	
			}
		}
	});

	/*=S 拖拽 */
	$.winDrag = function(obj,obj_hd){
		var x=y=0,m=false;
		$(obj_hd).bind('mousedown',function(e){
			e=e||event;
			m=true;
			var $self=$(this);
			var win=$self.parent();
			x=e.pageX-win.offset().left;
			y=e.pageY-win.offset().top;
			win.fadeTo(300,.6);
			return false;
		}).css('cursor','move');
		$(document).mousemove(function(e){
			if(m){
				var left=e.pageX-x,top=e.pageY-y-($(document).scrollTop());
				$(obj).css({left:left,top:top});
			}
		}).mouseup(function(){
			if(m){
				m=false;
				$(obj).fadeTo(300,1);
			}
		})
	}
	/*=E 拖拽 */
})(jQuery);