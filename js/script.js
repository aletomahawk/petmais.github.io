$(document).ready(function() {
  var $subitem = $(".subitem");
  $('.item').on("click", "li", function() {
    $subitem.hide();
    $(".subitem", this).show();
  });
});