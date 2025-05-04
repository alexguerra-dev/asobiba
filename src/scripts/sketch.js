let imageOfLizard
let font
let setOfNodes = []
let theSystem

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

    setOfNodes = Array.from({ length: 15 }, (_, i) => {
        return new Node(random(width), random(height))
    })

    theSystem = new System()

    setOfNodes.forEach((node) => {
        theSystem.addNode(node)
    })
}

class System {
    constructor() {
        this.nodes = []
    }

    addNode(node) {
        this.nodes.push(node)
    }

    update() {
        this.nodes.forEach((node) => {
            node.update()
        })
    }

    display() {
        this.nodes.forEach((node, index, array) => {
            node.display()

            // rect(node.x, array[index + 1], 10, 10)

            if (index === 0) {
                // line(
                //     node.x + array[index - 1].x,
                //     node.y + array[index - 1].y,
                //     node.x + 10,
                //     node.y + 10,
                // )
            } else {
                line(array[index - 1].x, array[index - 1].y, node.x, node.y)
            }
        })
    }
}

class Node {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.size = 50
        // this.color = color(255)
        this.seed = random(1)
    }

    update(frameIndex) {
        this.x = noise(frameCount * 0.01 * this.seed) * width
        this.y = noise(frameCount * 0.02 * this.seed) * height
    }
    display() {
        this.update()
        fill(200, 100, 78, 100)
        // background(0)
        push()
        fill(255, 100, 78, 100)
        noFill()
        // stroke(255)
        strokeWeight(2)
        fill(255, 100)
        fill(noise(this.x * 0.01, this.y * 0.01) * 255, 100, 78, 100)

        pop()
        push()
        // rotate(noise(this.x * 0.0001, this.y * 0.0001) * TWO_PI)
        // translate(100, 30)
        ellipse(this.x, this.y, this.size * 0.5)
        fill(255, 100, 78)
        ellipse(this.x, this.y, (this.size * 0.2 * mouseX) / 100)
        pop()
        // line(this.x, this.y, mouseX, mouseY)
    }
}

function draw() {
    background(255, 100)
    theSystem.update()
    theSystem.display()
    // node1.display()
}
