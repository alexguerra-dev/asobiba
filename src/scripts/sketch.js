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
    rectMode(CENTER)
    angleMode(DEGREES)
    createCanvas(windowWidth, windowHeight)

    points = font.textToPoints('Hello', 0, height / 2, 372, {
        sampleFactor: 0.2,
        simplifyThreshold: 0,
    })

    for (let point of points) {
        let x = point.x
        let y = point.y
        // console.log(`x: ${x}, y: ${y}`)
        fill(25, 100)
        ellipse(x, y, 5, 5)
    }
    // image1.loadPixels()
    image(image1, 0, 0, 200, 200)
    image(image1, 0, 100)
}

function draw() {
    background(0, 100, 100)
    points.forEach((point, index) => {
        let x = point.x
        let y = point.y
        fill(255, index)
        // ellipse(x + 3 * sin(tick), y, 17, 15)
        // ellipse(x + 9 * map(mouseX, 0, 900, 0, 1), y, 5, 5 * sin(tick))
        // ellipse(x, y, 5, 10)
        ellipse(x, y, 5 * sin(tick), 5 * sin(tick))
    })
    tick += 0.7
}

// function draw() {
//     // background(0, 100, 100, 100)
//     // console.log('draw')
//     // console.log(points)
//     background(0, 100, 100, 100)
//     for (let point of points) {
//         let x = point.x
//         let y = point.y
//         fill(255)
//         ellipse(x, y, 5, 5)
//     }
// }

/**
 * The draw function is called continuously for animation
 * It sets a semi-transparent background and draws a circle in the center
 * @function draw
 */
// function draw() {
//     background(0, 100, 100, 100)

//     // Draw a circle in the center of the canvas
//     fill(255, 3)
//     image(image1, 0, 0)
//     ellipse(width / 2, height / 2, 100, 100)

//     for (let point in points) {
//         let x = point.x
//         let y = point.y
//         fill(255)
//         ellipse(x, y, 10, 10)
//         console.log(`x: ${x}, y: ${y}`)
//     }
// }
