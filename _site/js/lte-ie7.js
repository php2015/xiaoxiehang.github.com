/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-undo' : '&#xe000;',
			'icon-redo' : '&#xe001;',
			'icon-forward' : '&#xe002;',
			'icon-reply' : '&#xe003;',
			'icon-image' : '&#xe004;',
			'icon-qrcode' : '&#xe005;',
			'icon-tags' : '&#xe006;',
			'icon-bubbles' : '&#xe007;',
			'icon-home' : '&#xe008;',
			'icon-backward' : '&#xe009;',
			'icon-forward-2' : '&#xe00a;',
			'icon-first' : '&#xe00b;',
			'icon-last' : '&#xe00c;',
			'icon-chrome' : '&#xe00d;',
			'icon-firefox' : '&#xe00e;',
			'icon-IE' : '&#xe00f;',
			'icon-opera' : '&#xe010;',
			'icon-heart' : '&#xe011;',
			'icon-close' : '&#xe013;',
			'icon-minus' : '&#xe017;',
			'icon-plus' : '&#xe018;',
			'icon-github' : '&#xe014;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};