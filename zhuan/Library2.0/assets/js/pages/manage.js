/*
 * 管理
*/
define(function(require, exports, module){
    var zepto = require('zepto'),
        iscroll = require('iscroll');

    document.getElementById('iscroll').innerHTML = '<div>' + document.getElementById('iscroll').innerHTML + '</div>';
    var myScroll = new iscroll.iScroll('iscroll' ,{
        fixedScrollbar:true,
        bounce:false,
        momentum:false
    });

    //模块切换
    $('.m-sort a').on('touchend',function(e){
        var el = $(this),
            hash = el.attr('href').slice(1),
            box = $('.m-' + hash);
        box.removeClass('hide').siblings().addClass('hide');
        
        if(hash == 'lend'){
            //借出
            $.ajax();
        }else if(hash == 'borrow'){
            //借入
            $.ajax();
        }
        
        el.addClass('crt').siblings().removeClass('crt');
        
        myScroll.refresh();
    })
    
    $('.m-manage-action a').on('touchend',function(e){
        var el = $(this),
            name = el.attr('name');
        
        
        $.ajax();
        
        
        el.addClass('crt').siblings().removeClass('crt');
        myScroll.refresh();
    })
    
    //单击事件
    $(document.body).on('touchend',function(e){
        var el = $(e.target);
    })
})
