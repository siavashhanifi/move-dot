import { DotMovementDirections, dotMovementDirectionToString } from "../model/DotMovementDirections";
import { DotPosition } from "../model/DotPosition";

export class BackendCommunicator
{
    #ip: string;
    #port: number;
    #url: string;

    #setUrl(): void
    {
        this.#url = 'http://' + this.#ip + ":" + this.#port;
    }

    constructor(ip: string, port: number)
    {
        this.#ip = ip;
        this.#port = port;
        this.#url = "";
        this.#setUrl();
    }


    async sendGetDotPositionRequest(): Promise<DotPosition>
    {
        const apiEndpoint: string = "/dotPosition";

                const response: Promise<Response> =  fetch(this.#url.concat(apiEndpoint),
                                                        {
                                                            method: 'GET',
                                                            mode: 'cors',
                                                        });
        const dotPositionJson: Promise<DotPosition> = (await response).json();

        console.log(dotPositionJson);
        return dotPositionJson;
    }

    async sendMoveDotRequest(direction: DotMovementDirections): Promise<DotPosition>
    {
        const apiEndpoint: string = "/moveDot";
        
        const response: Promise<Response> =  fetch(this.#url.concat(apiEndpoint),
                                                        {
                                                            method: 'PATCH',
                                                            mode: 'cors',
                                                            body: dotMovementDirectionToString(direction)
                                                        });
        const dotPositionJson: Promise<DotPosition> = (await response).json();

        console.log(dotPositionJson);
        return dotPositionJson;
    }
}