'use strict';
var app = angular.module('carsApp',[]);

// retina images
var retinaLoad = function(){
  var images = document.querySelectorAll("img[data-1x]");

  if(window.devicePixelRatio == 2){
    Array.prototype.forEach.call(images, function(el, i){
      var src = el.getAttribute("data-2x");
      el.setAttribute("src",src);
    });
  }else{
    Array.prototype.forEach.call(images, function(el, i){
      var src = el.getAttribute("data-1x");
      el.setAttribute("src", src);
    });
  }
}();