let userpaddle;
let aipaddle;
let ball;
let userscore;
let aiscore;
//Define canvas and two paddles
function setup()
{
    createCanvas(800, 500);
    //Initialzie paddles, balls, scores
    userpaddle = new Paddle(25);
    aipaddle = new Paddle(width - 45);
    ball = new Ball();
    userscore = new Score(width / 2 - 40);
    aiscore = new Score(width / 2 + 40);
}

//Draw onto page
function draw()
{
    background(0);
    userpaddle.display();
    aipaddle.display();
    userpaddle.update();
    aipaddle.update();
    aiscore.display();
    userscore.display();
    aiFunc();
    //Draw net/line
    stroke(255);
    line(width / 2, 0, width / 2, height);
    //Move paddle based on user input within canvas
    if (userpaddle.isup == true)
    {
        //Making sure the paddle can't be moved off screen
        if (userpaddle.y > 0)
        {
            userpaddle.up();
        }
    }
    else if (userpaddle.isdown == true)
    {
        //Making sure the paddle can't be moved off screen
        if (userpaddle.y < height - userpaddle.height)
        {
            userpaddle.down();
        }
    }
    ball.display();
    ball.update(userscore, aiscore);
    ball.hitPlay(userpaddle);
    ball.hitAi(aipaddle);

}
//Function for ai movement
function aiFunc()
{
    let mid = aipaddle.y + aipaddle.height / 2;
    //If ball is above middle of paddle, move paddle up, else move paddle down
    if (mid + 2.5 > ball.y)
    {
        aipaddle.isup = true;
        aipaddle.isdown = false;
    }
    else if (mid - 2.5 < ball.y)
    {
        aipaddle.isup = false;
        aipaddle.isdown = true;
    }
    //If ball is within 5 units of mid of paddle, set y value to ball y value to limit jittering
    else
    {
        aipaddle.y = ball.y;
    }
}

//Functions to register user input
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
