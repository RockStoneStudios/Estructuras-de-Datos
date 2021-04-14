var angulo = 0;
var slider;

function setup() {
    createCanvas(400,400);
    slider = createSlider(0,TWO_PI,PI/4,0.01);
}

function draw() {
    background(51);
    angulo = slider.value();
    stroke(0,250,0);
    translate(200,height);
    rama(100);
}

function rama(len){
    line(0,0,0,-len);
    translate(0,-len);
   
    if(len>4){
        push();
        rotate(angulo)
        rama(len*0.67);
        pop();
        push();
        rotate(-angulo);
        rama(len*0.67);
        pop();
    }
    
    // line(0,0,0,-len*0.67);
}