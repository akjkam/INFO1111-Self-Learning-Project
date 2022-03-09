let userpaddle;

function setup()
{
    createCanvas(800, 500);
    userpaddle = new Paddle(25);
}

function draw()
{
    background(0);
    userpaddle.display();
    stroke(255)
    line(width / 2, 0, width / 2, height);
}