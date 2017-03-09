$(document).ready(function () {
    <!-- Initialize Swiper -->
    var swiper = new Swiper('.swiper-container', {
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 70,
        effect: 'fade',
        loop: true
    });
    
    $('.swiper-button-next').hover(function () {
        var prev = $('.swiper-slide.swiper-slide-prev').css('background-image');
        var next = $('.swiper-slide.swiper-slide-next').css('background-image');
        $('.swiper-button-prev .preview-img').css('background-image', prev);
        $('.swiper-button-next .preview-img').css('background-image', next);
    })
})