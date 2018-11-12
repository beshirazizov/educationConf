$(document).ready(function () {

  $("#homepage .texts").css("transition", "all linear 1.5s");
  $("#homepage .texts .plink").css("transition", "all linear 1.5s");
  $("#homepage .texts a").css("transition", "all linear 1s");
  $("#homepage .texts .logos").css("transition", "all linear 1s");
  $("#homepage").css("color", "black")

  setTimeout(function () {
    $("#homepage .texts .plink").css("color", "black")
    $("#homepage .texts a").css("color", "#00428d")
  }, 500);

  setTimeout(function () {
    $("#homepage .texts .logos").css("opacity", "1")
  }, 1000);
});