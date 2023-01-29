
import React from "react";
import { Provedor } from "../contextos/index.js";
import { AppDom } from "./AppDom.js";

function App() {
  return (
    <Provedor>
       <AppDom/>
    </Provedor>
  );
}

export default App;
