function preload() {
    
}

function setup() {
    canvas = createCanvas(300,300)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()
    video.size(400,400)
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Tbj4Lk07g/model.json",model_loaded)
    
}

function model_loaded() {
    console.log("Your model is loaded.")
}

function draw() {
   image(video,0,0,300,300) 
   classifier.classify(video , getresults)
}

function getresults(error,results) {
    if (error) {
        console.error(error)
    } else {
        document.getElementById("Objectresult").innerHTML  = results[0].label
    }
}

