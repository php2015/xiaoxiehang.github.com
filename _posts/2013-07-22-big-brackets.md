---
layout: post
title: javascript 中 '{}' 的多义性
category: javascript 
---

>参考 [Javascript中大括号“{}”的多义性](http://snandy.iteye.com/blog/667861)

##1.复合语句

    if(i<5){
        //...
    }else{
        //...
    }
    
    for(i=0;i<5;i++){
        //...
    }

&nbsp;

##2.对象声明

    var obj = {
        name : 'xiaoxiehang',
        age : 26
    }

&nbsp;

##3.函数定义

    function f1(){
        //...
    }
    
    var f2(){
        //...
    }

&nbsp;

##4.异常处理

    try{
        //...
    }catch(){
        //...
    }finally{
        //...
    }
