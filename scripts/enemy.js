define(['canvas', 'graphics'], function(canvas, graphics){
	'use strict';
	
	function Enemy(x, y, width, height){
		this.x = x;
		this.y = y;
		this.img = graphics.get('enemy_ship');
		this.width = width;
		this.height = height;
		this.speed = 4;
	}
	
	Enemy.prototype.update  = function(){
		this.y += this.speed;
	};
	
	Enemy.prototype.render  = function(){
		canvas.context.drawImage(this.img, this.x, this.y, this.width, this.height);
	};
	
	return Enemy;
});