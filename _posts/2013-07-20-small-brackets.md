---
layout: post
title: javascript 中 '()' 的多义性
category: javascript 
---

参考 [Javascript小括号“()”的多义性](http://snandy.iteye.com/blog/900566)

##1. 定义函数时的参数列表

    function fun(arg1,arg2,...){
        //...
    }
    var function fun(arg1,arg2,...){
        //...
    }

##2.函数调用或对象实例化

    fun();
    obj.fun();
    new fun();

##3.判断或循环语句中的表达式

    if(i<5){
        //...
    }
    
    while(i<5){
        i++;
    }
    
    do{
        i++;
    }
    while(i<5);
    
    //与 if 、 while 、 do while 一起使用会将其中的表达式隐式的转为布尔值。
    
    for(i in obj){
        //...
    }
    
    for(i=0;i<10:i++){
        //...
    }
    
##4.强制表达式运算

    function strToJson(str){
    // eval 中字符串两旁加了强制运算符()
    var json = eval('(' + str + ')');
    return json;

##5.匿名函数自执行

    (function(){
        alert(1);
    })();
    
    (function(){
        alert(1);
    }());
