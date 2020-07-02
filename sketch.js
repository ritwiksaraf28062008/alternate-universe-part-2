let detailY;
// slide to see how detailY works
var size = 375;
//var sun , mars , mercury , venus , earth , jupiter , saturn , uranus , neptune;
function setup() {
  createCanvas(1400, 800);
 
function draw() {
  background(3,3,3);
//sun  
fill(225,123,0);
circle(1150,400,size);

//mercury
fill(133,116,104);
circle(845,380,30);

//venus
fill(159,176,180);
circle(795,340,60);

//earth
fill(40,62,131);
circle(735,420,75);


//mars
fill(246,127,95);
circle(700,300,45);

//jupiter
fill(224,177,133);
circle(650,550,160);

//saturn
fill(155,140,107);
circle(550,140,130);

//uranus
fill(200,238,241);
circle(400,300,105);

//neptune
fill(105,19,175);
circle(200,400,90);

if(frameCount % 50 === 0){

  size = size+5;
}
}
}