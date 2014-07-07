define(function(require,exports,module){
    var zepto = require('zepto');
    require('gmu');
    
    $(document.body).on('click','.m-realwall img',function(){
        var el = $(this),
            el_src = el.attr('src');
        var h = [
            '<div class="m-winreal" id="slider">',
//                '<div class="m-winreal-hd">',
//                    '<a href="#" class="fl"><i class="icon-r-realback"></i></a>',
//                    '<a href="#" class="u-realparise-btn"><i class="icon-r-realparise"></i> 123123</a>',
//                '</div>',
//                '<div class="m-winreal-bd"><img src="'+el_src+'" alt=""></div>',
//                '<div class="m-winreal-ft">',
//                    '<div class="fl"><em>灰太狼</em><br><time>2014-05-16</time></div>',
//                    '<a href="javascript:;" class="u-realimg-btn"><i class="icon-r-realimg"></i>图片打印</a>',
//                '</div>',
            '</div>'
        ];
        $(document.body).append(h.join(''));
        
            var slider, group, preGroup, uid=0;

            function getNextGroup(prev, active) {
                uid ++;

                // 模拟生成Group信息。
                var num = Math.max(Math.min(9, Math.round(Math.random() * 9)), 3),
                        i = 0,
                        group = [],
                        titles = ['白昼冷光','听风者','暮光之城2','搞定岳父大人','三个火枪手','人在囧途','第一次','婚前试爱','青春期'];

                for (; i < num; i++) {
                    group.push({
                        href: "http://www.baidu.com",
                        pic: "../../../examples/assets/slider/pic" + (i + 1) + ".jpg",
                        title: titles[i],
                        info: (i + 1) + '/' + num,
                        group: '图集'+uid
                    });
                }
                return group;
            }

            //当前group
            group = getNextGroup();

            //上一个group
            preGroup = getNextGroup();

            slider = new $.ui.Slider( '#slider', {
                index: preGroup.length,//当前group中的第一个
                content: preGroup.concat(group),//把两个合起来，以方便切换到前一个group
                dots:false,
                slide: function(e, index, active){
                    //显示当前item的信息
                    $('h2.ui-toolbar-title').text(active.group + ' : ' + active.info);
                }
            });

            slider.on('edge', function (e, prev, active) {
                //单到达边缘时，你可以选择扩大图片池子。
                var content = this.content(),
                    group = getNextGroup(prev, active);

                this.content(prev ? group.concat(content) : content.concat(group));
            });
        
    }).on('click','.icon-r-realback',function(){
        $('div.m-winreal').remove();
    }).on('click','.u-realparise-btn',function(){
        var num = parseInt($(this).text());
        num++;
        $(this).html('<i class="icon-r-realparise"></i> '+num);
    }).on('touchmove','.m-winreal',function(){
        return false;
    })
    
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