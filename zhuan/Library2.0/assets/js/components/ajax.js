/*
 *  ajax get
*/
define(function(require, exports, module){
    exports.get = function(url, succCall){
        if(url + '' === 'undefined'){
            console.log('请求地址缺失');
            return;
        }
        
        var xhr = null;//声明一个异步请求对象
        
        if(window.ActiveXObject){
            //ie6 使用 ActiveX 对象
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }else if(window.XMLHttpRequest){
            //XMLHttpRequest 对象用于后台与服务器之间交换数据
            xhr = new XMLHttpRequest();
        }
        
        //当XMLHttpRequest 对象状态发生改变时会触发 onreadystatechange 函数
        xhr.onreadystatechange = function(){
            console.log(xhr.readyState);
            //readyState == 0  请求未初始化；还没有调用open()
            //readyState == 1  请求已经建立，还未发送；还没有调用send()
            //readyState == 2  正在处理中；通常选择可以从响应中获取内容头
            //readyState == 3  请求在处理中； 通常响应已经有部分数据可用了，但是服务器还未完成响应的生成
            //readyState == 4  可以获取并使用服务器的响应
            if(xhr.readyState === 4 && xhr.status === 200 && typeof succCall === 'function'){
                console.log(xhr.responseText);
                succCall.call(xhr, xhr.responseText);
            }
        }
        xhr.open("GET", url, true);//xhr.open(request-Type, url ,asynch)
        xhr.send();
    }
})