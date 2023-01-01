export enum DotMovementDirections
{
    UP = 0,
    DOWN,
    LEFT,
    RIGHT
}

export function dotMovementDirectionToString(direction: DotMovementDirections): string
{
    return direction.toString();
}