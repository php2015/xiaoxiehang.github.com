---
layout: post
title: 弹框
category: jquery
---

[demo](http://f2es.net/demo/show_window.html)

    /* 调用弹窗 */
    $('.showWin').click(function(){
        $.showWin({
            obj:'win',
            title:'标题标题标题标题标题标题',
            content:'内容内容内容内容内容',
            drag:1,
            button:[
            {
                class_name:'submit-btn',
                callback:function(){
                    alert('111');
                }
            },{
                class_name:'submit-btn'
            }
            ],
            width:'800px'
        });
    })


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
                        class_name:'',
                        title:'确定',
                        callback:function(){return true;}
                    },{
                        id_name:'',
                        class_name:'',
                        title:'取消',
                        callback:function(){return true;}
                    }],
                    width:'',
                    height:''
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
                    '<div id="'+opts.obj+'" class="win" style="display:none;width:'+opts.width+';">',
                    '<div class="win-hd"><h3>'+opts.title+'</h3><a href="#" class="win-close" title="关闭">X</a></div>',
                    '<div class="win-bd">'+opts.content+'</div>',
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
                        o.slideDown(300);
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
                        $('.win-btn').append('<a href="javascript:;" id="'+this.id_name+'" class="'+this.class_name+'" title="'+this.title+'"><span>'+this.title+'</span></a>');
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
            }
        });
        $.winDrag = function(obj,obj_hd){
            /*=S 拖拽 */
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
            /*=E 拖拽 */
        }
    })(jQuery);
