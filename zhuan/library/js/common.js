define(function(require,exports,modules){
    var zepto = require('zepto');

    $(document.body).on('click',function(e){
        var el = $(e.target);
        
        if(!el.closest('.m-search-type').length){
            $('.m-search-type').find('dd').hide();
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
    })
    
    $('.m-search-type').click(function(){
        var _this = $(this);
        _this.find('dd').show();
    }).find('a').click(function(){
        var _this = $(this);
        _this.addClass('crt').siblings('a').removeClass('crt');
        _this.parent().prev().text(_this.text());
        _this.parent().hide();
    })
})

