function showTips(){
    this.opts = {
        "objClass" : 'm-showtip',
        "txt" : '',
        "showTime" : 1000,
        "autoClose" : true
    };
}
showTips.prototype = {
    show : function(opts){
        var opts = $.extend(this.opts,opts)
        var h = '<div class="'+ opts.objClass +'">'+ opts.txt +'</div>';
        $(document.body).append(h);
        if(opts.autoClose){
            this.hide();
        }
    },
    hide : function(opts){
        var opts = $.extend(this.opts,opts)

        setTimeout(function(){
            $('.' + opts.objClass).animate({
                opacity : 0
            },600,function(){
                $('.'+opts.objClass).remove();
            })
        },opts.showTime);
    }
}
