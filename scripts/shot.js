define(['canvas', 'graphics'], function(canvas, graphics){
	'use strict';
	
	function Shot(x, y, direction){
		this.x = x;
		this.y = y;
		this.direction = direction;
		this.img = graphics.get('bullet_red');
		this.width = this.img.width;
		this.height = this.img.height;
		this.speed = 3;
	}
	
	Shot.prototype.update  = function(){
		this.x -= Math.cos(this.direction) * this.speed;
		this.y -= Math.sin(this.direction) * this.speed;
	};
	
	Shot.prototype.render  = function(){
		canvas.context.drawImage(this.img, this.x, this.y, this.width, this.height);
	};
	
	return Shot;
});