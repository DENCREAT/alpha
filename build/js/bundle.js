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
  console.log($aboutSliderLink);
  $aboutSlider.on('init', function (event, slick) {
    slick.$slider.addClass('initialized');
  });
  $aboutSliderLink.on('click', function (event) {
    event.preventDefault();
  });
  $aboutSlider.slick({
    prevArrow: $aboutSliderPrev,
    nextArrow: $aboutSliderNext,
    slidesToShow: 1
  });
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxDQUFDLFlBQVc7QUFDUixNQUFNLGFBQWEsR0FBRyxDQUFDLENBQUMsbUJBQUQsQ0FBdkI7QUFDQSxNQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQyx3QkFBRCxDQUEzQjtBQUNBLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDLHdCQUFELENBQTNCO0FBRUEsRUFBQSxhQUFhLENBQUMsRUFBZCxDQUFpQixNQUFqQixFQUF5QixVQUFTLEtBQVQsRUFBZ0IsS0FBaEIsRUFBc0I7QUFDM0MsSUFBQSxLQUFLLENBQUMsT0FBTixDQUFjLFFBQWQsQ0FBdUIsYUFBdkI7QUFDSCxHQUZEO0FBSUEsRUFBQSxhQUFhLENBQUMsS0FBZCxDQUFvQjtBQUNoQixJQUFBLFNBQVMsRUFBRSxpQkFESztBQUVoQixJQUFBLFNBQVMsRUFBRSxpQkFGSztBQUdoQixJQUFBLFlBQVksRUFBRSxDQUhFO0FBSWhCLElBQUEsYUFBYSxFQUFFO0FBSkMsR0FBcEI7QUFNSCxDQWZEOztBQWlCQSxDQUFDLFlBQVc7QUFDUixNQUFNLGdCQUFnQixHQUFHLENBQUMsQ0FBQyw0QkFBRCxDQUExQjtBQUNBLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxrQkFBRCxDQUF0QjtBQUNBLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLHVCQUFELENBQTFCO0FBQ0EsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsdUJBQUQsQ0FBMUI7QUFFQSxFQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksZ0JBQVo7QUFFQSxFQUFBLFlBQVksQ0FBQyxFQUFiLENBQWdCLE1BQWhCLEVBQXdCLFVBQVMsS0FBVCxFQUFnQixLQUFoQixFQUFzQjtBQUMxQyxJQUFBLEtBQUssQ0FBQyxPQUFOLENBQWMsUUFBZCxDQUF1QixhQUF2QjtBQUNILEdBRkQ7QUFJQSxFQUFBLGdCQUFnQixDQUFDLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFVBQVMsS0FBVCxFQUFnQjtBQUN6QyxJQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0gsR0FGRDtBQUlBLEVBQUEsWUFBWSxDQUFDLEtBQWIsQ0FBbUI7QUFDZixJQUFBLFNBQVMsRUFBRSxnQkFESTtBQUVmLElBQUEsU0FBUyxFQUFFLGdCQUZJO0FBR2YsSUFBQSxZQUFZLEVBQUU7QUFIQyxHQUFuQjtBQUtILENBckJEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgJGNsaWVudFNsaWRlciA9ICQoJy5qcy1jbGllbnQtc2xpZGVyJyk7XHJcbiAgICBjb25zdCAkY2xpZW50U2xpZGVyUHJldiA9ICQoJy5qcy1jbGllbnQtc2xpZGVyLXByZXYnKTtcclxuICAgIGNvbnN0ICRjbGllbnRTbGlkZXJOZXh0ID0gJCgnLmpzLWNsaWVudC1zbGlkZXItbmV4dCcpO1xyXG5cclxuICAgICRjbGllbnRTbGlkZXIub24oJ2luaXQnLCBmdW5jdGlvbihldmVudCwgc2xpY2spe1xyXG4gICAgICAgIHNsaWNrLiRzbGlkZXIuYWRkQ2xhc3MoJ2luaXRpYWxpemVkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkY2xpZW50U2xpZGVyLnNsaWNrKHtcclxuICAgICAgICBwcmV2QXJyb3c6ICRjbGllbnRTbGlkZXJQcmV2LFxyXG4gICAgICAgIG5leHRBcnJvdzogJGNsaWVudFNsaWRlck5leHQsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiA3LFxyXG4gICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcclxuICAgIH0pO1xyXG59KSgpO1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgJGFib3V0U2xpZGVyTGluayA9ICQoJy5qcy1hYm91dC1zbGlkZXItaXRlbS1saW5rJyk7XHJcbiAgICBjb25zdCAkYWJvdXRTbGlkZXIgPSAkKCcuanMtYWJvdXQtc2xpZGVyJyk7XHJcbiAgICBjb25zdCAkYWJvdXRTbGlkZXJQcmV2ID0gJCgnLmpzLWFib3V0LXNsaWRlci1wcmV2Jyk7XHJcbiAgICBjb25zdCAkYWJvdXRTbGlkZXJOZXh0ID0gJCgnLmpzLWFib3V0LXNsaWRlci1uZXh0Jyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJGFib3V0U2xpZGVyTGluayk7XHJcblxyXG4gICAgJGFib3V0U2xpZGVyLm9uKCdpbml0JywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrKXtcclxuICAgICAgICBzbGljay4kc2xpZGVyLmFkZENsYXNzKCdpbml0aWFsaXplZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGFib3V0U2xpZGVyTGluay5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkYWJvdXRTbGlkZXIuc2xpY2soe1xyXG4gICAgICAgIHByZXZBcnJvdzogJGFib3V0U2xpZGVyUHJldixcclxuICAgICAgICBuZXh0QXJyb3c6ICRhYm91dFNsaWRlck5leHQsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICB9KTtcclxufSkoKTtcclxuIl19
