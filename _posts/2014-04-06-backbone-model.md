---
layout: post
title: Backbone.js--Model 学习笔记
category: javascript
---

>转自：[BACKBONE.JS初学者教程（2）](http://lison.sinaapp.com/?p=213) 和 [backbone中的model实例](http://www.the5fire.com/3-backbone-model.html)
Model在任何JavaScript应用程序中都算得上是核心模块,包括需要频繁存取的数据以及大量需要围绕数据展开的会话、校验、计算属性一级访问控制。
##创建Backbone.js的Model

    Person = Backbone.Model.extend({
        initialize:function(){
            alert('Welcome to this world');
        }
    })
    var person = new Person();

当我们创建Person新的对象时，会立即调用initialize()函数**(initialize在Model、Collection、View中都是这样工作的)**。虽然，initialize()函数并不是必须要定义的函数，但在实际的开发过程中，会渐渐发现它的神奇之处。

&nbsp;

##设置属性
可以在实例化Model对象的时候传入我们想设置的属性:
    
    //设置默认属性
    Person = Backbone.Model.extend({
        defaults:{
            name : 'xiaoxiehang',
            age : 26
        },
        initialize:function(){
            alert('hello world!');
        }
    })

    //实例化时设置属性
    Person = Backbone.Model.extend({
        initialize:function(){
            alert('hello world!');
        }
    })
    var person = Person({ name:'xiaoxiehang', age:26 });

    //Model.set(); 设置属性
    Person = Backbone.Model.extend({
        initialize:function(){
            alert('hello world!');
        }
    })
    var person = Person();
    person.set({ name:'xiaoxiehang', age:26 });

&nbsp;

##获取属性

    var name = person.get(name);
    var age = person.get(age);

&nbsp;

##监听对象属性的变化
Model 的每个属性都可以有相应的监听函数，即当值发生变化时监听函数就会被调用。

    Person = Backbone.Model.extend({
        defaults:{
            name : 'xiaoxiehang',
            age : 26
        },
        initialize:function(){
            alert('hello world!');
            this.bind('change:name',function(){
                var name = this.get('name');
                alert('你修改了 name 属性为:' + name);
            })
        },
        setname:function(name){
            this.set({ name:name });
        }
    })
    var person = new Person();
    person.setname('xiaojj');//触发绑定的 change 事件

&nbsp;

##为对象添加验证规则，以及错误提示

    Person = Backbone.Model.extend({
        defaults:{
            name : 'xiaoxiehang',
            age : 26
        },
        initialize:function(){
            alert('hello world!');
            this.bind('change:name',function(){
                var name = this.get('name');
                alert('你修改了 name 属性为:' + name);
            }),
            this.bind('error',function(model,error){
                alert(error);
            })
        },
        validate:function(attributes){
            if(attributes.name=''){
                return 'name 不能为空';
            }
        },
        setname:function(name){
            this.set({ name:name });
        }
    })
    var person = new Person();
    person.setname('');

&nbsp;

##对象的获取和保存(需要服务端支持才能测试)

    Person = Backbone.Model.extend({
        url:'/save/',
        defaults:{
            name : 'xiaoxiehang',
            age : 26
        },
        initialize:function(){
            alert('hello world!');
            this.bind('change:name',function(){
                var name = this.get('name');
                alert('你修改了 name 属性为:' + name);
            }),
            this.bind('error',function(model,error){
                alert(error);
            })
        },
        validate:function(attributes){
            if(attributes.name=''){
                return 'name 不能为空';
            }
        }
    })
    var person = new Person();
    person.set({ name:'xiaojj' });
    person.save(); //会发送POST到模型对应的url,数据格式为json{'name':'xiaojj','age':26}

    //然后从服务器端获取数据使用方法fetch([options])
    var person1 = new Person();
    /*
     * 第一种情况，直接使用fetch()
     * 那么它会发送 get 请求到 model 的 ul 中，在服务器端可以通过判断是get还是post来进行对应的操作。
    */
    person1.fetch();

    /*
     * 第二种情况，在 fetch 中加入参数
     * 这样，就会发送 get 请求到 /getmans/ 这个 url 中
     * 服务器返回的数据格式应该是对应的 json 数据格式，同save 时 post 过去的格式
    */
    person1.fetch({url:'/getmans/'});

    //不过接受服务器端返回的数据方法是这样的
    person1.fetch({url:'/getmans/',success:function(model,response){
        alert('success');
        //model为获取到的数据
        alert(model.get(name));
    },error:function(){
        //当返回格式不正确或者是非json数据时,会执行此方法
        alert('error');
    }});

关于服务器的异步操作都是通过Backbone.sync这个方法来完成的，调用这个方法的时候会自动的传递一个参数过去，根据参数向服务器端发送对应的请求。

比如save，backbone会判断你的这个对象是不是新的，如果是新创建的则参数为create，如果是已存在的对象只是进行了改变，那么参数就为update，如果你调用fetch方法，那参数就是read，如果是destory，那么参数就是delete。

也就是所谓的CRUD ("create", "read", "update", or "delete")，而这四种参数对应的请求类型为POST，GET，PUT，DELETE。你可以在服务器根据这个request类型，来做出相应的CRUD操作。