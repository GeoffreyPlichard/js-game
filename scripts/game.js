/*
* ['file name'] (returned object name)
*/
define(['player', 'controls'], function(Player, controls){
	'use strict';
	
	function Game(){
		this.player = null;
	}
	
	Game.prototype.init = function(){
		this.player = new Player(0, 0, controls.width, controls.height);
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