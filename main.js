leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 550);
    video.position(10, 100)

    canvas = createCanvas(600, 550);
    canvas.position(620, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getSize)
}

function modelLoaded()
{
    console.log("poseNet is initialized!");
}

function draw()
{
    document.getElementById("font_size").innerHTML = "The size of the font will be" + difference + "px";
    background("#009B77");
    textSize(difference);
    fill('#F5DEB3');
    text("Krishna", 310, 310);
}

function getSize(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("left wrist x = " + leftWristX + " right wrist x" + rightWristX);
    }
}