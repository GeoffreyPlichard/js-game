/*
* ['file name'] (returned object name)
*/
define(['graphics', 'canvas'], function(graphics, canvas){
	'use strict';
	
	function Player(x, y, width, height){
		this.x = x;
		this.y = y;
		this.width = width;
		this.heght = height;
		this.img = null;
	}
	
	Player.prototype.init = function(){
		this.img = graphics.get('player_ship');
	};
	
	Player.prototype.update = function(){
		
	};
	
	Player.prototype.render = function(){
		canvas.context.drawImage(this.img, this.x, this.y);
	};
	
	return Player;
	
});