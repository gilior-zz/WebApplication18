function checkOffset() {
    if ($('.fixed-button').offset().top + $('.fixed-button').height()
                                           >= $('#footer').offset().top) {
        $('.fixed-button').css('position', 'absolute');
        $('.fixed-button').style.bottom = $('#footer').height + "px";
    }

    if ($(document).scrollTop() + window.innerHeight < $('#footer').offset().top)
        $('.fixed-button').css('position', 'fixed'); // restore when you scroll up

}
$(document).scroll(function () {
    checkOffset();
});

