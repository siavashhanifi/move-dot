package siavash.moveDot.model;

public class DotPosition {

    private static final int X_MAX = 1;
    private static final int X_MIN = -1;

    private static final int Y_MAX = 1;
    private static final int Y_MIN = -1;


    private int x;
    private int y;

    private void handleMoveUp()
    {
        if( this.y + 1 > Y_MAX )
        {
            return;
        }
        this.y += 1;
    }

    private void handleMoveDown()
    {
        if( this.y - 1 < Y_MIN )
        {
            return;
        }
        this.y -= 1;
    }

    private void handleMoveRight()
    {
        if( this.x + 1 > X_MAX )
        {
            return;
        }

        this.x += 1;
    }

    private void handleMoveLeft()
    {
        if( this.x - 1 < X_MIN )
        {
            return;
        }
        this.x -= 1;
    }

    public DotPosition()
    {
        this.x = 0;
        this.y = 0;
    }

    public synchronized void movePosition(DotMovementDirection direction)
    {
        switch(direction)
        {
            case UP:
                handleMoveUp();
                break;
            case DOWN:
                handleMoveDown();
                break;
            case LEFT:
                handleMoveLeft();
                break;
            case RIGHT:
                handleMoveRight();
                break;
            default:
                return;
        }
    }

    public synchronized int getX()
    {
        return this.x;
    }

    public synchronized int getY()
    {
        return this.y;
    }
}