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
                bd.eq(i).show().siblings().hide();

                if(opts.callbackEnd){
                    opts.callbackEnd();
                }
                
            })
        })
    },
    $.fn.tabs.defaults={
        hd:'.f-tabs-hd',
        bd:'.f-tabs-bd',
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

$('.f-tabs').tabs();
$('.m-vmtabs').tabs({hd:'.m-vmtabs-hd',bd:'.m-vmtabs-bd'});