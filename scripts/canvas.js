define(['config'], function(config) {
  'use strict';

  var canvas  = document.createElement('canvas');
  canvas.context = canvas.getContext('2d');

  canvas.width  = config.screen.width || window.innerWidth;
  canvas.height = config.screen.height || window.innerHeight;
  canvas.style.position = 'absolute';
  canvas.style.top      = 0;
  canvas.style.right    = 0;
  canvas.style.bottom   = 0;
  canvas.style.left     = 0;
  
  var gameRoot = document.querySelector(config.gameRoot);
  gameRoot.style.position = 'relative';
  gameRoot.appendChild(canvas);

  return canvas;

});