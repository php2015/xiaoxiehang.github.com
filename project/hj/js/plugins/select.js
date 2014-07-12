(function($){
    $.fn.select=function(options){
        var opts=$.extend({},$.fn.select.defaults,options);
        var _this=$(this),
           hd=_this.find(opts.hd),
           bd=_this.find(opts.bd);
        var s_class = '';
        hd.bind(opts.eventName,function(){
            var el = $(this),kk = '';
            if(el.parent().hasClass('crt')){
                kk = true; 
            }else{
                kk = false;
            }
            _this.removeClass('crt');
            if(!kk){
                s_class = el.parent().attr('class');
                el.parent().addClass('crt');
            }else{
                el.parent().removeClass('crt');
            }
            
        })
        $(opts.bd).find('li').on(opts.eventName,function(){
            var el=$(this);
            
            if(opts.setText){
                el.parents(opts.bd).siblings(opts.hd).find('a').text(el.text());
                el.addClass(opts.eventName).siblings().removeClass(opts.eventName);
            }
            
            var elp = el.parents('.'+s_class);
            if(elp.data('type')!='check'){
                elp.removeClass('crt');
            }
        })
        $('body').on(opts.eventName,function(e){
            var el=$(e.target);
            if(s_class!=''){
                if(!el.closest('.'+s_class).length){
                    _this.removeClass('crt');
                }
            }
        })
    },
    $.fn.select.defaults={
        hd:'.f-select-hd',
        bd:'.f-select-bd',
        eventName:'click',
        currentClass:'crt',
        setText:true,//是否需要把选中的值赋给 hd
        currentHd:false,//是否需要给 hd 添加展开后的样式
        callbackSelectItem:function(){
            return true;
        }
    }
})(jQuery);

(function($){
    $.fn.selectParent=function(options){
        var opts=$.extend({},$.fn.selectParent.defaults,options);
        var _this=$(this),
           hd=_this.find(opts.hd),
           bd=_this.find(opts.bd);
        var s_class = '';
        hd.bind(opts.eventName,function(){
            var el = $(this),kk = '';
            if(el.parent().hasClass('crt')){
                kk = true; 
            }else{
                kk = false;
            }
            
            _this.removeClass('crt');
            
            if(!kk){
                s_class = el.parent().attr('class');
                el.parent().addClass('crt');
            }else{
                el.parent().removeClass('crt');
            }
            
        })
        $(opts.bd,window.top.document).find('li').on(opts.eventName,function(){
            var el=$(this);
            
            if(opts.setText){
                el.parents(opts.bd).siblings(opts.hd).find('a').text(el.text());
                el.addClass(opts.eventName).siblings().removeClass(opts.eventName);
            }
            
            var elp = el.parents('.'+s_class);
            if(elp.data('type')!='check'){
                elp.removeClass('crt');
            }
        })
        $('body',window.top.document).on(opts.eventName,function(e){
            var el=$(e.target);
            if(s_class!=''){
                if(!el.closest('.'+s_class).length){
                    _this.removeClass('crt');
                }
            }
        })
    },
    $.fn.selectParent.defaults={
        hd:'.f-select-hd',
        bd:'.f-select-bd',
        eventName:'click',
        currentClass:'crt',
        setText:true,//是否需要把选中的值赋给 hd
        currentHd:false,//是否需要给 hd 添加展开后的样式
        callbackSelectItem:function(){
            return true;
        }
    }
})(jQuery);

$('.f-select').select();