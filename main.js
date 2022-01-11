music="";
RwY="";
LwY="";
RwX="";
LwX="";
Speed=0;
Volume=0;
function preload() {
    music=loadSound("music.mp3");
}
function setup() {
    canvas=createCanvas(500,350)
    video = createCapture(VIDEO);
    canvas.position(400,250);
    video.size(500,350);
    video.hide()
    poseNat=ml5.poseNet(video,modelLoaded);
    poseNat.on('pose',gotResults);
}
function draw() {
    image(video,0,0,500,350);
    fill("red");
    stroke("red");
    circle(RwX,RwY,10);
    circle(LwX,LwY,10);
    Volume=LwY/700;
    Volume=Volume*2;
    Volume=Volume.toFixed(1);
    document.getElementById("volume").innerHTML="Volume="+Volume;
    music.setVolume(Volume)
}
function modelLoaded() {
    console.log("dots on your face have been loaded");
}
function gotResults(results) {
    if (results.length>0) {
        console.log(results)
        RwY=results[0].pose.rightWrist.y;
        RwX=results[0].pose.rightWrist.x;
        LwY=results[0].pose.leftWrist.y;
        LwX=results[0].pose.leftWrist.x;
    }
}
function play(){
	music.play();
}