$('.m-news-hd').click(function(){
    $('.m-news-bd').addClass('hide');
    $(this).siblings('.m-news-bd').removeClass('hide');
})

$('.m-tab-hd').find('li').click(function(){
    var el = $(this),i = el.index();
    el.addClass('crt').siblings().removeClass('crt');
    var tab = el.parents('.m-tab');
    tab.find('.m-tab-bd').eq(i).removeClass('hide').siblings('.m-tab-bd').addClass('hide');
})