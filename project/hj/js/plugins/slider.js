define(function(){return function($){
    (function(){
        $.fn.slider=function(options){
            var opts=$.extend({},$.fn.slider.defaults,options);
            var _this=$(this),li_length=_this.find('li').length;

            if(opts.pages){
                _this.append('<div class="slider-page"></div>')
                for(var i=0;i<li_length;i++){
                    _this.find('.slider-page').append('<i>'+(i+1)+'</i>');
                }
            }
            _this.css('position','relative').find('.slider-page').find('i').eq(0).addClass('selected');
            _this.find('ul').wrap('<div class="slide_box" />');

            var slide_box = _this.find('.slide_box').append(_this.find('ul').clone()).css({position:'absolute',width:'9999px',height:_this.height()});

            var page=1;
            function slide_animate(k){
                if(!slide_box.is(':animated')){
                    if(k){
                        page++;
                        slide_box.animate({left:'-='+_this.width()},opts.speed,function(){
                            if(page>li_length){
                                page=1;
                                slide_box.css('left',0);
                            }
                        });
                    }else{
                        if(page==1){
                            slide_box.css({left:-(_this.width()*li_length)}).animate({left:'+='+_this.width()},opts.speed);
                            page=li_length;
                        }else{
                            slide_box.animate({left:'+='+_this.width()},opts.speed);
                            page--;
                        }
                    }
                    if(page>li_length){
                        _this.find('.slider-page').find('i').eq(0).addClass('selected').siblings().removeClass('selected');
                    }else{
                        _this.find('.slider-page').find('i').eq(page-1).addClass('selected').siblings().removeClass('selected');
                    }
                }
            }

            /*
             * 鼠标移入模块暂停动画，移出继续
            */
            var s;
            _this.hover(function(){
                clearInterval(s);
                _this.children('span').show();
            },function(){
                s=setInterval(function(){
                    slide_animate(true);
                },opts.autotime);
                _this.children('span').hide();
            }).trigger('mouseleave');

            /*
             * 分页
            */
            _this.find('.slider-page').find('i').each(function(i){
                var self=$(this);
                self.mouseover(function(){
                    self.addClass('selected').siblings().removeClass('selected');
                    slide_box.stop(true,false).animate({left:'-'+_this.width()*i},opts.speed);
                    page=i+1;
                })
            })

            /*
             * 是否添加‘上一个/下一个’按钮
            */
            if(opts.arrow){
                _this.append('<span class="'+opts.prev+'"></span><span class="'+opts.next+'"></span>');

                _this.find('.'+opts.next).bind('click',function() {
                    slide_animate(true);
                });
                _this.find('.'+opts.prev).bind('click',function() {
                    slide_animate(false);
                })
            }
        }
        $.fn.slider.defaults={
            next:'',	//下一个按钮（可不填）
            prev:'',	//上一个按钮（可不填）
            speed:'500',	//速度
            autotime:'3000', //间隔时间
            arrow:false,	//箭头
            pages:true		
        }
    })(jQuery)
}})