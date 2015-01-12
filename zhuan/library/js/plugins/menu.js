define(function(require,exports,module){
    var zepto = require('zepto');
    
    var addBook = false;
    //显示所有分类
    $(document.body).on('touchend',function(e){
        var el = $(e.target);
        //首页展开分类
        if(el.hasClass('g-nav') || el.hasClass('m-nav-arrow')){
            allMenuToggle();
        }
        if(el.get(0).tagName == 'A' && (el.closest('.m-navlist').length || el.closest('.m-menuall').length)){
            //class切换
            el.parent().addClass('crt').siblings().removeClass('crt');
            
            //首页导航
            if(el.closest('.m-navlist').length){
                console.log(el.parent().attr('id'));
            }
            
            //选择一级分类
            if(el.closest('.menu').length){
                console.log('menu');
            }
            //选择二级分类
            if(el.closest('.cont').length){
                console.log('cont');
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
                }
                return false;
            }
        }
        
        //添加图书选择分类
        if(el.hasClass('m-addbook-selmenu')){
            addBook = true;
            var getText = allMenuToggle();
            var menu = $('.m-addbook-menu').find('span');
            if(menu.length){
                el.text('重新选择');
            }
        }
    })
    
    function allMenuToggle(){
        $('.g-nav').toggleClass('crt');
        var cate_1 = $('.m-navlist').find('.crt').index();
        if(!$('.m-menuall').length){
            $.getJSON();
            var menuall = [
                '<div class="m-menuall">',
                    '<menu class="menu">',
                        '<li class="crt"><a href="#">文学</a></li>',
                        '<li><a href="#">流行</a></li>',
                        '<li><a href="#">文化</a></li>',
                        '<li><a href="#">生活</a></li>',
                        '<li><a href="#">经管</a></li>',
                        '<li><a href="#">科技</a></li>',
                    '</menu>',
                    '<section class="cont">',
                        '<ul>',
                            '<li><a href="javascript:;">小说</a></li>',
                            '<li><a href="javascript:;">文学</a></li>',
                            '<li class="crt"><a href="javascript:;">外国文学</a></li>',
                            '<li><a href="javascript:;">随笔</a></li>',
                            '<li><a href="javascript:;">散文</a></li>',
                            '<li><a href="javascript:;">中国文学</a></li>',
                            '<li><a href="javascript:;">童话</a></li>',
                            '<li><a href="javascript:;">历史</a></li>',
                            '<li><a href="javascript:;">诗歌名著</a></li>',
                        '</ul>',
                    '</section>',
                '</div>'
            ];
            $(document.body).find('.g-page').append(menuall.join(''));
        }else{
        }
        $('.m-menuall').toggle();
    }
})