(function() {
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
})();

(function() {
    const $aboutSliderLink = $('.js-about-slider-item-link');
    const $aboutSlider = $('.js-about-slider');
    const $aboutSliderPrev = $('.js-about-slider-prev');
    const $aboutSliderNext = $('.js-about-slider-next');

    console.log($aboutSliderLink);

    $aboutSlider.on('init', function(event, slick){
        slick.$slider.addClass('initialized');
    });

    $aboutSliderLink.on('click', function(event) {
        event.preventDefault();
    });

    $aboutSlider.slick({
        prevArrow: $aboutSliderPrev,
        nextArrow: $aboutSliderNext,
        slidesToShow: 1
    });
})();
