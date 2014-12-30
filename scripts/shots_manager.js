define(['shot', 'canvas'], function(Shot, canvas){
	'use strict';
	
	function ShotsManager(){
		this.shots = [];
	}
	
	ShotsManager.prototype.create = function(x, y, direction){
		this.shots.push(new Shot(x, y, direction));
	};
	
	ShotsManager.prototype.update = function(){
		var shot;
		for(var i=0, len = this.shots.length; i < len; ++i ){
			shot = this.shots[i];
			shot.update();
			
			// Delete shots if is out of the stage
			if(shot.y > canvas.height || shot.y  + shot.height < 0 || shot.x + shot.width < 0 || shot.x > canvas.width){
				this.shots.splice(i, 1);
				len--;
			}
		}
		console.info(this.shots.length);
	};
	
	ShotsManager.prototype.render = function(){
		for(var i=0, len = this.shots.length; i < len; ++i ){
			this.shots[i].render();
		}
	};
	
	return ShotsManager;
});