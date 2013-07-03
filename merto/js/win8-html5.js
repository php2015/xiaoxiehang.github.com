// JavaScript Document By Kevin wenkm.com

var site,i,j,k,l,m,n,h,s0,s1,s2,s3;

site="wenkm.com";

i=j=k=l=m=n=0;

h=$(document).height();

s0=300;

s1=500;

s2=800;

s3=1000;

//设置背景

function bg(){

	$('#bg').css({height:h})

};

//隐藏loading

function StartWin8(){

	$('#loading').delay(s3).fadeOut(s1,function(){

		$('#header').animate({top:0,opacity:1},s2,function(){

			$('#header .logo a').animate({left:55,opacity:1},s2,function(){

				$('#nav').fadeIn(s0,function(){ShowNav()});

				ShowTime();//显示时间

				$('#bg').delay(s1+s3).fadeIn(s3,function(){

					$.getScript('/style/win8/play.js');

					ShowWeather();//载入天气信息

				})

			})

		})

	})

};

//显示导航

function ShowNav(){

	$('#nav li').eq(j++).addClass('show');

	if(j<8){

		setTimeout("ShowNav()",100)

	}else{

		j=0;

	}

};

//隐藏导航

function HideNav(){

	$('#nav li').removeClass('show').parent('#nav').fadeOut()

};

//获取天气

function ShowWeather(){

	var weather_=new weather();

	var city="";

	$.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js',function(){

		city=remote_ip_info.city;//通过JSON获取城市信息

		coun=remote_ip_info.country;//国别

		weather_.getWeather(city,coun);



	});

};

//显示时间

function ShowTime(){

	if(!$('#timer').length>0){

		$('body').append('<div id="timer"><p class="w"></p><p class="d"></p><p class="t"></p></div>')

	};

	var gt,gh,gm,gmm,gd,gw,week,outm,outd;

	gt=new Date();

	gh=gt.getHours();

	gm=gt.getMinutes();

	gmm=gt.getMonth();

	gd=gt.getDate();

	gw=gt.getDay();

	week=['天','一','二','三','四','五','六'];

	day=['','一','二','三','四','五','六','七','八','九','十'];

	$('#timer .w').html('星期'+week[gw]);

	if(gmm>10){

		outm='十'+day[gmm-10]

	}else{

		outm=day[gmm+1]

	};

	if(gd>10){

		if(gd<20){

			outd='十'+day[gd%10]

		}else{

			outd=day[parseInt(gd/10)]+'十'+day[gd%10]

		}

	}else{

		outd=day[gd]

	};

	$('#timer .d').html(outm+'月'+outd+'日');

	if(gh<10){gh='0'+gh};

	if(gm<10){gm='0'+gm};

	$('#timer .t').html(gh+':'+gm);

	$('#timer').animate({left:20})

};

//隐藏时间

function HideTime(){

	$('#timer').animate({left:-400})

};

//显示菜单

function ShowMenu(){

	$('#menu li').eq(k).css({marginLeft:0});

	k++;

	if(k<4){

		setTimeout("ShowMenu()",80)

	}else{

		k=0

	}

};

//隐藏菜单

function HideMenu(){

	$('#menu li').css({marginLeft:80})

};





//显示博客列表

function ShowBlogList(){

	var totaldl=$('.b_list dl').size();

	$('.b_list dl').eq(l).addClass('w_show');

	l++;

	if(l<totaldl){

		setTimeout("ShowBlogList()",100)

	}else{

		l=0;

		$('.b_page').delay(s2).fadeIn(s1)

	}

};

//提示

function tips(tc){

	$('#tips').html('这就是【'+tc+'】<br />你还想闹哪样？').stop().show().delay(2000).fadeOut()

	return false;

};

//播放提示

function playtips(tips){

	if(!$('#playtips').length>0){

		$('body').append('<div id="playtips">'+tips+'</div>')

	};

	$('#playtips').html(tips);

	$('#playtips').animate({right:0}).delay(2500).animate({right:-250})

};

//显示播放列表

function ShowPlayList(){

	var tot=$('#playlist li').size();

	$('#playlist li').eq(m).animate({marginLeft:0,opacity:1});

	m++;

	if(m<tot){

		setTimeout("ShowPlayList()",80)

	}else{

		m=0

	}

};

//显示播放控制

function ShowControl(){

	var ea='easeOutBack';

	$('#playlist').css({height:$(window).height()-265}).fadeIn(s0,function(){

		ShowPlayList()	

	});

	$('.lrc').animate({bottom:110,opacity:1},s2,ea);

	$('.bar').delay(s0).animate({bottom:100,opacity:1},s2,ea);

	$('.control').delay(s0*2).animate({bottom:20,opacity:1},s2,ea);

	$('.cover').delay(s2*2).fadeIn(s2)

};

//判断隐藏内容

function HideAll(){

	if($('#music').hasClass('w_show')){

		HideE('music');

		$('.lrc').animate({bottom:0})

		$('.info,.bar,.control').css({bottom:-100,opacity:0});

		$('.cover,#playlist').hide();

		$('#playlist li').css({marginLeft:-50,opacity:0})

	};//音乐

	if($('#blog').hasClass('w_show')){

		$('.blog').hide();

		HideE('blog');

		ShowTime()

	};//博客

	if($('#about').hasClass('w_show')){

		$('.about').hide();

		ShowAbout=function(){return false};

		HideE('about');

	};//关于

	if($('#weather').hasClass('w_show')){

		$('.weather').fadeOut(s1,function(){

			$('#weather').addClass('nobg');

			HideE('weather',true);

		})

	};//天气

	if($('#album').hasClass('w_show')){

		HideE('album',true);

	};//相册

	if($('#msg').hasClass('w_show')){

		HideE('msg');

	};//留言

	if($('#lab').hasClass('w_show')){

		HideE('lab',true);

	};//实验室

	if($('#flow').hasClass('w_show')){

		HideE('flow',true);

	};//微博

};

