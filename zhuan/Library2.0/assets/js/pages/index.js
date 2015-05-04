/*
 * 首页
*/
define(function(require, exports, module){
    var zepto = require('zepto'),
        iscroll = require('iscroll');
    
    //模块切换
    $('.m-sort a').on('touchend',function(e){
        var el = $(this);
        var hash = '';
        hash = el.attr('href').slice(1);

        if(hash === 'search'){
            searchBox();
        }else{
            var box = $('.m-' + hash);
            box.removeClass('hide').siblings().addClass('hide');

            if(hash === 'look'){
                if(!box.data('iscroll')){
                    createIscroll(hash + 's');
                }
                box.data("iscroll",true);
                lookBox(box);
            }
            el.addClass('crt').siblings().removeClass('crt');
        }
        e.preventDefault();
    })
    
    //单击事件
    $(document.body).on('touchend',function(e){
        var el = $(e.target);
        //下拉
//        if(el.hasClass('m-look-action')){
//            var select = require('../components/select');
//            select.select.show('json' , ['删除', '屏蔽', '举报']);
//        }
    })

    /*
     * 搜索
    */
    var searchBox = function(){
        var html = [
            '<section class="m-search">',
                '<div class="m-search-hd">',
                    '<a class="m-sortall-link" href="javascript:;">分类</a>',
                    '<input class="m-search-txt" type="search" placeholder="输入关键字...">',
                    '<a class="m-search-cancel" href="javascript:;">取消</a>',
                '</div>',
                '<div class="m-search-bd">',
                    '<nav class="m-search-result-hd">',
                        '<a href="#" class="crt">全部</a>',
                        '<a href="#">书名</a>',
                        '<a href="#">作者</a>',
                        '<a href="#">出版社</a>',
                    '</nav>',
                    '<div class="m-search-result-bd">',
                        '<div class="m-book-item">',
                            '<a href="#"><img class="m-book-img" src="../assets/image/placeholder.gif" alt="" width="60"></a>',
                            '<h2 class="m-book-title">岛屿来信</h2>',
                            '<p>陶立夏</p>',
                            '<p>中信出版社</p>',
                        '</div>',
                        '<div class="m-book-item">',
                            '<a href="#"><img class="m-book-img" src="../assets/image/placeholder.gif" alt="" width="60"></a>',
                            '<h2 class="m-book-title">岛屿来信</h2>',
                            '<p>陶立夏</p>',
                            '<p>中信出版社</p>',
                        '</div>',
                        '<div class="m-book-item">',
                            '<a href="#"><img class="m-book-img" src="../assets/image/placeholder.gif" alt="" width="60"></a>',
                            '<h2 class="m-book-title">岛屿来信</h2>',
                            '<p>陶立夏</p>',
                            '<p>中信出版社</p>',
                        '</div>',
                        '<div class="m-book-item">',
                            '<a href="#"><img class="m-book-img" src="../assets/image/placeholder.gif" alt="" width="60"></a>',
                            '<h2 class="m-book-title">岛屿来信</h2>',
                            '<p>陶立夏</p>',
                            '<p>中信出版社</p>',
                        '</div>',
                        '<div class="m-book-item">',
                            '<a href="#"><img class="m-book-img" src="../assets/image/placeholder.gif" alt="" width="60"></a>',
                            '<h2 class="m-book-title">岛屿来信</h2>',
                            '<p>陶立夏</p>',
                            '<p>中信出版社</p>',
                        '</div>',
                        '<div class="m-book-item">',
                            '<a href="#"><img class="m-book-img" src="../assets/image/placeholder.gif" alt="" width="60"></a>',
                            '<h2 class="m-book-title">岛屿来信</h2>',
                            '<p>陶立夏</p>',
                            '<p>中信出版社</p>',
                        '</div>',
                    '</div>',
                '</div>',
            '</section>'
        ];
        $(document.body).append(html.join(''));

        require('./search');
    }

    /*
     * 看看
    */
    var lookBox = function(box){
        $.ajax({
            type: "GET",
            url: "url",
            data: 'data',
            dataType: 'json',
            async: false,
            success: function(data){
                var arr = eval(data);

                var html = [];
                for(var i = 0; i < arr.length; i++){
                    html[i] = [
                        '<article class="m-look-item">',
                            '<header class="m-look-hd">',
                                '<a class="m-look-uface" href="#"><img src="#" alt=""></a>',
                                '<p><a class="m-look-uname" href="#">小黑黑</a> 列入 <a href="#">每月读书</a></p>',
                                '<p>刚刚 来自 书否读书馆</p>',
                            '</header>',
                            '<section>',
                                '<p>最喜欢的最喜欢的最喜欢的书否读书馆，最喜欢的最喜欢的最喜欢的书否读书馆，最喜欢的最喜欢的最喜欢的书否读书馆</p>',
                                '<blockquote class="m-look-quote m-book-item">',
                                    '<a href="#"><img class="m-book-img" src="../assets/image/placeholder.gif" alt=""></a>',
                                    '<h2 class="m-book-title">岛屿来信</h2>',
                                    '<p>陶立夏</p>',
                                    '<p>中信出版社</p>',
                                '</blockquote>',
                            '</section>',
                        '</article>'
                    ].join('');
                }

                box.append(html);
            }
        })
    }
    
    //iscroll
    var createIscroll = function(obj){
        var el = $('#' + obj);
        if($(el).length){
            el[0].innerHTML = '<div>' + el[0].innerHTML + '</div>';
            var myScroll = new iscroll.iScroll(obj ,{
                fixedScrollbar:true,
                bounce:false,
                momentum:false
            });
        }
    }
    
    createIscroll('books');
})
