var post_list=$('ul.post-list'),post_li=post_list.find('li');
var i=0,j=post_li.length-1;
function showList(){
	post_li.eq(i++).animate({marginLeft:0,opacity:1},500);
	
		post_li.each(function(){
			if($(this).find('span').length<=0){
				$(this).prepend('<span>'+($(this).index()+1)+'</span>');
			}
		})
	if(i<post_li.size()){
		setTimeout("showList()",120)
	}else{
		i=0;
	}
}
showList();
function hideList(){
	post_list.find('li').eq(j--).animate({marginLeft:-50,opacity:0},200);
	if(j>=0){
		setTimeout("hideList()",40)
	}else{
		j=post_li.length-1;
	}
}
$('ul.post-list').find('a').click(function(){
	if($('div.post-content').length>0){
		$('div.post-content').show();
	}else{
		$.ajax({
			type : 'GET',
			url : 'http://f2es.net/win8//post.html',
			dataType : 'html'
		}).done(function(data){
			var data = data.match(/<body>((.|\s|\r|\n|\f)*)<\/body>/)[1];
			$('body').append(data);
		}).fail(function(){
			//alert('出错啦!!!');
		})
	}
})
$('body').delegate('.post-content','click',function(){
	$(this).hide();
})