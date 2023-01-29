import React from "react";
import { Contexto } from "../contextos";
import "./index.css"

function Conte(){
    const {clickQuitar, direcc}=React.useContext(Contexto);
    return(
    <div className="imagenCompleta">
        <span className="cerrar" onClick={clickQuitar}>X</span>
        <img className="completa" src={direcc}/>
    </div>
    );
}

export{Conte}