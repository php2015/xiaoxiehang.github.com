define(function(require,exports,module){
    var zepto = require('zepto');
    var addBook = false;
    //显示所有分类
    $(document.body).on('touchend',function(e){
        var el = $(e.target);
        if(el.hasClass('g-nav') || el.hasClass('m-nav-arrow')){
            allMenuToggle();
        }
        if(el.get(0).tagName == 'A' && (el.closest('.m-navlist').length || el.closest('.m-menuall').length)){
            //首页分类展开
            el.parent().addClass('crt').siblings().removeClass('crt');
            
            var pTypeId = el.parent().attr("id");

            //首页导航
            if(el.closest('.m-navlist').length){
            	var bookList = getNewBook(pTypeId);
            	$(".m-booklist").html(bookList);
            	lazyloadImg();
            }

            //选择一级分类
            if(el.closest('.menu').length){
            	var crtType = $(".m-booklist-hd a").html();
            	var typeList = querySonType(pTypeId,crtType);
            	$(".cont ul").html(typeList);
            }

            //选择二级分类
            if(el.closest('.cont').length){
            	if($('.m-navlist').length){
                	var bookList = getNewBook(pTypeId);
                	$(".m-booklist").html(bookList);
                	var pTypeList = $(".menu").html();
                	$(".m-navlist ul").html(pTypeList);
                	lazyloadImg();
            	}
                allMenuToggle();
                if(addBook){
                    var menuText = $('.menu').find('.crt').text(),contText = $('.cont').find('.crt').text();
                    var sort = '<strong>' + menuText + '</strong>' + '<i class="u-pipe">&gt;</i>' + '<strong>' + contText + '</strong>';
                    var $menu = $('.m-addbook-menu');
                    if($menu.find('span').length){
                        $('.m-addbook-menu').find('span').html(sort);
                    }else{
                        $('.m-addbook-menu').prepend('<span>' + sort + '</span>');
                        $('.m-addbook-menu').find('a').text('重新选择');
                    }
                    $("#typeId").val(pTypeId);
                }
                return false;
            }
        }
        //添加图书选择分类
        if(el.hasClass('m-addbook-selmenu')){
            addBook = true;
            allMenuToggle();
            var menu = $('.m-addbook-menu').find('span');
            if(menu.length){
                el.text('重新选择');
            }
        }
        
        //选择二级分类
        if(el.hasClass('j-level2-menu')){
            el.toggleClass('crt');
            
            var g_bd = el.parents('.g-bd');
            
            var top = el.offset().top - g_bd.offset().top + g_bd.scrollTop() + el.height();
            console.log(el.offset().top)
            if(!$('.level2-menu-box').length){
                var h = [
                    '<div class="level2-menu-box" style="top:'+top+'px">',
                        '<ul><li id="7" class="crt"><a href="javascript:;">小说</a></li><li id="8"><a href="javascript:;">名著</a></li><li id="10"><a href="javascript:;">随笔</a></li><li id="18"><a href="javascript:;">散文</a></li><li id="20"><a href="javascript:;">经典</a></li><li id="25"><a href="javascript:;">童话</a></li><li id="60"><a href="javascript:;">诗词</a></li><li id="61"><a href="javascript:;">儿童</a></li></ul>',
                    '</div>'
                ];
                g_bd.append(h.join(''));
            }else{
                $('.level2-menu-box').remove();
            }
        }else{
            $('.j-level2-menu').removeClass('crt')
            if($('.level2-menu-box').length){
                $('.level2-menu-box').remove();
            }
        }
    });
    
    function allMenuToggle(){
        $('.g-nav').toggleClass('crt');
        if(!$('.m-menuall').length){
        	var pTypeList = '',pTypeId = 1,crtType = '小说';
        	if($(".m-navlist ul").length){
        		pTypeList = $(".m-navlist ul").html();
        		pTypeId = $('.m-navlist').find('.crt').attr("id");
        		crtType = $(".m-booklist-hd a").html();
        	}else{
        		pTypeList = $("#pTypeList").html();   		
        	}
        	var typeList = querySonType(pTypeId,crtType);
            var menuall = [
                '<div class="m-menuall">',
                    '<menu class="menu">',
                    	pTypeList,
                    '</menu>',
                    '<section class="cont">',
                        '<ul>',
                        	typeList,
                        '</ul>',
                    '</section>',
                '</div>'
            ];
            $(document.body).find('.g-page').append(menuall.join(''));
        }else{
        	setTimeout(function(){
        		$('.m-menuall').remove();
        	},200);
        }
        $('.m-menuall').toggle();
    }
    
    function getNewBook(pTypeId){
    	var bookList = '';
        $.ajax({
        	type: "POST",
        	url: "getNewBook.do",
        	data: "pTypeId="+pTypeId,
        	dataType: "json",
        	async: false,
        	success: function(data){
        		var arr = eval(data);
				if(arr.length>0){
					bookList += '<div class="m-booklist-hd"><h2><a href="javascript:;">' + arr[0].type.name + '</a></h2><a href="wxMoreBook.do?typeId=' + arr[0].type.id + '" class="m-booklist-more">更多</a></div>';
					bookList += '<ul class="m-booklist-bd">';
					for(var i=0;i<arr.length;i++){
						bookList += '<li><a href="wxBookSearch.do?flag=1&keyword=' + arr[i].name + '"><img class="lazyload" src="resources/images/placeholder.gif" data-url="' + arr[i].cover + '" alt="' + arr[i].name + '"><em>' + arr[i].name + '</em></a></li>';
					}
					bookList += '</ul>';
				}
        	}
        });
        return bookList;
    }
    
    function querySonType(pTypeId,crtType){
    	var typeList = '';
    	 $.ajax({
         	type: "POST",
         	url: "querySonType.do",
         	data: "fatherId="+pTypeId,
         	dataType: 'json',
         	async: false,
         	success: function(data){
         		var arr = eval(data);
     			if(arr.length>0){
     				for(var i=0;i<arr.length;i++){
     					typeList += '<li id="' + arr[i].id + '" ';
     					if(crtType == arr[i].name) {
     						typeList += 'class="crt"';
     					}
     					typeList += '><a href="javascript:;">' + arr[i].name + '</a></li>';
     				}
     			}
         	}
         });
    	 return typeList;
    }
    
    function lazyloadImg(){
		if($(document.body).find('.lazyload').length){
            require('../plugins/imglazyload')($);
            $('.m-booklist-bd').find('.lazyload').imgLazyLoad({
                placeholder : '../img/placeholder.gif'
            });
        }	
    }
});