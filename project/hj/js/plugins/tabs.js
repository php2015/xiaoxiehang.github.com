(function($){
    $.fn.tabs = function(options){
        var opts=$.extend({},$.fn.tabs.defaults,options);

        var _this=$(this),
            hd=_this.find(opts.hd).find('li'),
            bd=_this.find(opts.bd).children();

        hd.each(function(i){
            var self=$(this);
            self.bind(opts.eventName,function(){
                if(self.hasClass(opts.currentName)){
                    return false;
                }

                if(opts.callbackStart){
                    var tmp=opts.callbackStart();
                    if(!tmp){
                        return false;
                    };
                };

                self.addClass(opts.currentName)
                    .siblings().removeClass(opts.currentName);
                bd.eq(i).removeClass('hide').siblings().addClass('hide');

                if(opts.callbackEnd){
                    opts.callbackEnd();
                }
                
            })
        })
    },
    $.fn.tabs.defaults={
        hd:'.m-tab-hd',
        bd:'.m-tab-bd',
        eventName:'click',
        currentName:'crt',
        callbackStart:function(){
            return true;
        },
        callbackEnd:function(){
            return true;
        }
    }
})(jQuery);
