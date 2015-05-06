define(function(require, exports, module){
    var zepto = require('zepto');
    
    
    //单击事件
    $(document.body).on('touchend',function(e){
        var el = $(e.target);
        
        //新建书单
        if(el.hasClass('j-add-blan')){
            alert('新建书单');
        }
        
        //添加书籍
        if(el.hasClass('j-add-book')){
            searchBox();
        }
        
        if(el.parents('.m-user-hd').length){
            el.addClass('crt').siblings().removeClass('crt');
            
            var key = el.attr('href').slice(1);
            
            $('.m-user-' + key).removeClass('hide').siblings().not('.m-user-hd').addClass('hide');
        }
        
        //添加
        if(el.hasClass('btn-book-add')){
            var html = [
                '<section class="m-book-add">',
                    '<div class="m-book-item">',
                        '<a href="#"><img class="m-book-img" src="../assets/image/placeholder.gif" alt="" width="60"></a>',
                        '<h2 class="m-book-title">岛屿来信</h2>',
                        '<p>陶立夏</p>',
                        '<p>中信出版社</p>',
                        '<a class="btn-default" href="#">更换封面<input style="position:absolute; width:100%; height:100%; top:0; left:0; opacity:0;" type="file" value=""></a>',
                    '</div>',
                    '<p class="m-book-setpoint">点数设定：<input type="radio" value="60" name="point"><input type="radio" value="120" name="point"></p>',
                    '<textarea style="margin-bottom: 20px; min-height: 70px;" placeholder="《岛屿来信》读完，快来说两句..."></textarea>',
                    '<a class="m-book-add-btn btn-default btn-default-crt" href="#">添加</a><br>',
                    '<a class="m-book-cancel-btn btn-default" href="#">取消</a>',
                '</section>'
            ]
            $(document.body).append(html.join('')).css('overflow','hidden');
            
        }
        
        //确认添加
        if(el.hasClass('m-book-add-btn')){
            alert('确定添加');
        }
        
        //取消添加
        if(el.hasClass('m-book-cancel-btn')){
            $(document.body).css('overflow','auto');
            $('.m-book-add').remove();
        }
    })
    
    
    /*
     * 搜索
    */
    var searchBox = function(){
        var html = [
            '<section class="m-search">',
                '<div class="m-search-hd">',
                    '<input class="m-search-txt" type="search" placeholder="输入书籍名称..." style="margin-left:15px">',
                    '<a class="m-search-cancel" href="javascript:;">取消</a>',
                '</div>',
                '<div class="m-search-bd">',
                    '<p class="m-search-count">为您匹配书籍信息，共 29 本</div>',
                    '<div class="m-search-result-bd">',
                        '<div class="m-book-item">',
                            '<a href="#"><img class="m-book-img" src="../assets/image/placeholder.gif" alt="" width="60"></a>',
                            '<h2 class="m-book-title">岛屿来信</h2>',
                            '<p>陶立夏</p>',
                            '<p>中信出版社</p>',
                            '<a class="btn-book-add btn-default" href="#">添加</a>',
                        '</div>',
                        '<div class="m-book-item">',
                            '<a href="#"><img class="m-book-img" src="../assets/image/placeholder.gif" alt="" width="60"></a>',
                            '<h2 class="m-book-title">岛屿来信</h2>',
                            '<p>陶立夏</p>',
                            '<p>中信出版社</p>',
                            '<a class="btn-book-add btn-default" href="#">添加</a>',
                        '</div>',
                        '<div class="m-book-item">',
                            '<a href="#"><img class="m-book-img" src="../assets/image/placeholder.gif" alt="" width="60"></a>',
                            '<h2 class="m-book-title">岛屿来信</h2>',
                            '<p>陶立夏</p>',
                            '<p>中信出版社</p>',
                            '<a class="btn-book-add btn-default" href="#">添加</a>',
                        '</div>',
                        '<div class="m-book-item">',
                            '<a href="#"><img class="m-book-img" src="../assets/image/placeholder.gif" alt="" width="60"></a>',
                            '<h2 class="m-book-title">岛屿来信</h2>',
                            '<p>陶立夏</p>',
                            '<p>中信出版社</p>',
                            '<a class="btn-book-add btn-default" href="#">添加</a>',
                        '</div>',
                        '<div class="m-book-item">',
                            '<a href="#"><img class="m-book-img" src="../assets/image/placeholder.gif" alt="" width="60"></a>',
                            '<h2 class="m-book-title">岛屿来信</h2>',
                            '<p>陶立夏</p>',
                            '<p>中信出版社</p>',
                            '<a class="btn-book-add btn-default" href="#">添加</a>',
                        '</div>',
                        '<div class="m-book-item">',
                            '<a href="#"><img class="m-book-img" src="../assets/image/placeholder.gif" alt="" width="60"></a>',
                            '<h2 class="m-book-title">岛屿来信</h2>',
                            '<p>陶立夏</p>',
                            '<p>中信出版社</p>',
                            '<a class="btn-book-add btn-default" href="#">添加</a>',
                        '</div>',
                    '</div>',
                '</div>',
            '</section>'
        ];
        $(document.body).append(html.join(''));
        require('./search');
    }
})