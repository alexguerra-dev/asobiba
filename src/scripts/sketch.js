let imageOfLizard
let font
let testNode
let testNode2
let testNode3
let testNode4

function preload() {
    font = loadFont('data/fonts/OpenSans-Regular.ttf')
    imageOfLizard = loadImage('data/images/bobing.gif')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    frameRate(30)
    background(0, 100)
    testNode = new BasicNode()
    testNode2 = new BasicNode(200, 200, 'TypeB')
    testNode3 = new BasicNode(300, 300, 'TypeC')
    testNode4 = new BasicNode(400, 400, 'TypeD')

    testNode.addNeighbor(testNode2)

    console.log(testNode)

    noLoop()
    console.log(testNode)
    testNode.draw(this)
    testNode2.draw(this)
    testNode3.draw(this)
    testNode4.draw(this)
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
