class Score
{
    constructor(x)
    {
        //Initial score of 0
        this.x = x;
        this.score = 0;
    }

    display()
    {
        //Set score parameters
        textSize(50);
        textAlign(CENTER);
        text(this.score, this.x, 60);

    }
    //Update score
    increment()
    {
        this.score++;
    }
}