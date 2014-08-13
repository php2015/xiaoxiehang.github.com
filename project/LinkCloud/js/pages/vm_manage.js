$('.f-dropdown').select({hd:'.f-dropdown-hd',bd:'.f-dropdown-bd',setText:false,currentHd:true});
$('.f-tableselect').select({hd:'.f-tableselect-hd',bd:'.f-tableselect-bd',type:'check',setText:false,currentHd:true})

$('.j-create-vm').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>CPU：</span><div class="w-sel-box"><a href="javascript:;">1核</a><a href="javascript:;">2核</a><a href="javascript:;">4核</a><a href="javascript:;">8核</a><a href="javascript:;">16核</a><a href="javascript:;">32核</a><a href="javascript:;">64核</a></div></label></li>',
                    '<li><label><span>内存：</span><div class="w-sel-box"><a href="javascript:;">1G</a><a href="javascript:;">2G</a><a href="javascript:;">4G</a><a href="javascript:;">8G</a><a href="javascript:;">16G</a><a href="javascript:;">32G</a><a href="javascript:;">64G</a></div></label></li>',
                    '<li><label><span>磁盘：</span><input class="txt" type="text" size="40" value="">GB</label></li>',
                    '<li><label><span>网络：</span>',
                    '<div class="w-tabs"><ul class="w-tabs-hd"><li class="crt">公网加内网<i class="u-arrow u-arrow-top"></i></li><li>公网<i class="u-arrow u-arrow-top"></i></li></ul><div class="w-tabs-bd"><div class="w-tabs-panel"><label><input type="checkbox" size="40" value=""> 电信</label><label><input type="checkbox" size="40" value=""> 联通</label></div><div class="w-tabs-panel hide"><label><input type="checkbox" size="40" value=""> 电信</label><label><input type="checkbox" size="40" value=""> 联通</label></div></div></div>',
                    '</li>',
                    '<li><label><span>带宽：</span><input class="txt" type="text" size="40" value="">Mbps</label></li>',
                    '<li><label><span>系统：</span>',
                    '<div class="w-tabs"><ul class="w-tabs-hd"><li class="crt">windows<i class="u-arrow u-arrow-top"></i></li><li>linux<i class="u-arrow u-arrow-top"></i></li></ul><div class="w-tabs-bd"><div class="w-tabs-panel"><label><input type="radio" size="40" value=""> window 2003</label><label><input type="radio" size="40" value=""> window 2003</label></div><div class="w-tabs-panel hide"><label><input type="radio" size="40" value=""> window 2003</label><label><input type="radio" size="40" value=""> window 2003</label></div></div></div>',
                    '</li>',
                    '<li><label><span>台数：</span><input class="txt" type="text" size="40" value="">台</label></li>',
                    '<li><label><span>指定NC：</span><input class="txt" type="text" size="36" value=""><a href="javascript:;" class="u-operate-btn j-select-nc" title="选择">选择</a></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-create-vm',title:'创建VM',drag:1,content:h.join(''),button:[{title:'确认创建',callback:function(){
        alert('回调函数111');
        return false;
    }},{title:'取消'}]});
})

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
                    '<li><label><span>ISO镜像：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">总公司</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-mount-mirror',title:'挂载镜像',drag:1,content:h.join(''),button:[{title:'确认挂载',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
     $('.f-select',window.top.document).selectParent();
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
                    '<li><label><span>系统镜像：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">windows</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-reload-system',title:'重装系统',drag:1,content:h.join(''),button:[{title:'确认挂载',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
     $('.f-select',window.top.document).selectParent();
})

$(document.body).on('click',function(e){
    var el = $(e.target);
    
    //修改密码
    if(el.hasClass('j-modify-pass')){
        var h=[
            '<div class="win-box">',
                '<div class="win-form">',
                    '<ul>',
                        '<li><label><span>VM/NO：</span>oPA7c98k1t4NQhMIlDWd0ihNa9syDm</label></li>',
                        '<li><label><span>外网IP：</span>118.123.25.30(电信)</label></li>',
                        '<li><label><span>新密码：</span><input class="txt" type="text" value=""></label></li>',
                        '<li><label><span>确认密码：</span><input class="txt" type="text" value=""></label></li>',
                    '</ul>',
                '</div>',
            '</div>'
        ];
        $.showWin({obj:'win-modify-pass',title:'修改密码',drag:1,content:h.join(''),button:[{title:'确定',callback:function(){
            alert('回调函数');
        }},{title:'取消'}]});
    }
    
    //修改启动方式
    if(el.hasClass('j-start-mode')){
        var h=[
            '<div class="win-box">',
                '<div class="win-form">',
                    '<ul>',
                        '<li><label><span>VM/NO：</span>oPA7c98k1t4NQhMIlDWd0ihNa9syDm</label></li>',
                        '<li><label><span>外网IP：</span>118.123.25.30(电信)</label></li>',
                        '<li><label><span>当前启动模式：</span>硬盘启动</label></li>',
                        '<li><span style="float:left;width:140px;text-align:right;color:#666;">*新启动模式：</span><label><input class="u-tag-sel" type="radio" value="" name="start"> 硬盘启动</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label><input class="u-tag-sel" type="radio" value="" name="start"> 光驱启动</label></li>',
                    '</ul>',
                '</div>',
            '</div>'
        ];
        $.showWin({obj:'win-start-mode',title:'修改启动方式',drag:1,content:h.join(''),button:[{title:'确定',callback:function(){
            alert('回调函数');
        }},{title:'取消'}]});
    }
    
    //迁移重定义
    if(el.hasClass('j-trans-define')){
        var h=[
            '<div class="win-box">',
                '<div class="win-form">',
                    '<ul>',
                        '<li><label><span>VM/NO：</span>oPA7c98k1t4NQhMIlDWd0ihNa9syDm</label></li>',
                        '<li><label><span>外网IP：</span>118.123.25.30(电信)</label></li>',
                        '<li><label><span>指定NC：</span><input class="txt" type="text" value="" style="width:200px;"><a class="u-operate-btn j-filter-btn" href="javascript:;">选择</a></label></li>',
                        '<li class="m-filter-box hide" style="margin:0 0 0 40px;padding:0;border:0;"><table><thead><tr><th width="50"></th><th>内网IP</th><th>剩余核数</th><th>剩余内存(G)</th><th>剩余磁盘(G)</th><th>状态</th></tr></thead><tbody><tr><td><input type="radio" value=""></td><td>10.30.1.1</td><td>67</td><td>77</td><td>123123</td><td>服务中正常</td></tr><tr><td><input type="radio" value=""></td><td>10.30.1.1</td><td>67</td><td>77</td><td>123123</td><td>服务中正常</td></tr></tbody></table><div style="text-align:center;"><a href="javascript:;" id="" class="u-orange-btn u-orange-btn-s" title="确定">确定</a><a href="javascript:;" id="" class="u-operate-btn u-operate-btn-s" title="取消">取消</a></div></li>',
            
            
                        '<li><span style="float:left;width:140px;text-align:right;color:#666;">操作类型：</span><label><input class="u-tag-sel" type="radio" value="" name="start"> 迁移</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label><input class="u-tag-sel" type="radio" value="" name="start"> 重定义</label></li>',
                    '</ul>',
                '</div>',
            '</div>'
        ];
        $.showWin({obj:'win-trans-define',title:'迁移重定义',drag:1,content:h.join(''),button:[{title:'确定',callback:function(){
            alert('回调函数');
        }},{title:'取消'}]});
    }
    
})


//添加磁盘
$('.j-add-disk').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>IP（外网/内网）：118.123.25.30  /  10.91.0.25</p>',
            '<div class="win-box-tit">新增磁盘</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>磁盘大小：</span><input class="txt" type="text" value="">GB</label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-add-disk',title:'添加磁盘',drag:1,content:h.join(''),button:[{title:'确认添加',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
})


//IO限速
$('.j-io-limit').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>IP（外网/内网）：118.123.25.30  /  10.91.0.25</p>',
            '<div class="win-box-tit">IO限速</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>磁盘：</span>VDA</label></li>',
                    '<li><label><span>限速类型：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">bytes</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>Read：</span><input class="txt" type="text" value=""></label></li>',
                    '<li><label><span>Write：</span><input class="txt" type="text" value=""></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-io-limit',title:'IO限速',drag:1,content:h.join(''),button:[{title:'确认限制',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
     $('.f-select',window.top.document).selectParent();
})

//自定义镜像
$('.j-custom-mirror').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>原镜像类型：Windows 2008 64 标准版</p>',
            '<div class="win-box-tit">制作镜像</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>镜像名称：</span><input class="txt" type="text" value="">GB</label></li>',
                    '<li><label><span>状态：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">bytes</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>备注：</span><textarea class="txt"></textarea></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-custom-mirror',title:'自定义镜像',drag:1,content:h.join(''),button:[{title:'确认',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
     $('.f-select',window.top.document).selectParent();
})


//创建快照
$('.j-create-snapshot').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>IP（外网/内网）：118.123.25.30  /  10.91.0.25</p>',
            '<div class="win-box-tit">创建快照</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>快照类型：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">磁盘快照</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>选择母盘：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">vda</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>快照名称：</span><textarea class="txt"></textarea></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-create-snapshot',title:'创建快照',drag:1,content:h.join(''),button:[{title:'确认添加',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
     $('.f-select',window.top.document).selectParent();
})




//添加IP
$('.j-add-ip').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>Mac地址：00:16:3e:70:c6:f0</p>',
            '<div class="win-box-tit">为网卡添加IP</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>已有IP：</span>118.123.25.30  /  10.91.0.25</label></li>',
                    '<li><label><span>新增IP：</span><input class="txt" type="text" value=""><a class="u-operate-btn j-filter-ip" href="javascript:;">筛选</a></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-add-ip',title:'添加IP',drag:1,content:h.join(''),button:[{title:'确认添加',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
})

//修改IP
$('.j-modify-ip').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>Mac地址：00:16:3e:70:c6:f0</p>',
            '<div class="win-box-tit">为网卡修改IP</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>已有IP：</span>118.123.25.30  /  10.91.0.25</label></li>',
                    '<li><label><span>新增IP：</span><input class="txt" type="text" value=""><a class="u-operate-btn j-filter-btn" href="javascript:;">筛选</a></label></li>',
                    
                    '<li class="m-filter-box hide"><label><span>ISP商：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">vda</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label><label><span>IP：</span><input class="txt" type="text" value=""></label><p><strong>IP列表</strong></p><table><thead><tr><th width="80">选择</th><th width="80">ISP商</th><th>IP</th></tr></thead><tbody><tr><td><input type="radio" value=""></td><td>电信</td><td></td></tr></tbody></table><div class="m-filter-btns"><a href="javascript:;" class="u-orange-btn u-orange-btn-s">选定</a><a href="javascript:;" class="u-operate-btn u-operate-btn-s">取消</a></div></li>',
        
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-modify-ip',title:'修改IP',drag:1,content:h.join(''),button:[{title:'确认修改',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
})


