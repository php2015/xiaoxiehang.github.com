$('.m-search-txt').focus(function(){
    $(this).siblings('span').hide();
}).blur(function(){
    if($('.m-search-txt').val()==''){
        $(this).siblings('span').show();
    }
});