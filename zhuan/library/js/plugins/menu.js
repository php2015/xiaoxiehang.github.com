define(function(require,exports,module){
    var zepto = require('zepto');
    //显示所有分类
    $(document.body).on('click',function(e){
        var el = $(e.target);
        if(el.hasClass('g-nav')){
            allMenuToggle();
        }
        if(el.get(0).tagName == 'A' && (el.closest('.m-navlist').length || el.closest('.m-menuall').length)){
            el.parent().addClass('crt').siblings().removeClass('crt');
            
            if(el.closest('.m-navlist').length){
                console.log('m-navlist');
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
        $('.m-menuall').toggle();
    }
})