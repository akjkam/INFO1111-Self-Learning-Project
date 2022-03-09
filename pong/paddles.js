class Paddle
{
    //Define paddle dimensions
    constructor(x)
    {
        this.x = x;
        this.y = height / 2
        this.height = 90
        this.width = 20;
    }
    // Create Paddle
    display()
    {
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }
}