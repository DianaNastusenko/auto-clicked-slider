'use strict';
/*global document, window, alert, console, require*/

var slideIndex = 1;
var time;
showSlides(slideIndex);

function plusSlides(n) {
    clearTimeout(time);
    slideIndex += n;
    showSlides(slideIndex);
}

function currentSlide(n) {
    clearTimeout(time);
    slideIndex = n;
    showSlides(slideIndex);
}

function showSlides() {
    var i,
        slides = document.getElementsByClassName("mySlide"),
        dots = document.getElementsByClassName("dot");

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    slideIndex++;
    time = window.setTimeout(showSlides, 3000);
}