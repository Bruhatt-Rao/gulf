/* 
|------------|
| UNFINISHED |
|------------|
*/

function timer(t) {
  hardwaretimerstillrunning = true
  setTimeout(function(){hardwaretimerstillrunning = false}, t)
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