define(function(require, exports, module){
    var elementCreate = require('./elementCreate'),
        ajax = require('./ajax'),
        mask = require('./mask');

    var eleWIN = elementCreate.create('div', {
        styles : {
            display: 'none',
            zIndex: 2,
            position: 'fixed',
            left: '50%',
            overflow: 'hidden'
        }
    }),eleBar = elementCreate.create('div', {
        styles : {
            fontSize: "12px",
            padding: "8px",
            backgroundColor: "#eee"
        }
    }),eleClose = elementCreate.create('a', {
        href : 'javascript:;',
        styles : {
            fontSize: "12px",
            color: "#34538b",
            textDecoration: "none",
            position: "absolute",
            margin: "-22px 0 0 85%"
        }
    }),eleBody = elementCreate.create('div', {
        styles : {
            backgroundColor: "#fff",
            borderTop: "1px solid #ddd"
        }
    }),eleMask = mask.mask;

    eleWIN.appendChild(eleBar);
    eleWIN.appendChild(eleClose);
    eleWIN.appendChild(eleBody);

    document.body.appendChild(eleWIN);

    eleBar.innerHTML = '弹出框';
    eleClose.innerHTML = '[关闭]';

    eleClose.onclick = function(){
        flbox.close();
        return false;
    }

    var flbox = {
        loading : function(){
            eleBody.innerHTML = '<div style="width:200px;height:100px;padding:10px;">加载中...</div>';
            this.position();
        },
        open : function(url){
            var self = flbox;
            ajax.get(url, function(html){
                eleBody.innerHTML = html;
                self.position();
            })
        },
        position : function(){
            eleWIN.style.display = 'block';
            eleMask.show();
            var winWidth = eleWIN.clientWidth,
                winHeight = eleWIN.clientHeight;

            eleWIN.style.marginLeft = '-' + winWidth/2 + 'px';
            console.log(document.body.offsetHeight)
            console.log(document.body.clientHeight)
            eleWIN.style.top = (document.body.offsetHeight - winHeight)/2 + 'px';
        },
        close : function(){
            eleMask.hide();
            eleWIN.style.display = 'none';
            eleBody.innerHTML = '';
        }
    }
    exports.open = flbox.open;
})
