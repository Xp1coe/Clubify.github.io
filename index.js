document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.querySelector('.carousel');
    var myCarousel = new Carousel(carousel, {
        autoplay: true,
        interval: 3000,
        transition: 'slide'
    });
});
