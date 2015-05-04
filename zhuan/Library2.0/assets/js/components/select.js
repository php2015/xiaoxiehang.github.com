define(function(require, exports, module){
    var zepto = require('zepto'),
        elementCreate = require('../components/elementCreate');
    
    require.async(['../components/mask'],function(mask){
        var elMask = mask.mask;
        elMask.show();
    });
    
    var eleWIN = elementCreate.create('ul', {
        class : 'm-select'
    })
    
    var select = {
        show : function(type, data){
            var html = '';
            if(type == 'json'){
                for(var i = 0; i < data.length; i++){
                    html += '<li><a href="javascript:;">' + data[i] + '</a></li>';
                }
                html += '<li class="m-select-cancel"><a href="javascript:;">取消</a></li>'
            }else if(type == 'html'){
                
            }
            
            eleWIN.innerHTML = html;
            document.body.appendChild(eleWIN);
        }
    }
    
    exports.select = select;
})