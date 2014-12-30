/*
* ['file name'] (returned object name)
*/
define(['graphics', 'canvas', 'controls'], function(graphics, canvas, controls){
	'use strict';
	
	function Player(x, y, width, height){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.speed = 2;
		this.img = null;
	}
	
	Player.prototype.init = function(){
		this.img = graphics.get('player_ship');
	};
	
	Player.prototype.update = function(){
		if(controls.keyboard.down){
			this.y += this.speed;
		}
		if(controls.keyboard.up){
			this.y -= this.speed;
		}
		if(controls.keyboard.left){
			this.x -= this.speed;
		}
		if(controls.keyboard.right){
			this.x += this.speed;
		}
	};
	
	Player.prototype.render = function(){
		canvas.context.drawImage(
			this.img,
			this.x,
			this.y,
			this.width,
			this.height
		);
	};
	
	return Player;
	
});