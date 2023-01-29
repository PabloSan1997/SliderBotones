import React from "react";
import { Contexto } from "../contextos";

function Slider(){
    const {imagenes, margen, trans}=React.useContext(Contexto);
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
    const {clickMostrar}=React.useContext(Contexto);
    return(
        <div className="slides" onClick={()=>{clickMostrar(props.direccion)}}>
            <img className="foto" src={props.direccion}/>
        </div>
    );
}
export{Slider}