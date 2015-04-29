define(function(require, exports, module){
    var zepto = require('zepto'),
        mask = require('../components/mask');

    var elMask = mask.mask;

    $(document.body).on('touchend',function(e){
        var el = $(e.target);

        //首页
        if(el.parent('.m-index-sort').length){
            var hash = '';
            hash = el.attr('href').slice(1);

            if(hash === 'search'){
                searchBox();
            }else{

                var box = $('.m-' + hash);
                box.show().siblings().hide();

                if(hash === 'look'){
                    lookBox(box);
                }
                el.addClass('crt').siblings().removeClass('crt');
            }
        }

        //下拉
        if(el.hasClass('m-look-action')){
            elMask.show();
        }
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


})
