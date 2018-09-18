var posY = [-120, -128, -110, -115, -116, -125, -122];
var posFinal = [80, 30, 47, 62, 37, 74, 34];
var targetY = posY.slice();
var max = 30;
var min = 5;
var offset = 35;

$(document).ready(function(){
	for (var i=0; i < 7; i++){
		if(isEven(i) == true){
			var color = 'white';
		} else {
			var color = 'red';
		}
		var car = new Raster(color);
		var randomTarget = (Math.random() * max) + min;
		carAnimation (car, randomTarget);
		frame(car);
	}
});

function isEven(n) {
   return n % 2 == 0;
}

function carAnimation (car, randomTarget){
	car.scale(0.5);
//	car.position.x = 415 + (car._index * offset);
//	car.position.y = posY[car._index] + (car._index);
	car.position = view.center;
	
	$("body").mousewheel(function(event, delta) {
//		if (posY[car._index] < 40) {
			if(delta < 0){
				targetY[car._index] += randomTarget;
			} else {
				targetY[car._index] -= randomTarget;
			}
			
//		} else {
//			if(delta > 0){
//				targetY[car._index] -= randomTarget;
//			} 
//		}
  	event.preventDefault();
	});
}

function position(car, targetY){
	var ease = 0.06;
	posY[car._index] += (targetY[car._index] - posY[car._index]) * ease;
//	if (posY[car._index]>posFinal[car._index]){
//		posY[car._index] = posFinal[car._index];
//	}
	car.position.y =  posY[car._index];
}

function frame(car){
	position(car, targetY);
	
	requestAnimationFrame(function(){
		frame(car);
	});
}