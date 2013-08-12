---
layout: post
title: CSS 负边距自适应布局
category: css
---
**单列定宽单列自适应布局：**

    <!DOCTYPE HTML>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>单列定宽单列自适应布局</title>
        <style type="text/css">
            * {margin:0;padding:0;}
            .cont, .side {float:left;}
            .cont {width:100%;}
            .main {margin-right:200px;background:#DDDDDD;}
            .side {margin-left:-200px;width:200px;background:#F7F7F7;}
        </style>
    </head>
    <body>
        <div class="cont">
            <div class="main">main</div>
        </div>
        <div class="side">side</div>
    </body>
    </html>
    
**左右定宽中间自适应布局：**

    <!DOCTYPE HTML>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>左右定宽中间自适应布局</title>
        <style type="text/css">
            * {margin:0;padding:0;}
            .cont, .side, .sub-main {float:left;}
            .cont {width:100%;}
            .main {margin-right:200px;margin-left:300px;background:#DDDDDD;}
            .side {margin-left:-200px;width:200px;background:#F7F7F7;}
            .sub-main {margin-left:-100%;width:300px;background:#F7F7F7;}
        </style>
    </head>
    <body>
        <div class="cont">
            <div class="main">main</div>
        </div>
        <div class="side">side</div>
        <div class="sub-main">sub-main</div>
    </body>
    </html>
    
**两列等高自适应布局：**

    <!DOCTYPE HTML>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>两列等高自适应布局</title>
        <style type="text/css">
            * {margin:0;padding:0;}
            .layout {overflow:hidden;}
            .cont, .side {float:left;padding-bottom:9999px;margin-bottom:-9999px;}
            .cont {width:100%;}
            .main {margin-right:200px;background:#DDDDDD;}
            .side {margin-left:-200px;width:200px;background:#F7F7F7;}
        </style>
    </head>
    <body>
        <div class="layout">
            <div class="cont">
                <div class="main">
                    main
                    <br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>
            <div class="side">side</div>
        </div>
    </body>
    </html>


转自 [红茶----CSS 负边距自适应布局](http://www.cssbox.net/css-negative-margin.html)