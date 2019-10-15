
let x=0;
let y=0;
let x2=0
let y2=0;
let mode=1;
let lk=0;
let p6o7=0;
function setup(){
createCanvas(700,700);
  background(0, 250, 0);
}
function draw(){
if (p6o7==0){background(0,250,0);p6o7=1;}
if(mode==4){}else{if(mode==5){}else{if(mode==6){}else{if(mode==7){}else{background(0,250,0);}}}}
if(key=='w'){if (mode==1){y=y-20}if (mode==3){y2=y2-20}
            }
  if(key=='a'){if (mode==1){x=x-10}if (mode==3){x2=x2-10}}
  if(key=='s'){if (mode==1){y=y+20}if (mode==3){y2=y2+20}}
  if(key=='d'){if (mode==1){x=x+10}if (mode==3){x2=x2+10}}
if (mode==4){}else{if (mode==7){}else{
if (key==0){}else{lk=key;}
  
  line(x,y,mouseX,mouseY);}}
  if (mode==4){}else{if (mode==6){}else{
    line(x2,y2,mouseX,mouseY);}}
if (key=='w'){}else{
if (key=='a'){}else{
if (key=='s'){}else{
if (key=='d'){}else{
if (key==0){}else{
  if (key=>4){c=0;}
mode=key;if (key=='4'){c=1;}if (key=='6'){if (c==0){background(0,250,0);c=1;}}
if (key=='7'){if (c==0){background(0,250,0);c=1;}}
}}}}}}
function keyReleased(){key=0;if (mode==4){}else{c=0}}
