let imageOfLizard
let font
let setOfNodes = []

function preload() {
    font = loadFont('data/fonts/OpenSans-Regular.ttf')
    imageOfLizard = loadImage('data/images/bobing.gif')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    frameRate(30)
    textFont(font)
    textSize(32)
    textAlign(CENTER, CENTER)

    setOfNodes = Array.from({ length: 10 }, (_, i) => {
        console.log(i)
        return new Node(random(width), random(height))
    })
}

class Node {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.size = 50
        this.color = color(255)
        this.seed = random(1)
    }

    update(frameIndex) {
        this.x = noise(frameCount * 0.01 * this.seed) * width
        this.y = noise(frameCount * 0.02 * this.seed) * height
    }
    display() {
        this.update()
        fill(this.color)
        push()
        noFill()
        stroke(255)
        strokeWeight(2)
        ellipse(this.x, this.y, this.size)
        ellipse(this.x, this.y, this.size * 0.5)
        pop()
    }
}

function draw() {
    background(255, 100)
    fill(255, 100)
    console.log(setOfNodes)

    setOfNodes.forEach((node) => {
        node.display()
        line(node.x, node.y, mouseX, mouseY)
    })

    // node1.display()
}
