var mainCont=$('.main-cont');
var contTag=$('div.main-hd').find('li');//所有页标签项
var menuTag=$('div.menu-bd').find('li');//所有左侧分类项

/*
 *   点击页标签，根据标签的 'name' 'href' 值，加载iframe
*/
contTag.find('a').live('click',function(e){
    e.preventDefault();
    var self=$(this);
    if(!self.hasClass('selected')){//如果当前页标签不是选中的
        //给当前标签添加选中样式
        self.parents('.main-hd').find('li').find('a').removeClass('selected');
        self.addClass('selected');

        //获取当前标签的 'name' 'href' 值，传递给加载iframe的方法
        var Name=self.attr('name'),url=self.attr('href');
        showIframe(Name,url);
    }

    if(self.parents('ul').hasClass('main-hd-hide')){//如果页标签存在于 main-hd-hide 中
        $('ul.main-hd-show li:first').after(self.parent().wrap());
        showAllTag();
    }
})

/*
 *    点击左侧分类项，加载iframe
*/
menuTag.find('a').live('click',function(e){
    var self=$(this);
    if(!self.data('newpage')){
        e.preventDefault();
        var Name=self.attr('name'),
            url=self.attr('href'),
            title=self.text();
        showTag(Name,url,title);
    }
})

/*
 *    选择页标签
 *    判断对应页标签是否存在，如果存在则添加选中样式，不存在则添加一个选中的页标签
*/
function showTag(obj,url,title){
    var contTag=$('div.main-hd').find('li');
        contTag.find('a').removeClass('selected');//移除所有页标签的选中样式
    var c_contTag=contTag.find('a[name='+obj+']');//当前menu项对应的页标签

    if(c_contTag.length){//如果menu项对应的页标签存在
        c_contTag.addClass('selected');//给页标签添加选种样式
        if(c_contTag.parents('ul').hasClass('main-hd-hide')){//如果页标签存在于 main-hd-hide 中
            $('ul.main-hd-show li:first').after(c_contTag.parent().wrap());//则移动到 main-hd-show 中
        }
    }else{//如果menu项对应的页标签不存在，则在 main-hd-show 添加一个选中的页标签
        $('ul.main-hd-show li:first').after('<li><a href="'+url+'" class="selected" title="'+title+'" name="'+obj+'">'+title+'</a></li>')
    }

    showIframe(obj,url);
    showAllTag();
}

/*
 *    显示对应iframe
 *    如果对应iframe存在则显示，不存在则添加
*/
function showIframe(obj,url){
    mainCont.children('iframe').hide();//先隐藏所有的iframe
    if(mainCont.children('iframe#'+obj).length){
        $('#'+obj).show();
    }else{
        mainCont.append('<iframe id="'+obj+'" src="'+url+'" name="main-cont" frameborder="0" width="100%" height="100%"></iframe>');
    }
}

/*
 *  点击'关闭标签'时，移除当前页标签
*/
$('.icon-close').live('click',function(){
    var self=$(this), name=self.siblings('a').attr('name');
    self.parent().remove();//移除当前页标签
    //如果有已加载了当前页标签对应的iframe,则移除
    if(mainCont.children('iframe#'+name).length){
        mainCont.children('iframe#'+name).remove();
    }
    //如果当前移除的标签为选中标签，移除后切换到首页
    if(self.siblings('a').hasClass('selected')){
        $('.main-hd').find('a[name="index"]').click();
    }
    showAllTag();
    return false;
})

/*
 *  鼠标移到页标签上时，显示'关闭标签'按钮
*/
contTag.live('mouseover',function(){
    var self=$(this);
    //当前标签为'首页'或当前标签已有'关闭标签'按钮，则不添加
    if(self.text()=='首页'||self.find('.icon-close').length){
        return false;
    }else{
        self.append('<i class="icon icon-close" title="关闭标签"></i>');
        // if(self.parents('ul').hasClass('main-hd-show')&&self.index()==0){
        //     return false;
        // }else{
        //     self.append('<i class="icon icon-close" title="关闭标签"></i>');
        // }
    }
})

/*
 *    点击左侧分类项
 *    (清除所有的页标签)功能已去掉
 *    添加本栏目所有的项
 *    调用showAllTag() 根据项的数量，判断显示和隐藏
*/
$('a.menu-list-title').each(function(){
    var self=$(this);
    self.click(function(e){
        e.preventDefault();
        //tab_remvoe();//移除所有标签(除首页)
        self.parent().after($('div.menu-bd').wrap());
        //如果ID不为空
        if(self.attr('id')!=''&&self.attr('id')!=undefined){
            var allTag=[];
            var Id=self.attr('id');
            switch(Id){
                case 'sales_manage':
                    for(var i=0;i<manage.sales.length;i++){
                        allTag.push(manage.sales[i]);
                    }
                break;
                case 'hr_manage':
                    for(var i=0;i<manage.hr.length;i++){
                        allTag.push(manage.hr[i]);
                    }
                break;
            }
            add_menu(RetrunTag(allTag));
            $('.main-hd-show').find('li:eq(0)').after(RetrunTag(allTag,true));
        }else{
            $('div.menu-bd').text(self.text());
        }
        showAllTag();
    })
})

