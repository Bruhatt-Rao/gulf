function line3d(o,n, a=0) {
	//r1 = rX(x,y,z,angle)
	//r2 = rX(x1,y1,z1,angle)
	//i1 = flatten(r1[0],r1[1],r1[2])
	//i2 = flatten(r2[0],r2[1],r2[2])
	ot = translate3d(o, a)
	nt = translate3d(n, a)
	ctx.beginPath();
	ctx.moveTo(ot.x, ot.y);
	ctx.lineTo(nt.x, nt.y);
	ctx.stroke();
	ctx.fill()
}

function point3d(v, a=0) {
  pos = translate3d(v, a)
	ellipse(pos.x,pos.y, r=5);
}

function translate3d(v, a=0) {
  r = rX(v,a);
  //r = rY(r,a);
  //r = rZ(v,a);
  pos = flatten(r, 100);
  return pos;
}

function flatten(v,s=5) {
  x = v.x;
  y = v.y;
  z = v.z;
  return (new Vector(250 + (x*s)/(z+s), 250 + (y*s)/(z+s)))
}

function rX(v, a) {
  x = v.x;
  y = ((v.y)*cos(a) - (v.z)*sin(a));
  z = ((v.y)*sin(a) + (v.z)*cos(a));
  return new Vector(x,y,z);
}

function rY(v, a) {
  x = ((v.x)*cos(a) + (v.z)*sin(a));
  y = v.y;
  z = ((-(v.x))*sin(a) + (v.z)*cos(a));
  return new Vector(x,y,z);
}

function rZ(v, a) {
  x = ((v.x)*cos(a) - (v.y)*sin(a));
  y = ((v.x)*sin(a) + (v.y)*cos(a));
  z = v.z;
  return new Vector(x,y,z);
}