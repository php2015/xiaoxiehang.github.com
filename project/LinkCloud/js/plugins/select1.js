(function($){
    $.fn.select=function(options){
        var opts=$.extend({},$.fn.select.defaults,options);
        var _this=$(this);
//            hd=_this.find(opts.hd),
//            bd=_this.find(opts.bd);
            //console.log(_this.html());
//        $('body').on(opts.eventName,hd,function(){
//            var el = $(this);
//            var all_hd = $(document.body).find(opts.hd),
//                all_bd = $(document.body).find(opts.bd);
//            if(all_hd.length>=2){
//                $(document.body).find(opts.bd).hide();
//                if(opts.currentHd){
//                    all_hd.removeClass('crt');
//                }
//            }
//            
//            bd.fadeToggle(100);
//            //是否需要给 hd 添加展开后的样式
//            if(opts.currentHd){
//                el.toggleClass('crt');
//            }
//            return false;
//        })
//        hd.on(opts.eventName,function(){
//            
//            
//        })
//        bd.find('li').on(opts.eventName,function(){
//            var el = $(this);
//            //是否设置 hd 文案
//            if(opts.setText){
//                hd.find('a').text(el.text());
//            }
//            //单选/复选
//            if(opts.type=='radio'){
//                el.addClass(opts.currentClass).siblings().removeClass(opts.currentClass);
//                bd.fadeToggle(100);
//            }else if(opts.type=='check'){
//                el.toggleClass(opts.currentClass);
//                var checkbox = el.find('input[type="checkbox"]');
//                if(checkbox.attr('checked')){
//                    checkbox.attr('checked',false);
//                }else{
//                    checkbox.attr('checked',true);
//                }
//                return false;
//            }
//            
//            if(opts.currentHd){
//                hd.toggleClass('crt');
//            }
//        })
        
        
        
//        $(document.body).on(opts.eventName,function(e){
//            var el = $(e.target);
//            if(!el.closest('.'+_this.attr('class')).length){
//                if(opts.currentHd){
//                    hd.removeClass('crt');
//                }
//                bd.fadeOut(100);
//            }
//        })
        
        
        $(document.body).on(opts.eventName,function(e){
//            $(opts.hd).removeClass('crt');
//            $(opts.bd).fadeOut(100);
            
            var el=$(e.target);
                hd = el.closest(opts.hd);
                bd = hd.siblings(opts.bd);
            if(el.closest('.'+_this.attr('class')).length){
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
                            console.log(el.text())
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
//                //判断是否点击列表项
//                if(el.closest('li').length){
//                    
//                    //是否设置 hd 文案
//                    if(opts.setText){
//                        hd.find('a').text(el.text());
//                    }
//                    //单选/复选
//                    if(opts.type=='radio'){
//                        el.closest('li').addClass(opts.currentClass).siblings().removeClass(opts.currentClass);
//                        bd.fadeOut(100);
//                    }else if(opts.type=='check'){
//                        el.closest('li').toggleClass(opts.currentClass);
//                        var checkbox = el.find('input[type="checkbox"]');
//                        if(checkbox.attr('checked')){
//                            checkbox.attr('checked',false);
//                        }else{
//                            checkbox.attr('checked',true);
//                        }
//                        return false;
//                    }
//                    
//                    if(opts.callbackSelectItem()){
//                        opts.callbackSelectItem();
//                    }
//                }else{
//                    el.closest(opts.hd).siblings(opts.bd).fadeIn(100);
//                    if(opts.currentHd){
//                        hd.removeClass('crt');
//                    }
//                }
            return false;
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