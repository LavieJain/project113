function preload(){
}

function setup(){
    canvas = createCanvas(300, 480);
    canvas.center();
    video = createSnapshot(VIDEO);
    video.hide();
}

function draw(){
image(video, 0, 0, 640, 480);


fill(255, 0, 0,);
stroke(255, 0, 0);
circle(50, 50,80);

fill(0, 128, 0);
stroke(0, 128, 0);
rect(90, 40, 460, 20,);

rect(90, 420, 460, 20);
}

function take_snapshot(){
    save('student_name.png');
}