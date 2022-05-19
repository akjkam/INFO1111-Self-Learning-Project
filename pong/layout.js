let userPaddle;
let aiPaddle;
let ball;
let userScore;
let aiScore;
let paddleEffect;
let wallEffect;
let scoreEffect;
let mode;
//Preload function to load audio effects
function preload()
{
    paddleEffect = loadSound("sounds/paddlehit.m4a");
    wallEffect = loadSound("sounds/wallhit.m4a");
    scoreEffect = loadSound("sounds/scoreupdate.m4a");
}
//Define canvas and two paddles
function setup()
{
    //Initially in start menu
    mode = 0;
    createCanvas(800, 500);
    //Initialzie paddles, balls, scores
    userPaddle = new Paddle(0);
    aiPaddle = new Paddle(width - 20);
    ball = new Ball();
    userScore = new Score(width / 2 - 40);
    aiScore = new Score(width / 2 + 40);

}

//Draw onto page
function draw()
{
    //Start Menu
    if (mode == 0)
    {
        textSize(40);
        text("Press ENTER to start", 120, 140);
    }
    else
    //Game
    {
        background(0);
        userPaddle.display();
        aiPaddle.display();
        userPaddle.update();
        aiPaddle.update();
        aiScore.display();
        userScore.display();
        aiFunc();
        //Draw net/line
        stroke(255);
        line(width / 2, 0, width / 2, height);
        //Move paddle based on user input within canvas
        if (userPaddle.isUp == true)
        {
            //Making sure the paddle can't be moved off screen
            if (userPaddle.y > 0)
            {
                userPaddle.up();
            }
        }
        else if (userPaddle.isDown == true)
        {
            //Making sure the paddle can't be moved off screen
            if (userPaddle.y < height - userPaddle.height)
            {
                userPaddle.down();
            }
        }
        ball.display();
        ball.update(userScore, aiScore);
        ball.hitPlay(userPaddle);
        ball.hitAi(aiPaddle);
    }

}
//Function for ai movement
function aiFunc()
{
    let mid = aiPaddle.y + (aiPaddle.height / 2);
    //If ball is above middle of paddle, move paddle up, else move paddle down
    if (mid + 10 > ball.y)
    {
        aiPaddle.isUp = true;
        aiPaddle.isDown = false;
    }
    else if (mid - 10 < ball.y)
    {
        aiPaddle.isUp = false;
        aiPaddle.isDown = true;
    }
    //If ball is within 10 units of mid of paddle, set y value to ball y value to limit jittering
    else
    {
        aiPaddle.y = ball.y;
    }
}

//Functions to register user input
function keyPressed()
{
    if (keyCode == ENTER)
    {
        mode = 1;
    }
    else if (keyCode == UP_ARROW)
    {
        userPaddle.isUp = true;
    }
    else if (keyCode == DOWN_ARROW)
    {
        userPaddle.isDown = true;
    }

}
function keyReleased()
{
    if (keyCode == UP_ARROW)
    {
        userPaddle.isUp = false;
    }
    else if (keyCode == DOWN_ARROW)
    {
        userPaddle.isDown = false;
    }
}
