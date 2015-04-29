define(function(require, exports, module){
    var zepto = require('zepto');

    /*
     * 判断读书简介详情高度
     * 添加展开 / 收起 按钮
    */
    var desc = $('.m-book-desc');
    if(desc.height() > 60){
        desc.height(60).after('<a class="m-book-intro-flod" href="javascript:;">展开</a>');
        var descHeight = true;
    }


    $(document.body).on('touchstart',function(e){
        var el = $(e.target);

        /*
         * 内容简介展开
        */
        if(el.hasClass('m-book-intro-flod')){
            if(descHeight){
                el.text('收起').addClass('m-book-intro-floder');
                desc.height('auto');
                descHeight = false;
            }else{
                el.text('展开').removeClass('m-book-intro-floder');
                desc.height(60);
                descHeight = true;
            }
        }
    })
})
