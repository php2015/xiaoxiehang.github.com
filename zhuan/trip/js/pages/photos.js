define(function(require,exprots,module){
    var zepto = require('zepto');
    require('gmu');
    
    $('#albums').iScroll({bounce:false,useTransition:true,fadeScrollbar:true,hScrollbar:false,onScrollMove:function(){
        //console.log(this.maxScrollY)
        if((this.y-this.maxScrollY)>10){
            var albums = $('.m-albums');
            albums.append('<p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>');
            $('#albums').iScroll('refresh');
            return false;
        }
    }});
    
    $('#photos').iScroll({bounce:false,fadeScrollbar:true,hScrollbar:false,onScrollMove:function(){
        
    }});
})