var s;
function delay(){
    s = setTimeout(function(){
        $('.l-login').removeClass('l-login-crt');
        $('.g-sites-login').hide();
    },1);
}
$(document.body).on('mouseover',function(e){
    var el = $(e.target);
    if(el.hasClass('l-login')){
        if(!$('.g-sites-login').length){
            $('.g-sites-link').after('<div class="g-sites-login"><ul><li><label><span>電子郵箱</span><input class="g-sites-login-txt" type="text"></label></li><li><label><span>請輸入密碼</span><input class="g-sites-login-txt" type="password"></label></li><li><label><input type="checkbox"> 自動登錄</label><a class="g-sites-forgetpwd" href="#">忘记密码？</a></li><li><a href="#" class="u-btn">登錄</a>&nbsp;<a href="#" class="u-btn">注册</a></li></ul><i class="g-sites-login-arrow"></i></div>');
        }
        el.addClass('l-login-crt');
        $('.g-sites-login').show();
    }
    if(el.closest('.g-sites-login').length){
        clearTimeout(s);
    }
}).on('mouseout',function(e){
    var el = $(e.target);
    if(el.hasClass('g-sites-login')||el.hasClass('l-login')){
        delay();
    }
})