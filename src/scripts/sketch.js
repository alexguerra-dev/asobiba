let imageOfLizard
let font

let points

function preload() {
    font = loadFont('data/fonts/OpenSans-Regular.ttf')
    imageOfLizard = loadImage('data/images/bobing.gif')
}

function setup() {
    // Setup the environment
    noLoop()
    rectMode(CENTER)
    angleMode(DEGREES)

    // Create the canvas the size of the window.
    createCanvas(windowWidth, windowHeight)

    // This makes a list of points from a font, text, and size.
    points = font.textToPoints('Hello, World!', 0, height / 2, 372, {
        sampleFactor: 0.031,
        simplifyThreshold: 0,
    })

    // The total number of points representing the text.
    const numberOfPoints = points.length

    points.forEach((point, index, array) => {
        let x = point.x
        let y = point.y

        const aScaledValue = map(index, 0, numberOfPoints, 0, 360)

        stroke(255, 100, 170)
        strokeWeight(3)
        fill(100, 20)
        ellipse(x, y, 35, 35)
        fill(0)

        if (index == 0) {
            stroke(255, 100, 170)
            strokeWeight(30)
            fill(100, 20)
            ellipse(x, y, 35, 35)
        } else {
            stroke(0)
            strokeWeight(10)
            fill(100, 20)
            console.log(array[index - 1])
            fill(200, 10)
            line(array[index - 1].x, array[index - 1].y, x, y)
        }
        // line(x, y, x + 3 * sin(aScaledValue), y + 3 * cos(aScaledValue))
    })
    // Draw the image of the lizard
    imageMode(CENTER)
    image(imageOfLizard, width / 2, height / 2, 200, 200)
}
