import React from "react";
import Cabecalho from "./componentes/cabecalho/Cabecalho";
import Objetivos from "./componentes/objetivos/Objetivos";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Objetivos />
    </div>
  );
}
