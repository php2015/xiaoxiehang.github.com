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
        
        if(el.hasClass('textarea')){
            el.removeClass('before');
        }else{
            if($('.textarea').text()==''){
                $('.textarea').addClass('before');
            }
        }
        
        if(el.hasClass('m-book-lock')){
            if(el.attr("checked")){
                _this.append('<div id="win-code" class="win-box"><div class="win-cont"><label>锁定时间：<select><option>一周</option><option>两周</option></select></label><a href="javascript:;" class="u-btn">确定</a></div></div>');

                var h = $('#win-code').find('.win-cont').height();

                var winBox = $('.win-box');
                var winCont = $('.win-cont');
                winCont.css('margin-top',(winBox.height()-winCont.height())/2);
            }else{
                alert('取消锁定');
            }
        }
        
        if(el.hasClass('m-track-edit')){
            var cont = el.siblings('.m-track-cont');
            el.before('<input type="text" value="' + cont.text() + '">').siblings('input').focus();
            cont.hide();
            el.siblings('input').get(0).SelectionStart=el.siblings('input').get(0).Text.Length-1;
        }
    })
})