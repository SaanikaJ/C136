var video_load = " "; 
var status_load = " "; 
var objects = [ ]; 

function preload(){
    video_load = createVideo("video.mp4");
    video_load.hide();
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center(); 
} 

function draw(){
    image(video_load, 0, 0, 500, 500);

    console.log("Line before if");
    if(status_load == true){
        objectDetector.detect(video_load, gotResults);
    } 

    for(i=0; i < objects.length; i++){
        document.getElementById("status").innerHTML = "Status: Objects Detected!";
        document.getElementById("number_of_objects").innerHTML = "Number of Objects Found: " + objects.length;
    } 
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded); 
    document.getElementById("status").innerHTML = "Status: Detecting Objects!";
}

function modelLoaded(){
    console.log("Model loaded!"); 
    status_load = true; 
    video_load.loop();
    video_load.speed(1); 
    video_load.volume(0);
} 

function pause(){
    video_load.pause();
}

function stop(){
    video_load.stop();
}

function gotResults(results, error){
    if(error){
        console.log(error); 
    }

    else{
        console.log(results);
        objects = results; 
    }
}