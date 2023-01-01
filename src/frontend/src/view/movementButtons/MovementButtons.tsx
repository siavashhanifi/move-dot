import { CSSProperties } from "react";
import { controller } from "../..";
import { DotMovementDirections } from "../../model/DotMovementDirections";

const movementButtonsCSS: CSSProperties = 
{
    margin: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
}

export default function MovementButtons()
{
   return(
    <div className="MovementButtons" style={movementButtonsCSS}>
        <button onClick={() => {controller.moveDotPosition(DotMovementDirections.UP)}}>move up</button>
        <div className="RightLeftButtons">
            <button onClick={() => {controller.moveDotPosition(DotMovementDirections.LEFT)}}>move left</button>
            <button onClick={() => {controller.moveDotPosition(DotMovementDirections.RIGHT)}}>move right</button>
        </div>
        <button onClick={() => {controller.moveDotPosition(DotMovementDirections.DOWN)}}>move down</button>
    </div>
   ); 
}