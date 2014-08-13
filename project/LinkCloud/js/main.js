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
}).on('click','.j-filter-ip',function(){
    h = '<div style="position:absolute;left:65px;right:65px;top:60px;border:10px solid rgba(0,0,0,.4)" class="sel-service">';
    h += '<div style="padding:0 10px;line-height:34px;color:#fff;background-color:#449bd5;">选择虚拟化服务器<a href="javascript:;" style="float:right;color:#ddd;" class="sel-service-close">关闭</a></div>';
    h += '<div style="padding:10px;background-color:#fff;">';
    h += '<div class="clearfix" style="margin-bottom:10px;"><label><span style="float:left;line-height:34px;">ISP商：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">vda</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label>';
    h += '<label><span style="float:left;line-height:34px;">IP：</span><input class="txt" type="text" value=""></label><a class="u-operate-btn" href="javascript:;">筛选</a></div>';
    h += '<p><strong>IP列表</strong></p>';
    h += '<table class="m-filter-box" style="margin:0 0 10px;width:100%;line-height:24px;"><thead><tr><th width="80">选择</th><th width="80">ISP商</th><th>IP</th></tr></thead><tbody><tr><td><input type="radio" value=""></td><td>电信</td><td>192.168.1.1</td></tr><tr><td><input type="radio" value=""></td><td>电信</td><td>192.168.1.1</td></tr><tr><td><input type="radio" value=""></td><td>电信</td><td>192.168.1.1</td></tr><tr><td><input type="radio" value=""></td><td>电信</td><td>192.168.1.1</td></tr><tr><td><input type="radio" value=""></td><td>电信</td><td>192.168.1.1</td></tr></tbody></table>';
    h += '';
    h += '<div class="clearfix"><div class="m-pages m-pages-m"><a href="javascript:;">&lt;</a><em>1</em><a href="javascript:;">2</a><a href="javascript:;">3</a><a href="javascript:;">4</a><a href="javascript:;">5</a><span>...</span><a href="javascript:;">&gt;</a><span style="width:auto;">共123条</span></div><div style="float:right;"><a href="javascript:;" id="" class="u-orange-btn u-orange-btn-s" title="确定">确定</a><a href="javascript:;" id="" class="u-operate-btn u-operate-btn-s" title="取消">取消</a></div></div>';
    h += '</div>';
    h += '</div>';
    $('head').append('<style>.m-pages-m{float:left}.m-pages-m a,.m-pages-m span,.m-pages-m em{width:22px;height:22px;line-height:20px;}</style>')
    $(this).parents('.win-bd').append(h);
})


$(document.body).on('click','.win-box-switch',function(){
    $(this).siblings('.win-form').slideUp();
    $(this).next().slideDown();
})



//指定NC
$(document.body).on('click',function(e){
    var el = $(e.target);
    if(el.hasClass('j-select-nc')){
        var h = '<div style="position:absolute;left:50px;right:50px;top:100px;border:10px solid rgba(0,0,0,.4)" class="sel-service">';
        h += '<div style="padding:0 10px;line-height:34px;color:#fff;background-color:#449bd5;">选择虚拟化服务器<a href="javascript:;" style="float:right;color:#ddd;" class="sel-service-close">关闭</a></div>';
        h += '<div class="clearfix" style="padding:20px;background-color:#fff;">';
        h += '<label><span style="float:left;line-height:34px;">机房：</span><dl class="f-select" style="min-width:100px !important;"><dt class="f-select-hd"><a href="javascript:;">请选择</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label>';
        h += '<label><span style="float:left;line-height:34px;">类别：</span><dl class="f-select"style="min-width:100px !important;"><dt class="f-select-hd"><a href="javascript:;">请选择</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label>';
        h += '<label><span style="float:left;line-height:34px;">内网IP：</span><input class="txt" type="text" value="" style="width:160px"><a class="u-operate-btn j-filter-btn" href="javascript:;">查询</a></label>';
        h += '<table class="m-filter-box" style="margin:10px 0;width:100%;line-height:24px;"><thead><tr><th width="50"></th><th>所在机房</th><th>类别</th><th>内网IP</th><th>剩余核数</th><th>剩余内存(G)</th><th>剩余磁盘(G)</th><th>状态</th></tr></thead><tbody><tr><td><input type="radio" value=""></td><td>华东双线</td><td>均衡性</td><td>10.30.1.1</td><td>67</td><td>77</td><td>123123</td><td>服务中正常</td></tr><tr><td><input type="radio" value=""></td><td>华东双线</td><td>均衡性</td><td>10.30.1.1</td><td>67</td><td>77</td><td>123123</td><td>服务中正常</td></tr></tbody></table>';
        h += '<div style="text-align:center;"><a href="javascript:;" id="" class="u-orange-btn u-orange-btn-s" title="确定">确定</a><a href="javascript:;" id="" class="u-operate-btn u-operate-btn-s" title="取消">取消</a></div>';
        h += '</div></div>';
        $('#win-create-vm').find('.win-bd').append(h);
    }
    
    if(el.hasClass('sel-service-close')){
        $('.sel-service').remove();
    }
})

