var subcat = [
    {"category":"文学","list":["小说","随笔","经典","散文","童话","诗歌","杂文","名著","诗词","港台","外国文学","中国文学","日本文学","当代文学","儿童文学","古典文学","外国名著"]},
    {"category":"流行","list":["漫画","绘本","推理","青春","言情","魔幻","科幻","悬疑","武侠","小说","奇幻","耽美","穿越","金庸","网络小说","青春文学"]},
    {"category":"文化","list":["历史","政治","社会","数学","国学","人文","音乐","绘画","佛教","军事","戏剧","哲学","传记","设计","艺术","建筑","思想","心理学","回忆录","宗教电影"]},
    {"category":"西方哲学","list":["二战","考古","美术","近代史","自由主义"]},
    {"category":"生活","list":["爱情","旅行","励志","成长","摄影","心理","职场","女性","美食","游记","教育","灵修","情感","健康","手工","养生","两性","家居","自助游","人际关系"]},
    {"category":"经管","list":["管理","经济","金融","商业","投资","营销","理财","创业","广告","股票","策划","企业史"]},
    {"category":"科技","list":["科普","编程","科学","算法","通信","交互","互联网","交互设计","用户体验"]}
];

var category = $('#category'),
    type = $('#type');

var categoryValue = typeValue = 0;

/*
 * 获取本地存储中保存的索引
*/
if(window.localStorage){
    categoryValue = localStorage.getItem('categoryValue'),
    typeValue = localStorage.getItem('typeValue');
}

/*
 * 添加二级分类数据
*/
function typeData(m,n){
    if(!m){
        m = 0;
    }
    var h = '';
    for(var i=0; i<subcat[m].list.length; i++){
        if(n == i){
            h += '<option selected>'+ subcat[m].list[i] +'</option>';
        }else{
            h += '<option>'+ subcat[m].list[i] +'</option>';
        }
    }
    type.html(h);
}

/*
 * 选择一级分类
*/
category.change(function(){
    var categoryIndex = this.selectedIndex,
        $type = $('#type');
    typeData(categoryIndex);
    localstorage($(this).attr('id'), categoryIndex, $(this).val());
    localstorage($type.attr('id'), $type.get(0).selectedIndex, $type.val());
})

/*
 * 选择二级分类
*/
type.change(function(){
    var typeIndex = this.selectedIndex;
    localstorage($(this).attr('id'), typeIndex, $(this).val());
})

/*
 * 将分类索引存储在本地
*/
function localstorage(id,value,text){
    if(window.localstorage){
        localStorage.setItem(id+'Value',value);
        localStorage.setItem(id+'Text',text);
    }
}

$(function(){
    /*
     * 添加一级分类数据
    */
    var m = '';
    for(var i=0; i<subcat.length; i++){
        if(categoryValue == i){
            m += '<option selected>'+ subcat[i].category +'</option>';
        }else{
            m += '<option>'+ subcat[i].category +'</option>';
        }
    }
    category.html(m);

    typeData(categoryValue,typeValue);
})
