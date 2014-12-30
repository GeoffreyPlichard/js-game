define(['utils'], function(utils) {
  'use strict';

  var graphicsListLoaded = {};
  var graphicsList = {
    'player_ship' : 'images/spaceship-art-pack/Red/small_ships.png',
	'bullet_red' : 'images/spaceship-art-pack/Red/bullet_red.png'
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
		img.onload = (function(key){
			graphicsListLoaded[key] = this;
			if (utils.count(graphicsListLoaded) === utils.count(graphicsList)) {
				callback();
			}
		}).bind(img, key);
      }
    }
  };

  return graphics;

});