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