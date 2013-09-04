<script src='{{ site.url }}/js/jquery.js'></script>
<script src='{{ site.url }}/js/prettify.js'></script>
<script src='{{ site.url }}/js/main.js'></script>
<script src='{{ site.url }}/js/jquery.autocomplete.js'></script>
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