function RetrunTag(tag,isDefault){
    var htmlTag='';

    if(isDefault){
        var defaultTag=[];
        for(var i=0 ; i<tag.length ; i++){//循环当前分类的所有项
            if(!tag[i]['newpage']){//如果不是新窗口打开的项
                defaultTag.push(tag[i]);//则添加到新的数组里面
            }
        }
        $('div.main-hd').find('li').not(':eq(0)').each(function(m){
            var Name=$(this).find('a').attr('name');
            $('div.main-hd').find('li').eq(m).after($(this).wrap());//在首页的页标签后面添加当前分类的项

            for(var i in defaultTag){
                if(defaultTag[i]['name']==Name){//如果页标签里存在跟新数组相同的项
                    delete defaultTag[i];       //则删除新数组的项
                }
            }
        })
        for(var i in defaultTag){
            htmlTag+='<li><a name="'+defaultTag[i]['name']+'" target="_blank" data-newpage="'+defaultTag[i]['newpage']+'" href="'+defaultTag[i]['url']+'" title="'+defaultTag[i]['title']+'" >'+defaultTag[i]['title']+'</a></li>';
        }
    }else{
        for(var i=0;i<tag.length;i++){
            htmlTag+='<li><a name="'+tag[i]['name']+'" target="_blank" data-newpage="'+tag[i]['newpage']+'" href="'+tag[i]['url']+'" title="'+tag[i]['title']+'" >'+tag[i]['title']+'</a></li>';
        }
    }
    return htmlTag;
}

//移除所有标签(除首页)
function tab_remvoe(){
    $('.main-hd').find('li').each(function(){
        if($(this).find('a').attr('name')!='index'){
            $(this).remove();
            $('.main-cont').find('iframe[id!=index]').remove();
        }else{
            $(this).find('a').addClass('selected');
            $('.main-cont').find('iframe[id=index]').show();
        }
    });
}

//menu 切换
function add_menu(h){
    $('.menu-bd').html('<ul>'+h+'</ul>');
}

/*页标签显示全部*/
function showAllTag(){
    var cont=$('div.main-hd'),
        contWidth=cont.outerWidth(),
        contTag=$('ul.main-hd-show').find('li'),
        tagWidth=contTag.length*contTag.outerWidth(true);
    var num=Math.floor(contWidth/contTag.outerWidth(true));//页标签默认能显示的项数

    var contTagHidden=contTag.slice(num).wrap();//获取页标签未显示的项

    if(contTag.length>num){//所有的页标签数量 > 能显示的页标签数量,则把未显示的项添加到 main-hd-hide 中
        if(!$('.main-hd-hide').length){
            cont.append('<ul class="main-hd-hide"></ul><i class="icon icon-unfold"></i>');
        }
        $('.main-hd-hide').prepend(contTagHidden);
    }else if(contTag.length<num){//所有的页标签数量 < 能显示的页标签数量,则把未显示的项添加到 main-hd-show 中
        var i=num-contTag.length;
        $('ul.main-hd-show').append($('.main-hd-hide').find('li').slice(0,i).wrap());
    }

    if($('.main-hd-hide').length){
        if($('.main-hd-hide').children('li').length<1){
            $('.main-hd-hide').remove();
            $('.icon-unfold').remove();
        }
    }
}

$('.icon-unfold').live('mouseover',function(){
    $(this).css('backgroundPosition','-327px -116px');
    if($('.icon-unfold').length){
        if(!$('.main-hd-hide').is(':animated')){
            $('.main-hd-hide').css('maxHeight',$('.main-cont').height()).slideDown(300);
        }
    }
})

$('.main-hd').live('mouseleave',function(){
    if($('.main-hd-hide').is(':visible')&&!$('.main-hd-hide').is(':animated')){
        $('.icon-unfold').css('backgroundPosition','-309px -116px');
        $('.main-hd-hide').slideUp(300);
    }
})

function menuBdHeight(){
    var menuH=$('div.main-menu').height(),
        menuHdH=$('h2.menu-hd').height(),
        menuHdNum=$('h2.menu-hd').length;
    $('div.menu-bd').height(menuH-(menuHdH*menuHdNum));
}

$(function(){
    menuBdHeight();
    menuDefault();
    showAllTag();
})
$(window).bind('resize',function(){
    showAllTag();
    menuBdHeight();
    //console.log($('.main').css('bottom'))
})

function menuDefault(){
    var m='',n='';
    for(var i=0;i<manage.sales.length;i++){
        m+='<li><a name="'+manage.sales[i]['name']+'" target="_blank" data-newpage="'+manage.sales[i]['newpage']+'" href="'+manage.sales[i]['url']+'" title="'+manage.sales[i]['title']+'" >'+manage.sales[i]['title']+'</a></li>';
        
        if(manage.sales[i]['default']){
            n+='<li><a name="'+manage.sales[i]['name']+'" target="_blank" data-newpage="'+manage.sales[i]['newpage']+'" href="'+manage.sales[i]['url']+'" title="'+manage.sales[i]['title']+'" >'+manage.sales[i]['title']+'</a></li>';
        }
    }
    add_menu(m);
    $('.main-hd-show').append(n);
}