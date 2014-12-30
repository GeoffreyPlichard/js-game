define(['utils'], function(utils) {
  'use strict';

  var graphicsListLoaded = {};
  var graphicsList = {
    'player_ship' : 'images/spaceship-art-pack/Red/small_ships.png'
  };

  var graphics = {
    get : function(key) {
      if (!key in graphicsListLoaded) {
        throw new Error('Can\'t get `'+ key +'`');
      }
      return graphicsListLoaded[key];
    },
    load : function(callback) {
      for (var key in graphicsList) {
        var img = new Image();
        img.src = graphicsList[key];
		img.onload = function(){
			if (utils.count(graphicsListLoaded) === utils.count(graphicsList)) {
				callback();
			}
		};
        graphicsListLoaded[key] = img;
      }
    }
  };

  return graphics;

});