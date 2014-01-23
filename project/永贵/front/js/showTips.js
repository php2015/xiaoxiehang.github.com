(function () {
    $.extend({
        showTips: function (opts) {
            var defaults = {
                type: 'proper',    //proper | error | warn
                message: '',       //文字信息
                showTime: 2000,    //显示时间
                callback: function () { return true; } //回调函数
            }
            var opts = $.extend({}, defaults, opts);
            if ($('div.tips-mod').length) {
                $('div.tips-mod').remove();
            }
            var h = [
                '<div class="tips-mod">',
                    '<div class="tips-cont">',
                        '<em class="tips-' + opts.type + '"><i></i>' + opts.message + '</em>',
                        '<span></span><span class="tips-rs"></span>',
                    '</div>',
                '</div>'
            ];
            $(document.body).append(h.join(''));
            var self = $('div.tips-mod');
            self.animate({ 'marginTop': '20px', 'opacity': 1 }, 500, function () {
                setTimeout(function () {
                    self.animate({ 'marginTop': '40px', 'opacity': 0 }, 500, function () {
                        self.remove();
                        opts.callback();
                    })
                }, opts.showTime);
            });
        }
    });
})(jQuery);