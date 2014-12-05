define(function(require,exports,module){
    return function(zepto){
        (function($){
            $.fn.tabs = function(options){
                var defaults = {
                    hd : $(this).find('.m-tab-hd'),
                    bd : $(this).find('.m-tab-hd').siblings('.m-tab-bd'),
                    callback : function(){ return false;}
                }
                var opts = $.extend(defaults,options);
                
                opts.hd.find('li').on('click',function(){
                    var el = $(this);
                    el.addClass('crt').siblings().removeClass('crt');
                    var callback = opts.callback();
                    alert(callback)
                    if(callback){
                        opts.callback(el);
                        console.log(1);
                    }else{
                        opts.bd.children('div').eq(el.index()).show().siblings().hide();
                        console.log(2);
                    }
                    return false;
                })
            }
        })(zepto);
    }
})