/*
 *  遮罩
*/
define(function(require, exports, module){
    var elementCreate = require('./elementCreate');

    var mask = (function(){
        //创建dom元素
        var element = elementCreate.create('div',{
            styles : {
                display: 'none',
                zIndex: 1,
                position: 'absolute',
                width: '100%',
                top: 0,
                left: 0,
                bottom: 0,
                opacity: .35,
                backgroundColor: '#000'
            }
        })

        document.body.appendChild(element);//将创建好的dom元素添加到body中

        return {
            display: false,
            show: function(){
                element.style.display = 'block';
                this.display = true;
                return this;
            },
            hide: function(){
                element.style.display = 'none';
                this.display = false;
                return this;
            }
        }
    })();

    exports.mask = mask;
})
