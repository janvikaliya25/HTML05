// // $(document).ready(function () {
// //   $(".toggle-menu").click(function () {
// //     $(".navbar").toggleClass("active");
// //   });
// // });

// $(document).ready(function () {
//   $(".toggle-menu").click(function () {
//     $(".navbar").toggleClass("active");
//   });
//   $(".toggle-menu").click(function(){
//     $(".navbar").toggleClass("dactive")
//   });
// });

$(document).ready(function () {
  $(".toggle-menu").click(function () {
    $(".navbar").toggleClass("active");
  });

  // Optional: auto-close menu when a link is clicked
  $(".nav-links a").click(function () {
    if ($(window).width() <= 480) {
      $(".navbar").removeClass("active");
    }
  });
});
