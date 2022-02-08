img = "";
status = ""

function preload()
{
    img = loadImage('dog_cat.jpg');
}


function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects";
}

function modelLoaded()
{
    console.log("ML5 LOADED BOI");
    status = true;
    object_detector.detect(img,gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
    }
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill('#00FF00');
    text("DOG", 54, 90);
    noFill();
    stroke('#00FF00');
    rect(44, 78, 270, 300);
    fill('#00FF00');
    text("CAT", 270, 100);
    noFill();
    stroke('#00FF00');
    rect(250, 105, 350, 270);
}