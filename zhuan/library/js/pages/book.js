define(function(require,exports,module){
    var zepto = require('zepto');
    
    $(document.body).on('click',function(e){
        var el = $(e.target);
        
        //锁定
        if(el.hasClass('j-lock')){
            alert('锁定');
        }
        
        //二维码
        if(el.closest('.j-code').length){
            $(this).append('<div id="win-code" class="win-box"><div class="win-cont"><img src="#" width="" height="" alt=""><p>消耗点数：<em>1</em></p><p>使用规则：页面借阅扫描二维码，消耗点数1。</p></div></div>')
        }
        
    })
})