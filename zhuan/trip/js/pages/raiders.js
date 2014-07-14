define(function(require,exports,module){
    var zepto = require('zepto');
    require('gmu');
    require('../plugins/menu')
    
    $('.m-raider-slider ul').slider({ imgZoom: true });
    new iScroll("wrap",{bounce:false});
})