//隐藏内容

function HideE(id,wi){
	var gd,kd,wid;
	gd=($(document).height()-260)/2;
	kd=($(document).width()-980)/2;
	wid=320;//默认磁铁宽度
	if(wi){
		wid=140
	};
	$('#'+id).css({top:$('.n_'+id).position().top+gd,left:$('.n_'+id).position().left+kd,width:wid,height:120,opacity:0}).removeClass('w_show').delay(s1).fadeOut();
};

//显示内容

function ShowC(id){
	var sct=$('.n_'+id);
	var scw=$(document).width();
	var sch=$(document).height();
	if(!$('#'+id).length>0){
		$('body').append('<div id="'+id+'"></div>')
	};
	$('#'+id).css({position:'fixed',top:sct.position().top+(sch-260)/2,left:sct.position().left+(scw-980)/2,backgroundColor:sct.css('background-color'),width:sct.width()}).show();
	setTimeout(function(){
		$('#'+id).css({width:scw,height:sch,top:0,left:0}).addClass('w_show')
	},s0);

};

$(document).ready(function() {
	$('#menu').hover(function(){
		$(this).css({right:0});
		setTimeout("ShowMenu()",s1)
	},function(){
		$(this).css({right:-79});
		setTimeout("HideMenu()",s1)
	});
	$('#nav li').hover(function(){
		$(this).addClass('hover')
	},function(){
		$(this).removeClass('hover')
	});

	

	//导航点击

	$('#nav li').click(function(){
		var cl=$(this).attr('class');
		$('#menu a').removeClass('this');//移除菜单上的样式
		if(cl.indexOf('music')>=0){
			$('.m_music a').addClass('this');
			$('.music').addClass('w_show');
			setTimeout("ShowControl()",s3)
		};//音乐

		if(cl.indexOf('blog')>=0){
			$('#loading').show();
			HideTime();
			if(!$('#blog').length>0){
				$('body').append('<div id="blog"></div>');
				$('#blog').load('blog.php',function(){
					setTimeout(function(){
						$('#loading').hide();
						$('.blog').show();
						ShowBlogList();
					},s3)
				})
			}else{
				setTimeout(function(){
					$('#loading').hide();
					$('.blog').fadeIn();
				},s3)
			};

		};//博客

		if(cl.indexOf('about')>=0){

			$('.m_about a').addClass('this');

			$('#loading').show();

			if(!$('#about').length>0){

				$('body').append('<div id="about"></div>');

			};

			$('#about').load('about.html',function(){

				$('.about').delay(s3).fadeIn(s1,function(){

					$('#loading').hide();

					CreatSiteName();

				});

			})

		};//关于

		if(cl.indexOf('weather')>=0){

			setTimeout(function(){

				$('#weather').removeClass('nobg');

				$('.weather').fadeIn()

			},s3)

		};//天气

		if(cl.indexOf('msg')>=0){

			$('#loading').show();

			if(!$('#msg').length>0){

				$('body').append('<div id="msg"></div>');

			};

			$('#msg').load('msg.php?id=14',function(){

				$('.msg').delay(s3).fadeIn(s1,function(){

					$('#loading').hide();

					zdgd()

				});

			})

		};//留言

		var id1=cl.split('n_')[1];

		var id2=id1.split(' ')[0];

		ShowC(id2)

	});

	

	//菜单点击

	$('#menu li').click(function(){

		var nl=$(this);

		var cl=nl.attr('class');

		if(nl.find('a').hasClass('this')){

			tips(nl.find('a').html());

		}else{//不再此栏目

			$('#menu a').removeClass('this');//移除其他菜单的样式

			if(cl.indexOf('music')>=0){

				$('.m_music a').addClass('this');

				HideAll();

				ShowC('music');

				setTimeout("ShowControl()",s2)

			};//如果是音乐

			if(cl.indexOf('about')>=0){

				$('.m_about a').addClass('this');

				$('#loading').show();

				ShowC('about');

				if(!$('#about').length>0){

					$('body').append('<div id="about"></div>');

				};

				$('#about').load('about.html',function(){

					$('.about').delay(s3).fadeIn(s1,function(){

						$('#loading').hide();

						CreatSiteName()

					});

				})

			};//如果是关于

			if(cl.indexOf('home')>=0){

				$('.m_home a').addClass('this');//添加样式

				HideAll();

			};//如果是主页

		};

		return false;

	});

	

	//resize

	$(window).resize(function(){

		var mh=$(document).height();

		var mw=$(document).width();

		$('#bg').css({height:mh})

		if($('#b_view').css('display')=='block'){

			$('#b_view').css({height:mh-155});

		};//重置查看页高度

		if($('#music').css('display')=='block'){

			$('#playlist').css({height:mh-265})

		};//如果在音乐页面就重置列表宽度

		if($('#about').hasClass('w_show')){

			$('#about').css({width:mw,height:mh})

		};//如果在关于页面重置大小

	});

	//菜单呼出手势

	var mx1;//定义全局变量

	$('body').mousedown(function(e1){

		mx1=e1.pageX;

	});

	$('body').mouseup(function(e2){

		var mx2=e2.pageX;

		if(mx1-mx2>s0){

			$('#menu').css({right:0});

			setTimeout("ShowMenu()",s1)

		};

		if(mx2-mx1>s0){

			$('#menu').css({right:-79});

			setTimeout("HideMenu()",s1)

		}

	})

});

