define([], function(){
	
	var controls = {
		keyboard: {
			up: false,
			down: false,
			left: false,
			right: false,
			space: false
		}
	}
	
	document.addEventListener('keydown', getKeyDown);
	document.addEventListener('keyup', getKeyUp);
	
	function getKeyDown(evt){
		controls.keyboard.up = evt.keyCode === 38 ? true : controls.keyboard.up;
		controls.keyboard.down = evt.keyCode === 40 ? true : controls.keyboard.down;
		controls.keyboard.left = evt.keyCode === 37 ? true : controls.keyboard.left;
		controls.keyboard.right = evt.keyCode === 39 ? true : controls.keyboard.right;
		controls.keyboard.space = evt.keyCode === 32 ? true : controls.keyboard.space;
	}
	
	function getKeyUp(evt){
		controls.keyboard.up = evt.keyCode === 38 ? false : controls.keyboard.up;
		controls.keyboard.down = evt.keyCode === 40 ? false : controls.keyboard.down;
		controls.keyboard.left = evt.keyCode === 37 ? false : controls.keyboard.left;
		controls.keyboard.right = evt.keyCode === 39 ? false : controls.keyboard.right;
		controls.keyboard.space = evt.keyCode === 32 ? false : controls.keyboard.space;
	}
	
	return controls;
	

});