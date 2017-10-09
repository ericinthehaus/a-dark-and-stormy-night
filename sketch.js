var xpos= 50;
var ypos=  0;
var xsize = 50;
var ysize = 50;


var num;

function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {

    background(50);

    num= random(0,windowWidth);
    
    
    fill(0, 0, 255);  
    
    ellipse(xpos, ypos, xsize, ysize);
    
    ypos= ypos +30;
    xpos= xpos-7;

    if(ypos >= windowHeight){
        
        ypos=0;
        xpos= num;
        xsize= random (30, 100);
        ysize= xsize;
    }


}
