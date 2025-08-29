// nav-bar toggle
$(document).ready(function () {
  $(".toggle-menu").click(function () {
    $(".navbar").toggleClass("active");
  });

  // Optional: auto-close menu when a link is clicked
  // $(".nav-links a").click(function () {
  //   if ($(window).width() <= 480) {
  //     $(".navbar").removeClass("active");
  //   }
  // });
});


// slider-1
// $(document).ready(function () {
//   let slides = $(".slide");
//   let current = 0;

//   function newSlide() {
//     slides.eq(current).removeClass("active");
//     current = (current + 1) % slides.length; // loop back
//     slides.eq(current).addClass("active");
//   }

//   setInterval(newSlide, 4000); // change every 3s
// });


// headline js in hero section
$(document).ready(function () {
  var texts = [
    "Modern Axure Template For Beautiful Prototypes",
    "Creative & Responsive Web Design",
    "Build Faster with HTML, CSS, and jQuery",
    "Perfect for Startups and Developers"
  ];

  var count = 0;
  var index = 0;
  var currentText = "";
  var letter = "";

  function type() {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    $("#headline").text(letter);
    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 1500); // pause before next word
    } else {
      setTimeout(type, 100); // typing speed
    }
  }
  type();
});