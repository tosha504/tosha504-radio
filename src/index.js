jQuery(document).ready(function ($) {
  const $nav = $(".header__navigation"),
    $burger = $(".header__burger"),
    $body = $("body"),
    $header = $(".header"),
    $logo = $(".header__logo img"),
    $slider = $(".programs__slider");

  if (!$body.hasClass("home")) {
    $header
      .css({
        background: "linear-gradient(96.8deg, #E18C44 18.05%, #FFCC81 91.37%)",
        padding: "20px",
      })
      .removeClass("header__logo")
      .addClass(".header__logo_m");
  }

  $burger.on("click", function (event) {
    $burger.toggleClass("active");
    $nav.toggleClass("active");
    $body.toggleClass("fixed-page");
  });

  let $doc_w = $(document).width();

  console.log($doc_w);
  if ($doc_w < 769) {
    $slider.slick({
      slidesToShow: 1,
      arrows: false,
      cssEase: "linear",
      autoplay: true,
      autoplaySpeed: 3000,
    });
  } else {
    $slider.slick({
      arrows: false,
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  }

  $(".guests__slider").slick({
    slidesToShow: 1,
    arrows: false,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
  });
});
