(function($){
    $.fn.select=function(options){
        var opts=$.extend({},$.fn.select.defaults,options);
        var _this=$(this);
//            hd=_this.find(opts.hd),
//            bd=_this.find(opts.bd);
        
        $(document.body).on(opts.eventName,function(e){
//            $(opts.hd).removeClass('crt');
//            $(opts.bd).fadeOut(100);
            
            var el=$(e.target);
                hd = el.closest(opts.hd);
                bd = hd.siblings(opts.bd);
            if(el.closest('.'+_this.attr('class')).length){
                alert(el.closest('.'+_this.attr('class')).index());
                bd.fadeToggle(100);
                //是否需要给 hd 添加展开后的样式
                if(opts.currentHd){
                    hd.toggleClass(opts.currentClass);
                }
                if(el.closest('li').length){
                    
                    if(el.closest(opts.bd).parent().data('type')){
                        var checkbox = el.find('input[type="checkbox"]');
                        if(checkbox.attr('checked')){
                            checkbox.attr('checked',false);
                        }else{
                            checkbox.attr('checked',true);
                        }
                        el.closest('li').toggleClass(opts.currentClass);
                        return false;
                    }else{
                        if(opts.setText){
                            //console.log(el.text())
                            el.closest(opts.bd).siblings(opts.hd).find('a').text(el.text());
                            el.closest('li').addClass(opts.currentClass).siblings().removeClass(opts.currentClass);
                        }
                        
                        if(opts.currentHd){
                            $(opts.hd).removeClass('crt');
                        }
                        el.closest(opts.bd).fadeOut(100);
                    }
                }
            }else{
                if(opts.currentHd){
                    $(opts.hd).removeClass('crt');
                }
                $(opts.bd).fadeOut(100);
                //$(document.body).off(opts.eventName);
            }
            //return false;
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

$('.f-select').select();