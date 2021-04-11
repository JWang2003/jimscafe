//Enables smooth scroll for anchor element clicks
const scroll = new SmoothScroll('a[href*="#"]', {
    speed:900,
    speedAsDuration: true
});


//Enables smooth scroll for specific div element clicks
$("#toRestaurant").click(function() {
    $('html, body').animate({
        scrollTop: $("#Restaurant").offset().top
    }, 800);
});
$("#toAboutUs").click(function() {
    $('html, body').animate({
        scrollTop: $("#About-Us").offset().top
    }, 800);
});
$("#toGallery").click(function() {
    $('html, body').animate({
        scrollTop: $("#Gallery").offset().top
    }, 800);
});