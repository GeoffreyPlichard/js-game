define([], function(){
	
	var controls = {
		keyboard: {
			up: false,
			down: false,
			left: false,
			right: false
		}
	}
	
	document.addEventListener('keydown', getKeyDown);
	document.addEventListener('keyup', getKeyUp);
	
	function getKeyDown(evt){
		controls.keyboard.up = evt.keyCode === 38 ? true : contros.keyboard.up;
		controls.keyboard.down = evt.keyCode === 40 ? true : contros.keyboard.down;
		controls.keyboard.left = evt.keyCode === 37 ? true : contros.keyboard.left;
		controls.keyboard.right = evt.keyCode === 39 ? true : contros.keyboard.right;
	}
	
	function getKeyUp(evt){
		controls.keyboard.up = evt.keyCode === 38 ? false : contros.keyboard.up;
		controls.keyboard.down = evt.keyCode === 40 ? false : contros.keyboard.down;
		controls.keyboard.left = evt.keyCode === 37 ? false : contros.keyboard.left;
		controls.keyboard.right = evt.keyCode === 39 ? false : contros.keyboard.right;
	}
	
	

});