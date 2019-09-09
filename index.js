$('.pic').click(function () {
    $('.wrapper').addClass('activeWrapper');
    $(this).addClass('active')
})

$('.close').click(function (e) {
    e.stopPropagation();
    $('.activeWrapper').removeClass('activeWrapper');
    $('.active').removeClass('active')
})