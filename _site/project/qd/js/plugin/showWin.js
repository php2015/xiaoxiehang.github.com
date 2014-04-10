function Window(){
    var win=$(window);
    this.Width=win.width();
    this.Height=win.height();
}
Window.prototype={
    itemLeft:function(W){
        return (this.Width-W)/2;
    },
    itemTop:function(H){
        return (this.Height-H)/2;
    }
};
(function(){
    $.extend({
        showWin:function(opts){
            var defaults={
                obj:'',
                title:'弹窗标题',
                content:'弹窗内容',
                mask:1,
                drag:0,
                button:[{
                    id_name:'',
                    class_name:'submit-btn',
                    title:'确定',
                    callback:function(){return true;}
                },{
                    id_name:'',
                    class_name:'submit-btn',
                    title:'取消',
                    callback:function(){return true;}
                }],
                Width:'',
                Height:''
            };

            if(opts.button){
                if(!$.isArray(opts.button)){
                    var obj=opts.button;
                    opts.button=[obj]
                }else if(opts.button.length<2){
                    opts.button.push("");
                }
                $.each(opts.button,function(i){
                    opts.button[i]=$.extend({},defaults.button[i],opts.button[i]);
                })
            }

            var opts=$.extend({},defaults,opts);

            if(!opts.obj) return false;

            var h = [
                '<div id="'+opts.obj+'" class="win" style="display:none;">',
                '<div class="win-hd"><h3>'+opts.title+'</h3><a href="#" class="win-close" title="关闭"><i class="icon icon-win-close"></i></a></div>',
                '<div class="win-bd" style="width:'+opts.Width+'px;height:'+opts.Height+'px;">'+opts.content+'</div>',
                '</div>'
            ];
            if(opts.mask){
                h.push('<div class="win-mask"></div>');//添加遮罩
            }
            $(document.body).append(h.join(''));

            var o=$('#'+opts.obj);

            var win={
                //显示弹窗
                show:function(){
                    $('.win-mask').css('height',$(document).height());
                    o.show();
                },
                //关闭弹窗
                hide:function(e){
                $('.win-mask').remove();
                o.remove();
                },
                //设置弹窗左边距
                left:function(){
                    var w_obj=o.outerWidth();
                    var w_window=$(window).width();
                    o.css('left',(w_window-w_obj)/2);
                },
                //设置弹窗上边距
                top:function(){
                    var h_obj=o.find('.win-hd').outerHeight()+o.find('.win-bd').outerHeight();//获取弹框高度
                    //var h_obj=o.outerHeight();
                    var h_window=$(window).height();
                    o.css('top',(h_window-h_obj)/2);
                }
            }
            
            win.show();
            win.left();
            win.top();

            if(opts.button){
                $('.win-bd').append('<div class="win-btn"></div>');
                $.each(opts.button,function(i){
                    $('.win-btn').append('<a href="javascript:;" id="'+this.id_name+'" class="'+this.class_name+'" title="'+this.title+'"><span>'+this.title+'</span></a>&nbsp;');
                    var callback=this.callback;
                    $('.win-btn').find('a').eq(i).click(function(){
                        (callback())?win.hide():'';
                    })
                })
            }
            
            $(window).bind('resize',function(){
                win.left();
                win.top();
            })
            
            $('.win-close').bind('click',function(){
                win.hide();
            })

            if(opts.drag){
                $.winDrag('.win','.win-hd');	
            }
        },
        showTips:function(opts){
            var defaults={
                type:'error',
                message:'',
                autoClose:3000
            }
            var opts=$.extend({},defaults,opts);
            switch(opts.type){
                case "error":
                    break;
                case "proper":
                    break;
                case "loading":
                    break;
                case "warning":
                    break;
            }
            var h=[
                '<div class="showTips">',
                '<i class="tips-type"></i>',
                '<span class="tips-text">'+opts.message+'</span>',
                '</div>'
            ];
            $(document.body).append(h.join(''));
            var win=new Window();

            var self = $('.showTips');

            self.css({
                left : win.itemLeft(self.outerWidth()),
                top : win.itemTop(self.outerHeight())
            }).fadeIn(500);

            setTimeout(function(){
                self.fadeOut(500,function(){self.remove();})
            },opts.autoClose);
        }
    });

    /*=S 拖拽 */
    $.winDrag = function(obj,obj_hd){
        var x=y=0,m=false;
        $(obj_hd).bind('mousedown',function(e){
            e=e||event;
            m=true;
            var $self=$(this);
            var win=$self.parent();
            x=e.pageX-win.offset().left;
            y=e.pageY-win.offset().top;
            win.fadeTo(300,.6);
            return false;
        }).css('cursor','move');
        $(document).mousemove(function(e){
            if(m){
                var left=e.pageX-x,top=e.pageY-y-($(document).scrollTop());
                $(obj).css({left:left,top:top});
            }
        }).mouseup(function(){
            if(m){
                m=false;
            $(obj).fadeTo(300,1);
            }
        })
    };
    /*=E 拖拽 */
})(jQuery);
