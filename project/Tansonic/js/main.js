$('.m-search-txt').focus(function(){
    $(this).siblings('span').hide();
}).blur(function(){
    if($('.m-search-txt').val()==''){
        $(this).siblings('span').show();
    }
});


//服务与支持、新闻
$('div.m-post-hd').click(function(){
    $(this).parent().toggleClass('active')
           .siblings('li').removeClass('active').find('.m-post-bd').slideUp();
    if(!$(this).next('.m-post-bd').is(':animated')){
        $(this).next('.m-post-bd').slideToggle();
    }
    return false;
})


//联系我们、销售网络
$('div.m-accordion-hd').click(function(){
    if(!$(this).next().is(':visible')){
        $('div.m-accordion-bd').slideUp();
        $(this).next().slideDown();
        $('div.m-accordion-hd').find('.u-fold').removeClass('u-unfold');
        $(this).find('.u-fold').toggleClass('u-unfold');
    }
    return false;
})

var navigation = responsiveNav(".g-nav .container",{animate: true});

$('.m-menu-hd').click(function(){
    $(this).next().slideToggle(100)
})