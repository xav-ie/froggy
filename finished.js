// Loading in assets such as images
let frog;
let frogX=0, frogY=0;

function preload() {
    frog = loadImage("./froggy.png");

}
//  SPECIAL P5.js code
function setup() { // called ONCE
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
}
function draw() { //called as many times/sec as possible ~ "frame rate"
    background(50,100,200);
    ellipse(mouseX,mouseY,10,10);
    frogY = lerp(frogY, mouseY, 0.05);
    frogX = lerp(frogX, mouseX, 0.05);
    image(frog,frogX,frogY,150,150);
//  
    if(frogX<=mouseX+75 &&
        frogX>=mouseX-75 &&
        frogY<=mouseY+75 &&
        frogY>=mouseY-75 &&
         
       frameCount>=100) {
        noLoop();
        textSize(32);
        fill(200, 20, 20);  
        textAlign(CENTER);
        text('YOU LOSE!', windowWidth/2, windowHeight/2);
        // alert("You LOSE!");
    }
}