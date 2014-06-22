$('.f-select').select();
$('.f-dropdown').select({hd:'.f-dropdown-hd',bd:'.f-dropdown-bd',setText:false,currentHd:true});
$('.f-tableselect').eq(0).select({hd:'.f-tableselect-hd',bd:'.f-tableselect-bd',type:'check',setText:false,currentHd:true})
$('.f-tableselect').eq(1).select({hd:'.f-tableselect-hd',bd:'.f-tableselect-bd',setText:false,currentHd:true})


//修改配置
$('.j-modify-deploy').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>IP（外网/内网）：118.123.25.30  /  10.91.0.25</p>',
            '<div class="win-box-tit">新配置</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>CPU：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>内存：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>磁盘大小：</span>50GB(添加、卸载磁盘请在磁盘模块操作)</label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-modify-deploy',title:'修改配置',drag:1,content:h.join(''),button:[{title:'确认修改',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
})

//挂载镜像
$('.j-mount-mirror').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>IP（外网/内网）：118.123.25.30  /  10.91.0.25</p>',
            '<div class="win-box-tit">新配置</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>ISO镜像：</span><dl class="f-select" style="width:279px;"><dt class="f-select-hd"><a href="javascript:;">总公司</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-mount-mirror',title:'挂载镜像',drag:1,content:h.join(''),button:[{title:'确认挂载',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
    $('.f-select').select();
})

//重装系统
$('.j-reload-system').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>IP（外网/内网）：118.123.25.30  /  10.91.0.25</p>',
            '<div class="win-box-tit">新配置</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>系统镜像：</span><dl class="f-select" style="width:279px;"><dt class="f-select-hd"><a href="javascript:;">windows</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-reload-system',title:'重装系统',drag:1,content:h.join(''),button:[{title:'确认挂载',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
    $('.f-select').select();
})

