class Ball
{
    constructor()
    {
        this.r = 10;
        this.reset();
    }
    //Update ball position
    update()
    {
        //If ball hits the top or bottom, it changes direction
        if (this.y < this.r || this.y > height - this.r)
        {
            this.yVel = -this.yVel;
        }
        //If ball hits the halfway line/net, it changes direction
        if (this.x > width / 2)
        {
            this.xVel = -this.xVel;
        }
        //If ball hits the left or right side of screen, restart game
        if (this.x < this.r || this.x > width + this.r)
        {
            this.reset();
        }
        //Moving ball in set direction
        this.x += this.xVel;
        this.y += this.yVel;
    }
    //Create ball
    display()
    {
        let c = color("white");
        noStroke();
        fill(c);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
    //Define initial ball properties and also resets ball
    reset()
    {
        this.x = width / 2;
        this.y = height / 2;
        /*
        Defining random direction of ball on reset
        Uses random function from p5 instead of Math.random since Math.random
        only returns a number from 0-1 which makes the ball velocity very slow
        */
        
        this.xVel = random(4, 5);
        this.yVel = random(-3, 5);
    }
    hitPlay(player)
    {
        //Check if ball and paddle are same x coordinates
        if (this.x - this.r < (player.x + player.width) && this.x > player.x)
        {
            //Check if height matches
            if (this.y >= player.y && this.y <= player.y + player.height)
            {
                this.xVel = -this.xVel;
            }
        }
    }
}
