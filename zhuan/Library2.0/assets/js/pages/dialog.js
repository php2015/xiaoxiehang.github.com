define(function(require, exports, module){
    var flbox = require('../components/flbox');
    
    exports.bind = function(element){
        element.onclick = function(){
            var href = this.href;
            flbox.open(href);
            return false;
        }
    }
})