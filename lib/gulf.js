/* 
|-----------|
| VARIABLES |
|-----------|
*/

var looping = false;
var mouse = new Vector();
var frameCount=0;
var angle = 0;
var clear = true;
var keys = [];
var key = {
  a: 65,
  b: 66,
  c: 67,
  d: 68,
  e: 69,
  f: 70,
  g: 71,
  h: 72,
  i: 73,
  j: 74,
  k: 75,
  l: 76,
  m: 77,
  n: 78,
  o: 79,
  p: 80,
  q: 81,
  r: 82,
  s: 83,
  t: 84,
  u: 85,
  v: 86,
  w: 87,
  x: 88,
  y: 89,
  z: 90
};

/* 
|-------|
| SETUP |
|-------|
*/

var canvas = document.createElement("CANVAS")
document.getElementById("game").appendChild(this.canvas)
canvas.height = 500;
canvas.width = 500;
var ctx = canvas.getContext("2d")
window.onload = function(){
  init()
};

function loop() {
  i = setInterval(mupdate, 30)
  looping = true;
}

function mupdate() {
  if (clear) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
  try {
    update();
  } catch (e) {
    console.log(e)
    noloop()
  }
  frameCount++;
}
var i;

/* 
|-----------|
| LISTENERS |
|-----------|
*/

document.addEventListener("mousemove", function(e){
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

document.addEventListener("click", function() {
    try {
      mouse_press()
    } catch {
      
    }
});

document.onkeydown = function(e) {
  keys[e.keyCode] = true;
  try {
    keydown(e.key);
  } catch (error) {
  }
}

document.onkeyup = function(e) {
  keys[e.keyCode] = false;
  try {
    keyup(e.key);
  } catch (error) {
  }
}

/* 
|-----|
| DOM |
|-----|
*/

function Tag() {
  this.tag = document.createElement("p");
  this.set = function(v) {
    this.tag.innerText = v;
  }
}

/* 
|------------|
| UNFINISHED |
|------------|
*/

function timer(t) {
  hardwaretimerstillrunning = true
  setTimeout(function(){hardwaretimerstillrunning = false}, t)
}

/* 
 ______
|      |
| MATH |
|______|
*/

function randint(m=0, l) {return Math.floor((Math.random() * (l-m))+m);}
function sin(n) {return Math.sin(n)}
function cos(n) {return Math.cos(n)}

/* 
|-------|
| UTILS |
|-------|
*/

function noclear() {clear = false;}
function noloop() {clearInterval(i)}
function translate(x,y) {ctx.translate(x,y)}
function rotate(a,type="radians") {ctx.rotate(a*Math.PI/180)}
function save() {ctx.save()}
function restore() {ctx.restore()}
function dist2d(a,b) {return(Math.sqrt((Math.pow(a.x-b.x,2))+(Math.pow(a.y-b.y,2))))}
function dist(x, y) {return(Math.sqrt((Math.pow(x,2))+(Math.pow(y,2))))}

function height(h,w) {
  canvas.height = h;
  canvas.width = w;
}

function load(img) {
    imageforloading = new Image();
    imageforloading.src = img;
    return imageforloading;
}

function Vector(x=0,y=0,z=0){
  this.x = x
  this.y = y
  this.z = z
  
  this.rand = function(min, lim) {
    this.x = randint(min, lim)
    this.y = randint(min, lim)
    this.z = randint(min, lim)
    return this
  }

  this.add = function(a) {
    this.x += a.x
    this.y += a.y
    this.z = a.z
    return this
  }

  this.set = function(a) {
    this.x = a.x
    this.y = a.y
    this.z = a.z
    return this
  }

  this.sub = function(a) {
    this.x -= a.x
    this.y -= a.y
    this.z -= a.z
    return this
  }

  this.mult = function(a) {
      this.x *= a
      this.y *= a
      this.z *= a 
      return this
  }
  
  this.div = function(a) {
      this.x = this.x/a
      this.y = this.y/a
      this.z = this.z/a 
      return this
  }

  this.mag = function() {
    return Math.sqrt((this.x^2) + (this.y^2))
  }
}

function record(time) {
    var recordedChunks = [];
    return new Promise(function (res, rej) {
        var stream = canvas.captureStream(25 /*fps*/);
        mediaRecorder = new MediaRecorder(stream, {
            mimeType: "video/webm; codecs=vp9"
        });
        
        //ondataavailable will fire in interval of `time || 4000 ms`
        mediaRecorder.start(time || 4000);

        mediaRecorder.ondataavailable = function (event) {
            recordedChunks.push(event.data);
             // after stop `dataavilable` event run one more time
            if (mediaRecorder.state === 'recording') {
                mediaRecorder.stop();
            }

        }

        mediaRecorder.onstop = function (event) {
            var blob = new Blob(recordedChunks, {type: "video/webm" });
            var url = URL.createObjectURL(blob);
            var a = document.createElement('video');
            a.src = url;
            document.body.appendChild(a);
            res(url);
        }
    })
}

/* 
|---------|
| DRAWING |
|---------|
*/

function drawimg(img, x,y, w,h) {
  ctx.drawImage(img, x,y, w,h);
}

function ellipse(x,y,r) {
  ctx.beginPath();
  if (arguments.length == 3) {
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
  } else if (arguments.length == 2) {
    ctx.arc(x.x, x.y, y, 0, 2 * Math.PI, false);
  }
  ctx.fill();
}

function text(x,y,text, size="30px", font="Verdana") {
  ctx.font = size + " " + font;
  ctx.textAlign = "center";
  ctx.fillText(text, x, y);
}

function line(x,y,x1,y1) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  ctx.stroke();
}

function triangle(x,y,x1,y1,x2,y2) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x, y);
  ctx.fill();
  ctx.stroke();
}

function full() {
  ctx.fillRect(0,0,canvas.width,canvas.height)
}

function color(c) {
  ctx.fillStyle = c;
}

function stroke(c) {
  ctx.strokeStyle = c;
}

function w(n) {
  ctx.lineWidth = n;
  ctx.strokeWidth = n;
}

function rect(x,y,w=30,h=30,emiss) {
  if (emiss) {
        ctx.globalAlpha = 0.003;
        for (i=w/2; i<w*5; i+=5) {
            ctx.beginPath();
            ctx.arc(x, y, i, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
    ctx.globalAlpha = 1.0;
    TeMpCoLoR = ctx.fillStyle;
    CoLoR = ctx.strokeStyle;
    lw = ctx.lineWidth;
    color(CoLoR)
    ctx.fillRect(x-lw,y-lw,w+lw*2,h+lw*2)
    color(TeMpCoLoR)
    ctx.fillRect(x,y,w,h)

}

function point(x,y, r=5) {
  ellipse(x,y,r=r)
}

var typer = function(tex,line,xposfortyper=0,nest=false) {
  this.t = "";
  this.ind = 0;
  this.c = 0;
  this.anim = true;
  
  this.draw = function() {
    text(xposfortyper, line*20, this.t, size="80px", font="Lucida Console")
  }

  this.update = function() {

    
    if (!nest) {
      
      if (this.ind < tex.length && this.c%2==0 && this.c != 0) {
        this.t += tex[this.ind];
        this.ind += 1
      }
      
      this.c += 1

    } else if (!nest.anim) {
      if (this.ind < tex.length && this.c%2==0 && this.c != 0) {
        this.t += tex[this.ind];
        this.ind += 1
      }
      
      this.c += 1
    }

    
    if (this.t == tex) {
      this.anim = false;
    }
  }
}
