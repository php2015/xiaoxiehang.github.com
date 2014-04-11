---
layout: post
title: undefined 与 null 的区别
category: javascript
---

>转自：[undefined与null的区别](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)
null是一个表示"无"的对象，转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN。

&nbsp;

目前,null和undefined基本是同义的，只有一些细微的差别。**null表示没有对象，即该处不应该有值。**典型用法：

1. 作为函数的参数,表示该函数的参数不是对象。
2. 作为对象原型链的终点。

&nbsp;

    Object.getprototypeOf(Object.prototype)
    //null

&nbsp;

**undefined表示缺少值，就是此处应该有一个值，但是还没有定义。**典型用法：

1. 变量被声明了，但没有赋值时，就等于 undefined。
2. 调用函数时，应该提供的参数没有提供，该参数等于 undefined。
3. 对象没有赋值的属性，该属性的值为 undefined。
4. 函数没有返回值时，返回 undefined。

&nbsp;

    var i;
    console.log(i); // undefined;

    function f(x){ console.log(x); }
    f(); // undefined

    var o = new Object();
    o.p; // undefined

    function x = f();
    x; // undefined
