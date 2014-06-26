//修改用户
$('.j-edit-user').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">用户信息</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>所属部门：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">销售部</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>分配角色：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">销售主管</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>用户姓名：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>登录账户：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>登录密码：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>确认密码：</span><input class="txt" type="text" size="40" value=""></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-edit-user',title:'修改用户',drag:1,content:h.join(''),button:[{title:'确认修改',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
     $('.f-select',window.top.document).selectParent();
})

//修改部门
$('.j-modify-department').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">部门</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>部门名称：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>父节点：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">总公司</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-modify-department',title:'修改部门',drag:1,content:h.join(''),button:[{title:'确认修改',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
     $('.f-select',window.top.document).selectParent();
})

//修改角色
$('.j-modify-role').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">基本信息</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>部门名称：</span>总公司 / 销售部</label></li>',
                    '<li><label><span>角色名称：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">总公司</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
            '</ul></div>',
            '</div>',
            '<div class="win-box-tit">权限</div>',
            '<dl class="m-department-list" style="margin-left:40px;">',
                '<dt><a href="#">部署资源 <i class="u-arrow u-arrow-top"></i></a></dt><dd><ul>',
                '<li><span>基础应用：</span><label><input type="checkbox" value="">修改</label></li>',
                '<li><span>NC服务器：</span><label><input type="checkbox" value="">添加NC</label><label><input type="checkbox" value="">修改NC</label><label><input type="checkbox" value="">上报资源</label></li>',
                '<li><span>基础资源：</span><label><input type="checkbox" value="">添加</label><label><input type="checkbox" value="">修改</label><label><input type="checkbox" value="">删除</label></li>',
            '</ul></dd></dl>',
        
            '<dl class="m-department-list" style="margin-left:40px;">',
                '<dt><a href="#">云主机 <i class="u-arrow u-arrow-top"></i></a></dt><dd class="hide"><ul>',
                '<li><span>VM管理：</span><label><input type="checkbox" value="">查询</label><label><input type="checkbox" value="">添加</label><label><input type="checkbox" value="">修改</label><label><input type="checkbox" value="">删除</label><label><input type="checkbox" value="">其他</label></li>',
                '<li><span>操作日志：</span><label><input type="checkbox" value="">查询</label></li>',
            '</ul></dd></dl>',
        
            '<dl class="m-department-list" style="margin-left:40px;">',
                '<dt><a href="#">监控 <i class="u-arrow u-arrow-top"></i></a></dt><dd class="hide"><ul>',
                '<li><span>NC监控：</span><label><input type="checkbox" value="">查询</label></li>',
                '<li><span>VM监控：</span><label><input type="checkbox" value="">查询</label></li>',
            '</ul></dd></dl>',
        
            '<dl class="m-department-list" style="margin-left:40px;">',
                '<dt><a href="#">账户权限 <i class="u-arrow u-arrow-top"></i></a></dt><dd class="hide"><ul>',
                '<li><span>账户基础服务：</span><label><input type="checkbox" value="">修改</label></li>',
                '<li><span>角色权限：</span><label><input type="checkbox" value="">部门</label><label><input type="checkbox" value="">角色</label><label><input type="checkbox" value="">用户</label><label><input type="checkbox" value="">权限</label></li>',
            '</ul></dd></dl>',
        
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-modify-role',title:'修改角色',drag:1,content:h.join(''),button:[{title:'提交',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
     $('.f-select',window.top.document).selectParent();
})

//删除部门
$('.j-del-department').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">部门列表</div>',
            '<dl class="m-department-list" style="margin-left:50px;">',
                '<dt><label><input type="checkbox" value=""></label><a href="#">总公司 <i class="u-arrow u-arrow-top"></i></a></dt><dd><ul>',
                '<li><label><input type="checkbox" value="">人事部</label></li>',
                '<li><label><input type="checkbox" value="">行政部</label></li>',
                '<li><label><input type="checkbox" value="">财务部</label></li>',
                '<li><label><input type="checkbox" value="">销售部</label></li>',
                '<li><label><input type="checkbox" value="">市场部</label></li>',
                '<li><label><input type="checkbox" value="">研发部</label></li>',
                '<li><label><input type="checkbox" value="">运维部</label></li>',
            '</ul></dd></dl>',
            '<dl class="m-department-list" style="margin-left:50px;">',
                '<dt><label><input type="checkbox" value=""></label><a href="#">上海分公司 <i class="u-arrow u-arrow-top"></i></a></dt><dd><ul>',
                '<li><label><input type="checkbox" value="">销售部</label></li>',
            '</ul></dd></dl>',
        '</div>'
    ];
    $.showWin({obj:'win-del-department',title:'删除部门',drag:1,content:h.join(''),width:500,button:[{title:'确认删除',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
})

//删除角色
$('.j-del-role').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">角色列表</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>ISO镜像：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">总公司</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
            '</ul></div>',
            '<dl class="m-department-list" style="margin-left:80px;">',
                '<dt><label><input type="checkbox" value=""></label><a href="#">销售部 <i class="u-arrow u-arrow-top"></i></a></dt><dd><ul>',
                '<li><label><input type="checkbox" value="">销售总监</label></li>',
                '<li><label><input type="checkbox" value="">销售主管</label></li>',
                '<li><label><input type="checkbox" value="">销售助理</label></li>',
                '<li><label><input type="checkbox" value="">普通销售</label></li>',
            '</ul></dd></dl>',
        '</div>'
    ];
    $.showWin({obj:'win-del-role',title:'删除角色',drag:1,content:h.join(''),button:[{title:'确认删除',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
     $('.f-select',window.top.document).selectParent();
})

//修改密码
$('.j-modify-pass').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>原密码：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>新密码：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>确认密码：</span><input class="txt" type="text" size="40" value=""></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-modify-pass',title:'修改密码',drag:1,content:h.join(''),width:600,button:[{title:'修改',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
})




$('.m-user-tree').find('h4').bind('click',function(){
    var el = $(this);
    el.next().slideToggle(200).siblings('ul').slideUp(200);
}).end().find('li a').bind('click',function(e){
    var el = $(this);
    el.parents('.m-user-tree').find('li').removeClass('crt').end().end().parent().addClass('crt');
    e.preventDefault();
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