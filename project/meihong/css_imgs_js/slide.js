(function($){
	slide = function(object, options){
		var slide = {};
		slide.version = '2.0';
		slide._data = {
			obj: $(object),
			def: {
				time: '3000',
				page: 1
			},
			opt: options
		};
		slide._util = {};
		slide._fn = {};
		/**
		 *  util
		 */
		(function(data, util) {
			var opt, num;
			util.getAttr = function(k) {
				opt = opt || $.extend(data.def, data.opt);
				return opt[k];
			};
			util.getNum = function() {
				return num;
			};
			util.setNum = function(n) {
				num = n;
			};
		})(slide._data, slide._util);
		/**
		 * fn.init
		 */
		(function(data, util, fn) {
			var obj = data.obj,
				item = obj.find("li"),
				page = {},
				html = "";
			fn.init = function() {
				obj.addClass("m-slide-player").css({
                    'position' : 'relative',
					'width': util.getAttr("width") || obj.width(),
					'height': util.getAttr("height") || obj.height()
				});
				item.addClass("m-slide-item").css({position:'absolute',top:0,left:0,width:'100%'}).each(function(i) {
					html += '<i>' + (i + 1) + '</i>';
				})
				page = $('<li class="m-slide-page" style="height:auto;"></li>').appendTo(obj);
				page.html(html);
			}();
			fn.getItem = function() {
				return item;
			};
			fn.getPage = function() {
				return page; 
			};
		})(slide._data, slide._util, slide._fn);
		/**
		 * fn.bind
		 */
		(function(data, util, fn) {
			fn.bind = function() {
				fn.getPage().delegate("i[class!=selected]", "mouseover", function() {
					util.setNum(parseInt(this.innerHTML) - 1); 
					fn.fade();
				});
				fn.getPage().hover(function() {
					fn.auto(false);
				}, function() {
					fn.auto(true);
				});
			}();
		})(slide._data, slide._util, slide._fn);
		/**
		 * fn.fade
		 */
		(function(util, fn) {
			var item = fn.getItem(),
				page = fn.getPage().find("i"),
				len = item.length - 1;
			fn.fade = function() {
				var n = util.getNum(),
					l = len;
				if (n < len) {
					util.setNum(n + 1);
				} else {
					util.setNum(0);
				}
				page.removeClass("selected").eq(n).addClass("selected");
				for (; n < l; l--) {
					item.eq(l).hide();
				}
				(n !== 0) ? item.eq(n - 1).show() : "";
				item.eq(n).hide().fadeIn(200);
			};
		})(slide._util, slide._fn);
		/**
		 * fn.auto
		 */
		(function(data, util, fn) {
			var t;
			fn.auto = function(flag) {
				if (flag) {
					t = setInterval(fn.fade, util.getAttr("time"));
				} else {
					clearInterval(t);
				}
			};
			util.setNum(util.getAttr("page") - 1);
			fn.fade();
			fn.auto(true);
		})(slide._data, slide._util, slide._fn);
	}
})(jQuery);
