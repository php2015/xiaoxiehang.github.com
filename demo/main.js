/*
参考#266
seajs.use:用来在页面中加载一个或多个模块

define: 是一个全局函数，用来定义模块
	define(id?,deps?,factory)
	define 也可以接受两个以上参数。id 表示模块标识，deps表示模块依赖（带 id 和 deps 参数的 define 用法不属于 CMD 规范，而属于 Modules/Transport 规范）
	define('hello',['jquery'],function(require,exports,module){
		//模块代码
	})

require:用来获取指定模块的接口（只接受字符串直接量作为参数）
require.async:用来在模块内部异步加载一个或多个模块

exports:用来在模块内部对外提供接口
module.exports:与exports类似，用来在模块内部对外提供接口
*/

define(function(require,exports,module){
    //获取jquery的接口
    var jquery=require('jquery');
    require('../js/showWin.js')($);

    $(function(){
        $.showWin({obj:'win',title:'标题标题标题标题标题标题',content:'内容内容内容内容内容',drag:1,
        button:[{class_name:'submit-btn',callback:function(){
                alert('回调函数');
            }},{class_name:'submit-btn'}],width:'800px'});
    })

    //对外提供xx方法
    exports.xx=function(color){
        $('body').css('backgroundColor',color);
    }
});