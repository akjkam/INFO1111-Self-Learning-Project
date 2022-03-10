let userpaddle;
let aipaddle;
let ball;
//Define canvas and two paddles
function setup()
{
    createCanvas(800, 500);
    //Create balls with x position values
    userpaddle = new Paddle(25);
    aipaddle = new Paddle(width - 45);
    ball = new Ball();
}

//Draw onto page
function draw()
{
    background(0);
    userpaddle.display();
    aipaddle.display();
    //Draw net/line
    stroke(255);
    line(width / 2, 0, width / 2, height);
    //Move paddle based on user input within canvas
    if (userpaddle.isup == true)
    {
        if (userpaddle.y > 0)
        {
            userpaddle.up();
        }
    }
    else if (userpaddle.isdown == true)
    {
        if (userpaddle.y < height - userpaddle.height)
        {
            userpaddle.down();
        }
    }
    ball.display();

}

//User input
function keyPressed()
{
    if (keyCode == UP_ARROW)
    {
        userpaddle.isup = true;
    }
    else if (keyCode == DOWN_ARROW)
    {
        userpaddle.isdown = true;
    }
}
function keyReleased()
{
    if (keyCode == UP_ARROW)
    {
        userpaddle.isup = false;
    }
    else if (keyCode == DOWN_ARROW)
    {
        userpaddle.isdown = false;
    }
}
