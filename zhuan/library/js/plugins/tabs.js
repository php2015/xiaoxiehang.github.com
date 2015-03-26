define(function(require,exports,module){
    return function(zepto){
        (function($){
            $.fn.tabs = function(options){
                var defaults = {
                    hd : $(this).find('.m-tab-hd'),
                    callback : false
                }
                var opts = $.extend(defaults,options);

                opts.hd.find('li').on('click',function(){
                    var el = $(this);
                    console.log(el.text())
                    el.addClass('crt').siblings().removeClass('crt');
                    if(opts.callback){
                        opts.callback(el);
                        console.log(1);
                    }else{
                        el.parents('.m-tab-hd').siblings('.m-tab-bd').children('div').eq(el.index()).show().siblings().hide();
                    }
                    return false;
                })
            }
        })(zepto);
    }
})