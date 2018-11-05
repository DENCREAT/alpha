(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQyxDQUFDLENBQUMsUUFBRCxDQUFELENBQVksS0FBWixDQUFrQixZQUFXO0FBQzFCLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBQyxtQkFBRCxDQUF2QjtBQUNBLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDLHdCQUFELENBQTNCO0FBQ0EsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUMsd0JBQUQsQ0FBM0I7QUFFQSxFQUFBLGFBQWEsQ0FBQyxFQUFkLENBQWlCLE1BQWpCLEVBQXlCLFVBQVMsS0FBVCxFQUFnQixLQUFoQixFQUFzQjtBQUMzQyxJQUFBLEtBQUssQ0FBQyxPQUFOLENBQWMsUUFBZCxDQUF1QixhQUF2QjtBQUNILEdBRkQ7QUFJQSxFQUFBLGFBQWEsQ0FBQyxLQUFkLENBQW9CO0FBQ2hCLElBQUEsU0FBUyxFQUFFLGlCQURLO0FBRWhCLElBQUEsU0FBUyxFQUFFLGlCQUZLO0FBR2hCLElBQUEsWUFBWSxFQUFFLENBSEU7QUFJaEIsSUFBQSxhQUFhLEVBQUU7QUFKQyxHQUFwQjtBQU1ILENBZkEsQ0FBRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIigkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0ICRjbGllbnRTbGlkZXIgPSAkKCcuanMtY2xpZW50LXNsaWRlcicpO1xyXG4gICAgY29uc3QgJGNsaWVudFNsaWRlclByZXYgPSAkKCcuanMtY2xpZW50LXNsaWRlci1wcmV2Jyk7XHJcbiAgICBjb25zdCAkY2xpZW50U2xpZGVyTmV4dCA9ICQoJy5qcy1jbGllbnQtc2xpZGVyLW5leHQnKTtcclxuXHJcbiAgICAkY2xpZW50U2xpZGVyLm9uKCdpbml0JywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrKXtcclxuICAgICAgICBzbGljay4kc2xpZGVyLmFkZENsYXNzKCdpbml0aWFsaXplZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGNsaWVudFNsaWRlci5zbGljayh7XHJcbiAgICAgICAgcHJldkFycm93OiAkY2xpZW50U2xpZGVyUHJldixcclxuICAgICAgICBuZXh0QXJyb3c6ICRjbGllbnRTbGlkZXJOZXh0LFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNyxcclxuICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXHJcbiAgICB9KTtcclxufSkpKCk7Il19
