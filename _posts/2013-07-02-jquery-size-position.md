---
layout: post
title: 图解JQUERY尺寸及位置定义
category: jquery
---

![JQUERY对位置与尺寸的定义](http://f2es.net/img/jquery-size-position.jpg)

最近在学习JQUERY的一些应用，接触到了JQUERY对于元素尺寸及位置定义，还有就是配合浏览器尺 寸及状态的计算所做出的一些动画特效。其实像这类JQUERY应用无外乎涉及这些属性的调用：

    innerWidth()  outerWidth()  outerWidth(true)  outerWidth(false)
    innerHeight()  outerHeight()  outerHeight(true)  outerHeight(false)
    position()  offset()  scrollTop()  scrollLeft()

单独看每条解释，基本上都能给人很清晰明了的感觉。但是在应用的时候总会引起混淆，特别是position()与offset()。起初也被这些参数绕的脑袋昏昏涨涨的。

感觉在做动画的时候，这些参数特别有用，但一时又搞不太清楚各个参数的细微差别。于是今天就花了半天的时间，对着API仔细分析，自己再动手验证一下自己的想法，拿着一支笔在纸上画来画去，确认无误后，做出了这么两幅图稿。以供以后参考之用。


###JQUERY对尺寸的定义


对于尺寸的定义其实很好理解，只是使用outerHeight()、outerWidth()的参数时容易搞混淆，特别是很容易把默认值false记成true。

下面以高度为例写一下各个尺寸的计算方法，宽度计算方法与之一致。

    innerHeight() = [padding-top] + [height] + [padding-bottom]
    outerHeight() = outerHeight(false) = [border-top-width] + [padding-top] + [height] + [padding-bottom] + [border-bottom-width]
    outerHeight(true) = [margin-top] + [border-top-width] + [padding-top]+[height] + [padding-bottom] + [border-bottom-width] + [margin-bottom]

![图解jquery基于css的尺寸定义](http://f2es.net/img/jquery-size.jpg)


###JQUERY对位置的定义


这里用一种假想电脑屏幕可以向上延伸的思想来解释JQUERY对位置的定义。对于很多初学者很难理 解$(document).scrollTop()，相信用这张图来解释滚动高度，很多人一眼就能看明白这个高度究竟指的是哪一段长度。其实 srcollTop()并不仅限于浏览器的滚动条，任何自身设置了固定高度，并且overflow的值为hidden的元素，都可以使用此属性。

对于position()和offset()，唯一的区别就是offset()针对的是元素相对于浏览器的偏移，而position()针对的是元 素相对有定位的父级元素的偏移。说简单了就是相对设置了position为relative或absolute的父级，然而很多情况是并没有任何父级元素 设置了定位，此时position()和offset()就是相同的了，但我们在写代码的时候应该很清楚的知道该用哪一个，以避免后期维护时所带来的不便。

图例里只写了高度的解释，宽度与高度的解读方式一致，你可以自己去理解。

![JQUERY对位置的定义](http://f2es.net/img/jquery-position.jpg)


网页可见区域宽：document.body.clientWidth
网页可见区域高：document.body.clientHeight
网页可见区域宽：document.body.offsetWidth(包括边线的宽)
网页可见区域高：document.body.offsetHeight(包括边线的宽)
网页正文全文宽：document.body.scrollWidth
网页正文全文高：document.body.scrollHeight
网页被卷去的高：document.body.scrollTop(IE7无效)
网页被卷去的左：document.body.scrollLeft(IE7无效)

网页被卷去的高：document.documentElement.scrollTop(IE7有效)

网页被卷去的左：document.documentElement.scrollLeft(IE7有效)
网页正文部分上：window.screenTop
网页正文部分左：window.screenLeft
屏幕分辨率的高：window.screen.height
屏幕分辨率的宽：window.screen.width
屏幕可用工作区高度：window.screen.availHeight
屏幕可用工作区宽度：window.screen.availWidth

相对于窗口左上角的X：window.event.clientX

相对于窗口左上角的Y：window.event.clientY
相对于整个页面的X：window.event.X
相对于整个页面的Y：window.event.Y