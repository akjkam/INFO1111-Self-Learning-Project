class Paddle
{
    //Define paddle dimensions
    constructor(x)
    {
        this.x = x;
        this.y = height / 2;
        this.height = 90;
        this.width = 20;
        //Define status of paddle(going up or down), initially stationary
        this.isup = False;
        this.isdown = False;
    }
    // Create Paddle
    display()
    {
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }
    //Setting paddle movement
    up()
    {
        this.y -= 2;
    }

    down()
    {
        this.y += 2;
    }
}
