define(function(require,exports,module){
    var zepto = require('zepto');
    
    $(document.body).on('click',function(e){
        var _this = $(this) , el = $(e.target);
        
        //锁定
        if(el.hasClass('j-lock')){
            alert('锁定');
        }
        
        //二维码
        if(el.closest('.j-code').length){
            _this.append('<div id="win-code" class="win-box"><div class="win-cont"><img src="#" width="140" height="140" alt=""><p>消耗点数：<em>1</em></p><p>使用规则：页面借阅扫描二维码，消耗点数1。</p></div></div>');
            
            var h = $('#win-code').find('.win-cont').height();
            
            var winBox = $('.win-box');
            var winCont = $('.win-cont');
            winCont.css('margin-top',(winBox.height()-winCont.height())/2);
        }
        
        if(el.hasClass('win-box')){
            el.remove();
        }
    })
})