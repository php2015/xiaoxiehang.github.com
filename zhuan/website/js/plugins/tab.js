define(function(require,exports,module){
    var mode = require('../pages/mode');
    $('div.m-tab-hd').find('li').click(function(){
        
        var _this = $(this);
        _this.addClass('crt').siblings().removeClass('crt');
        _this.parents('.m-tab-hd').siblings('.m-tab-bd').eq(_this.index()).show().siblings('.m-tab-bd').hide();
        
        mode.show();
        
    })
    
})