define(function(require,exports,module){
    var zepto = require('zepto');
    require('gmu');
    
    $(document.body).on('click','.m-realwall img',function(){
        var el = $(this),
            el_src = el.attr('src');
        var h = [
            '<div class="m-winreal" id="slider">',
                '<div class="m-winreal-hd">',
                    '<a href="#" class="fl"><i class="icon-r-realback"></i></a>',
                    '<a href="#" class="u-realparise-btn"><i class="icon-r-realparise"></i> 123123</a>',
                '</div>',
                '<div class="m-winreal-bd"><img src="'+el_src+'" alt=""></div>',
                '<div class="m-winreal-ft">',
                    '<div class="fl"><em>灰太狼</em><br><time>2014-05-16</time></div>',
                    '<a href="javascript:;" class="u-realimg-btn"><i class="icon-r-realimg"></i>图片打印</a>',
                '</div>',
            '</div>'
        ];
        $(document.body).append(h.join(''));
        
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