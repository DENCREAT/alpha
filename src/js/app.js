($(document).ready(function() {
    const $clientSlider = $('.js-client-slider');
    const $clientSliderPrev = $('.js-client-slider-prev');
    const $clientSliderNext = $('.js-client-slider-next');

    $clientSlider.on('init', function(event, slick){
        slick.$slider.addClass('initialized');
    });

    $clientSlider.slick({
        prevArrow: $clientSliderPrev,
        nextArrow: $clientSliderNext,
        slidesToShow: 7,
        variableWidth: true
    });
}))();