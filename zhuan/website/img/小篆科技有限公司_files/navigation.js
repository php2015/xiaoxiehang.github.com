// JavaScript Document

$(document).ready(function(e) {
	var con=" <header class='header'>"+
  "<a class='logo' href='index.html'>construct</a>"+
 " <nav> "+
   "<ul>"+
    "<li><a href='index.html'>首页</a></li>"+
    "<li><a href='dyjj.html'>产品与方案</a>"+  
     " <ul>"+
      " <li><a href='dyjj.html'>交警智能微信平台</a></li>"+
      "<li><a href='easylife.html'>易生活杭州</a></li>"+
      "<li><a href='zhifu.html'>智慧支付</a></li>"+
      "</ul>"+
    "</li>"+
    "<li><a href='showMessage.do?page=1'>留言墙</a>"+
     "<li><a href='newsList.do?page=1'>公司动态</a>"+
    "</li>"+
    
   " <li><a href='about.html'>小篆风采</a>"+
     " <ul>"+
      "<li><a href='about.html'>公司简介</a></li>"+
      "<li><a href='culture.html'>企业文化</a></li>"+
     "</ul>"+
    "</li>"+
    "<li><a href='showJobs.do?page=1'>加入我们</a>"+
    "</li>"+
     "<li><a href='contact.html'>联系我们</a>"+
    "</li>"+
   "</ul>"+
 
  "</nav>"+
 "</header>";
    $("#nav").empty().append(con);
});