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
# Values
Variable | What the value returns
--- | --- 
mouse | Vector with x and y position of mouse
frameCount | How many frames have been rendered 
looping | Binary value of if the update function is running every frame
clear | Binary value of if canvas is being cleared every frame or not
canvas | has a .height value and a .width value of the display canvas

# Callable Functions
Function | Args | use | return value
--- | --- | --- | ---
noloop | none | disables update loop | returns looping binary value
noclear | none | disables clearing canvas every frame | returns clear binary value
