$('.f-dropdown').select({hd:'.f-dropdown-hd',bd:'.f-dropdown-bd',setText:false,active:true});

//添加NC
$('.j-add-nc').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">基础信息</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>NC名称：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>状态：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">下架</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li></ul></dd></dl></label></li>',
                '</ul>',
            '</div>',
            '<div class="win-box-tit">物理配置</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>CPU总核数：</span><input class="txt" type="text" size="40" value="">核</label></li>',
                    '<li><label><span>内存总数：</span><input class="txt" type="text" size="40" value="">G</label></li>',
                    '<li><label><span>磁盘总容量：</span><input class="txt" type="text" size="40" value="">GB</label></li>',
                '</ul>',
            '</div>',
            '<div class="win-box-tit">网络配置</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>内网IP：</span></label><input class="txt txtip" type="text" size="40" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="40" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="40" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="40" value=""></li>',
                    '<li><label><span>监控网：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">19.5.5.1</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li></ul></dd></dl></label></li>',
                '</ul>',
            '</div>',
            '<div class="win-box-tit">虚拟化参数</div>',
            '<div class="win-form">',
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
    $('.f-select').select();
})

//修改NC
$('.j-add-nc').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">基础信息</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>NC名称：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>状态：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">下架</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li></ul></dd></dl></label></li>',
                '</ul>',
            '</div>',
            '<div class="win-box-tit">物理配置</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>CPU总核数：</span><input class="txt" type="text" size="40" value="">核</label></li>',
                    '<li><label><span>内存总数：</span><input class="txt" type="text" size="40" value="">G</label></li>',
                    '<li><label><span>磁盘总容量：</span><input class="txt" type="text" size="40" value="">GB</label></li>',
                '</ul>',
            '</div>',
            '<div class="win-box-tit">网络配置</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>内网IP：</span></label><input class="txt txtip" type="text" size="40" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="40" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="40" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="40" value=""></li>',
                    '<li><label><span>监控网：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">19.5.5.1</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li></ul></dd></dl></label></li>',
                '</ul>',
            '</div>',
            '<div class="win-box-tit">虚拟化参数</div>',
            '<div class="win-form">',
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
    $.showWin({obj:'win-reload-system',title:'修改NC',drag:1,content:h.join(''),button:[{title:'确认修改',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
    $('.f-select').select();
})