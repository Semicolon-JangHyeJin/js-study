let x = -1000;
let s = 5.0;
let r = -15;
let cx1 = -800;
let cx2 = 0;
let gas = 0;
let smu;

function setup() {
  createCanvas(800, 800);
  smu = loadImage('data/smu.png');
  image(smu,-800,600);
  textSize(36);
  smooth();
}

function draw() {
  background(0);
  noStroke();
  let c=map(mouseY,0,height,255,150);
  let moon=map(mouseY,0,height,PI/3,-PI/3);
  let sun=moon-PI/2;
  fill(c-150,c-80,c);
  rect(0,0,width,height);

  if(mouseY>500){
    stroke(255);
    noFill();
    let x=random(50);
    let a=random(width);
    let b=random(height);

    ellipse(random(width),random(height),x,x);
    line(a,b,a,b+x/5);
    line(a,b,a+x/5,b);
    line(a,b-x/5,a,b);
    line(a-x/5,b,a,b);
  }
  noStroke();

  push();//cloud1
  fill(c-50,c-40,c,250);
  ellipse(cx1,290,100,60);
  ellipse(cx1-60,300,100,50);

  ellipse(cx1+500,220,180,100);
  ellipse(cx1+460,180,180,80);
  ellipse(cx1+400,200,200,100);

  ellipse(cx1+750,250,170,80);
  ellipse(cx1+700,280,150,80);
  cx1--;
  if (cx1<-800) cx1=1000;
  pop();

  push();//moon
  translate(0,height);
  rotate(moon);
  fill(250);
  ellipse(width,0,100,100);
  fill(250,20);
  ellipse(width,0,110,110);
  ellipse(width,0,120,120);
  ellipse(width,0,130,130);
  pop();

  push();//sun

  let s1=random(80);
  translate(0,height);
  rotate(sun);
  stroke(255);
  fill(230,250,80,10);
  ellipse(width,0,100+s1,100+s1);
  ellipse(width,0,100+s1,100+s1);
  ellipse(width,0,100+s1,100+s1);
  ellipse(width,0,100+s1,100+s1);
  noStroke();
  fill(250,80,80);
  ellipse(width,0,100,100);
  stroke(255);
  fill(230,250,80,10);
  ellipse(width,0,100+s1,100+s1);
  ellipse(width,0,100+s1,100+s1);
  ellipse(width,0,100+s1,100+s1);
  pop();

  noStroke();
  push();//cloud2
  fill(c-10,c-30,c,240);
  ellipse(cx2+250,250,150,60);
  ellipse(cx2+200,270,130,60);
  ellipse(cx2-500,320,150,100);
  ellipse(cx2-540,310,220,100);
  ellipse(cx2-450,300,200,90);
  cx2-=1.5;
  if (cx2<-400) cx2=1600;
  pop();

  noStroke();
  push();//MOUSEPRESSED, Background buildings
  if(mouseY>500)
    stroke(255);
  else
    noStroke();
  if(mouseIsPressed){
    if(r<=0){
      if(mouseButton === LEFT) x+=s;
      else if(mouseButton === RIGHT) x-=s;
    }
  }
  translate(-x,-x*radians(r));

  //smu
  fill(80,80,200);
  rect(-750,800,20,200);
  rect(-570,800,20,200);
  rect(-800,600,300,200);
  image(smu,-800,600);

  //1
  fill(240);
  rect(-300,500,250,600);
  fill(50,30,60);
  if((mouseY>550)&&mouseY<750)
    fill(250,200,0);
  rect(-280,560,30,50);
  rect(-220,560,30,50);
  rect(-160,560,30,50);
  rect(-100,560,30,50);
  rect(-150,650,50,150);
  rect(-280,650,90,70);
  fill(200);
  rect(-310,490,270,50);
  rect(-160,650,70,30);
  rect(-310,750,140,100);

  //start point, 2
  fill(250,20,20);
  rect(0,550,200,200);
  rect(-5,530,210,60);
  fill(50);
  rect(0,550,200,20);
  rect(15,600,50,70);
  rect(75,600,50,70);
  rect(135,600,50,70);
  fill(250);
  rect(15,545,170,30);

  //2.5
  stroke(0);
  line(240,290,800,190);
  line(240,295,800,195);
  line(240,300,800,200);
  if(mouseY>500)
     stroke(255);
   else
     noStroke();
  fill(150);
  rect(220,250,20,600);
  fill(0);
  rect(210,290,40,10);

  //3
  fill(200);
  rect(300,350,200,600);
  fill(50,50,100);
  rect(330,380,60,40);
  rect(410,380,60,40);
  rect(340,500,60,100);
  rect(400,500,60,100);
  for(let i=0; i<13;i++){
    fill(50);
    rect(280+i*20,530,2,80);
    rect(275+i*20,560,25,2);
  }
  fill(20,60,200);
  rect(330,430,140,50);
  rect(280,600,240,500);

  //4
  fill(250,200,10);
  rect(720,300,80,70);
  fill(215,210,180);
  rect(600,400,200,600);
  fill(250,80,0);
  rect(590,350,210,20);
  rect(580,370,220,20);
  rect(570,390,230,20);
  fill(80);
  rect(580,450,200,600);

  //4.5
  fill(150);
  rect(800,150,20,600);
  fill(0);
  rect(790,190,40,10);

  //5
  fill(210,20,0);
  rect(830,360,600,10);
  fill(200);
  rect(1450,-100,250,800);
  rect(1400,300,100,300);
  rect(1350,330,100,300);
  fill(100);
  rect(1630,-70,40,40);
  rect(1630,0,40,40);
  rect(1630,70,40,40);
  rect(1630,140,40,40);
  fill(50,50,150);
  rect(1510,-50,80,120);
  fill(50,200,0);
  ellipse(950,250,100,150);
  ellipse(1050,280,60,100);
  fill(50,20,0);
  rect(940,260,15,150);
  rect(1040,290,10,150);

  fill(0,150,0,100);
  arc(1430,200,150,120,-PI,0);
  rect(830,250,200,600);
  rect(1030,200,200,600);
  rect(1375,100,350,600);
  stroke(250);
  for(let k=50;k<=200;k+=50){
    line(830+k,250,830+k,600);
    line(1030+k,200,1030+k,600);
  }
  for(let k=50;k<=350;k+=50){
    line(1375+k,100,1375+k,600);
  }
  if(mouseY>500)
     stroke(255);
   else
     noStroke();
  fill(150);
  rect(830,370,600,600);

  //6
  fill(250,50,0);
  rect(1820,-180,220,180);
  fill(250,100,0);
  rect(1830,-190,200,50);
  fill(50,10,50);
  rect(1830,-130,60,120);
  rect(1900,-130,40,120);
  rect(1945,-130,40,120);
  rect(1990,-130,40,120);
  fill(150);
  rect(1800,0,250,500);
  fill(250,250,200);
  rect(1850,80,150,500);
  fill(220);
  rect(1830,30,190,70);
  if(mouseY>400){
    let door=map(mouseY,400,800,0,200);
    fill(100);
    rect(1840,100,170,door);
    fill(100,200,250,mouseY/8);
    rect(1830,30,190,70);
  }

  //7
  fill(60,60,120);
  rect(2100,-150,300,400);
  fill(50);
  rect(2120,-30,130,200);
  rect(2270,-30,100,200);
  fill(230,220,100);
  rect(2120,100,360,200);
  fill(240,0,0);
  rect(2080,-90,340,70);
  fill(240);
  rect(2090,-80,320,50);

  //8
  fill(100,50,50);
  rect(2500,-200,500,400);
  fill(50);
  rect(2650,-150,300,80);
  fill(50,50,150);
  rect(2650,-100,300,30);

  //9-bus stop
  fill(200);
  rect(3245,-250,10,200);
  ellipse(3250,-250,80,80);
  fill(250);
  ellipse(3250,-250,75,75);
  fill(10,200,100);
  arc(3250,-250,75,75,0,PI);
  rect(3440,-500,250,25);
  fill(200);
  rect(3460,-475,10,200);
  rect(3660,-475,10,200);
  fill(100,70,50);
  rect(3425,-275,600,100);
  rect(3400,-250,600,100);
  rect(3375,-225,600,100);
  rect(3350,-200,600,100);

  //BUS motion start&end point
  if(x<=-1000)
    x=-1000;
  else if (x>=3400){
    x=3400;
    fill(250);
    text("Press [R]  :restart",3440,-510);
    if(keyIsDown(82)){
       x=-1000;
     }
  }
  pop();

  push();//BUS & ROAD
  translate(width/2,height/2);
  rotate(radians(r));

  noStroke();
  fill(250);
  rect(-200,40,120,20,10);
  fill(100,100,200,150);
  rect(-300,60,300,40,10);

  if(mouseIsPressed){
  if(gas<-200)
    gas=0;
  else{
    gas-=1;
    fill(250,100+gas*2);
    ellipse(-300+gas,150,10-gas,10-gas/2);
    ellipse(-310+gas*1.3,150,10-gas,10-gas/2);
    ellipse(-300+gas*2,150,10-gas,10-gas/2);
  }}

  fill(100);
  rect(-330,140,50,20);

  fill(10,230,20);
  rect(-90,50,30,60,10);
  rect(-320,50,30,60,10);
  rect(-300,50,300,10,10);
  rect(-320,100,320,70,10);

  fill(250);
  rect(-210,110,120,40);
  rect(-60,110,40,40);
  fill(250);
  text("7016",-290,140);

  fill(50);
  ellipse(-220,170,60,60);
  ellipse(-80,170,60,60);
  fill(100);
  ellipse(-220,170,30,30);
  ellipse(-80,170,30,30);

   if(mouseY>500)
     stroke(255);
   else
     noStroke();

  fill(c-200);
  rect(-900,200,1600,1000);
  pop();

  let w=radians(360/5);

  push();//wheel-1
  translate(width/2,height/2);
  rotate(radians(r));
  translate(-220,170);
  rotate(radians(x));

  for(let i=0;i<10;i++){
    rotate(w);
    fill(250);
    ellipse(10,0,5,5);
  }
  pop();

  push();//wheel-2
  translate(width/2,height/2);
  rotate(radians(r));
  translate(-80,170);
  rotate(radians(x));

  for(let i=0;i<10;i++){
    rotate(w);
    fill(250);
    ellipse(10,0,5,5);
  }
  pop();

  push();
  fill(0);
  textSize(20);
  text("speed: "+s,50,50);
  pop();
}

function keyPressed() {
  if(s>0 && s<=10){
    if(keyCode === 107 || keyCode === 187){ //+
       if(s<10)s+=1;
     }
     else if(keyCode === 109 || keyCode === 189){ //-
        if(s>1) s-=1;
    }
  }
}
