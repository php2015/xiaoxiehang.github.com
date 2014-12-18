define(function(require,exprots,module){
    var zepto = require('zepto');
    require('../plugins/tabs')($);
    $('.m-tab').tabs();
})