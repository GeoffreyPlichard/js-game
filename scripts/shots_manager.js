define(['shot'], function(Shot){
	'use strict';
	
	function ShotsManager(){
		this.shots = [];
	}
	
	ShotsManager.prototype.create = function(x, y, direction){
		this.shots.push(new Shot(x, y, direction));
	};
	
	ShotsManager.prototype.update = function(){
		for(var i=0, len = this.shots.length; i < len; ++i ){
			this.shots[i].update();
		}
	};
	
	ShotsManager.prototype.render = function(){
		for(var i=0, len = this.shots.length; i < len; ++i ){
			this.shots[i].render();
		}
	};
	
	return ShotsManager;
});