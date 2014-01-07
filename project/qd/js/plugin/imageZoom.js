(function($){
    $.fn.imagezoom = function(options){
        var opts = {
            xzoom: 310,
            yzoom: 310,
            offset: 10
        };
        $.extend(opts, options);

        var self = $(this);
        self.mouseover(function(){
            var selfWidth = self.width();
            var selfHeight = self.height();
            var selfLeft = self.offset().left;
            var selfTop = self.offset().top;
            var bigLeft = selfLeft+opts.offset+selfWidth;
            var bigimage = self.attr('rel');
            if(!$('div.zoomMask').length){
                $(document.body).append("<div class='zoomDiv'><img class='bigimg' src='"+bigimage+"'/></div><div class='zoomMask'>&nbsp;</div>");
            }
            
            var zoomDiv=$('div.zoomDiv'),zoomMask=$('div.zoomMask');

            zoomDiv.css({left: bigLeft , top: selfTop , width: opts.xzoom , height: opts.yzoom}).fadeIn();
            var scaleX = zoomDiv.find('img').width()/self.width(),
                scaleY = zoomDiv.find('img').height()/self.height();

            zoomMask.css({left: selfLeft , top: selfTop , width: opts.xzoom/scaleX , height: opts.yzoom/scaleY});

            var maskLeft,maskTop;
            //移动鼠标触发
            $(document).mousemove(function(e){
                var mouse = new MouseEvent(e);
                if(mouse.x<selfLeft-1 || mouse.x>selfLeft+selfWidth || mouse.y<selfTop || mouse.y>selfTop+selfHeight){
                    mouseOutImage();
                    return false;
                }


                if(mouse.x <= selfLeft+zoomMask.width()/2){
                    maskLeft = selfLeft;
                }else if(mouse.x >= selfLeft+selfWidth-zoomMask.width()/2){
                    maskLeft = selfLeft+selfWidth-zoomMask.width();
                }else{
                    maskLeft = mouse.x-zoomMask.width()/2;
                }

                if(mouse.y <= selfTop+zoomMask.height()/2){
                    maskTop = selfTop;
                }else if(mouse.y >= selfTop+selfHeight-zoomMask.height()/2){
                    maskTop = selfTop+selfHeight-zoomMask.height();
                }else{
                    maskTop = mouse.y-zoomMask.height()/2;
                }
                zoomMask.css({left: maskLeft,top: maskTop});

                // var xposs = mouse.x - zoomMask.width()/2 - selfLeft,
                //     yposs = mouse.y - zoomMask.height()/2 - selfTop;
                // $("div.zoomDiv").scrollLeft(xposs*scaleX);
                // $("div.zoomDiv").scrollTop(yposs*scaleY);
                // console.log(xposs*scaleX);
                $("div.zoomDiv").find('img').css({position:'absolute',
                    top:(-(zoomMask.offset().top-selfTop)*scaleY),
                    left:(-(zoomMask.offset().left-selfLeft)*scaleX)
                })
            })
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