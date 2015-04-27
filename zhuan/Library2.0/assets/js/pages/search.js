define(function(require, exports, module){
    var zepto = require('zepto');

    $(document.body).click(function(e){
        var el = $(e.target);

        //分类
        if(el.hasClass('m-sortall-link')){
            var sortall = [
                '<section class="m-sortall">',
                    '<a class="m-sortall-flod" href="javascript:;">收起分类</a>',
                    '<menu class="m-sortall-hd">',
                        '<li class="crt"><a href="javascript:;">文学</a></li>',
                        '<li><a href="javascript:;">流行</a></li>',
                        '<li><a href="javascript:;">文化</a></li>',
                        '<li><a href="javascript:;">生活</a></li>',
                        '<li><a href="javascript:;">经管</a></li>',
                        '<li><a href="javascript:;">科技</a></li>',
                        '<li><a href="javascript:;">社科</a></li>',
                    '</menu>',
                    '<div class="m-sortall-bd"><ul>',
                        '<li><a href="javascript:;">小说</a><li>',
                        '<li><a href="javascript:;">名著</a><li>',
                        '<li><a href="javascript:;">随笔</a><li>',
                        '<li><a href="javascript:;">散文</a><li>',
                        '<li><a href="javascript:;">经典</a><li>',
                        '<li><a href="javascript:;">童话</a><li>',
                        '<li><a href="javascript:;">诗词</a><li>',
                        '<li><a href="javascript:;">儿童</a><li>',
                    '</ul></div>',
                '</section>'
            ];
            $(document.body).append(sortall.join(''));
        }

        //取消搜索
        if(el.hasClass('m-search-cancel')){
            $('.m-search').remove();

            if($('.m-sortall').length){
                $('.m-sortall').remove();
            }
        }

        if(el.hasClass('m-sortall-flod')){
            $('.m-sortall').remove();
        }

        //搜索结果筛选
        if(el.parent('.m-search-result-hd').length){
            el.siblings().removeClass('crt');
            el[0].className = 'crt';
        }
    })
})
