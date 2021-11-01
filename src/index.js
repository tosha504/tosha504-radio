jQuery(document).ready(function ($) {
  const $nav = $(".header__navigation"),
    $burger = $(".header__burger"),
    $body = $("body");

  $burger.on("click", function (event) {
    $burger.toggleClass("active");
    $nav.toggleClass("active");
    $body.toggleClass("fixed-page");
  });
});
