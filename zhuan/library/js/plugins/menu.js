define(function(require,exports,module){
    var zepto = require('zepto');
    //显示所有分类
    $(document.body).on('click',function(e){
        var el = $(e.target);
        if(el.hasClass('g-nav') || el.hasClass('m-nav-arrow')){
            allMenuToggle();
        }
        if(el.get(0).tagName == 'A' && (el.closest('.m-navlist').length || el.closest('.m-menuall').length)){
            el.parent().addClass('crt').siblings().removeClass('crt');
            
            if(el.closest('.m-navlist').length){
                console.log(el.parent().attr('id'));
            }
            if(el.closest('.menu').length){
                console.log('menu');
            }
            if(el.closest('.cont').length){
                console.log('cont');
                allMenuToggle();
            }
        }
    })
    
    function allMenuToggle(){
        $('.g-nav').toggleClass('crt');
        var cate_1 = $('.m-navlist').find('.crt').index();
        console.log(cate_1);
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
            $(document.body).append(menuall.join(''));
        }else{
        }
        $('.m-menuall').toggle();
    }
})