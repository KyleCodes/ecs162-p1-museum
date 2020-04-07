//=======================================================
//          DATE COUNTDOWN
//=======================================================
// Set the date we're counting down to
var countDownDate = new Date("May 10, 2020 17:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for seconds

    var secondsRemaining = distance / 1000;
    secondsRemaining = Math.floor(secondsRemaining);
    secondsRemaining = secondsRemaining.toLocaleString();

    // Display the result in the element with id="demo"
    document.getElementById("counter").innerHTML = secondsRemaining;
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "EXPIRED";
    }
}, 1000);

//=======================================================
//          SLIDESHOW
//=======================================================
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("my-slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


