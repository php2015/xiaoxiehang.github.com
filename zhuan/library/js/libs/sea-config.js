var d = new Date();
var vYear = d.getFullYear();
var vMon = d.getMonth() + 1;
var vDay = d.getDate();
var s = Math.random();
var assetsVersion = vYear + (vMon<10 ? "0" + vMon :vMon) + (vDay<10 ? "0" + vDay : vDay) + s;
seajs.config({
    map:[
        [ /^(.*\.(?:css|js))(.*)$/i, '$1?ver='+ assetsVersion]
    ],
    alias:{
        'zepto':'zepto.min.js'
    }
})