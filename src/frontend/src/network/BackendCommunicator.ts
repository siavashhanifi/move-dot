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

        const response: Promise<Response> = fetch(this.#url.concat(apiEndpoint),
                                                  {
                                                      method:'GET',
                                                      mode:  'cors',
                                                  });
        const dotPositionJson: Promise<DotPosition> = (await response).json();

        return dotPositionJson;
    }

    async sendMoveDotRequest(direction: DotMovementDirections): Promise<void>
    {
        const apiEndpoint: string = "/moveDot";
        
        fetch(this.#url.concat(apiEndpoint),
                                {
                                    method:'PATCH',
                                    mode:  'cors',
                                    body:   dotMovementDirectionToString(direction)
                                });
}
}