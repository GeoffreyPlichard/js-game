define(['enemy', 'canvas'], function(Enemy, canvas){
	'use strict';
	
	function EnemiesManager(){
		this.enemies = [];
	}
	
	EnemiesManager.prototype.create = function(x, y, width, height){
		this.enemies.push(new Enemy(x, y, width, height));
	};
	
	EnemiesManager.prototype.update = function(){
		var enemy;
		for(var i=0, len = this.enemies.length; i < len; ++i ){
			enemy = this.enemies[i];
			enemy.update();
			
			// Delete enemies if is out of the stage
			if(enemy.y > canvas.height || enemy.y  + enemy.height < 0 || enemy.x + enemy.width < 0 || enemy.x > canvas.width){
				this.enemies.splice(i, 1);
				len--;
			}
		}

	};
	
	EnemiesManager.prototype.render = function(){
		for(var i=0, len = this.enemies.length; i < len; ++i ){
			this.enemies[i].render();
		}
	};
	
	return EnemiesManager;
});