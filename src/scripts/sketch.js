let imageOfLizard
let font

const drawLizard = (x, y) => {
    push()
    translate(x, y)
    scale(0.5)
    imageMode(CENTER)
    image(imageOfLizard, 0, 0)
    pop()
}

function preload() {
    font = loadFont('data/fonts/OpenSans-Regular.ttf')
    imageOfLizard = loadImage('data/images/bobing.gif')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
}

function draw() {
    background(0)
    drawLizard(mouseX, mouseY)
}
