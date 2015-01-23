$('.menu-toggle').click(function(){
    $(this).siblings('.wrap').slideToggle();
    return false;
})

if($('.banner').length){
    slide('.banner ul',{width:'100%'});
}

$('.tab_hd').find('a').click(function(){
    var _this = $(this), i = _this.index();
    _this.addClass('current').siblings().removeClass('current');
    _this.parent().siblings('.tab_bd').eq(i).removeClass('hide').siblings('.tab_bd').addClass('hide');
    return false;
})