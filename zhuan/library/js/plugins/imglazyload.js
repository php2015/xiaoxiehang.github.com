/** 
 * imglazyload v1.1 for jQuery
 * Author : chenmnkken@gmail.com
 * Url : http://stylechen.com/imglazyload2.html
 * Date : 2012-03-29
 */
define(function(require,exports,module){
    return function(zepto){
        (function($){
            $.fn.imgLazyLoad = function(settings) {
                var $this = $(this),
                _winScrollTop = 0,
                _winHeight = $(window).height();
                settings = $.extend({
                    threshold: 0,
                    placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC'
                },settings || {});
                lazyLoadPic();
                $('.g-bd').on('touchmove',function() {
                    var y = $(this).css('translateY');
                    _winScrollTop = $(window).scrollTop();
                    lazyLoadPic();
                });
                function lazyLoadPic() {
                    $this.each(function() {
                        var $self = $(this);
                        if ($self.is('img')) {
                            if ($self.attr('data-url')) {
                                var _offsetTop = $self.offset().top;
                                if ((_offsetTop - settings.threshold) <= (_winHeight + _winScrollTop)) {
                                    $self.attr('src', $self.attr('data-url'));
                                    $self.removeAttr('data-url');
                                }
                            }
                        } else {
                            if ($self.attr('data-url')) {
                                if ($self.css('background-image') == 'none') {
                                    $self.css('background-image', 'url(' + settings.placeholder + ')');
                                }
                                var _offsetTop = $self.offset().top;
                                if ((_offsetTop - settings.threshold) <= (_winHeight + _winScrollTop)) {
                                    $self.css('background-image', 'url(' + $self.attr('data-url') + ')');
                                    $self.removeAttr('data-url');
                                }
                            }
                        }
                    });
                }
            }

        })(zepto);
    }
})
