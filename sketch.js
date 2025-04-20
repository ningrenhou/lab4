var qiaoyu;
var yuanji;
var numberofkitties = 4;
function setup(){
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    qiaoyu = loadImage('dianxia.png');
    yuanji = createVideo('yuanji.mov');
    yuanji.hide();
    yuanji.volume(0);
    yuanji.play();
}

function draw(){
    background('#93efd5');
    imageMode(CORNER);
    for(var x = 0; x < numberofkitties; x++){
        for(var y = 0; y < numberofkitties; y++){
            push();
            translate(x * width/numberofkitties, y * height/numberofkitties);
            rotate(-frameCount/90);
            image(yuanji, 0, 0, 180, 380);
            pop();
        }
    }
    imageMode(CENTER);
    push();
    translate(mouseX, mouseY);
    rotate(frameCount/60);
    image(qiaoyu, 0, 0, 90, 90);
    pop();
}

function mousePressed(){
    yuanji.play();
    yuanji.volume(1);
}


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}