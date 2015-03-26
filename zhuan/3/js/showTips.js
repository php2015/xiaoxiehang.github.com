define(function(require,exports,module){
    var zepto = require('zepto');
    
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
            //$('.' + opts.objClass).animate({opacity:1});
            if(opts.autoClose){
                setTimeout(function(){
                    $('.' + opts.objClass).animate({opacity:0},500,function(){
                        $(this).remove();
                    });
                },opts.showTime);
            }
        },
        hide : function(){
            $('.m-showtip').remove();
        }
    }
    
    exports.showTips = showTips;
})