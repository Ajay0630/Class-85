canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
nasa_imgs_mars = ["nasaimg1.jpeg", "nasaimg2.jpeg", "nasaimg3.jpeg", "nasaimg4.jpeg", "nasaimg5.jpeg"];
randomnum = Math.floor(Math.random() * 5);
console.log(randomnum);
rover_width = 100;
rover_height = 90;
back_img = nasa_imgs_mars[randomnum];
rov_img = "rover.png";
rover_x = 20;
rover_y = 20;
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = back_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rov_img;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == 38) {
        up();
        console.log("up");
    }
    if (keyPressed == 40) {
        down();
        console.log("down");
    }
    if (keyPressed == 37) {
        left();
        console.log("left");
    }
    if (keyPressed == 39) {
        right();
        console.log("right");
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 20;
        console.log("When up arrow pressed : x = " + rover_x +" and y = " + rover_y);
        uploadBackground();
        uploadRover();
        }
}
function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 20;
        console.log("When down arrow pressed : x = " + rover_x +" and y = " + rover_y);
        uploadBackground();
        uploadRover();
        }
}
function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 20;
        console.log("When left arrow pressed : x = " + rover_x +" and y = " + rover_y);
        uploadBackground();
        uploadRover();
        }
}
function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 20;
        console.log("When right arrow pressed : x = " + rover_x +" and y = " + rover_y);
        uploadBackground();
        uploadRover();
        }
}
