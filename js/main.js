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