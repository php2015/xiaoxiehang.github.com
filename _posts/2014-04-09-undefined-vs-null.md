---
layout: post
title: undefined 与 null 的区别
category: javascript
---

>转自：[undefined与null的区别](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)

null是一个表示"无"的对象，转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN。

&nbsp;

目前,null和undefined基本是同义的，只有一些细微的差别。**null表示没有对象，即该处不应该有值。**

《悟透javascript》中的解释是，有那么一个概念，但没有东西。无中似有，有中还无。虽然难以想象，但已经可以用代码来处理了。

注意：typeof(null) 返回object,但null并非object,具有null值的变量也并非object。

典型用法：

1. 作为函数的参数,表示该函数的参数不是对象。
2. 作为对象原型链的终点。

&nbsp;

    Object.getprototypeOf(Object.prototype)
    //null

&nbsp;

**undefined表示缺少值，就是此处应该有一个值，但是还没有定义。**。

《悟透javascript》中的解释是，代表一切未知的事物，啥都没有，无法想像，代码也就更无法去处理了。

注意：typeof(undefined)返回的也是undefined，可以将undefined赋值给任何变量或属性，但并不是以为清除了该变量，反而会因此多了一个属性。

典型用法：

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