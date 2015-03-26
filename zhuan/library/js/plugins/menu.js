define(function(require,exports,module){
    var zepto = require('zepto');
    var addBook = false;
    var menuArr = '' , bookArr = '';
    //显示所有分类
    $(document.body).on('touchend',function(e){
        var el = $(e.target);
        if(el.hasClass('g-nav') || el.hasClass('m-nav-arrow')){
        	menuAll();
        }
        if(el.get(0).tagName == 'A' && (el.closest('.m-navlist').length || el.closest('.m-menuall').length)){
            //首页分类展开
            el.parent().addClass('crt').siblings().removeClass('crt');
            
            var pTypeId = el.parent().attr("id");

            //首页导航
            if(el.closest('.m-navlist').length){
            	var bookList = getBookList(pTypeId);
            	//$(".m-booklist").html(bookList);
            	lazyloadImg();
            }

            //all -- 选择一级分类
            if(el.closest('.menu').length){
            	var crtType = $(".m-booklist-hd a").html();
            	var typeList = querySonType(pTypeId,crtType);
            	$(".cont ul").html(typeList);
            }

            //all -- 选择二级分类
            if(el.closest('.cont').length){
            	if($('.m-navlist').length){
                	var bookList = getNewBook(pTypeId);
                	$(".m-booklist").html(bookList);
                	var pTypeList = $(".menu").html();
                	$(".m-navlist ul").html(pTypeList);
                	lazyloadImg();
            	}
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
                menuAll();
                return false;
            }
        }
        
        //添加图书选择分类
        if(el.hasClass('m-addbook-selmenu')){
            addBook = true;
            menuAll();
            var menu = $('.m-addbook-menu').find('span');
            if(menu.length){
                el.text('重新选择');
            }
        }
        
        //list -- 选择二级分类
        if(el.hasClass('j-level2-menu')){
            el.toggleClass('crt');
            var g_bd = el.parents('.g-bd');
            var top = el.offset().top - g_bd.offset().top + g_bd.scrollTop() + el.height();
            if(!$('.level2-menu-box').length){
            	if(menuArr == ''){
            		getLevel2(1);
            	}
                console.log(menuArr)
                var h = ['<div class="level2-menu-box" style="top:'+top+'px"><ul>'];
                for(var i = 0; i < menuArr.length; i++){
                	if(el.attr('id') == menuArr[i].id){
                		h.push('<li id="'+ menuArr[i].id +'" class="crt">');
                	}else{
                    	h.push('<li id="'+ menuArr[i].id +'">');
                	}
                	h.push('<a href="javascript:;">'+ menuArr[i].name +'</a></li>');              	
                }
                h.push('</ul></div>')
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
    
    function menuAll(){
    	if($('.g-nav').length){
    		$('.g-nav').toggleClass('crt');
    	}
    	//判断页面是否已存在 .m-menuall
    	if(!$('.m-menuall').length){
        	var level1 = level2 = level1_ID = level2_ID = '';
    		//判断当前页面是否是首页，获取一级分类分类列表
        	level2_ID = '7';
	    	if($(".m-navlist ul").length){
	    		var navlist = $('.m-navlist').find('ul');
	    		level1 = navlist.html();
	    		level1_ID = navlist.find('li.crt').attr('id');
	    		level2_ID = $(".m-booklist-hd a").attr('id');
	    	}else{
	    		level1 = $("#pTypeList").html();
	    		level1_ID = 1;
	    	}
	    	level2 = querySonType(level1_ID , level2_ID);//获取二级分类
	    	
        	var menuall = [
    			'<div class="m-menuall">',
    			    '<menu class="menu">' + level1 + '</menu>',
    			    '<section class="cont"><ul>' + level2 + '</ul></section>',
    			'</div>'
    		];
        	$(document.body).find('.g-page').append(menuall.join(''));
    	}else{
    		$('.m-menuall').remove();
    	}
    }
    
    //获取二级分类
    function getLevel2(level1_ID){
		$.ajax({
         	type: "POST",
         	url: "querySonType.do",
         	data: "fatherId="+level1_ID,
         	dataType: 'json',
         	async: false,
         	success: function(data){
         		var arr = eval(data);
         		menuArr = arr;
         	}
         });
    }
    
    function piecedBookList(bookArr){
        $('.m-booklist-hd').find('.j-level2-menu').attr('id',bookArr[0].type.id).text(bookArr[0].type.name);
        $('.m-booklist-more').attr('href','wxMoreBook.do?typeId=' + bookArr[0].type.id);

        var bookList = '';
        for(var i=0; i<bookArr.length; i++){
            bookList += '<li><a href="wxBookSearch.do?flag=1&keyword=' + bookArr[i].name + '"><img class="lazyload" src="resources/images/placeholder.gif" data-url="' + bookArr[i].cover + '" alt="' + bookArr[i].name + '"><em>' + bookArr[i].name + '</em></a></li>';
        }
        
        $('.m-booklist-bd').html(bookList);
    }
    //获取图书列表
    function getBookList(level2_ID){
    	var bookList = '';
        $.ajax({
        	type: "POST",
        	url: "getNewBook.do",
        	data: "pTypeId="+level2_ID,
        	dataType: "json",
        	async: false,
        	success: function(data){
        		var arr = eval(data);
        		bookArr = arr;
                console.log(bookArr);
                piecedBookList(arr);
//				if(arr.length>0){
//					bookList += '<div class="m-booklist-hd"><h2><a class="j-level2-menu" id＝"' + arr[0].type.id + '" href="javascript:;">' + arr[0].type.name + '</a></h2><a href="wxMoreBook.do?typeId=' + arr[0].type.id + '" class="m-booklist-more">更多</a></div>';
//					bookList += '<ul class="m-booklist-bd">';
//					for(var i=0;i<arr.length;i++){
//						bookList += '<li><a href="wxBookSearch.do?flag=1&keyword=' + arr[i].name + '"><img class="lazyload" src="resources/images/placeholder.gif" data-url="' + arr[i].cover + '" alt="' + arr[i].name + '"><em>' + arr[i].name + '</em></a></li>';
//					}
//					bookList += '</ul>';
//				}
        	}
        });
        return bookList;
    }
 
//    function allMenuToggle(){
//        $('.g-nav').toggleClass('crt');
//        if(!$('.m-menuall').length){
//        	var pTypeList = '',pTypeId = 1,crtType = '小说';
//        	if($(".m-navlist ul").length){
//        		pTypeList = $(".m-navlist ul").html();
//        		pTypeId = $('.m-navlist').find('.crt').attr("id");
//        		crtType = $(".m-booklist-hd a").html();
//        	}else{
//        		pTypeList = $("#pTypeList").html();
//        	}
//        	var typeList = querySonType(pTypeId,crtType);
//            var menuall = [
//                '<div class="m-menuall">',
//                    '<menu class="menu">',
//                    	pTypeList,
//                    '</menu>',
//                    '<section class="cont">',
//                        '<ul>',
//                        	typeList,
//                        '</ul>',
//                    '</section>',
//                '</div>'
//            ];
//            $(document.body).find('.g-page').append(menuall.join(''));
//        }else{
//        	setTimeout(function(){
//        		$('.m-menuall').remove();
//        	},200);
//        }
//        $('.m-menuall').toggle();
//    }
    
    
    //获取图书列表
//    function getNewBook(pTypeId){
//    	var bookList = '';
//        $.ajax({
//        	type: "POST",
//        	url: "getNewBook.do",
//        	data: "pTypeId="+pTypeId,
//        	dataType: "json",
//        	async: false,
//        	success: function(data){
//        		var arr = eval(data);
//        		menuArr = arr;
//				if(arr.length>0){
//					bookList += '<div class="m-booklist-hd"><h2><a class="j-level2-menu" id＝"' + arr[0].type.id + '" href="javascript:;">' + arr[0].type.name + '</a></h2><a href="wxMoreBook.do?typeId=' + arr[0].type.id + '" class="m-booklist-more">更多</a></div>';
//					bookList += '<ul class="m-booklist-bd">';
//					for(var i=0;i<arr.length;i++){
//						bookList += '<li><a href="wxBookSearch.do?flag=1&keyword=' + arr[i].name + '"><img class="lazyload" src="resources/images/placeholder.gif" data-url="' + arr[i].cover + '" alt="' + arr[i].name + '"><em>' + arr[i].name + '</em></a></li>';
//					}
//					bookList += '</ul>';
//				}
//        	}
//        });
//        return bookList;
//    }
    
    //获取二级分类
    function querySonType(level1_ID,level2_ID){
    	var typeList = '';
    	 $.ajax({
         	type: "POST",
         	url: "querySonType.do",
         	data: "fatherId="+level1_ID,
         	dataType: 'json',
         	async: false,
         	success: function(data){
         		var arr = eval(data);
         		menuArr = arr;
     			if(arr.length>0){
     				for(var i=0;i<arr.length;i++){
     					typeList += '<li id="' + arr[i].id + '" ';
     					if(level2_ID == arr[i].id) {
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