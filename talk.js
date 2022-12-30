$(function() {
    initAnimate();
    $('#yes').click(function(event) {
        modal('', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
});



function fireworks() {
    $('.page_one').addClass('hide');
}

function modal(content, callback) {
    const tpl = '<div class="container">' +
        '<div class="mask"></div>' +
        '<div class="modal">' +
        '<img src="laopo.png" alt="爱老婆">' +
        '<button type="button" id="confirm" class="confirm">+</button>' +
        '</div>' +
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        // callback();
    });
}