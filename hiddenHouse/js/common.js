(function($){
	$.fn.slide=function(options){
		var opts=$.extend({},$.fn.slide.defaults,options);
		var _this=$(this),li_length=_this.find('li').length;

		if(opts.pages){
			_this.append('<div class="slide_page"></div>')
			for(var i=0;i<li_length;i++){
				_this.find('.slide_page').append('<i>'+(i+1)+'</i>');
			}
		}
		_this.css('position','relative').find('.slide_page').find('i').eq(0).addClass('selected');
		_this.find('ul').wrap('<div class="slide_box" />');

		var slide_box=_this.find('.slide_box').append(_this.find('ul').clone()).css({height:_this.height(),position:'absolute',width:'9999px'});

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
					_this.find('.slide_page').find('i').eq(0).addClass('selected').siblings().removeClass('selected');
				}else{
					_this.find('.slide_page').find('i').eq(page-1).addClass('selected').siblings().removeClass('selected');
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
		_this.find('.slide_page').find('i').each(function(i){
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
	$.fn.slide.defaults={
		next:'',	//下一个按钮（可不填）
		prev:'',	//上一个按钮（可不填）
		speed:'500',	//速度
		autotime:'3000', //间隔时间
		arrow:false,	//箭头
		pages:true		
	}
})(jQuery);

(function($){
    $(function(){
        var tempList = {
            navUI : function(){
                var navData = [
                    {name: "秘·境", value: 'index', isOpen: true},
                    {name: "小楼", value: 'Accommondation', isOpen: true},
                    {name: "食&饮", value: 'Dining', isOpen: true},
                    {name: "玩乐", value: 'Activity', isOpen: true},
                    {name: "优荐", value: 'Recommendation', isOpen: true},
                    {name: "私人订制", value: 'Event', isOpen: true},
                    {name: "特惠", value: 'Sale', isOpen: false},
                    {name: "位置交通", value: 'Location', isOpen: true},
                    {name: "联系我们", value: 'Contact', isOpen: true},
                ];

                var navList = '';
                $.each(navData, function(m, n){
                    var href = n.isOpen ? n.value + '.html' : 'javascript:;';
                    if(window.location.pathname.indexOf(n.value) >= 0){
                        navList += '<li class="crt"><a href="'+ href +'">'+ n.name +'</li>';
                    }else{
                        navList += '<li><a href="'+ href +'" '+ (n.isOpen ? '' : 'title="敬请期待"') +'>'+ n.name +'</a></li>';
                    }
                });
                return navList
            },
            headerUI : function(){
                return [
                    '<div class="layout">',
                        '<h1 style="display:none;">秘境</h1>',
                        '<div class="fr links">',
                            '<ul>',
                                '<li><a class="links-item wb" href="javascript:;">微博</a></li>',
                                '<li><a class="links-item wx" href="javascript:;">微信</a></li>',
                                // '<li><a class="links-item search" href="javascript:;">搜索</a></li>',
                                '<li><a class="links-item reserve" href="Contact.html">预定</a></li>',
                            '</ul>',
                        '</div>',
                        '<nav>'+ this.navUI() +'</nav>',
                    '</div>'
                ].join('');
            },
            footerUI : function(){
                return [
                    '<div class="layout">',
                        '<div class="links"><a class="links-item ft-wb" href="javascript:;">微博</a><a class="links-item ft-wx" href="javascript:;">微信</a></div>',
                        '<ul>'+ this.navUI() +'</ul>',
                        '<p><a href="index.html" class="links-item ft-logo">秘境</a></p>',
                        '<p>秘境桐庐有限公司 Copyright 2014-2017 all rights reserved 沪ICP备14028165号-1</p>',
                    '</div>'
                ].join('');
            }
        };
        var $header = $('header'),
            $footer = $('footer');
        $header.append(tempList.headerUI());
        $footer.append(tempList.footerUI());



        $('.slide').find('li').css({width:$('.slide').outerWidth()});
        $('.slide').css({height:$('.slide').outerHeight()}).slide();
        $('.slide').append('<div class="layout"><nav>'+ tempList.navUI() +'</nav></div>');
        
        $('nav').each(function(){
            $(this).after('<span class="line" style="display:none;left:'+ $(this).find('.crt a').offset().left +'px;width:'+ $(this).find('.crt a').outerWidth() +'px"></span>');
        });


        $('nav li').hover(function(e){
            var target = $(this);
            target.parent().next('.line').show().stop(true,true).animate({
                left: target.find('a').offset().left,
                width: target.find('a').outerWidth()
            },100)
        }, function(e){
            var target = $(this);
            target.parent().next('.line').hide();
        })

        if(window.location.pathname.indexOf('index') >= 0){
            $('body').css({paddingTop:0})
            $('#header').css({position:'relative'})
        }

        var $container = $('.masonry-list');
        if($container.length){
            $container.imagesLoaded(function() {
                $container.masonry({
                    itemSelector: 'li',
                    // gutter: 20,
                    isAnimated: true,
                });
            });
        }


        $(window).on('scroll', function(){
            if($(window).scrollTop() >= $('.slide').outerHeight()){
                $('#header').css({position:'fixed'}).prev().css('marginBottom', 50);
            }else{
                $('#header').css({position:'relative'}).prev().css('marginBottom', 0);
            }
        })
    })
})(jQuery);
