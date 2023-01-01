import { CSSProperties, Dispatch,SetStateAction, useState } from "react";
import { controller } from "../..";
import { DotPosition } from "../../model/DotPosition";

const dotCanvasCSS: CSSProperties =
{
    height: "40vh",
    width: "40vh",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
};

const dotContainerCSS: CSSProperties =
{
    height: "10vh",
    width: "10vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderColor: "black",
    color: "red",
    marginLeft: "5px",
    marginRight: "5px"
};

type DotContainerPosition =
{
    x: number;
    y: number;
}

type DotContainerProps = 
{
    dotPosition:          DotPosition
    dotContainerPosition: DotContainerPosition;
}

function DotContainer( {dotPosition,  dotContainerPosition}: DotContainerProps): JSX.Element
{   
    const displayDot : boolean = dotPosition.x === dotContainerPosition.x &&
                                 dotPosition.y === dotContainerPosition.y;

    return(
        <div style={dotContainerCSS}>
            { displayDot ? <>*</> : null }
        </div>
    );
}

//Called from the controller to trigger a rerender when the dot position is updated
export let rerenderDotPosition: Dispatch<SetStateAction<DotPosition>> = () => {};

export default function DotCanvas()
{
    const [dotPosition, setDotPosition] = useState(controller.getDotPosition());
    rerenderDotPosition = setDotPosition;

    return(
        <div className="DotCanvas" style={dotCanvasCSS}>
            <DotContainer dotPosition={dotPosition} dotContainerPosition={{x: -1, y: 1}}/>
            <DotContainer dotPosition={dotPosition} dotContainerPosition={{x: 0, y: 1}}/>
            <DotContainer dotPosition={dotPosition} dotContainerPosition={{x: 1, y: 1}}/>

            <DotContainer dotPosition={dotPosition} dotContainerPosition={{x: -1, y: 0}}/>
            <DotContainer dotPosition={dotPosition} dotContainerPosition={{x: 0, y: 0}}/>
            <DotContainer dotPosition={dotPosition} dotContainerPosition={{x: 1, y: 0}}/>

            <DotContainer dotPosition={dotPosition} dotContainerPosition={{x: -1, y: -1}}/>
            <DotContainer dotPosition={dotPosition} dotContainerPosition={{x: 0, y: -1}}/>
            <DotContainer dotPosition={dotPosition} dotContainerPosition={{x: 1, y: -1}}/>
        </div>
    ); 
}