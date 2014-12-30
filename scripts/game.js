/*
* ['file name'] (returned object name)
*/
define(['player'], function(Player){
	'use strict';
	
	function Game(){
		this.player = null;
	}
	
	Game.prototype.init = function(){
		this.player = new Player(0, 0, 128, 128);
		this.player.init();
	};
	
	Game.prototype.update = function(){
		this.player.update();
	};
	
	Game.prototype.render = function(){
		this.player.render();
	};
	
	return Game; // Return require.js module
	
});