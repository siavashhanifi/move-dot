export class DotPosition
{
    x: number;
    y: number;
    
    constructor()
    {
        this.x = 0;
        this.y = 0;
    }

    isEqual(a : DotPosition, b : DotPosition) : boolean
    {
        return a.x === b.x && a.y === b.y;
    }
}