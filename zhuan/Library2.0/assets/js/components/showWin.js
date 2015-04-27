define(function(require,exports,module){
    var zepto = require('zepto');
    
    function showWin(){
        this.opts = {
            "id" : "",
            "hd" : "",
            "bd" : "",
            "ft" : "",
            "maskClose" : true
        };
    }
    
    showWin.prototype = {
        show : function(opts){
            if($('.m-showtip').length){
                $('.m-showtip').remove();
            }
            var opts = $.extend(this.opts,opts);
            var html = [];
            
            if(opts.id == ''){
                console.log('输入ID');
                return false;
            }
            
            var h = $(window).height() - 45;
            html.push('<div id="'+opts.id+'" class="win" style="height:'+ h +'px;">');
            if(opts.type == 'img'){
                html.push(opts.bd);
            }else{
                html.push('<div class="win-box">');
                if(opts.hd){
                    html.push('<div class="win-hd">'+opts.hd+'</div>');
                }
                html.push('<div class="win-bd">'+opts.bd+'</div>');
                if(opts.ft){
                    html.push('<div class="win-ft">'+opts.ft+'</div>');
                }
                html.push('</div>');
            }
            html.push('<div class="win-mask"></div>');
            html.push('</div>');
            
            $(document.body).append(html.join(''));
            
            $('.win-box').css({marginTop:-($('.win-box').height()/2)*10});
            
            var _this = this;
            if(opts.maskClose){
                $('.win-mask').on('click',function(){
                    _this.hide();
                })
            }
            if(opts.type == 'img'){
                $('#'+opts.id).on('click',function(){
                    _this.hide();
                })
            }
        },
        hide : function(opts){
            var opts = $.extend(this.opts,opts);
            $('#'+opts.id).remove();
        }
    }
    
    exports.showWin = showWin;
})