define(function(require,exports,module){
    var zepto = require('zepto');
    
    function bookSlider(){
        this.opts = {
            'obj' : $('.m-slide'),
            'axis' : 'x',
            'width' : $(document).width(),
            'height' : 'auto',
            'autoSlider' : '',
            'speed' : 300,
            'dot' : true,
            'isRound' : true,
            'sIndex' : 0
        };
        this.isTransition = true;
        this.info();
    }
    bookSlider.prototype = {
        info : function(opts){
            var opts = $.extend({}, this.opts , opts || {}),
                obj = opts.obj,
                el = this;
            el.ul = obj.find('ul');
            el.li = el.ul.find('li');
            el.li_count = el.li.length;
            
            //是否循环滚动，添加dom
            if(opts.isRound){
                el.sIndex = 1;
                el.li_count += 2;
                el.ul.prepend( el.li.last().clone() ).append( el.li.first().clone() ).css({
                    'transform' : 'translate3D('+ -(opts.width * el.sIndex) +'px,0,0)'
                });
            }
            
            el.ul.css({
                'width' : opts.width * el.li_count
            }).find('li').each(function(){
                $(this).width(opts.width);
            })
            
            //手指滑动
            el.ul.on('touchstart',function(e){
                console.log(e.touches[0]);
                clearInterval(this.auto);
            }).on('touchmove',function(){
                console.log(11111);
            }).on('touchend',function(){
                this.auto = setInterval(function(){
                    console.log(el.sIndex)
                    el.move(el.sIndex++);
                },1000);
            }).trigger('touchend');
        },
        move : function(){
            var opts = $.extend({}, this.opts , opts || {}),
                el = this;
            el.isTransition = false;
            el.ul.css({
                'transition' : 'all .3s',
                'transform' : 'translate3D('+ -(opts.width * el.sIndex) +'px,0,0)'
            })
            
            if(opts.isRound){
                if(el.sIndex >= el.li_count-1){
                    el.sIndex = 1;
                    this.goEnds();
                }else if(el.sIndex <= 0){
                    el.sIndex = el.li_count - 2;
                    this.goEnds();
                }
            }
            
            setTimeout(function(){
                el.isTransition = true;
            },300);
        },
        
        //下一个
        next : function(){
            this.move(this.sIndex++);
        },
        
        //上一个
        prev : function(){
            this.move(this.sIndex--);
        },
        
        //自动
//        auto : function(){
//            var el = this;
//            setInterval(function(){
//                console.log(el.sIndex)
//                el.move(el.sIndex++);
//            },1000);
//        },
        //移到两端
        goEnds : function(opts){
            var opts = $.extend({}, this.opts , opts || {}),
                el = this;
            setTimeout(function(){
                el.ul.css({
                    'transition' : 'all 0',
                    'transform' : 'translate3D('+ -el.sIndex * opts.width +'px,0,0)'
                })
            },300);
        }
    }
    
    exports.bookSlider = bookSlider;
})