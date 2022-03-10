class Ball
{
    constructor()
    {
        this.r = 10;
        this.reset();
    }
    //Create ball
    display()
    {
        let c = color("white");
        noStroke();
        fill(c);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
    //Reset Ball
    reset()
    {
        this.x = width / 2;
        this.y = height / 2;
    }
}