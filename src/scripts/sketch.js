let imageOfLizard
let font

const drawLizard = (x, y, imageScale) => {
    push()
    translate(x, y)
    scale(imageScale)
    imageMode(CENTER)
    image(imageOfLizard, 0, 0)
    pop()
}

const drawCircleFrom4BezierPoints = (x, y) => {
    translate(x, y)
    textSize(20)
    const controlPoint01 = createVector(104, 160)
    const controlHandle1ForControlPoint01 = createVector(-100, 300)
    const controlHandle2ForControlPoint01 = createVector(-100, -10)
    const controlPoint02 = createVector(400, 10)
    const controlHandle1ForControlPoint02 = createVector(490, 100)
    const controlHandle2ForControlPoint02 = createVector(300, -50)
    const controlPoint03 = createVector(480, 300)
    const controlHandle1ForControlPoint03 = createVector(500, 200)
    const controlHandle2ForControlPoint03 = createVector(400, 400)
    const controlPoint04 = createVector(14, 260)
    const controlHandle1ForControlPoint04 = createVector(-40, 500)
    const controlHandle2ForControlPoint04 = createVector(-10, 50)
    fill(0)
    ellipse(controlPoint01.x, controlPoint01.y, 10, 10)
    text('1', controlPoint01.x + 4, controlPoint01.y - 10)
    ellipse(controlPoint02.x, controlPoint02.y, 10, 10)
    text('2', controlPoint02.x + 8, controlPoint02.y)
    ellipse(controlPoint03.x, controlPoint03.y, 10, 10)
    text('3', controlPoint03.x + 8, controlPoint03.y)
    ellipse(controlPoint04.x, controlPoint04.y, 10, 10)
    text('4', controlPoint04.x - 20, controlPoint04.y)

    fill(0, 255, 0, 100)
    ellipse(
        controlHandle1ForControlPoint01.x,
        controlHandle1ForControlPoint01.y,
        10,
        10,
    )
    ellipse(
        controlHandle2ForControlPoint01.x,
        controlHandle2ForControlPoint01.y,
        10,
        10,
    )
    line(
        controlPoint01.x,
        controlPoint01.y,
        controlHandle1ForControlPoint01.x,
        controlHandle1ForControlPoint01.y,
    )
    line(
        controlPoint01.x,
        controlPoint01.y,
        controlHandle2ForControlPoint01.x,
        controlHandle2ForControlPoint01.y,
    )
    fill(0, 200, 255, 100)
    ellipse(
        controlHandle1ForControlPoint02.x,
        controlHandle1ForControlPoint02.y,
        10,
        10,
    )
    ellipse(
        controlHandle2ForControlPoint02.x,
        controlHandle2ForControlPoint02.y,
        10,
        10,
    )
    line(
        controlPoint02.x,
        controlPoint02.y,
        controlHandle1ForControlPoint02.x,
        controlHandle1ForControlPoint02.y,
    )
    line(
        controlPoint02.x,
        controlPoint02.y,
        controlHandle2ForControlPoint02.x,
        controlHandle2ForControlPoint02.y,
    )
    fill(0, 0, 255, 100)
    ellipse(
        controlHandle1ForControlPoint03.x,
        controlHandle1ForControlPoint03.y,
        10,
        10,
    )
    ellipse(
        controlHandle2ForControlPoint03.x,
        controlHandle2ForControlPoint03.y,
        10,
        10,
    )
    line(
        controlPoint03.x,
        controlPoint03.y,
        controlHandle1ForControlPoint03.x,
        controlHandle1ForControlPoint03.y,
    )
    line(
        controlPoint03.x,
        controlPoint03.y,
        controlHandle2ForControlPoint03.x,
        controlHandle2ForControlPoint03.y,
    )
    fill(255, 0, 0, 100)
    ellipse(
        controlHandle1ForControlPoint04.x,
        controlHandle1ForControlPoint04.y,
        10,
        10,
    )
    ellipse(
        controlHandle2ForControlPoint04.x,
        controlHandle2ForControlPoint04.y,
        10,
        10,
    )
    line(
        controlPoint04.x,
        controlPoint04.y,
        controlHandle1ForControlPoint04.x,
        controlHandle1ForControlPoint04.y,
    )
    line(
        controlPoint04.x,
        controlPoint04.y,
        controlHandle2ForControlPoint04.x,
        controlHandle2ForControlPoint04.y,
    )

    fill(0, 100)
    strokeWeight(3)
    beginShape()
    vertex(controlPoint01.x, controlPoint01.y)
    bezierVertex(
        controlHandle1ForControlPoint01.x,
        controlHandle1ForControlPoint01.y,
        controlHandle2ForControlPoint01.x,
        controlHandle2ForControlPoint01.y,
        controlPoint01.x,
        controlPoint01.y,
    )
    bezierVertex(
        controlHandle1ForControlPoint02.x,
        controlHandle1ForControlPoint02.y,
        controlHandle2ForControlPoint02.x,
        controlHandle2ForControlPoint02.y,
        controlPoint02.x,
        controlPoint02.y,
    )
    bezierVertex(
        controlHandle1ForControlPoint03.x,
        controlHandle1ForControlPoint03.y,
        controlHandle2ForControlPoint03.x,
        controlHandle2ForControlPoint03.y,
        controlPoint03.x,
        controlPoint03.y,
    )
    bezierVertex(
        controlHandle1ForControlPoint04.x,
        controlHandle1ForControlPoint04.y,
        controlHandle2ForControlPoint04.x,
        controlHandle2ForControlPoint04.y,
        controlPoint04.x,
        controlPoint04.y,
    )

    endShape(CLOSE)
}
const drawSmoothClosedCurve = (x, y) => {
    translate(x, y)
    const anchor01 = createVector(100, 0)
    const controlHandel1ForAnchor01 = createVector(350, -10)
    const controlHandel2ForAnchor01 = createVector(50, -30)
    const anchor02 = createVector(250, 200)
    const controlHandel1ForAnchor02 = createVector(350, 100)
    const controlHandel2ForAnchor02 = createVector(300, 300)
    fill(0, 255, 0, 100)
    text('1', anchor01.x + 2, anchor01.y)
    ellipse(anchor01.x, anchor01.y, 10, 10)
    fill(0, 200, 255, 200)
    ellipse(controlHandel1ForAnchor02.x, controlHandel1ForAnchor02.y, 10, 10)
    ellipse(controlHandel2ForAnchor02.x, controlHandel2ForAnchor02.y, 10, 10)
    // line(
    //     anchor02.x,
    //     anchor02.y,
    //     controlHandel1ForAnchor02.x,
    //     controlHandel1ForAnchor02.y,
    // )
    line(
        anchor02.x,
        anchor02.y,
        controlHandel2ForAnchor02.x,
        controlHandel2ForAnchor02.y,
    )
    const anchor03 = createVector(100, 200)
    const controlHandel1ForAnchor03 = createVector(150, 250)
    const controlHandel2ForAnchor03 = createVector(50, 250)
    fill(0, 0, 255, 100)
    ellipse(controlHandel1ForAnchor03.x, controlHandel1ForAnchor03.y, 10, 10)
    ellipse(controlHandel2ForAnchor03.x, controlHandel2ForAnchor03.y, 10, 10)
    line(
        anchor03.x,
        anchor03.y,
        controlHandel1ForAnchor03.x,
        controlHandel1ForAnchor03.y,
    )
    line(
        anchor03.x,
        anchor03.y,
        controlHandel2ForAnchor03.x,
        controlHandel2ForAnchor03.y,
    )
    const anchor04 = createVector(-20, 100)
    const controlHandel1ForAnchor04 = createVector(0, 0)
    const controlHandel2ForAnchor04 = createVector(0, 200)

    fill(255, 0, 0, 100)
    ellipse(controlHandel1ForAnchor04.x, controlHandel1ForAnchor04.y, 10, 10)
    ellipse(controlHandel2ForAnchor04.x, controlHandel2ForAnchor04.y, 10, 10)
    line(
        anchor04.x,
        anchor04.y,
        controlHandel1ForAnchor04.x,
        controlHandel1ForAnchor04.y,
    )
    line(
        anchor04.x,
        anchor04.y,
        controlHandel2ForAnchor04.x,
        controlHandel2ForAnchor04.y,
    )
    fill(255, 0, 0)
    ellipse(anchor01.x, anchor01.y, 10, 10)
    ellipse(anchor02.x, anchor02.y, 10, 10)
    ellipse(anchor03.x, anchor03.y, 10, 10)
    ellipse(anchor04.x, anchor04.y, 10, 10)

    fill(0, 100)
    ellipse(controlHandel1ForAnchor01.x, controlHandel1ForAnchor01.y, 10, 10)
    ellipse(controlHandel2ForAnchor01.x, controlHandel2ForAnchor01.y, 10, 10)
    line(
        anchor01.x,
        anchor01.y,
        controlHandel1ForAnchor01.x,
        controlHandel1ForAnchor01.y,
    )
    line(
        anchor01.x,
        anchor01.y,
        controlHandel2ForAnchor01.x,
        controlHandel2ForAnchor01.y,
    )

    beginShape()
    vertex(anchor01.x, anchor01.y)
    bezierVertex(
        controlHandel1ForAnchor01.x,
        controlHandel1ForAnchor01.y,
        controlHandel2ForAnchor01.x,
        controlHandel2ForAnchor01.y,
        anchor01.x,
        anchor01.y,
    )
    bezierVertex(
        controlHandel1ForAnchor02.x,
        controlHandel1ForAnchor02.y,
        controlHandel2ForAnchor02.x,
        controlHandel2ForAnchor02.y,
        anchor02.x,
        anchor02.y,
    )
    bezierVertex(
        controlHandel1ForAnchor03.x,
        controlHandel1ForAnchor03.y,
        controlHandel2ForAnchor03.x,
        controlHandel2ForAnchor03.y,
        anchor03.x,
        anchor03.y,
    )
    bezierVertex(
        controlHandel1ForAnchor04.x,
        controlHandel1ForAnchor04.y,
        controlHandel2ForAnchor04.x,
        controlHandel2ForAnchor04.y,
        anchor04.x,
        anchor04.y,
    )
    bezierVertex(
        controlHandel1ForAnchor01.x,
        controlHandel1ForAnchor01.y,
        controlHandel2ForAnchor01.x,
        controlHandel2ForAnchor01.y,
        anchor01.x,
        anchor01.y,
    )
    endShape(CLOSE)
}

