/*
 *  创建元素
*/
define(function(require, exports, module){
    exports.create = function(tagName, attr){
        var element = null;
        if(typeof tagName === 'string'){
            element = document.createElement(tagName);
            if(typeof attr === 'object'){
                var keyAttr, keyStyle;
                for(keyAttr in attr){
                    if(keyAttr === 'styles' && typeof attr[keyAttr] === 'object'){
                        for(keyStyle in attr[keyAttr]){
                            element.style[keyStyle] = attr[keyAttr][keyStyle];
                            
                            if(keyStyle === 'opacity' && window.innerWidth + "" == "undefined"){
                                element.style[filter] = "alpha(opacity=" + (attr[keyAttr][keyStyle] * 100) + ")";
                            }
                        }
                    }else{
                        if(keyAttr === 'class'){
                            keyAttr = 'className';
                        }
                        element[keyAttr] = attr['class'];
                    }
                }
            }
        }
        return element;//返回创建好的dom元素
    }
})