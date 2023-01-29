import React from "react";
import { AreaImagen } from "../Areaimagenes";
import { Contenedor } from "../Contenedor";
import { Contexto } from "../contextos";
import { Conte } from "../modal";
import { Slider } from "../Slider";

function AppDom() {
  const {mostrar}=React.useContext(Contexto);
  return (
    <React.Fragment>
      <Contenedor>
        <AreaImagen>
          <div className="imagenes">
          <Slider />
          </div>
        </AreaImagen>
      </Contenedor>
      {mostrar?(<Conte/>):''}
    </React.Fragment>
  );
}

export { AppDom };
