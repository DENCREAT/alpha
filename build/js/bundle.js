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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxDQUFDLFlBQVc7QUFDUixNQUFNLGFBQWEsR0FBRyxDQUFDLENBQUMsbUJBQUQsQ0FBdkI7QUFDQSxNQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQyx3QkFBRCxDQUEzQjtBQUNBLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDLHdCQUFELENBQTNCO0FBRUEsRUFBQSxhQUFhLENBQUMsRUFBZCxDQUFpQixNQUFqQixFQUF5QixVQUFTLEtBQVQsRUFBZ0IsS0FBaEIsRUFBc0I7QUFDM0MsSUFBQSxLQUFLLENBQUMsT0FBTixDQUFjLFFBQWQsQ0FBdUIsYUFBdkI7QUFDSCxHQUZEO0FBSUEsRUFBQSxhQUFhLENBQUMsS0FBZCxDQUFvQjtBQUNoQixJQUFBLFNBQVMsRUFBRSxpQkFESztBQUVoQixJQUFBLFNBQVMsRUFBRSxpQkFGSztBQUdoQixJQUFBLFlBQVksRUFBRSxDQUhFO0FBSWhCLElBQUEsYUFBYSxFQUFFO0FBSkMsR0FBcEI7QUFNSCxDQWZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0ICRjbGllbnRTbGlkZXIgPSAkKCcuanMtY2xpZW50LXNsaWRlcicpO1xuICAgIGNvbnN0ICRjbGllbnRTbGlkZXJQcmV2ID0gJCgnLmpzLWNsaWVudC1zbGlkZXItcHJldicpO1xuICAgIGNvbnN0ICRjbGllbnRTbGlkZXJOZXh0ID0gJCgnLmpzLWNsaWVudC1zbGlkZXItbmV4dCcpO1xuXG4gICAgJGNsaWVudFNsaWRlci5vbignaW5pdCcsIGZ1bmN0aW9uKGV2ZW50LCBzbGljayl7XG4gICAgICAgIHNsaWNrLiRzbGlkZXIuYWRkQ2xhc3MoJ2luaXRpYWxpemVkJyk7XG4gICAgfSk7XG5cbiAgICAkY2xpZW50U2xpZGVyLnNsaWNrKHtcbiAgICAgICAgcHJldkFycm93OiAkY2xpZW50U2xpZGVyUHJldixcbiAgICAgICAgbmV4dEFycm93OiAkY2xpZW50U2xpZGVyTmV4dCxcbiAgICAgICAgc2xpZGVzVG9TaG93OiA3LFxuICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgfSk7XG59KSgpOyJdfQ==
