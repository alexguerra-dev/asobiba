/**
 * Represents a Node in a graph or network structure.
 * @class
 * @classdesc Creates a new Node instance with a unique ID and position coordinates.
 * @param {number} xPosition - The x-coordinate position of the node.
 * @param {number} yPosition - The y-coordinate position of the node.
 * @param {string} nodeType - The type of the node.
 * @property {string} id - Unique identifier generated from timestamp and random string.
 * @property {number} xPosition - The x-coordinate position of the node.
 * @property {number} yPosition - The y-coordinate position of the node.
 * @property {string} nodeType - The type of the node.
 * @property {Array} neighbors - Array of neighboring nodes.
 * @method draw - Draws the node on the canvas using p5.js.
 * @method addNeighbor - Adds a neighboring node to the node's neighbors array.
 * @example
 * const node = new BasicNode(50, 100, 'TypeA');
 * node.draw(p5Instance);
 * @example
 */
class BasicNode {
    constructor(xPosition = 0, yPosition = 0, nodeType) {
        const dateString = Date.now().toString(36)
        const randomness = Math.random().toString(36).slice(2)
        this.id = dateString + randomness
        this.xPosition = xPosition
        this.yPosition = yPosition
        this.nodeType = nodeType
        this.neighbors = []
    }

    /**
     * Draws the node on the canvas.
     * @param {p5} p - The p5 instance to draw on.
     */
    draw(p) {
        p.fill(255, 0, 0)
        p.ellipse(this.xPosition + 100, this.yPosition + 100, 20, 20)
        p.fill(0)
        p.textSize(12)
        p.textAlign(p.CENTER, p.CENTER)
        p.text(this.id, this.xPosition, this.yPosition)
        p.text(this.nodeType, this.xPosition, this.yPosition + 15)
    }

    /**
     * Adds a neighbor to the node.
     * @param {BasicNode} neighbor - The neighbor node to add.
     */
    addNeighbor(neighbor) {
        if (neighbor instanceof BasicNode) {
            this.neighbors.push(neighbor)
        } else {
            console.error('Neighbor must be an instance of BasicNode')
        }
    }
}
