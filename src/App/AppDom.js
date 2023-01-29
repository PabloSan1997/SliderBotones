import React from "react";
import { AreaImagen } from "../Areaimagenes";
import { Contenedor } from "../Contenedor";
import { Contexto } from "../contextos";
import { Slider } from "../Slider";

function AppDom() {
  return (
    <React.Fragment>
      <Contenedor>
        <AreaImagen>
          <div className="imagenes">
          <Slider />
          </div>
        </AreaImagen>
      </Contenedor>
    </React.Fragment>
  );
}

export { AppDom };
