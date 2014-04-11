---
layout: post
title: jquery 代码片段
category: jquery
---

>摘自：[50个必备的实用jQuery代码段](http://bbs.html5cn.org/thread-2613-1-18.html '50个必备的实用jQuery代码段')
1、设置IE特有的功能

    if($.browser.msie){
        //ie 怎么还不去屎
    }

2、用jquery 代替一个元素

    $('#xx').replaceWith('jj');
    //例
    <div id="xx">12333</div> ==>  jj

3、验证某个元素是否为空

    if(!$('#id').html()){
        //.......
	}
    或
    if(!('#id').is(':empty')){
        //.......
    }

4、找到一个被选中的元素

    $('select').find('option:selected');

5、隐藏一个包含了'xxh'文本的元素

    $('p.value:contains("xxh")').hide();

6、检测ie6

    if($.browser.msie&&$.browser.version<=6)


7、使用jquery检测鼠标单机是左键or右键

    $('#id').live('click',function(event){
        if( (!$.browser.msie && event.button==0) || ($.browser.msie && event.button==1) ){
            alert(left);
        }else if(event.button==2){
            alert(right);
        }
    })

8、判断元素是否可见

    if($('#id').is(':visible')){
        //true
    }

9、获取鼠标光标位置

    $(document).mouseover(function(e){
        consloe.log('X:'+e.pageX+' Y:'+e.pageY);
    })