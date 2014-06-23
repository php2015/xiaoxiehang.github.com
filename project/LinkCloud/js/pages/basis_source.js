$('.f-tableselect').select({hd:'.f-tableselect-hd',bd:'.f-tableselect-bd',setText:false,currentHd:true});

$(document.body).on('click',function(e){
    var _this = $(this), el = $(e.target);
    if(!el.closest('.f-editbox').length){
        if($('.f-editbox').length){
            removeEditbox();
        }
    }
    if(el.hasClass('m-table-edit')){
        var el_right = _this.width()-el.offset().left-el.width(),
            el_top = el.offset().top+el.height();
        
        el.parents('tr').addClass('crt');
        
        var html=[
            '<div class="f-editbox" style="top:'+el_top+'px;right:'+el_right+'px;">',
            '<div class="f-editbox-bd">',
            '<label>状态：</label>',
            '<dl class="f-select">',
            '<dt class="f-select-hd"><a href="javascript:;">开放</a><i class="f-select-arrow icon-arrow-d1"></i></dt>',
            '<dd class="f-select-bd">',
            '<ul><li>开放</li><li>关闭</li></ul>',
            '</dd>',
            '</dl>',
            '</div>',
            '<div class="f-editbox-ft">',
            '<a href="javascript:;" class="u-orange-btn u-orange-btn-s j-save-status">保存</a>',
            '<a href="javascript:;" class="u-operate-btn u-operate-btn-s j-cancel-status">取消</a>',
            '</div>',
            '</div>'
        ];
        _this.append(html.join(''));
        $('.f-select').select();
    }
    if(el.hasClass('j-save-status')){
        alert('ajax');
        removeEditbox();
    }
    if(el.hasClass('j-cancel-status')){
        removeEditbox();
    }
})

function removeEditbox(){
    $('.f-editbox').remove();
    $('.m-table').find('tr').removeClass('crt');
}



//添加ISO
$('.j-add-iso').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">基础信息</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>ISO名称：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>状态：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">开放</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>应用平台：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">linux</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>位数：</span><input class="txt" type="text" size="40" value=""></label>位</li>',
                    '<li><label><span>版本：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>路径：</span><input class="txt" type="text" size="40" value=""></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-add-iso',title:'添加ISO',drag:1,content:h.join(''),button:[{title:'确认添加',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
     $('.f-select').select();
})

//修改ISO
$('.j-modify-iso').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">基础信息</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>ISO名称：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>状态：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">开放</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>应用平台：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">linux</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>位数：</span><input class="txt" type="text" size="40" value=""></label>位</li>',
                    '<li><label><span>版本：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>路径：</span><input class="txt" type="text" size="40" value=""></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-modify-iso',title:'修改ISO',drag:1,content:h.join(''),button:[{title:'确认修改',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
     $('.f-select').select();
})


//添加镜像
$('.j-add-mirror').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">基础信息</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>ISO名称：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>状态：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">开放</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>应用平台：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">linux</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>位数：</span><input class="txt" type="text" size="40" value=""></label>位</li>',
                    '<li><label><span>版本：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>大小：</span><input class="txt" type="text" size="40" value=""></label>G</li>',
                    '<li><label><span>路径：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>备注：</span><textarea rows="5" cols="42" class="txt"></textarea></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-add-mirror',title:'添加镜像',drag:1,content:h.join(''),button:[{title:'确认添加',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
     $('.f-select').select();
})


//修改镜像
$('.j-modify-mirror').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">基础信息</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>ISO名称：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>状态：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">开放</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>应用平台：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">linux</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>位数：</span><input class="txt" type="text" size="40" value=""></label>位</li>',
                    '<li><label><span>版本：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>大小：</span><input class="txt" type="text" size="40" value=""></label>G</li>',
                    '<li><label><span>路径：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>备注：</span><textarea rows="5" cols="42" class="txt"></textarea></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-modify-mirror',title:'修改镜像',drag:1,content:h.join(''),button:[{title:'确认修改',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
     $('.f-select').select();
})


//添加内网IP
$('.j-add-nip').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">基础信息</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>内网IP：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">-</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>子网掩码：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>网关：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>DNS1：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>DNS2：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-add-nip',title:'添加内网IP',drag:1,width:875,content:h.join(''),button:[{title:'确认添加',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
     $('.f-select').select();
})

//修改单个IP
$('.j-modify-nip').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">基础信息</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>内网IP：</span></label><em>192</em><i class="pipe">.</i><em>168</em><i class="pipe">.</i><em>1</em><i class="pipe">.</i><em>1</em></li>',
                    '<li><label><span>子网掩码：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>网关：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>DNS1：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>DNS2：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>状态：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">空闲</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-modify-nip',title:'修改单个IP',drag:1,content:h.join(''),button:[{title:'确认修改',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
     $('.f-select').select();
})



//批量修改内网IP
$('.j-modify-nallip').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">修改范围</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>需修改IP：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">-</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>状态：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">空闲</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                '</ul>',
            '</div>',
            '<div class="win-box-tit">修改IP基础信息</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>子网掩码：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>网关：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>DNS1：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>DNS2：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>状态：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">空闲</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-modify-nallip',title:'批量修改内网IP',drag:1,width:875,content:h.join(''),button:[{title:'确认修改',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
     $('.f-select').select();
})










//添加外网IP
$('.j-add-wip').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">基础信息</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>IPS商：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">电信</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>内网IP：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">-</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>子网掩码：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>网关：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>DNS1：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>DNS2：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-add-wip',title:'添加外网IP',drag:1,width:875,content:h.join(''),button:[{title:'确认添加',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
     $('.f-select').select();
})

//修改单个IP
$('.j-modify-wip').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">基础信息</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>IPS商：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">电信</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>内网IP：</span></label><em>192</em><i class="pipe">.</i><em>168</em><i class="pipe">.</i><em>1</em><i class="pipe">.</i><em>1</em></li>',
                    '<li><label><span>子网掩码：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>网关：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>DNS1：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>DNS2：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>状态：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">空闲</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-modify-wip',title:'修改单个IP',drag:1,content:h.join(''),button:[{title:'确认修改',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
     $('.f-select').select();
})



//批量修改外网IP
$('.j-modify-wallip').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">修改范围</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>需修改IP：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">-</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>状态：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">已分配</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                '</ul>',
            '</div>',
            '<div class="win-box-tit">修改IP基础信息</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>IPS商：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">电信</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>子网掩码：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>网关：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>DNS1：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>DNS2：</span></label><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""><i class="pipe">.</i><input class="txt txtip" type="text" size="1" value=""></li>',
                    '<li><label><span>状态：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">空闲</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-modify-wallip',title:'批量修改外网IP',drag:1,width:875,content:h.join(''),button:[{title:'确认修改',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
     $('.f-select').select();
})