/*
* ['file name'] (returned object name)
*/
define(['player', 'canvas', 'background','shot', 'shots_manager','enemies_manager', 'controls', 'sounds', 'utils', 'config'], function(Player, canvas, Background,Shot, ShotManager, EnemiesManager, controls, sounds, utils, config){
	'use strict';
	
	var lastPlayerShot = 0;
	var lastEnemyCreated = 0;
	
	function Game(){
		this.player = null;
		this.background = null;
		this.shots = null;
		this.enemiesManager = null;
		this.count = 0;
	}
	
	Game.prototype.init = function(){
		this.player = new Player(canvas.width/2 - 64, canvas.height - 128, 128, 128);
		this.player.init();
		
		this.background = new Background;
		this.background.init();
		
		this.shots = new ShotManager;
		this.enemiesManager = new EnemiesManager;
		
		
	};
	
	Game.prototype.update = function(){
		// Update background logic
		this.background.update();
		
		// Update player logic
		this.player.update();
		
		// Update shots
		this.shots.update();
		
		// Update enemies
		this.enemiesManager.update();
		
		// When player shots
		this.handlePlayerShot();
		
		
		this.handleEnemies();
		
	};

	Game.prototype.handlePlayerShot = function(){
		if(controls.keyboard.space && Date.now() - lastPlayerShot > 200){
			this.count++;
			sounds.shot.stop();
			sounds.shot.play();
			this.shots.create(this.player.x, this.player.y - 100, Math.PI/2);
			lastPlayerShot = Date.now();
		}
	};
	
	Game.prototype.handleEnemies = function(){
		if(Date.now() - lastEnemyCreated > 2000){
			lastEnemyCreated = Date.now();
			this.enemiesManager.create(utils.random(0, canvas.width), -128, 128, 128);
		}
	};
	
	Game.prototype.moveShots = function(){
		if(this.shots.length > 0){
			for(var i=0, len = this.shots.length; i<len; ++i){
				this.shots[i].update();
			}
		}
	};
	
	Game.prototype.drawShots = function(){
		if(this.shots.length > 0){
			for(var i=0, len = this.shots.length; i<len; ++i){
				this.shots[i].render();
			}
		}
	};
	
	Game.prototype.render = function(){
		canvas.context.clearRect(0, 0, canvas.width, canvas.height);
		
		// Draw background
		this.background.render();
		
		// Draw player
		this.player.render();
		
		// Draw shots
		this.shots.render();
		
		// Draw enemies
		this.enemiesManager.render();
	};
	
	return Game; // Return require.js module
	
});