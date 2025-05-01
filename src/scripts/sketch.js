let image1, image2, image3, image4
let images = []
let font
let points
let tick = 0

function preload() {
    font = loadFont('data/fonts/OpenSans-Regular.ttf')
    image1 = loadImage('data/images/bobing.gif')
}

function setup() {
    noLoop()
    rectMode(CENTER)
    angleMode(DEGREES)
    createCanvas(windowWidth, windowHeight)

    points = font.textToPoints('Hello', 0, height / 2, 372, {
        sampleFactor: 0.05,
        simplifyThreshold: 0,
    })

    const numberOfPoints = points.length

    points.forEach((point, index, array) => {
        // console.log(array)
        let x = point.x
        let y = point.y
        // fill(255, 100, index)

        const aScaledValue = map(index, 0, numberOfPoints, 0, 360)
        // console.log(sin(index))
        // console.log(index)
        // ellipse(x + 3 * sin(tick), y, 17, 15)
        // ellipse(x + 9 * map(mouseX, 0, 900, 0, 1), y, 5, 5 * sin(tick))
        // ellipse(x, y, 5, 10)
        // ellipse(x, y, 5)
        // fill(255, 200, 0)
        // stroke(2
        stroke(55, 0, 0)
        ellipse(x, y, 15, 15)
        strokeWeight(2)
        stroke(200, 0, 0)
        line(x, y, x + 3 * sin(aScaledValue), y + 3 * cos(aScaledValue))
    })
    // image1.loadPixels()
    // image(image1, 0, 0, 200, 200)
    // image(image1, 0, 100)
}
