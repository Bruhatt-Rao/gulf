# Gulf.js

A lightweight vanilla JavaScript library for simplified interaction with the HTML canvas API.

## Quickstart

Create these files in your root directory to start using `Gulf.js`:

### `index.html`

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <div id="game"></div>
  <script type="text/javascript" src="https://bruhatt.me/gulf/lib/gulf.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

### `script.js`

```js
var pos;

function init() {
  pos = new Vector(250, 250);
}

function update() {
  color("white");
  ellipse(pos.x, pos.y);
}

loop();
```

## Variables

| Variable      | Description                                                   |
|---------------|---------------------------------------------------------------|
| `mouse`       | A `Vector` object with `x` and `y` properties for mouse position. |
| `frameCount`  | The number of frames that have been rendered.                |
| `looping`     | A boolean indicating if the update loop is currently running. |
| `clear`       | A boolean indicating if the canvas is being cleared every frame. |
| `keys`        | An array to track the state of keys (pressed or released).    |
| `key`         | An object mapping key names to their corresponding key codes. |
| `canvas`      | The canvas element with `.height` and `.width` properties.    |

## Callable Functions

| Function      | Args                           | Usage                                          | Returns                                    |
|---------------|--------------------------------|------------------------------------------------|--------------------------------------------|
| `loop`        | `(number delta (optional))`                           | Starts the update loop.                       | The current value of `looping`.            |
| `noloop`      | None                           | Stops the update loop.                        | The current value of `looping`.            |
| `noclear`     | None                           | Disables clearing the canvas every frame.     | The current value of `clear`.              |
| `sin`         | `(number theta)`                | Calculates the sine of the given angle in radians. | The sine of the angle.                    |
| `cos`         | `(number theta)`                | Calculates the cosine of the given angle in radians. | The cosine of the angle.                  |
| `randint`     | `(number min, number max)`     | Generates a random integer between `min` and `max`. | A random integer between `min` and `max`. |
| `height`      | `(number h, number w)`         | Sets the canvas height and width.             | None                                       |
| `load`        | `(string img)`                 | Loads an image from the specified URL.        | The loaded image object.                   |
| `translate`   | `(number x, number y)`         | Translates the canvas context by `(x, y)`.   | None                                       |
| `rotate`      | `(number a, string type="radians")` | Rotates the canvas context by angle `a`. | None                                       |
| `save`        | None                           | Saves the current canvas state.               | None                                       |
| `restore`     | None                           | Restores the last saved canvas state.         | None                                       |
| `dist2d`      | `(Vector a, Vector b)`         | Calculates the distance between two 2D vectors. | The distance between the vectors.         |
| `dist`        | `(number x, number y)`         | Calculates the distance from the origin `(0,0)`. | The distance from the origin.             |

## Drawing Functions

| Function      | Args                                    | Usage                                         | Returns                      |
|---------------|-----------------------------------------|-----------------------------------------------|------------------------------|
| `color`       | `(string c)`                            | Sets the fill color for shapes and text.     | None                         |
| `stroke`      | `(string c)`                            | Sets the stroke color for lines and shapes.  | None                         |
| `w`           | `(number n)`                            | Sets the line width.                        | None                         |
| `drawimg`     | `(Image img, number x, number y, number w, number h)` | Draws an image on the canvas.                | None                         |
| `ellipse`     | `(number x, number y, number r)`        | Draws a filled ellipse.                      | None                         |
| `text`        | `(number x, number y, string text, string size="30px", string font="Verdana")` | Draws text at the specified position.       | None                         |
| `line`        | `(number x, number y, number x1, number y1)` | Draws a line between two points.             | None                         |
| `triangle`    | `(number x, number y, number x1, number y1, number x2, number y2)` | Draws a filled triangle.                     | None                         |
| `full`        | None                                    | Fills the entire canvas with the current fill style. | None                         |
| `rect`        | `(number x, number y, number w=30, number h=30)` | Draws a rectangle with optional emissive effect. | None                         |
| `point`       | `(number x, number y, number r=5)`      | Draws a filled point (circle).               | None                         |

## Classes

### `Vector`

Represents a 2D or 3D vector with methods for vector operations.

| Method        | Args                           | Usage                                         | Returns                                    |
| --- | --- | --- | --- |
| `constructor` | `(number x=0, number y=0, number z=0)` | Initializes the vector.                      | A `Vector` object.                        |
| `rand`| `(number min, number lim)`     | Sets random values for `x`, `y`, and `z`.    | The updated `Vector` object.|
| `add` | `(Vector a)` | Adds another vector to this vector.| The updated `Vector` object. |
| `set`| `(Vector a)` | Sets this vector to the values of another vector. | The updated `Vector` object.              |
| `sub`         | `(Vector a)`                    | Subtracts another vector from this vector.   | The updated `Vector` object.              |
| `mult`        | `(number a)`                    | Multiplies this vector by a scalar.          | The updated `Vector` object.              |
| `div`         | `(number a)`                    | Divides this vector by a scalar.             | The updated `Vector` object.              |
| `mag`         | None                           | Calculates the magnitude of the vector.      | The magnitude of the vector.              |

---
