---
layout: post
title: javascript 中 '[]' 的多义性
category: javascript 
---

>参考 [Javascript中中括号“[]”的多义性](http://snandy.iteye.com/blog/890371)

##1.声明数组

    var arr1 = [];
    var arr2 = [1,3,...];

&nbsp;

##2.取数组成员

    arr1[0];

&nbsp;

##3.定义和获取对象成员

    var obj = {name:"xiaoJJ",age:25};
    obj['2a'] = 'xiaoxiehang'; //为 obj 添加一个属性 2a
    
    console.log(obj['name']);//获取 obj 为 name 的属性，name 是合法的标识符，也可以通过 obj.name 来获取
    console.log(obj.name);
    console.log(obj['2a']);//2a 不是合法的标识符，不能通过 obj.2a 来获取
