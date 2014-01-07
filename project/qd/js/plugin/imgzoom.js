
<div class="pro-images-big"><img src="#" alt=""></div>
    function mask(e){
        var eX=e.pageX,eY=e.pageY;
        var proImg=$('div.pro-images-img'),
            pX=proImg.offset().left,
            pY=proImg.offset().top;
    }

    $('div.pro-images-img').mousemove(function(e){
        var eX=e.pageX,eY=e.pageY;
        var _this=$(this),mask=_this.find('i.pro-images-mask'),
            thisX=_this.offset().left,
            thisY=_this.offset().top;
        var big=$('.pro-images-big');
        big.css({top:thisY,left:thisX+_this.width()+10});

        mask.css({top:eY-thisY-40,left:eX-thisX-40});
        if(mask.position().top<=0){
            mask.css('top',0);
        }else if(mask.position().top>=140){
            mask.css('top',140);
        }
        if(mask.position().left<=0){
            mask.css('left',0);
        }else if(mask.position().left>=200){
            mask.css('left',200);
        }

        var Left=mask.position().left,Top=mask.position().top;

        
        //var xx=-((Left-thisX)/_this.width()*100).toFixed(2)+'%';
        //var yy=-((Top-thisY)/_this.height()*100).toFixed(2)+'%';
        
        var xx=-(Left)*1.5;
        var yy=-(Top)*1.5;
        
        big.find('img').css({top:yy,left:xx});

        console.log('top:'+xx+',left:'+yy);
    })

    $('div.pro-images-img').hover(function(){
        var _this=$(this);
        _this.find('i.pro-images-mask').show();
        $('.pro-images-big').show().find('img').attr('src',_this.find('a').attr('href'));
    },function(){
        var _this=$(this);
        _this.find('i.pro-images-mask').hide();
        $('.pro-images-big').hide();
    }).find('a').click(function(e){
        e.preventDefault();
    })