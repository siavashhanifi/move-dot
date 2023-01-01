import { CSSProperties } from "react";
import DotCanvas from "./dotCanvas/DotCanvas";
import MovementButtons from "./movementButtons/MovementButtons";

const contentCSS: CSSProperties =
{
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
};

export default function Content()
{
    return (
        <div className="Content" style={contentCSS}>
            <DotCanvas/>
            <MovementButtons/>
        </div>
  );
}

