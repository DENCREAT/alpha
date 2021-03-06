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
    const isVisibleCls = 'is-visible';


    $aboutSlider.slick({
        prevArrow: $aboutSliderPrev,
        nextArrow: $aboutSliderNext,
        slidesToShow: 1
    });

    $aboutSlider.on('init', function(event, slick){
        slick.$slider.addClass('initialized');
    });

    $aboutSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        if (nextSlide >= 1) {
            $aboutSliderPrev.addClass(isVisibleCls);
        } else {
            $aboutSliderPrev.removeClass(isVisibleCls);
        }
    });

    $aboutSliderLink.on('click', function(event) {
        event.preventDefault();
    });

})();
