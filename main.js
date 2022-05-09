function preload(){
}
function setup(){
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 300, 300);
}
function modelLoaded(){
   console.log("PoseNet is initialized");
}
function gotPoses(results){
   if(results.length>0){
       console.log(results);
       console.log("Right eye x= "+results[0].pose.rightEye.x);
       console.log("Right eye y= "+results[0].pose.rightEye.y);
   }
}
function take_snapshot(){
    save('Sunglasses_Me_Img.png');
}
function next(){
    window.location="index2.html";
}