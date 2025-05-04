# p5js Notes

`frameCount` is a global variable that keeps track of the number of frames that have been displayed since the program started. It is automatically incremented by 1 for each frame that is drawn.

`frameRate()` is a function that allows you to set or get the current frame rate of the sketch. The default frame rate is 60 frames per second, but you can change it to any value you want.

`noFill()` is a function that disables the filling of shapes. When you call `noFill()`, any shapes you draw will only have an outline and no fill color. This is useful when you want to create shapes that are only outlined, such as circles or rectangles.

```javascript
function setup() {
  createCanvas(400, 400)
  frameRate(30) // Set the frame rate to 30 frames per second
}
function draw() {
  background(220)
  textSize(32)
  text('Frame Count: ' + frameCount, 10, 30) // Display the current frame count
  text('Frame Rate: ' + frameRate(), 10, 70) // Display the current frame rate
}
```

---

## Links

- [p5js site](https://p5js.org/)
