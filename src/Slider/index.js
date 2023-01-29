import React from "react";
import { Contexto } from "../contextos";

function Slider(){
    const {imagenes, margen, trans}=React.useContext(Contexto);
    console.log(imagenes.length);
        function estilos(){
            return {width:imagenes.length*100+'%', marginLeft:margen+'%', transition: trans};
        }
    return (
        <div className="slider" style={estilos()}>
            {imagenes.map(elemento=>(
                <Slides key={elemento.id} direccion={elemento.direc}/>
            ))}
        </div>
    );
}

function Slides(props){
    return(
        <div className="slides">
            <img className="foto" src={props.direccion}/>
        </div>
    );
}
export{Slider}