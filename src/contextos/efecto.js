import React from "react";

function useCompleto(){
    const [mostrar, setMostrar]=React.useState(false);
    const [direcc, setDirecc]=React.useState('');
    function clickMostrar(argumento){
        setMostrar(true);
        setDirecc(argumento);
    }
    function clickQuitar(){
        setMostrar(false);
        setDirecc('');
    }
    
    return {mostrar, clickQuitar, clickMostrar, direcc};
}
export{useCompleto}