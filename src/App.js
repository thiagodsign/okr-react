import React from "react";
import Cabecalho from "./componentes/cabecalho/Cabecalho";
import Okr from "./componentes/okr/Okr";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Okr />
    </div>
  );
}
