define(function(require,exports,module){
    var zepto = require('zepto');
    require('gmu');
    require('../plugins/menu')
    
    $('.m-dynamic-slide ul').slider();
    new iScroll("wrap",{bounce:false});
})