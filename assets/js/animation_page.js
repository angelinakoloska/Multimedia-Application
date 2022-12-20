var x = 200;
var y = 180;
var dimension = 50;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    ellipse(x, y, dimension);
    dimension = dimension + 1;
}

function mouseClicked() {
    if (mouseX < 400 && mouseX > 0 && mouseY < 400 && mouseY > 0) {
        x = mouseX;
        y = mouseY;
        fill(Math.floor((Math.random() * 256)), Math.floor((Math.random() * 256)), Math.floor((Math.random() * 256)));

        dimension = 50;
    }
}

var p = document.createElement('p');
p.innerText = 'Klikk inn i boksen for å endre farge på sirkelen.';
p.className = 'info';
document.body.appendChild(p)