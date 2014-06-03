---
layout: post
title: javascript 清空数组的三种方式
category: javascript
---

>参考：[JavaScript中清空数组的三种方式](http://snandy.iteye.com/blog/893955)

##1.splice

    var arr = [1,2,3,4];
    arr.splice(0,arr.length);
    console.log(arr); //输出[]

&nbsp;

##2.length赋值为0
    
    //java 中length 属性是只读的，不能被赋值
    int[] arr = {1,2,3,4};
    arr.length = 0;//编译通不过，会报错
    
    //而js中是可以的
    var arr = [1,2,3,4];
    arr.length = 0;
    console.log(arr); //输出[]

&nbsp;

##3.赋值为[]

    var arr = [1,2,3,4];
    arr = [];
    console.log(arr); //输出[]
    
