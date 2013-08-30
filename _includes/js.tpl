<script src='/js/jquery.js'></script>
<script src='/js/prettify.js'></script>
<script src='/js/main.js'></script>
<script src="http://f2es.net/js/jquery.ui.autocomplete.js"></script>
<script>
    $(function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( ".search-txt" ).autocomplete({
      source: availableTags
    });
  });
</script>