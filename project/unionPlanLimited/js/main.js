$('.m-slide').slide({ prev: 'slide_prev', next: 'slide_next',arrow:true});

$('.g-nav').find('li').hover(function(){
    $(this).find('ul').show();
},function(){
    $(this).find('ul').hide();
})