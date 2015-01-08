    $(function(){
        var slideI = 0,ss = '';
        var imglist = $('.m-img-list').find('ul');
        $('.m-img-list').find('ul').css({'position':'absolute','left':0,'top':0}).wrap('<div class="m-img-listbox" style="position:relative;width:100%;height:65px;overflow:hidden;">');

        $('.m-img-list').find('li').mouseover(function(){
            var _this = $(this);
            slideI = _this.index();
            setbig(slideI);
            _this.addClass('crt').siblings().removeClass('crt');
        })

        $('.m-img-list-prev').click(function(){
            if(slideI <= 0){
                slideI = imglist.find('li').length-1;
            }else{
                slideI--;
            }
            setbig(slideI);
        })
        $('.m-img-list-next').click(function(){
            if(slideI >= imglist.find('li').length-1){
                slideI = 0;
            }else{
                slideI++;
            }
            setbig(slideI);
        })
        function setbig(i){
            var li = imglist.find('li').eq(i);
            li.addClass('crt').siblings().removeClass('crt');
            li.parents('.m-img').find('.m-img-big img').attr('src',li.find('img').data('big'));
        }

        $('.m-img').hover(function(){
            clearInterval(ss);
        },function(){
            ss = setInterval(function(){
                if(slideI >= imglist.find('li').length-1){
                    slideI = 0;
                }else{
                    slideI++;
                }
                setbig(slideI);
            },1500);
        }).trigger('mouseleave');
    })