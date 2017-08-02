$(document).ready(function() {
  $(".slct").click(function() {
    $(this).toggleClass("btn-success");
    $(this).parent().next().toggleClass("hidden");
    
  });
  });
