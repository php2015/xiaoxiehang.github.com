define(function(require,exports,module){
    var zepto = require('zepto'),
        st = require('../plugins/showTips'),
        sw = require('../plugins/showWin');
    
    $(document.body).on('click',function(e){
        var _this = $(this) , el = $(e.target);
        
        //二维码
        if(el.closest('.j-code').length){
            
            new sw.showWin().show({
                id:'win-code',
                bd:'<img src="#" width="140" height="140" alt=""><p>消耗点数：<em>1</em></p><p>使用规则：页面借阅扫描二维码，消耗点数1。</p>'
            });
        }
        
        //心得输入
        if(el.hasClass('textarea')){
            el.removeClass('before');
        }else{
            if($('.textarea').text()==''){
                $('.textarea').addClass('before');
            }
        }
        
        //图书详情--锁定
        if(el.hasClass('m-book-lock')){
            if(el.attr("checked")){
                new sw.showWin().show({
                    id:'win-lock',
                    hd:'<i class="icon-lock" style="font-size:26px;vertical-align:-3px;"></i>锁定时间(周)',
                    bd:'<div class="sel-date-size" data-size="2"><input type="radio" value="1"><input type="radio" value="2"><input type="radio" value="3"></div>',
                    ft:'锁定<em>2</em>周？ <a class="win-lock-confirm" href="javascript:;">确定</a>'
                });
            }else{
                new st.showTips().show({txt:'取消锁定'});
            }
        }
        
        //编辑读书心得
        if(el.hasClass('m-track-edit')){
            var cont = el.siblings('.m-track-cont');
            el.hide().before('<input class="m-track-text" type="text" value="' + cont.text() + '"><a class="m-track-confirm icon-ck" href="#"></a>').siblings('input').focus();
            cont.hide();
        }
        
        //确认读书心得
        if(el.hasClass('m-track-confirm')){
            el.siblings('.m-track-cont').text(el.siblings('.m-track-text').val()).show();
            el.siblings('.m-track-edit').show();
            el.siblings('.m-track-text').remove();
            el.remove();
            alert('提交');
        }
        
        //锁定时间选择
        if(el.parents('.sel-date-size').length){
            var t = el.val();
            $('.sel-date-size').attr("data-size",t);
            el.parents('.win-box').find('.win-ft em').text(t);
        }
        
        //确认锁定
        if(el.hasClass('win-lock-confirm')){
            var text = '锁定' + el.siblings('em').text() + '周';
            
            new sw.showWin().hide({id : 'win-lock'});
            
            new st.showTips().show({txt : text});
        }
    })
})