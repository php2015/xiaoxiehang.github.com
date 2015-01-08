/*
 * 全部分类
*/
$('.m-menu').hover(function(){
    var _this = $(this);
    if(!_this.hasClass('m-menu-index')){
        _this.find('menu').toggle();
    }
})

/*
 * 选择全部
*/
$('.selall').find('input').click(function(){
    var _this = $(this),allcheck = _this.parents('.m-table').find('input[type=checkbox]');
    if(_this.is(':checked')){
        allcheck.prop('checked',true);
    }else{
        allcheck.prop('checked',false);
    }
})
$('.m-table').find('tbody input[type=checkbox]').click(function(){
    if(!$(this).is(':checked')){
        $('.selall').find('input').prop('checked',false);
    }
})

/*
 * 商品数量
*/
$('.m-info-num').find('a').click(function(){
    var _this = $(this);
    var txt = _this.siblings('input')
    
    if(txt.val() == 'NaN' || txt.val() == ''){
        txt.val(1);
    }
    
    if(_this.hasClass('add')){
        txt.val(parseInt(txt.val()) + 1);
    }
    if(_this.hasClass('minus')){
        
        if(parseInt(txt.val()) > 0){
            txt.val(parseInt(txt.val()) - 1);
        }
    }
})

//选择收货人信息
$('.m-receinfo-bd').children('ul').eq(0).find('label').click(function(){
    $(this).parents('li').addClass('crt').siblings().removeClass('crt');
})

//删除收货人信息
$('.m-receinfo-del').click(function(){
    $(this).parents('li').remove();
})

/*
 * 商品详情切换
*/
$('.m-detail-hd').find('li').hover(function(){
    var _this = $(this);
    _this.addClass('crt').siblings().removeClass('crt');
    $(this).parents('.m-detail').find('.m-detail-bd').eq($(this).index()).show().siblings('.m-detail-bd').hide();
})

/*
 * 商品删除
*/
$('.m-car-del').click(function(){
    var _this = $(this);
    _this.parents('tr').remove();
    console.log($('.m-car-bd').find('tbody').find('tr').length);
    
    if($('.m-car-bd').find('tbody').find('tr').length<=1){
        carNull();
    }
})

/*
 * 商品清空
*/
$('.m-car-empty').click(function(){
    carNull();
})

function carNull(){
    $('.m-car-bd').html('<p class="m-car-null">购物车暂无商品，去<a href="商城列表页.html" class="c-red">挑选商品</a></p>');
}


$('.sel-outer').click(function(){
    $('.m-netouter').toggle();
})