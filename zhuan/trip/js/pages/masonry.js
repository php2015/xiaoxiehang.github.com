define(function(require,exports,module){
    var jquery = require('jquery');
    require('../plugins/jquery.masonry.min');
    
    $('.m-realwall ul').masonry({
	  itemSelector: 'li'
	});
})