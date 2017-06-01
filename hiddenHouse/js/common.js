(function($){
    $(function(){
        var tempList = {
            navUI : function(){
                var navData = [
                    {name: "秘·境", value: 'index'},
                    {name: "小楼", value: 'Accommondation'},
                    {name: "食&饮", value: 'Dining'},
                    {name: "玩乐", value: 'Activity'},
                    {name: "优荐", value: 'Recommendation'},
                    {name: "私人订制", value: 'Event'},
                    {name: "特惠", value: 'Sale'},
                    {name: "位置交通", value: 'Location'},
                    {name: "联系我们", value: 'Contact'},
                ];

                var navList = '';
                $.each(navData, function(m, n){
                    if(window.location.pathname.indexOf(n.value) >= 0){
                        navList += '<li class="crt"><a href="'+ n.value +'.html">'+ n.name +'</li>';
                    }else{
                        navList += '<li><a href="'+ n.value +'.html">'+ n.name +'</a></li>';
                    }
                });
                return navList
            },
            headerUI : function(){
                return [
                    '<div class="layout">',
                        '<h1 style="display:none;">秘境</h1>',
                        '<div class="fr links">',
                            '<ul>',
                                '<li><a class="links-item wb" href="javascript:;">微博</a></li>',
                                '<li><a class="links-item wx" href="javascript:;">微信</a></li>',
                                '<li><a class="links-item search" href="javascript:;">搜索</a></li>',
                                '<li><a class="links-item reserve" href="javascript:;">预定</a></li>',
                            '</ul>',
                        '</div>',
                        '<nav>'+ this.navUI() +'</nav>',
                    '</div>'
                ].join('');
            },
            footerUI : function(){
                return [
                    '<div class="layout">',
                        '<div class="links"><a class="links-item ft-wb" href="javascript:;">微博</a><a class="links-item ft-wx" href="javascript:;">微信</a></div>',
                        '<ul>'+ this.navUI() +'</ul>',
                        '<p><a href="index.html" class="links-item ft-logo">秘境</a></p>',
                        '<p>秘境桐庐有限公司 Copyright 2014-2017 all rights reserved 沪ICP备14028165号-1</p>',
                    '</div>'
                ].join('');
            }
        };
        console.log(tempList.footerUI())
        var $header = $('header'),
            $footer = $('footer');
        $header.append(tempList.headerUI());
        $footer.append(tempList.footerUI());



        var $container = $('.masonry-list');
        if($container.length){
            $container.imagesLoaded(function() {
                $container.masonry({
                    itemSelector: 'li',
                    // gutter: 20,
                    isAnimated: true,
                });
            });
        }
    })
})(jQuery);