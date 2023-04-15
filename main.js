noseX=0;
noseY=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/K8R5vY0J/Clown-nose-large.webp');

}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('poseNet is initialized');
    
}
function gotPoses(results){
if(results.length>0)
{
    console.log(results);
    noseX=results[0].pose.nose.x-25;
    noseY=results[0].pose.nose.y-25;
    console.log("nose x="+noseX);
    console.log("nose y="+noseY);
}
}
function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,50,50);
}
function take_snapshot(){
save('harini.png');
}