import { DotMovementDirections } from "../model/DotMovementDirections";
import { DotPosition } from "../model/DotPosition";
import { BackendCommunicator } from "../network/BackendCommunicator";

export class Controller{
    #dotPosition: DotPosition;
    #backendCommunicator: BackendCommunicator;

    //Following the 'observer pattern' for notifying the view when the dotPosition has been updated
    #dotPositionChangedNotifiers: Array<Function>; 

    #notifyObservers()
    {
        for (let notify of this.#dotPositionChangedNotifiers)
        {
            notify(this.#dotPosition);
        }
    }

    constructor(backendCommunicator: BackendCommunicator, dotPosition: DotPosition)
    {
        this.#dotPosition         = dotPosition;
        this.#backendCommunicator = backendCommunicator;
        this.#dotPositionChangedNotifiers = [];
    }

    async pollForCurrentDotPosition(millieseconds: number): Promise<void>
    {
        setTimeout(() => {
            this.pollForCurrentDotPosition(millieseconds);
        }, millieseconds);
        
        this.#dotPosition = await this.#backendCommunicator.sendGetDotPositionRequest();
        this.#notifyObservers();
    }

    async moveDotUp() : Promise<void>
    {
        await this.#backendCommunicator.sendMoveDotRequest(DotMovementDirections.UP);
    }

    async moveDotDown() : Promise<void>
    {
        await this.#backendCommunicator.sendMoveDotRequest(DotMovementDirections.DOWN);
    }

    async moveDotLeft() : Promise<void>
    {
        await this.#backendCommunicator.sendMoveDotRequest(DotMovementDirections.LEFT);
    }

    async moveDotRight() : Promise<void>
    {
        await this.#backendCommunicator.sendMoveDotRequest(DotMovementDirections.RIGHT);
    }

    getDotPosition() : DotPosition
    {
        return this.#dotPosition;
    }

    addDotPositionChangedNotifier(notify : Function)
    {
        this.#dotPositionChangedNotifiers.push(notify);
    }
}