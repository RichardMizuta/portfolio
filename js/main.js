$(function() {
    $('.hamburger').on('click', function() {
        $('.hamburger').toggleClass('active');
        $('#page').toggleClass('slide-right');
    });
});
