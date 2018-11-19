(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

(function () {
  var $clientSlider = $('.js-client-slider');
  var $clientSliderPrev = $('.js-client-slider-prev');
  var $clientSliderNext = $('.js-client-slider-next');
  $clientSlider.on('init', function (event, slick) {
    slick.$slider.addClass('initialized');
  });
  $clientSlider.slick({
    prevArrow: $clientSliderPrev,
    nextArrow: $clientSliderNext,
    slidesToShow: 7,
    variableWidth: true
  });
})();

(function () {
  var $aboutSliderLink = $('.js-about-slider-item-link');
  var $aboutSlider = $('.js-about-slider');
  var $aboutSliderPrev = $('.js-about-slider-prev');
  var $aboutSliderNext = $('.js-about-slider-next');
  var isVisibleCls = 'is-visible';
  $aboutSlider.slick({
    prevArrow: $aboutSliderPrev,
    nextArrow: $aboutSliderNext,
    slidesToShow: 1
  });
  $aboutSlider.on('init', function (event, slick) {
    slick.$slider.addClass('initialized');
  });
  $aboutSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if (nextSlide >= 1) {
      $aboutSliderPrev.addClass(isVisibleCls);
    } else {
      $aboutSliderPrev.removeClass(isVisibleCls);
    }
  });
  $aboutSliderLink.on('click', function (event) {
    event.preventDefault();
  });
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxDQUFDLFlBQVc7QUFDUixNQUFNLGFBQWEsR0FBRyxDQUFDLENBQUMsbUJBQUQsQ0FBdkI7QUFDQSxNQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQyx3QkFBRCxDQUEzQjtBQUNBLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDLHdCQUFELENBQTNCO0FBRUEsRUFBQSxhQUFhLENBQUMsRUFBZCxDQUFpQixNQUFqQixFQUF5QixVQUFTLEtBQVQsRUFBZ0IsS0FBaEIsRUFBc0I7QUFDM0MsSUFBQSxLQUFLLENBQUMsT0FBTixDQUFjLFFBQWQsQ0FBdUIsYUFBdkI7QUFDSCxHQUZEO0FBSUEsRUFBQSxhQUFhLENBQUMsS0FBZCxDQUFvQjtBQUNoQixJQUFBLFNBQVMsRUFBRSxpQkFESztBQUVoQixJQUFBLFNBQVMsRUFBRSxpQkFGSztBQUdoQixJQUFBLFlBQVksRUFBRSxDQUhFO0FBSWhCLElBQUEsYUFBYSxFQUFFO0FBSkMsR0FBcEI7QUFNSCxDQWZEOztBQWlCQSxDQUFDLFlBQVc7QUFDUixNQUFNLGdCQUFnQixHQUFHLENBQUMsQ0FBQyw0QkFBRCxDQUExQjtBQUNBLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxrQkFBRCxDQUF0QjtBQUNBLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLHVCQUFELENBQTFCO0FBQ0EsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsdUJBQUQsQ0FBMUI7QUFDQSxNQUFNLFlBQVksR0FBRyxZQUFyQjtBQUdBLEVBQUEsWUFBWSxDQUFDLEtBQWIsQ0FBbUI7QUFDZixJQUFBLFNBQVMsRUFBRSxnQkFESTtBQUVmLElBQUEsU0FBUyxFQUFFLGdCQUZJO0FBR2YsSUFBQSxZQUFZLEVBQUU7QUFIQyxHQUFuQjtBQU1BLEVBQUEsWUFBWSxDQUFDLEVBQWIsQ0FBZ0IsTUFBaEIsRUFBd0IsVUFBUyxLQUFULEVBQWdCLEtBQWhCLEVBQXNCO0FBQzFDLElBQUEsS0FBSyxDQUFDLE9BQU4sQ0FBYyxRQUFkLENBQXVCLGFBQXZCO0FBQ0gsR0FGRDtBQUlBLEVBQUEsWUFBWSxDQUFDLEVBQWIsQ0FBZ0IsY0FBaEIsRUFBZ0MsVUFBUyxLQUFULEVBQWdCLEtBQWhCLEVBQXVCLFlBQXZCLEVBQXFDLFNBQXJDLEVBQWdEO0FBQzVFLFFBQUksU0FBUyxJQUFJLENBQWpCLEVBQW9CO0FBQ2hCLE1BQUEsZ0JBQWdCLENBQUMsUUFBakIsQ0FBMEIsWUFBMUI7QUFDSCxLQUZELE1BRU87QUFDSCxNQUFBLGdCQUFnQixDQUFDLFdBQWpCLENBQTZCLFlBQTdCO0FBQ0g7QUFDSixHQU5EO0FBUUEsRUFBQSxnQkFBZ0IsQ0FBQyxFQUFqQixDQUFvQixPQUFwQixFQUE2QixVQUFTLEtBQVQsRUFBZ0I7QUFDekMsSUFBQSxLQUFLLENBQUMsY0FBTjtBQUNILEdBRkQ7QUFJSCxDQTlCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIihmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0ICRjbGllbnRTbGlkZXIgPSAkKCcuanMtY2xpZW50LXNsaWRlcicpO1xyXG4gICAgY29uc3QgJGNsaWVudFNsaWRlclByZXYgPSAkKCcuanMtY2xpZW50LXNsaWRlci1wcmV2Jyk7XHJcbiAgICBjb25zdCAkY2xpZW50U2xpZGVyTmV4dCA9ICQoJy5qcy1jbGllbnQtc2xpZGVyLW5leHQnKTtcclxuXHJcbiAgICAkY2xpZW50U2xpZGVyLm9uKCdpbml0JywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrKXtcclxuICAgICAgICBzbGljay4kc2xpZGVyLmFkZENsYXNzKCdpbml0aWFsaXplZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGNsaWVudFNsaWRlci5zbGljayh7XHJcbiAgICAgICAgcHJldkFycm93OiAkY2xpZW50U2xpZGVyUHJldixcclxuICAgICAgICBuZXh0QXJyb3c6ICRjbGllbnRTbGlkZXJOZXh0LFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNyxcclxuICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXHJcbiAgICB9KTtcclxufSkoKTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0ICRhYm91dFNsaWRlckxpbmsgPSAkKCcuanMtYWJvdXQtc2xpZGVyLWl0ZW0tbGluaycpO1xyXG4gICAgY29uc3QgJGFib3V0U2xpZGVyID0gJCgnLmpzLWFib3V0LXNsaWRlcicpO1xyXG4gICAgY29uc3QgJGFib3V0U2xpZGVyUHJldiA9ICQoJy5qcy1hYm91dC1zbGlkZXItcHJldicpO1xyXG4gICAgY29uc3QgJGFib3V0U2xpZGVyTmV4dCA9ICQoJy5qcy1hYm91dC1zbGlkZXItbmV4dCcpO1xyXG4gICAgY29uc3QgaXNWaXNpYmxlQ2xzID0gJ2lzLXZpc2libGUnO1xyXG5cclxuXHJcbiAgICAkYWJvdXRTbGlkZXIuc2xpY2soe1xyXG4gICAgICAgIHByZXZBcnJvdzogJGFib3V0U2xpZGVyUHJldixcclxuICAgICAgICBuZXh0QXJyb3c6ICRhYm91dFNsaWRlck5leHQsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICB9KTtcclxuXHJcbiAgICAkYWJvdXRTbGlkZXIub24oJ2luaXQnLCBmdW5jdGlvbihldmVudCwgc2xpY2spe1xyXG4gICAgICAgIHNsaWNrLiRzbGlkZXIuYWRkQ2xhc3MoJ2luaXRpYWxpemVkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkYWJvdXRTbGlkZXIub24oJ2JlZm9yZUNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpIHtcclxuICAgICAgICBpZiAobmV4dFNsaWRlID49IDEpIHtcclxuICAgICAgICAgICAgJGFib3V0U2xpZGVyUHJldi5hZGRDbGFzcyhpc1Zpc2libGVDbHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRhYm91dFNsaWRlclByZXYucmVtb3ZlQ2xhc3MoaXNWaXNpYmxlQ2xzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkYWJvdXRTbGlkZXJMaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxufSkoKTtcclxuIl19
