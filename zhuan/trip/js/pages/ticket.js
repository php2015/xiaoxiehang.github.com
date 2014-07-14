define(function(require,exports,module){
    var zepto = require('zepto');
    require('gmu');
    require('../plugins/menu');
    
    new iScroll("wrap",{bounce:false,checkDOMChanges:true,fadeScrollbar:true,hScrollbar:false});
    
    $('header.m-ticket-hd').on('click',function(){
        var _this = $(this);
        _this.siblings('.m-ticket-bd').toggle();
    })
    $('a.m-ticket-check').on('touchstart',function(){
        $(this).toggleClass('crt');
        return false;
    })
})