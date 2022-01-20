img = "";
function preload()
{
    img = loadImage('dog_cat.jpg');
}
function setup()
{
    canvas = createCanvas(840, 620);
    canvas.center();
}
function draw()
{
    image(img, 0, 0, 840, 620);
    fill("#ff0000")
    text("Dog", 45, 75);
    noFill();
    stroke("#ff0000");
    rect(30, 40, 450, 350 );
}
