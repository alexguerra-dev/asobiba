// let imageOfLizard
let font
let tick
let points

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
    points = font.textToPoints(
        `I think teresa is a pretty great person ${3}`,
        0,
        0,
        16,
        {
            sampleFactor: 0.1,
            simplifyThreshold: 0,
        },
    )
}

function draw() {
    background(255)
    points.forEach((point) => {
        // Draw each point as a circle
        fill(255, 0, 0, 100)
        // noStroke()
        ellipse(point.x + 0.5 * mouseX, point.y + 0.5 * mouseY, 10, 10)
    })
    push()
    translate(0.5 * width, 0.5 * height)
    rotate(45)
    fill(0, 10)
    rect(100 + 0.1 * mouseX, 400 + 0.2 * mouseY, 400, 200)
    translate(0.5 * width, 0.5 * height)
    rotate(45)
    rect(200 + 0.2 * mouseX, 400 + 0.2 * mouseY, 400, 200)
    pop()
    rect(200 + 0.2 * mouseX, 300 + 0.2 * mouseY, 400, 200)
    rect(300, 400, 400, 200)
    rect(400, 400, 800, 200)

    // noLoop()
}
