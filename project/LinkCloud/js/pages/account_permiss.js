//修改用户
$('.j-edit-user').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">用户信息</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>所属部门：</span><dl class="f-select" style="width:279px;"><dt class="f-select-hd"><a href="javascript:;">销售部</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>分配角色：</span><dl class="f-select" style="width:279px;"><dt class="f-select-hd"><a href="javascript:;">销售主管</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
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
    $('.f-select').select();
})

//修改部门
$('.j-modify-department').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">部门</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>部门名称：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>父节点：</span><dl class="f-select" style="width:279px;"><dt class="f-select-hd"><a href="javascript:;">总公司</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-modify-department',title:'修改部门',drag:1,content:h.join(''),button:[{title:'确认修改',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
    $('.f-select').select();
})

//修改角色
$('.j-modify-role').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">基本信息</div>',
                '<div class="win-form">1111111111',
            '</div>',
            '<div class="win-box-tit">权限</div>',
                '<div class="win-form">2222222222',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-modify-role',title:'修改角色',drag:1,content:h.join(''),button:[{title:'提交',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
})

//删除部门
$('.j-del-department').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">部门列表</div>',
            '<div class="win-form">1111111111',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-del-department',title:'删除部门',drag:1,content:h.join(''),button:[{title:'确认删除',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
})

//删除角色
$('.j-del-role').click(function(){
    var h=[
        '<div class="win-box">',
            '<div class="win-box-tit">角色列表</div>',
            '<div class="win-form">1111111111',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-del-role',title:'删除角色',drag:1,content:h.join(''),button:[{title:'确认删除',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
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
    $.showWin({obj:'win-modify-pass',title:'修改密码',drag:1,content:h.join(''),button:[{title:'修改',callback:function(){
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