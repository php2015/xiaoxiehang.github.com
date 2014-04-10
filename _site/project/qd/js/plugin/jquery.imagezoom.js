(function($){
    $.fn.imagezoom = function(options){
        var opts = {
            xzoom: 310,
            yzoom: 310,
            offset: 10
        };

        if(options) {
            $.extend(opts, options);
        }

        var self = $(this);
        self.mouseover(function(){
            var imageLeft = self.offset().left;//元素左边距
            var imageTop = self.offset().top;//元素顶边距

            var imageWidth = self.get(0).offsetWidth;//图片宽度
            var imageHeight = self.get(0).offsetHeight;//图片高度

            var boxLeft = self.parents('.pro-images-img').offset().left;//父框左边距
            var boxTop = self.parents('.pro-images-img').offset().top;//父框顶边距
            var boxWidth = self.parents('.pro-images-img').width();//父框宽度
            var boxHeight = self.parents('.pro-images-img').height();//父框高度

            var bigimage = self.attr("rel");//大图地址

            //添加放大镜和遮罩
            var zoomDiv = $('.zoomDiv');
            if(!zoomDiv.length){
                $('body').append("<div class='zoomDiv'><img class='bigimg' src='"+bigimage+"'/></div><div class='zoomMask'>&nbsp;</div>");
            }
            //设置放大镜位置
            var leftpos;
            if(boxLeft + boxWidth + opts.offset + opts.xzoom > screen.width){//如果超出屏幕宽度，就将放大镜放在列表左边
                leftpos = boxLeft  - opts.offset - opts.xzoom;
            }else{//否在就放在列表右边
                leftpos = boxLeft + boxWidth + opts.offset;
            }
            $("div.zoomDiv").css({top: boxTop , left: leftpos , width: opts.xzoom , height: opts.yzoom}).fadeIn();

            //移动鼠标触发
            $(document).mousemove(function(e){
                mouse = new MouseEvent(e);
                if(mouse.x<imageLeft-1 || mouse.x>imageLeft+imageWidth || mouse.y<imageTop || mouse.y>imageTop+imageHeight){
                    mouseOutImage();
                    return false;
                }

                var big= $('.bigimg').get(0) , bigwidth= big.offsetWidth , bigheight= big.offsetHeight;

                var scalex= bigwidth / imageWidth,
                	scaley= bigheight / imageHeight;

                var zoomMask= $("div.zoomMask");
                zoomMask.css({width: opts.xzoom/scalex , height: opts.yzoom/scaley , visibility: 'visible'});

                
                //设置遮罩位置
                var xpos , ypos , maskW = zoomMask.width() , maskH = zoomMask.height();

                //水平位置
                if(mouse.x - maskW/2 < imageLeft){//左
                    xpos = imageLeft;
                }else if(mouse.x + maskW/2 > imageWidth + imageLeft ){//右
                    xpos = imageWidth + imageLeft - maskW;
                }else{
                    xpos = mouse.x - maskW/2;
                }

                //垂直位置
                if(mouse.y - maskH/2 < imageTop){//上
                    ypos = imageTop;
                }else if(mouse.y + maskH/2 > imageHeight + imageTop){//下
                	ypos = imageHeight + imageTop - maskH;
                }else{
                    ypos = mouse.y - maskH/2;
                }
                //xpos = (mouse.x - zoomMask.width()/2 < imageLeft ) ? imageLeft : (mouse.x + zoomMask.width()/2 > imageWidth + imageLeft ) ?  (imageWidth + imageLeft - zoomMask.width()): xpos;
                //ypos = (mouse.y - zoomMask.height()/2 < imageTop ) ? imageTop : (mouse.y + zoomMask.height()/2  > imageHeight + imageTop ) ?  (imageHeight + imageTop - zoomMask.height()) : ypos;

                zoomMask.css({top: ypos , left: xpos});

                var xposs = mouse.x - zoomMask.width()/2 - imageLeft,
                 	yposs = mouse.y - zoomMask.height()/2 - imageTop;
                $("div.zoomDiv").get(0).scrollLeft = xposs * scalex;
                $("div.zoomDiv").get(0).scrollTop  = yposs * scaley;
                console.log(imageLeft)
            });
        });

		function mouseOutImage(){
			$("div.zoomMask").remove();
			$("div.zoomDiv").remove();
		}
	}
})(jQuery);


function MouseEvent(e) {
	this.x = e.pageX;
	this.y = e.pageY;
}