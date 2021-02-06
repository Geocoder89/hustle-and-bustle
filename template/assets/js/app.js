window.jQuery = window.$ = jQuery;  
(function($) { "use strict";
    //Preloader
    Royal_Preloader.config({
        mode           : 'logo',
        logo           : 'assets/images/HandB2 copy.png',
        logo_size      : [200, 100],
        showProgress   : true,
        showPercentage : true,
        text_colour: '#000000',
        background:  '#ffffff'
    });
})(jQuery);

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


var slideIndex = 0;
showSlides();

function showSlides() {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}    
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
setTimeout(showSlides, 2000); // Change image every 2 seconds
}


var owl = $('.owl-carousel');
owl.owlCarousel({
items:3,
loop:true,
margin:20,
autoplay:true,
autoplayTimeout:2000,
autoplayHoverPause:true
});
