(function($){
    $.fn.tabs=function(options){
        var opts=$.extend({},$.fn.tabs.defaults,options);

        var _this=$(this),
            hd=_this.find(opts.hd).children(),
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
    },
    $.fn.select=function(options){
        var opts=$.extend({},$.fn.select.defaults,options);
        var _this=$(this),
            hd=_this.find(opts.hd),
            bd=_this.find(opts.bd);
        $('body').delegate('dt','click',function(){
            alert(1) 
            bd.fadeToggle(100);
        })
        $(document.body).on(opts.eventName,function(e){
            var el=$(e.target);
            if(el.closest('.'+_this.attr('class')).length){
                if(el.closest('.'+bd.attr('class')).length){
                    hd.find('a').text(el.text());
                    el.addClass('crt').siblings().removeClass('crt');
                    opts.callbackSelectItem();
                }
                bd.fadeToggle(100);
            }else{
                bd.fadeOut(100);
            }
        })
    },
    $.fn.select.defaults={
        hd:'.f-select-hd',
        bd:'.f-select-bd',
        eventName:'click',
        currentName:'crt',
        callbackSelectItem:function(){
            return true;
        }
    }
})(jQuery);

$('.f-tabs').tabs();
$('.f-select').select();