//网卡限速
$('.j-nic-limit').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>Mac地址：00:16:3e:70:c6:f0</p>',
            '<div class="win-box-tit">网卡限速</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><span style="float:left;">原出网速度: 100Mbps </span><label><span style="float:left;">&nbsp;&nbsp;设置出网速度：</span><input class="txt" type="text" value="">Mbps</li>',
                    '<li><span style="float:left;">原出网速度: 100Mbps </span><label><span style="float:left;">&nbsp;&nbsp;设置出网速度：</span><input class="txt" type="text" value="">Mbps</li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-nic-limit',title:'网卡限速',drag:1,content:h.join(''),button:[{title:'确认限速',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
})


//添加网卡
$('.j-add-nic').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>IP（外网/内网）：118.123.25.30  /  10.91.0.25</p>',
            '<div class="win-box-tit">新配置</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>CPU：</span><input class="txt" type="text" value="">核</label></li>',
                    '<li><label><span>内存：</span><input class="txt" type="text" value="">G</label></li>',
                    '<li><label><span>磁盘大小：</span>50GB(添加、卸载磁盘请在磁盘模块操作)</label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-add-nic',title:'添加网卡',drag:1,content:h.join(''),button:[{title:'确认添加',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
})

//绑定Vlan
$('.j-bind-vlan').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>Mac地址：00:16:3e:70:c6:f0</p>',
            '<div class="win-box-tit">绑定Vlan</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>Vlan编号：</span><input class="txt" type="text" value=""><a class="u-operate-btn j-filter-btn" href="javascript:;">筛选</a></label></li>',
                    '<li class="m-filter-box hide"><label><span>ISP商：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">vda</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label><label><span>IP：</span><input class="txt" type="text" value=""></label><p><strong>IP列表</strong></p><table><thead><tr><th width="80">选择</th><th width="80">ISP商</th><th>IP</th></tr></thead><tbody><tr><td><input type="radio" value=""></td><td>电信</td><td></td></tr></tbody></table><div class="m-filter-btns"><a href="javascript:;" class="u-orange-btn u-orange-btn-s">选定</a><a href="javascript:;" class="u-operate-btn u-operate-btn-s">取消</a></div></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-bind-vlan',title:'绑定Vlan',drag:1,content:h.join(''),button:[{title:'确认绑定',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
})