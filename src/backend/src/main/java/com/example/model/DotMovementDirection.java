package com.example.model;

public enum DotMovementDirection
{
    UP,
    DOWN,
    LEFT,
    RIGHT;

    public static DotMovementDirection fromString(String s)
    {
        int i = Integer.parseInt(s);

        switch(i)
        {
            case 0:
                return DotMovementDirection.UP;
            case 1:
                return DotMovementDirection.DOWN;
            case 2:
                return DotMovementDirection.LEFT;
            case 3:
                return DotMovementDirection.RIGHT;
            default:
                return DotMovementDirection.UP;
        }
    }
}

