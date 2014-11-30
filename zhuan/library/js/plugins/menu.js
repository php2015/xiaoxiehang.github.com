define(function(require,exports,module){
    var zepto = require('zepto');
    //显示所有分类
    $(document.body).on('click',function(e){
        var el = $(e.target);
        if(el.hasClass('g-nav')){
            el.toggleClass('crt');
            $('.m-menuall').toggle();
        }
    })
})