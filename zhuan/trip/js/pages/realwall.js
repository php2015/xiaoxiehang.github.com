define(function(require,exports,module){
    var zepto = require('zepto');
    require('gmu');
    require('../plugins/menu');
    
    var myScroll = new iScroll("wrap",{bounce:false});
    $(document.body).on('click','.m-realwall img',function(){
        var el = $(this),
            el_src = el.attr('src');
        var h = [
            '<div class="m-winreal">',
                '<div class="m-winreal-hd">',
                    '<a href="#" class="u-realback"></a>',
                    '<a href="#" class="u-realparise">1</a>',
                '</div>',
                '<div class="m-winreal-bd"><img src="'+el_src+'" alt=""></div>',
                '<div class="m-winreal-ft">',
                    '<div class="fl"><em>灰太狼</em><br><time>2014-05-16</time></div>',
                    '<a href="javascript:;" class="u-realimg-btn">图片打印</a>',
                '</div>',
            '</div>'
        ];
        $(document.body).append(h.join(''));
        
    }).on('click','.u-realback',function(){
        $('div.m-winreal').remove();
    }).on('click','.u-realparise',function(){
        var num = parseInt($(this).text());
        num++;
        $(this).html(num);
    }).on('touchmove','.m-winreal',function(){
        return false;
    })
    
    $('.m-realwall').append('<ul></ul><ul></ul><ul></ul>');
    
    
    function waterfall(){
        
        
        
        
        function getMin(arr){
            var min = arr[0];
            var len = arr.length;
            var n=0;
            for(var i=0; i<len ;i++){
                if(arr[i]<min){
                    min = arr[i];
                    n = i;
                }
            }
            return n;
        }
        
        
        $.ajax({
            type : 'GET',
            url : 'img.json',
            dataType : 'json',
            success : function(data){
                var ul = $('.m-realwall').find('ul'),hg = [];
                for(var i=0; i<data.imgs.length; i++){
                    
                    for(var i=0; i<ul.length; i++){
                        hg.push( ul.eq(i).height() );
                    }
                    
                    var n = getMin(hg);
                    
                    ul.eq(n).append('<li id="'+ data.imgs[i].id +'"><a href="javascript:;"><img src="'+ data.imgs[i].path +'" alt="" height="'+ data.imgs[i].height +'"></a><a class="m-realwall-praise" href="javascript:;">'+ data.imgs[i].praiseCount +'</a><a class="m-realwall-name" href="#">'+ data.imgs[i].nickName +'</a></li>');
                }
                //console.log(h);
                //myScroll.resh
            }
        })
    }
    
    waterfall();
    
    /*组件初始化js begin*/
    //$('.ui-refresh').css('height', window.innerHeight - ($('header').height() || 42)).refresh({
    $('.m-realwall').refresh({
        load: function (dir, type) {
            var me = this;
            $.getJSON('http://gmu.baidu.com/demo/data/refresh.php', function (data) {
//                var $list = $('.data-list ul');
//                var html ='<li><a href="#"><img src="#" alt="" height="80"></a><a class="m-realwall-praise" href="javascript:;">111111</a><a class="m-realwall-name" href="#">xiaoxiehang</a></li><li><a href="#"><img src="#" alt="" height="80"></a><a class="m-realwall-praise" href="javascript:;">111111</a><a class="m-realwall-name" href="#">xiaoxiehang</a></li><li><a href="#"><img src="#" alt="" height="80"></a><a class="m-realwall-praise" href="javascript:;">111111</a><a class="m-realwall-name" href="#">xiaoxiehang</a></li><li><a href="#"><img src="#" alt="" height="80"></a><a class="m-realwall-praise" href="javascript:;">111111</a><a class="m-realwall-name" href="#">xiaoxiehang</a></li><li><a href="#"><img src="#" alt="" height="80"></a><a class="m-realwall-praise" href="javascript:;">111111</a><a class="m-realwall-name" href="#">xiaoxiehang</a></li><li><a href="#"><img src="#" alt="" height="80"></a><a class="m-realwall-praise" href="javascript:;">111111</a><a class="m-realwall-name" href="#">xiaoxiehang</a></li><li><a href="#"><img src="#" alt="" height="80"></a><a class="m-realwall-praise" href="javascript:;">111111</a><a class="m-realwall-name" href="#">xiaoxiehang</a></li>';
                var $list = $('.data-list ul'),
                        html = (function (data) {    //数据渲染
                            var liArr = [];
                            $.each(data, function () {
                                liArr.push(this.html);
                            });
                            return liArr.join('');
                        })(data);

                $list[dir == 'up' ? 'prepend' : 'append'](html);
                me.afterDataLoading();    //数据加载完成后改变状态
            });
        }
    });
    /*组件初始化js end*/
})