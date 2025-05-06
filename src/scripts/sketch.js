let imageOfLizard
let font

function preload() {
    font = loadFont('data/fonts/OpenSans-Regular.ttf')
    imageOfLizard = loadImage('data/images/bobing.gif')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    frameRate(30)
}

function draw() {
    // The framerate can be set using the frameRate() function.
}

function mousePressed() {
    // The mousePressed() function is called once every time a mouse button is pressed.
    // You can use it to trigger an event or action in your sketch.
    // For example, you could change the background color or display a message.
    // In this case, we will just print the mouse coordinates to the console.
    console.log(mouseX, mouseY)
}