const drawMyCurve = () => {
    const controlHandel01 = createVector(mouseX, mouseY)
    const controlHandel02 = createVector(500, 80)
    const controlHandel03 = createVector(400, 200)
    const controlHandel04 = createVector(200, 400)

    // Other half of the curve
    const controlHandel05 = createVector(controlHandel04.x, controlHandel04.y)
    const controlHandel06 = createVector(300, 100)
    const controlHandel07 = createVector(200, 200)
    const controlHandel08 = createVector(controlHandel01.x, controlHandel01.y)
    // const controlHandel09 = createVector(0, 0)
    noFill()
    stroke(0)
    strokeWeight(2)
    strokeCap(ROUND)
    strokeJoin(ROUND)
    line(
        controlHandel01.x,
        controlHandel01.y,
        controlHandel02.x,
        controlHandel02.y,
    )
    line(
        controlHandel03.x,
        controlHandel03.y,
        controlHandel04.x,
        controlHandel04.y,
    )
    stroke(255, 0, 0, 100)
    ellipse(controlHandel01.x, controlHandel01.y, 10, 10)
    stroke(0, 255, 0, 100)
    ellipse(controlHandel02.x, controlHandel02.y, 10, 10)
    stroke(0, 0, 255, 100)
    ellipse(controlHandel03.x, controlHandel03.y, 10, 10)
    // ellipse(controlHandel04.x, controlHandel04.y, 10, 10)
    fill(0, 0, 255, 100)
    stroke(0, 100)
    strokeWeight(2)
    strokeCap(ROUND)
    strokeJoin(ROUND)
    // noFill()

    // Draw a blob made from two curves
    stroke(0, 100)
    strokeWeight(2)
    strokeCap(ROUND)
    strokeJoin(ROUND)
    fill(0, 100)
    beginShape()
    vertex(controlHandel01.x, controlHandel01.y)
    bezierVertex(
        controlHandel02.x,
        controlHandel02.y,
        controlHandel03.x,
        controlHandel03.y,
        controlHandel04.x,
        controlHandel04.y,
    )
    vertex(controlHandel04.x, controlHandel04.y)
    bezierVertex(
        controlHandel03.x,
        controlHandel03.y,
        controlHandel02.x,
        controlHandel02.y,
        controlHandel01.x,
        controlHandel01.y,
    )
    endShape(CLOSE)
    beginShape()
    vertex(controlHandel05.x, controlHandel05.y)
    bezierVertex(
        controlHandel06.x,
        controlHandel06.y,
        controlHandel07.x,
        controlHandel07.y,
        controlHandel08.x,
        controlHandel08.y,
    )
    vertex(controlHandel08.x, controlHandel08.y)
    bezierVertex(
        controlHandel07.x,
        controlHandel07.y,
        controlHandel06.x,
        controlHandel06.y,
        controlHandel05.x,
        controlHandel05.y,
    )
    endShape(CLOSE)

    // beginShape(CURVE)
    // vertex(controlHandel01.x, controlHandel01.y)
    // bezierVertex(
    //     controlHandel02.x,
    //     controlHandel02.y,
    //     controlHandel03.x,
    //     controlHandel03.y,
    //     controlHandel04.x,
    //     controlHandel04.y,
    // )
    // endShape(CLOSE)
    // beginShape(CURVE)
    // vertex(controlHandel05.x, controlHandel04.y)
    // bezierVertex(
    //     controlHandel03.x,
    //     controlHandel03.y,
    //     controlHandel02.x,
    //     controlHandel02.y,
    //     controlHandel01.x,
    //     controlHandel01.y,
    // )
    // endShape(CLOSE)
    // ellipse(controlHandel04.x, controlHandel04.y, 10, 10)
    // // line(controlHandel04.x, controlHandel04.y, 0, 0)
}

function preload() {
    font = loadFont('data/fonts/OpenSans-Regular.ttf')
    imageOfLizard = loadImage('data/images/bobing.gif')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    const controlHandel01 = createVector(0, 0)
    console.log(controlHandel01)
}

function draw() {
    background(250)
    translate(100, 100)
    // const controlHandel02 = createVector(400, 10)
    // line(0, 0, controlHandel02.x, controlHandel02.y)
    // drawLizard(mouseX, mouseY, 1.5)
    // ellipse(controlHandel02.x, controlHandel02.y, 10, 10)
    // translate(100, 100)
    // noFill()
    // stroke(0)
    // strokeWeight(5)
    // strokeCap(ROUND)
    // strokeJoin(ROUND)
    // beginShape()
    // vertex(0, 0)
    // vertex(100, 0)
    // vertex(100, 100)
    // vertex(0, 100)
    // beginContour()
    // vertex(10, 10)
    // vertex(10, 90)
    // vertex(90, 90)
    // vertex(90, 10)
    // endContour()

    // endShape(CLOSE)
    // drawMyCurve()
    drawCircleFrom4BezierPoints(200, 0)
}
