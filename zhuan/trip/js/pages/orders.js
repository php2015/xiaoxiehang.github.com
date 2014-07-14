define(function(require,exports,module){
    var zepto = require('zepto');
    require('gmu');
    require('../plugins/menu')
    
    new iScroll("wrap",{bounce:false,checkDOMChanges:true,fadeScrollbar:true,hScrollbar:false});
    $(document.body).on('click',function(e){
        var el = $(e.target);
        
        if(el.hasClass('num-minus')){
            var inp = el.siblings('.m-king-txt'),
                num = inp.val();
            num--;
            if(num >= 0){
                inp.val(num);
            }
            price(el.parents('.m-king'));
        }
        if(el.hasClass('num-add')){
            var inp = el.siblings('.m-king-txt'),
                num = inp.val();
            num++;
            inp.val(num);
            price(el.parents('.m-king'));
        }
    }).on('change','.m-king-txt',function(){
        price($(this).parents('.m-king'));
    })
    
    function price(obj){
        var a = b = 0;
        obj.find('li').each(function(){
            a += parseInt($(this).find('.m-king-uprice em').text()) * $(this).find('.m-king-txt').val();
        })
        obj.find('.m-king-price em').text(a);
        
        $('.m-king-price em').each(function(){
            b += parseInt($(this).text());
        })
        $('.m-orders-price em').text(b);
    }
})