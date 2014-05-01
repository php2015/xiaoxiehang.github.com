---
layout: post
title: Backbone.js--View学习笔记
category: javascript
---


>转自：<http://lison.sinaapp.com/?p=229>
##View:视图
Backbone.js中的 View 用来呈现web应用程序的中的数据模型，并完成对时间的监听和对事件的响应。

示例:

    SearchView = Backbone.View.extend({
        ininialize:function(){
            alert('hello world!');
        }
    });
    //initialize() 会在 View 被初始化时立即执行
    //换句话说，initialize() 可以被看成是构造函数
    var search_view = new SearchView;

&nbsp;

###el 属性
el 属性用于存储浏览器原生态的DOM元素。每个 Backbone 的 View 对象都具有 el 属性，如果没有声明，则Backbone.js会自动生成一个空的 div 赋给 el 属性。

这里将 View 的 el 属性设置为 #search_container 值，就相当于将 Backbone.View 设置为了这个 DOM 元素的操过者。

    <div id="search_container"></div>
    <script>
        SearchView=Backbone.View.extend({
            initialize:function({
                alert('hello world!');
            })
        });
        var search_view = new SearchView({ el : $('#search_view') });
    </script>

说明：所有在 View 内的事件出发都必须在 View 的 el 所指向的元素上。

&nbsp;

###加载模板
Backbone.js 是基于 [Underscore.js](http://documentcloud.github.com/underscore/),而Underscore里面包含了微型模板组件。

下面我们编写 render(),当View被初始化的时候会自动调用 render()。然后在 render() 中将我们模板中的内容加载到 View 的 el 元素中去。

    <div id="search_container"></div>
    <script>
        SearchView=Backbone.View.extend({
            initialize:function(){
                this.render();
            },
            render:function(){
                //编译使用模版
                var template = _.template( $('#search_template').html() , {} );
                //加载已编译的模板到 el 指向的 DOM 元素中去(#search_container)
                this.el.html(template);
            }
        });
        var search_view = new SearchView({ el : $('#search_container') });
    </script>

    <script type="text/template" id="search_template">
        <label>Search</label>
        <input type="text" id="search_input">
        <input type="button" id="sarch_button" value="search">
    </script>
说明：把模板都存储在一个文件里面，并将文件放在CDN上。使得这些模版能够被用户缓存，减少不必要的网络流量。

&nbsp;

###监听事件
如果我们需要在View中添加事件绑定，就需要在Backbone.View中添加events属性。另外，需要强调事件绑定只适用于 View 的 el 元素的子元素。

    <div id="search_container"></div>
    <script>
        SearchView=Backbone.View.extend({
            initialize:function(){
                this.render();
            },
            render:function(){
                //设定传输给变量的模板
                var variables = { search_label : 'my saerch'};
                //用underscore中_.template()渲染模板以及变量
                var template = _.template({ $('#search_template').html() , variables });
                this.el.html(template);
            },
            events:{
                //定义input类型为button的单击事件，触发函数doSearch
                'click input[type=button]' : doSearch;
            }
            doSearch:function(event){
                //按钮被点击后，可以使用event.currentTarget获得被点击的元素
                alert( 'Search for' + $('#search_input').val() );
            }
        });
        var search_view = new SearchView({ el : $('search_container') });
    </script>

    <script type="text/template" id="search_template">
    	//用<%=  %>调用传输给变量的模板
        <label><%= search_label %></label>
        <input type="text" id="search_input">
        <input type="button" id="sarch_button" value="search">
    </script>