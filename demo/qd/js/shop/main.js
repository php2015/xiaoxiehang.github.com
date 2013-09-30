$('div.menu').find('.menu-hd').toggle(function(){
    var _this=$(this);
    _this.next('.menu-bd').slideUp();
},function(){
    var _this=$(this);
    _this.next('.menu-bd').slideDown();
})
/*
$('div.tab-hd').find('li').click(function(){
    var _this=$(this);
    _this.addClass('selected').siblings().removeClass('selected');
    var i=_this.index();
    _this.parents('.tab-hd').siblings('.tab-bd').eq(i).show().siblings('.tab-bd').hide();
})
*/

//全部产品分类
$('div.categorys').hover(function () {
    var _this=$(this),ul=_this.find('ul');
    if(ul.is(':visible')){
        ul.data('visible',true);
        return false;
    }else{
        ul.slideDown(100);
    }
},function(){
    var _this=$(this),ul=_this.find('ul');
    if(!ul.data('visible')){
        ul.slideUp(100);
    }
})

//数量
$('input.num-txt').keyup(function(){
    var _this=$(this),v=_this.val();
    if(isNaN(v)){
        v=v.match(/\d+/);
        _this.val(v);
    }
})
//数量+1
$('a.num-add').click(function(){
    var txt=$(this).siblings('.num-txt');
    if(txt.val()==''){
        txt.val(0);
    }
    txt.val(parseInt(txt.val())+1);
})
//数量-1
$('a.num-minus').click(function(){
    var txt=$(this).siblings('.num-txt');
    if(txt.val()==''){
        txt.val(0);
    }
    if(txt.val()<=0){
        return false;
    }
    txt.val(txt.val()-1);
})

;(function($){
    //tab切换
    $.fn.tabs=function(options){
        var defaults={
            hd:'.tab-hd',
            bd:'.tab-bd',
            eventName:'click',
            currentName:'selected'
        }

        var opts=$.extend(defaults,options);

        var _this=$(this),
            hd=_this.find(opts.hd).find('li');

        hd.each(function(i){
            var self=$(this);
            self.bind(opts.eventName,function(){
                self.addClass(opts.currentName)
                    .siblings().removeClass(opts.currentName);
                if(opts.bd){
                    bd=_this.find(opts.bd);
                    bd.eq(i).removeClass('hide').siblings(opts.bd).addClass('hide');
                }
            })
        })
    };

    $.fn.Selected=function(options){
        var defaults={
            eventName:'click',
            currentName:'selected',
            callback:function(){return true;}
        }
        var opts=$.extend(defaults,options);
        var _this=$(this);
        _this.each(function(){
            var self=$(this);
            self.bind(opts.eventName,function(e){
                self.addClass(opts.currentName).siblings().removeClass(opts.currentName);
                e.preventDefault();
                if(opts.callback){
                    opts.callback(self);
                }
            })
        })
    }
})(jQuery);

$('.tab').tabs();
