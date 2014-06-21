(function($){
    $.fn.select=function(options){
        var opts=$.extend({},$.fn.select.defaults,options);
        var _this=$(this),
            hd=_this.find(opts.hd),
            bd=_this.find(opts.bd);
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
                $(document.body).on(opts.eventName);
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