define(function(require,exprots,module){
    require('./plugins/tabs');
    var slider = require('./plugins/slider')($);
    var showWin = require('./plugins/showWin')($);
    $('.m-slider').slider({ prev: 'slider-prev', next: 'slider-next',arrow:true,pages:false});
    
    $(document.body).on('click',function(e){
        var el = $(e.target);
        if(el.hasClass('about')){
            $.showWin({
                obj:'win',
                title:'关于我们',
                content:'<p><strong>汇聚外汇网</strong>是国内外汇领域的专业资讯网站，秉承“优质高效”的原则，以独特视角筛选国内外重要外汇资讯，为追逐利润的外汇投资者提供高质量信息，推进国内外汇知识教育，促进国内外汇交易行业发展。</p><br><p>汇世界货币，聚全球资讯，专业的外汇投资者都在汇聚外汇，读懂外汇，从汇聚开始。</p>',
                drag:1,
                button:0,
                width:'800px'
            });
        }
        
        

        
        if(el.hasClass('disclaimer')){
            $.showWin({
                obj:'win',
                title:'免责声明',
                content:'<p>汇聚网涵盖的所有文章是基于“最佳”的筛选原则从可靠的来源收集而来，来源包括各种各样的组织，机构及个人。</p><p>在您使用本网站之前，请仔细阅读本声明的所有条款。您一旦开始使用本网站，即表明您无条件地接受本声明，您应遵守本声明和相关法律的规定。本声明未涉及的问题参见国家有关法律法规，当本声明与国家法律法规冲突时，以国家法律法规为主。</p><p>一、本网站使用者因为违反本声明的规定而触犯中华人民共和国法律的，一切后果自己负责，本网站不承担任何责任。</p><p>二、凡以任何方式登陆本网站或直接、间接使用本网站资料者，视为自愿接受本网站声明的约束。</p><p>三、任何单位或个人认为本网站内容可能涉嫌侵犯其合法权益，应该及时向本站书面反馈，并提供身份证明、权属证明及详细情况证明，本站在收到上述文件后将会尽快移除相关内容。</p><p>四、由于与本网站链接的其它网站所造成之个人资料泄露及由此而导致的任何法律争议和后果，本网站均得免责。</p><p>五、任何个人或单位可以利用我们的工具对第三方网站进行操作，但是不能作为商业用途，使用我们的工具产生的任何后果由用户自己承担，网站免责。</p><p>六、当政府司法机关依照法定程序要求本网站披露个人资料时，我们将根据执法单位之要求或为公共安全之目的提供个人资料。在此情况下之任何披露，本网站均得免责。</p><p>七、本网站不会对任何特定目的做出陈述或者担保。在任何情况下，本网站以及网站的员工，管理人员及拥有者都不对特殊的，直接的，间接的或者是衍生的损害、损失、成本、费用或者针对任何性质或类型的索赔进行负责。</p><p>八、本网站不作任何投资操作的推荐，建议投资者在投资之前咨询专业人士。</p><p>九、本网站对在线服务中所显示的信息或资料的准确性、内容的完整性、合法性、可靠性、可操作性或可用性不承担任何责任。在网站应用中，由用户发表的评论仅代表作者本人观点，与本网站立场无关。</p><p>十、任何通过本网站搜索引擎技术和服务所得的搜索结果链接的网页，以及网页中之所有内容，均系该网页所属第三方网站的所有者制作和提供（以下简称”第三方网页”）。并不是也不反映本网站之任何意见和主张，也不表示公司同意或支持该等第三方网页上的任何内容、主张或立场。本网站对第三方网页中内容之合法性、准确性、真实性、适用性、全性等概不负责，也无法负责。</p><p>除本网站注明之服务条款外，其它因使用本网站而引致之任何意外、疏忽、合约毁坏、诽谤、版权或知识产权侵犯及其所造成的各种损失（包括因下载而感染电脑病毒），本网站概不负责，亦不承担任何法律责任。</p>',
                drag:1,
                button:0,
                width:'800px'
            });
        }
    })
    
    
    
    $(window).bind('scroll',function(){
        var w_s_top = $(this).scrollTop();
        var g_hd = $('div.g-header') , g_st = $('div.g-sites'), m_fixed = $('div.m-fixed'), m_gotop = $('a.m-gotop');
        if(w_s_top >= g_hd.offset().top + g_hd.outerHeight(true)){
            g_st.css({'position':'fixed'});
            if(!g_st.find('.g-sites-logo').length){
                g_st.find('.layout').prepend('<div class="g-sites-logo"><a href="#">HJ</a></div>');
            }
            if(m_fixed.length){
                m_fixed.css({'position':'fixed','top':60});
            }
            
            if(m_gotop.length){
                m_gotop.addClass('m-gotop-show');
            }else{
                $(document.body).append('<a class="m-gotop" href="#"></a>');
            }
            var win_w = $(window).width(), blank = (win_w - 1000)/2;
            if(blank > m_gotop.outerWidth()){
                m_gotop.css('right',blank - m_gotop.outerWidth() - 10);
            }
        }else{
            g_st.removeAttr('style').find('.g-sites-logo').remove();
            if(m_fixed.length){
                m_fixed.css({'position':'absolute','top':242});
            }
            if(m_gotop.length){
                m_gotop.removeClass('m-gotop-show');
            }
        }
    })
    
    $('.g-nav').find('dt a').mouseover(function(){
        $(this).parents('li').addClass('nav-crt');
    })
    
    $(document.body).on('mouseover',function(e){
        var el = $(e.target);
        if(!el.closest('.nav-crt').length){
            $('.nav-crt').removeClass('nav-crt');
        }
    })
    
    
    $('.m-tab').tabs();
    
    $(document).on('click','.m-rt-news',function(){
        $(this).addClass('m-rt-news-crt').siblings().removeClass('m-rt-news-crt');
    })
    var i = 0 ; 
    
    require('./plugins/jquery.zclip.min');
    
    $('.email').zclip({
        path: "../themes/ZeroClipboard.swf", 
        copy: function(){ 
            return $('.email').text(); 
        },
        afterCopy: function(){//复制成功
            if($('.copytips').length){
                $('.copytips').remove();
            }
            
            var top = parseInt($('.email').offset().top)+34,left = parseInt($('.email').offset().left);
            $(document.body).append('<div class="copytips" style="top:'+top+'px;left:'+left+'px">复制成功！<i></i></div>');
            
            setTimeout(function(){
                if($('.copytips').length){
                    $('.copytips').remove();
                }
            },3000)
        }
    }); 
    
})