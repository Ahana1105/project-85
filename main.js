canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

width_car = 100;
height_car = 150;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x = 300;
car_y = 350;

function add() {
	background_IMG = new Image();
	background_IMG.onload = uploadBackground;
	background_IMG.src = background_image;
	car_IMG = new Image();
	car_IMG.onload = uploadgreencar();
	car_IMG.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_IMG, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(car_IMG, car_x, car_y, width_car, height_car);


}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	if (car_y >= 120) {
		car_y = car_y - 10;
		uploadBackground();
		uploadgreencar();
	}
}

function down() {
	if (car_y <= 400) {
		car_y = car_y + 10;
		uploadBackground();
		uploadgreencar();
	}
}

function left() {
	if (car_x >= 0) {
		car_x = car_x -10;
		uploadBackground();
		uploadgreencar();
	}
}

function right() {
	if (car_x <= 800) {
		car_x = car_x + 10;
		uploadBackground();
		uploadgreencar();
	}
}
