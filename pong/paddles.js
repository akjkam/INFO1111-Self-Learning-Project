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
        this.isup = false;
        this.isdown = false;
    }
    // Create Paddle
    display()
    {
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }
    //Setting paddle movement, need checks to prevent ai paddle from moving off screen
    up()
    {
        if (this.y > 0)
        {
            this.y -= 2.5;
        } 
        
    }

    down()
    {
        if (this.y < height - this.height)
        {
            this.y += 2.5;
        }
    }
    //Update function for ai paddle
    update()
    {
        if (this.isup)
        {
            this.up();
        }
        else if (this.isdown)
        {
            this.down();
        }
    }
}
