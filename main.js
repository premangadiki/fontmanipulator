function setup(){
    video = createCapture(VIDEO);
    video.size(550, 600);
    canvas = createCanvas(600 , 600);
    canvas.position(560 , 150);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotresults);
} 

rightwristX =0;
leftwristX =0;
difference =0;

function modelLoaded(){
    console.log("modelloaded!!!");
}

function gotresults(results){

    if(results.length > 0){
    console.log(results);

    leftwristX = results[0].pose.leftWrist.x;
    rightwristX = results[0].pose.rightWrist.x;
    difference = floor( leftwristX - rightwristX);
    }
}

function draw(){
    background('#99ffff');
    fill('#000000');
    text('prem', 50 ,400 );
    textSize(difference);
    document.getElementById("size").innerHTML = "Width and height of the font = " + difference ;
}