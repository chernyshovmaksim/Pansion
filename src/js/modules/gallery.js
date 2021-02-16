import $ from 'jquery'

$(document).ready(function () {
    $('.gallery__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gallery__nav'
    })
    $('.gallery__nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.gallery__for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    })
})
