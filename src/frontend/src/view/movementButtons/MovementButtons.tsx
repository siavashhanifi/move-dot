import { CSSProperties } from "react";
import { controller } from "../..";

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
        <button onClick={() => {controller.moveDotUp()}}>move up</button>
        <div className="RightLeftButtons">
            <button onClick={() => {controller.moveDotLeft()}}>move left</button>
            <button onClick={() => {controller.moveDotRight()}}>move right</button>
        </div>
        <button onClick={() => {controller.moveDotDown()}}>move down</button>
    </div>
   ); 
}