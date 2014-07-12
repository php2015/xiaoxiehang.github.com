$('.f-dropdown').select({hd:'.f-dropdown-hd',bd:'.f-dropdown-bd',setText:false,active:true});

//添加NC
$('.j-add-nc').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit win-box-switch">基础信息<i class="icon-wunfold"></i></div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>NC名称：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>状态：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">下架</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li></ul></dd></dl></label></li>',
                '</ul>',
            '</div>',
            '<div class="win-box-tit win-box-switch">物理配置<i class="icon-wunfold"></i></div>',
            '<div class="win-form hide">',
                '<ul>',
                    '<li><label><span>CPU总核数：</span><input class="txt" type="text" size="40" value="">核</label></li>',
                    '<li><label><span>内存总数：</span><input class="txt" type="text" size="40" value="">G</label></li>',
                    '<li><label><span>磁盘总容量：</span><input class="txt" type="text" size="40" value="">GB</label></li>',
                '</ul>',
            '</div>',
            '<div class="win-box-tit win-box-switch">网络配置<i class="icon-wunfold"></i></div>',
            '<div class="win-form hide">',
                '<ul>',
                    '<li><label><span>内网IP：</span></label><input class="txt txtip" type="text" size="40" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="40" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="40" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="40" value=""></li>',
                    '<li><label><span>监控网：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">19.5.5.1</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li></ul></dd></dl></label></li>',
                '</ul>',
            '</div>',
            '<div class="win-box-tit win-box-switch">虚拟化参数<i class="icon-wunfold"></i></div>',
            '<div class="win-form hide">',
                '<ul>',
                    '<li><label><span>虚拟交换机(内网)：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>虚拟交换机(外网)：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>允许创建的VM总数：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>允许同时创建的VM数：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>分配给VM的最大内存：</span><input class="txt" type="text" size="40" value="">G</label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-reload-system',title:'添加NC',drag:1,content:h.join(''),button:[{title:'确认添加',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
     $('.f-select',window.top.document).selectParent();
})


//详情
$('.j-nc-detail').toggle(function(){
    var el = $(this);
        tr = el.parents('tr');
    console.log(el.offset().left);
    var h = [
        '<tr><td colspan="10"><div class="m-nc-detail">',
            '<dl><dt>物理配置</dt><dd>CPU：64 核</dd><dd>内存：64 G</dd><dd>磁盘：5000 GB</dd></dl>',
            '<dl><dt>网络配置</dt><dd>内网：10.92.0.1</dd><dd>监控网：101.52.110.10</dd></dl>',
            '<dl><dt>虚拟参数</dt><dd>允许创建的VM数：59</dd><dd>允许网时创建的VM数：2</dd><dd>分配VM的最大内存：10G</dd></dl>',
        '<span class="m-nc-arrow"><i></i></span></div></td></tr>'
    ]
    tr.after(h.join(''));
},function(){
    var el = $(this);
        tr = el.parents('tr');
    tr.next().remove();
})
