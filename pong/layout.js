let userpaddle;
let aipaddle;
//Define canvas and two paddles
function setup()
{
    createCanvas(800, 500);
    userpaddle = new Paddle(25);
    aipaddle = new Paddle(width - 45);
}
//Draw onto page
function draw()
{
    background(0);
    userpaddle.display();
    aipaddle.display();
    stroke(255)
    line(width / 2, 0, width / 2, height);
}
