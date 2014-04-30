---
layout: post
title: backbone.js--Collection学习笔记
category: javascript
---

>转自：<http://lison.sinaapp.com/?p=213>
##Collection:集合
Backbone 的 Collection 就是一种 Model 的集合。

在 Collection 中只能存放单一类型的 Model , 但是同一种类型的 Model 可以在不同的 Collection 中出现。

&nbsp;

###Collection 的创建
    var Man = Backbone.Model.extend({
        defaults : {
            name : 'xiaoxiehang',
            age : 26
        },
        initialize : function(){
            console.log(this.name);
        }
    })
    var Mans = Backbone.Collection.extend({
        model : Man
    })

    var man1 = new Man({ name:'aaaaaa',age:25 });
    var man2 = new Man({ name:'bbbbbb',age:26 });
    var man3 = new Man({ name:'cccccc',age:27 });

    var mans = new Mans([man1,man2,man3]);
    console.log(mans.models);