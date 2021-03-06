// preloader
// preloader
$("#status").fadeOut(); // will first fade out the loading animation
$("#preloader").delay(3050).fadeOut("slow"); // will fade out the white DIV that covers the website.
$("body").delay(3050).css({
  overflow: "visible",
});
$(function () {
  var text = $(".text");

  text.removeClass("hidden").delay(3050).fadeIn("slow");
  setTimeout(function () {
    text.addClass("hidden").delay(2052).fadeOut("slow");
  }, 2000);
});
