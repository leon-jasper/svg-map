var canvas = document.getElementById("map");
var ctx = canvas.getContext("2d");
ctx.drawImage(document.getElementById("svg-map"), 0, 0);


let lastX = 0;
let lastY = 0;
let currentX;
let currentY;
let x;
let y;
let i = 1;


function drawPointOnMap(newX, newY) {
    console.log(`Moving to x:${x}, y:${y}`);
    if (lastX && lastY) {
        ctx.clearRect(0, 0, 300, 400);
    }

    ctx.drawImage(document.getElementById("svg-map"), 0, 0);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(newX, newY, 5, 5);
}

function moveToPosition() {
    x = x + ((currentX - lastX) / 10);
    y = y + (currentY - lastY) / 10;

    drawPointOnMap(x, y);

    if (((x - currentX) * (currentX - lastX) < 0) || (y - currentY) * (currentY - lastY) < 0) {
        setTimeout(moveToPosition, 50);
    } else {
        lastX = currentX;
        lastY = currentY;
    }
}

function goTo(toX, toY) {
    currentX = toX;
    currentY = toY;
    x = lastX;
    y = lastY;
    moveToPosition()
}
