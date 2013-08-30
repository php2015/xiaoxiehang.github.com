<script src='/js/jquery.js'></script>
<script src='/js/prettify.js'></script>
<script src='/js/main.js'></script>
<script src="/js/jquery.autocomplete.js"></script>
<script>
$(function() {
	$(".search-txt").autocomplete("/tags/search", {
		width: 224,
		multiple: true,
		matchContains: true,
		formatItem: function(row, i, max) {
			return row;
		}
	});
});
</script>