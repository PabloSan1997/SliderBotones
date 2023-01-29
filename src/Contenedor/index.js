import React from "react";
import { Contexto } from "../contextos";
import "./index.css";

function Contenedor(props) {
    const {setDerecha, setIzquierda}=React.useContext(Contexto);
    function der(){
       setDerecha(true);
    }
    function quitarder(){
        setDerecha(false);
    }
    function izq(){
        setIzquierda(true);
    }
    function quitarizq(){
        setIzquierda(false);
    }
  return (
    <React.Fragment>
      <button className="boton izq" onMouseEnter={izq} onMouseLeave={quitarizq}>{"<"}</button>
      <button className="boton der" onMouseEnter={der} onMouseLeave={quitarder}>{">"}</button>
      <div className="contenedor">{props.children}</div>
    </React.Fragment>
  );
}
export { Contenedor };
