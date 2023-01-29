import React from "react";
import { useCompleto } from "./efecto.js";
import { todasImagenes } from "./imagenes";

const Contexto = React.createContext();

function useImagenes() {
  const [imagenes, setImagenes] = React.useState(todasImagenes);
  const [derecha, setDerecha] = React.useState(false);
  const [izquierda, setIzquierda] = React.useState(false);
  const [trans, setTrans] = React.useState("unset");
  const [intervalo, setIntervalo] = React.useState(undefined);
  const [margen, setMargen] = React.useState(-100);
  React.useEffect(() => {
    let hola;
    if (derecha) {
      setTrans("all 0.2s ease");
      setMargen(-200);
      setTimeout(() => {
        let imag = imagenes;
        let imag1 = imagenes.shift();
        imag.push(imag1);
        setImagenes(imag);
        setTrans("unset");
        setMargen(-100);
      }, 200);
      hola = setInterval(() => {
        setMargen(-200);
        setTrans("all 0.2s ease");
        setTimeout(() => {
          let imag = imagenes;
          let imag1 = imagenes.shift();
          imag.push(imag1);
          setImagenes(imag);
          setTrans("unset");
          setMargen(-100);
        }, 200);
      }, 500);
      setIntervalo(hola);
    } else if (izquierda) {
      setTrans("unset");
      let imag = imagenes;
      let imag1 = imagenes.pop();
      imag.unshift(imag1);
      setImagenes(imag);
      setMargen(-200);
      setTimeout(() => {
        setTrans("all 0.2s ease");
        setMargen(-100);
      }, 200);
      hola = setInterval(() => {
        setTrans("unset");
        let imag = imagenes;
        let imag1 = imagenes.pop();
        imag.unshift(imag1);
        setImagenes(imag);
        setMargen(-200);
        setTimeout(() => {
          setTrans("all 0.2s ease");
          setMargen(-100);
        }, 200);
      }, 500);
      setIntervalo(hola);
    } else if (intervalo) {
      clearInterval(intervalo);
    }
  }, [derecha, izquierda]);
  return {
    imagenes,
    derecha,
    setDerecha,
    izquierda,
    setIzquierda,
    trans,
    margen,
  };
}

function Provedor(props) {
  const {
    imagenes,
    derecha,
    setDerecha,
    izquierda,
    setIzquierda,
    trans,
    margen,
  } = useImagenes();
  const { mostrar, clickQuitar, clickMostrar, direcc } = useCompleto();
  return (
    <Contexto.Provider
      value={{
        imagenes,
        margen,
        trans,
        derecha,
        setDerecha,
        setIzquierda,
        izquierda,
        mostrar,
        clickQuitar,
        clickMostrar,
        direcc,
      }}
    >
      {props.children}
    </Contexto.Provider>
  );
}
export { Provedor, Contexto };
