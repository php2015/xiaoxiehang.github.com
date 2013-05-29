var cookieName=GetCookie('classname');

//设置皮肤
$('.skin').each(function(){
	var _this=$(this);
	_this.click(function(){
		var skinName=_this.attr('title');//保存当前选择的皮肤名称
		$('body').attr('class',skinName);
		//设置cookie
		function SetCookie(name,value,day){//参数：cookie的名字，值，时间
			var exp=new Date();
			exp.setTime(exp.getTime()+day*24*60*60*1000);
			document.cookie = name + '='+ escape (value) + ';expires=' + exp.toGMTString();
		}
		SetCookie("classname",skinName,30);
		alert(cookieName);
	})
})




//读取cookie
function GetCookie(name){
	var nameEQ=name+'=';
	var ca=document.cookie.split(';');
	for(var i=0;i<ca.length;i++){
		var c=ca[i];
		while(c.charAt(0)==''){
			c=c.substring(1,c.length);
		}
		if(c.indexOf(nameEQ)==0){
			return c.substring(nameEQ.length,c.length);
		}
	}
	return null;
}

/* 百度统计 */
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fc59a11d18083f15cdf8f7896f018dfcc' type='text/javascript'%3E%3C/script%3E"));

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
