import React from "react";
import Cabecalho from "./componentes/cabecalho/Cabecalho";
import Quarters from "./componentes/quarters/Quarters";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Quarters />
    </div>
  );
}
