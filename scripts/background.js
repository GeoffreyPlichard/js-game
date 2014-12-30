define(['canvas', 'config', 'utils'], function(canvas, config, utils){
	function Background(){
		this.stars = [];
	}
	
	Background.prototype.init = function(){
		for(var i=0; i < config.nbStars; i++){
			this.stars.push({
				x: utils.random(0, canvas.width),
				y: utils.random(0, canvas.height),
				radius: utils.random(1, 5),
				color: 'rgba(255, 255, 255, '+ utils.random(0.5,1) + ')'
			});
		}
	};
	
	Background.prototype.update = function(){
		for(var i=0, len = this.stars.length; i< len; ++i){
			star = this.stars[i];
			star.y += star.radius;
			
			// Infinite stars
			if(star.y + star.radius >= canvas.height){
				star.y = 0;
				star.x = utils.random(0, canvas.width);
			}
		}
	};
	
	Background.prototype.render = function(){
		var star;
		for(var i=0, len = this.stars.length; i< len; ++i){
			star = this.stars[i];
			
			canvas.context.fillStyle = star.color;
			
			canvas.context.beginPath();
			canvas.context.arc(star.x, star.y, star.radius, 0, Math.PI*2);
			canvas.context.fill();
			canvas.context.closePath();
		}
	};
	
	return Background;
});