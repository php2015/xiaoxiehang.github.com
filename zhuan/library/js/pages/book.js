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
        
        if(el.hasClass('m-book-detail-more')){
            var base = el.parents('.m-book-base');
            if(!base.hasClass('crt')){
                el.text('收起>>');
                base.css('height','auto').addClass('crt');
            }else{
                el.text('更多>>');
                base.removeAttr('style').removeClass('crt');
            }
        }
        
        //图书详情--锁定
        if(el.hasClass('m-book-lock')){
            if(el.is(':checked')){
                new sw.showWin().show({
                    id:'win-lock',
                    hd:'<i class="icon-lock" style="font-size:26px;vertical-align:-3px;"></i>锁定时间(周)',
                    bd:'<div class="sel-date-size" data-size="2"><input class="crt" type="radio" value="1"><input type="radio" value="2"><input type="radio" value="3"><input type="radio" value="4"><input type="radio" value="永久"></div>',
                    ft:'<span>锁定<em>2</em>周？</span> <a class="win-lock-confirm" href="javascript:;">确定</a>'
                });
                return false;
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
            var i = el.index();
            $('.sel-date-size').attr("data-size",i+1);
            var text = '';
            if(i<4){
                text = '锁定<em>' + el.val() + '</em>周';
            }else{
                text = '<em>' + el.val() + '</em>锁定?';
            }
            el.parents('.win-box').find('.win-ft span').html(text);
            
            var size = $('.sel-date-size').data("size");
            $('.sel-date-size').find('input').removeClass('crt');
            for(var i=0; i<size; i++){
                $('.sel-date-size').find('input').eq(i).addClass('crt');
            }
        }
        
        //确认锁定
        if(el.hasClass('win-lock-confirm')){
            var text = ''
            if($('.sel-date-size').data('size')<5){
                text = '锁定' + el.parent().find('em').text() + '周';
            }else{
                text = el.parent().find('em').text() + '锁定';
            }
            $('.m-book-lock').prop('checked',true);
            
            new sw.showWin().hide({id : 'win-lock'});
            
            new st.showTips().show({txt : text});
        }
    })
})