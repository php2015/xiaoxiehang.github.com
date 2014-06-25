$('.m-table').find('tbody input[type="checkbox"]').click(function(){
    var el = $(this),
        p_table = el.parents('.m-table'),
        select_all = p_table.find('.j-select-all');
    
    el.parents('tr').toggleClass('crt');
    
    var count = p_table.find('tbody tr').length,
        s_input = p_table.find('tbody .crt').length;
    
    if(count == s_input){
        select_all.attr('checked',true);
    }else{
        select_all.attr('checked',false);
    }
})

$('input.j-select-all').click(function(){
    var el = $(this),
        p_table = el.parents('.m-table'),
        all_check = p_table.find('input[type="checkbox"]');
    if(el.attr('checked')){
        all_check.attr('checked',true);
        p_table.find('tbody').find('tr').addClass('crt');
    }else{
        all_check.attr('checked',false);
        p_table.find('tbody').find('tr').removeClass('crt');
    }
})

$(document.body).on('click','.m-department-list dt a',function(){
    $(this).parent().siblings('dd').slideToggle();
}).on('click','.m-department-list dt input[type="checkbox"]',function(){
    var el = $(this),
        all_input = el.parents('.m-department-list').find('dd input[type="checkbox"]')
    if(el.attr('checked')){
        all_input.attr('checked',true);
        el.parents('.m-department-list').find('dd li').addClass('crt');
    }else{
        all_input.attr('checked',false);
        el.parents('.m-department-list').find('dd li').removeClass('crt');
    }
}).on('click','.m-department-list dd input[type="checkbox"]',function(){
    var el = $(this),dd = el.parents('dd');
    el.parents('li').toggleClass('crt');
    var cl = dd.find('.crt').length,
        all = dd.find('li').length;
    if(cl==all){
        dd.siblings('dt').find('input[type="checkbox"]').attr('checked',true);
    }else{
        dd.siblings('dt').find('input[type="checkbox"]').attr('checked',false);
    }
}).on('click','.j-filter-btn',function(){
    var el = $(this);
    el.parents('li').next('.m-filter-box').slideToggle();
}).on('click','.w-sel-box a',function(){
    var el = $(this);
    el.addClass('crt').siblings().removeClass('crt');
}).on('click','.w-tabs-hd li',function(i){
    var el = $(this),i = el.index();
    el.addClass('crt').siblings().removeClass('crt');
    el.parents('.w-tabs-hd').siblings('.w-tabs-bd').find('.w-tabs-panel').eq(i).show().siblings().hide();
    return false;
})