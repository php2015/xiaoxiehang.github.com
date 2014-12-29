define(function(require,exports,module){
    var zepto = require('zepto');
    
    function charLen(){
        this.opts = {
            "textBox" : $('.textarea'),
            "textNum" : $('.m-addbook-txtcount').find('em'),
            "textSize" : 120
        }
    }
    charLen.prototype = {
        info : function(opts){
            var opts = $.extend(this.opts,opts);
            
            if(opts.textBox){
                opts.textBox.on('keyup',function(){
                    var textsize = getStrLength($(this).text());
                    var size = opts.textSize - textsize;
                    opts.textNum.text(size);
                }).on('keydown',function(e){
                    console.log(e.keyCode);
                    var textsize = getStrLength($(this).text());
                    var size = opts.textSize - textsize;
                    if(size <= 0){
                        if(e.keyCode != 8 && e.keycode != 13){
                            return false;
                        }
                    }
                })
            }
        }
    }
    
    function getStrLength(str) { 
        var len = str.length; 
        var reLen = 0; 
        for (var i = 0; i < len; i++) {
            if (str.charCodeAt(i) < 27 || str.charCodeAt(i) > 126) { 
                // 全角    
                reLen += 2; 
            } else { 
                reLen++; 
            } 
        } 
        return reLen;    
    }
    
    exports.charLen = charLen;
})