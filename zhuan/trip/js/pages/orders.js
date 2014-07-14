define(function(require,exports,module){
    var zepto = require('zepto');
    require('gmu');
    
    new iScroll("wrap",{bounce:false,checkDOMChanges:true,fadeScrollbar:true,hScrollbar:false});
    $(document.body).on('click',function(e){
        var el = $(e.target);
        
        if(el.hasClass('num-minus')){
            var inp = el.siblings('input'),
                num = inp.val();
            num--;
            if(num >= 0){
                inp.val(num);
            }
        }else{
            var inp = el.siblings('input'),
                num = inp.val();
            num++;
            inp.val(num);
        }
    })
})