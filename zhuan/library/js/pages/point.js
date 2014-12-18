define(function(require,exports,modules){
    var zepto = require('zepto');
    require('../plugins/tabs')($);
    $('.m-tab').tabs({
        callback:function(obj){
            console.log(obj.text());
            return true;
        }
    });
})