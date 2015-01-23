define(function(require,exports,module){
    var zepto = require('zepto');
    $(function(){
        if($(document.body).find('.lazyload').length){
            require('../js/plugins/imglazyload')($);
            $('.lazyload').imgLazyLoad({
                placeholder : '../img/placeholder.gif'
            });
        }
    })
    $(document.body).on('click',function(e){        
        var el = $(e.target);
        
        //选择出版社 || 作者 || 书名
        if(!el.closest('.m-search-type').length){
            $('.m-search-type').removeClass('show');
        }
        
        //刷新
        if(el.hasClass('j-refresh')){
            history.go(0);
        }
        
        //返回
        if(el.hasClass('j-return')){
            history.go(-1);
        }
        
        //搜索
        if(el.hasClass('m-search-btn')){
            window.location.href="搜索结果.html";
        }
        
        if(el.hasClass('j-add')){
            var docbd = $(document.body);
            if(docbd.find('.m-ftbar').length){
                $('.m-ftbar').remove();
            }else{
                var h = [
                    '<div class="m-ftbar">',
                        '<a href="#">许愿树</a>',
                        '<a href="#">地址管理</a>',
                        '<a href="#">点数记录</a>',
                    '</div>'
                ];
                docbd.append(h.join(''));
            }
        }else{
            var docbd = $(document.body);
            if(docbd.find('.m-ftbar').length){
                $('.m-ftbar').remove();
            }
        }
    })
    
    $('.m-search-type').click(function(){
        var _this = $(this);
        _this.addClass('show');
    }).find('a').click(function(){
        var _this = $(this),searchType = $('.m-search-type');
        _this.addClass('crt').siblings('a').removeClass('crt');
        searchType.removeClass('show').find('dt').text(_this.text());
        return false;
    })
})

