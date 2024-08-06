# Gulf.js
A lightweight vanilla javascript display library to make interacting with the html canvas API easier

## Quickstart
Create these files in your root directory.

index.html:
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
script.js:
```js
var pos;

function init() {
  pos = new Vector(250, 250);
}

function update() {
	color("white")
	ellipse(pos.x, pos.y);
}

loop();
```
# Callable Variables
Variable | What the value returns
--- | --- 
Mouse | Vector with x and y position of mouse
frameCount | How many frames have been rendered 
