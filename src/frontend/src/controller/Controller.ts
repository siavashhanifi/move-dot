import { DotMovementDirections } from "../model/DotMovementDirections";
import { DotPosition } from "../model/DotPosition";
import { BackendCommunicator } from "../network/BackendCommunicator";
import { rerenderDotPosition } from "../view/dotCanvas/DotCanvas";

export class Controller{
    #dotPosition: DotPosition;
    #backendCommunicator: BackendCommunicator;

    constructor(backendCommunicator: BackendCommunicator, dotPosition: DotPosition)
    {
        this.#dotPosition         = dotPosition;
        this.#backendCommunicator = backendCommunicator;
    }

    async pollForCurrentDotPosition(millieseconds: number): Promise<void>
    {
        setTimeout(() => {
            this.pollForCurrentDotPosition(millieseconds);
        }, millieseconds);
        
        this.#dotPosition = await this.#backendCommunicator.sendGetDotPositionRequest();
        rerenderDotPosition(this.#dotPosition);
    }

    async moveDotPosition(direction: DotMovementDirections): Promise<DotPosition>
    {
        this.#dotPosition = await this.#backendCommunicator.sendMoveDotRequest(direction);
        return this.#dotPosition;
    }

    getDotPosition() : DotPosition
    {
        return this.#dotPosition;
    }
}