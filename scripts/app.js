/**
 * Point d'entrée de l'application
**/

(function() {
  'use strict';

  requirejs.config({
    paths: {
      'buzz' : 'vendor/buzz'
    },
    shim: {
      'buzz': {
        "exports": "buzz",
        "deps": []
      }
    }
  });

  require(['graphics'], function(graphics) {

    graphics.load(function(){
		require(['config', 'utils', 'canvas'], function(config, utils, canvas) {
      
		  var img = graphics.get('player_ship');
		  console.log(img, canvas, canvas.context);
		  canvas.context.drawImage(img, 0, 0);

		});
	});

  });

})();
