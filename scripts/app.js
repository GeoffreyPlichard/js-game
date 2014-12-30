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
		require(['config', 'utils', 'canvas', 'game'], function(config, utils, canvas, Game) { // All is loaded
      
			var gameObject = new Game;
			gameObject.init();
			
			// Create game loop
			function gameloop(){
				requestAnimationFrame(gameloop);
				
				gameObject.update();
				gameObject.render();
			}
			
			gameloop();

		});
	});

  });

})();
