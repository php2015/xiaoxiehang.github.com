(function(){
    var logo=document.getElementsByTagName('hgroup')[0].getElementsByTagName('strong')[0];
    var arr=logo.innerText.split('');
    var i=0,h='';
    for(;i<arr.length;i++){
        h+='<i class="m-logo-char'+(i+1)+'">'+arr[i]+'</i>';
    }
    logo.innerHTML=h;
})();

if($('pre').length){
    $('pre').addClass('prettyprint linenums');
    window.prettyPrint && prettyPrint();
}

/* DISQUS */
if(document.getElementById('disqus_thread')){
    var disqus_shortname = 'xiaoxiehang'; 
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
}

/* 百度分享 */
if(document.getElementById('bdlike_shell')){
	var bdShare_config = {
		"type":"small",
		"color":"blue",
		"uid":"739688",
		"share":"yes"
	};
	document.getElementById("bdlike_shell").src="http://bdimg.share.baidu.com/static/js/like_shell.js?t=" + Math.ceil(new Date()/3600000);
}

/* 百度统计 */
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F0c1057fe58215a62c2a631fcf13ec925' type='text/javascript'%3E%3C/script%3E"));

// $(".search-txt").autocomplete("/tags/search", {
// 	width: 224,
// 	multiple: true,
// 	matchContains: true,
// 	formatItem: function(row, i, max) {
// 		return row;
// 	}
// });

/*
var cookieName=getCookie('skinName');
$('body').attr('class',cookieName);

//设置皮肤
$('.skin').find('a').each(function(){
	var _this=$(this);
	_this.click(function(){
		var skinName=_this.attr('title');//保存当前选择的皮肤名称
		$('body').attr('class',skinName,30);
		SetCookie("skinName",skinName,30);
	})
})

//设置cookie
function SetCookie(name,value,day){//参数：cookie的名字，值，时间
	var exp  = new Date();    //new Date("December 31, 9998");
	exp.setTime(exp.getTime() + day*24*60*60*1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
//读取cookie
function getCookie(name){
	var nameEQ = name + "=";
        var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while(c.charAt(0)==' '){
            	c = c.substring(1,c.length);
            }
            if(c.indexOf(nameEQ) == 0){
            	return c.substring(nameEQ.length,c.length);
            }
        }
	return null;
}
*/