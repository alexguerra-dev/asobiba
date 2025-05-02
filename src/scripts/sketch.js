// let imageOfLizard
let font
let tick

function preload() {
    font = loadFont('data/fonts/OpenSans-Regular.ttf')
    // imageOfLizard = loadImage('data/images/bobing.gif')
}

function setup() {
    // Setup the environment
    rectMode(CENTER)
    angleMode(DEGREES)

    // Create the canvas the size of the window.
    createCanvas(windowWidth, windowHeight)

    // This makes a list of points from a font, text, and size.
    // The total number of points representing the text.
}

function draw() {
    fill(0)
    rect(100, 0, 200, 200)
}
