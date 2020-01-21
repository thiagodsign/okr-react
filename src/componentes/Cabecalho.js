import React from "react";
import Logo from './logo.svg'

export default function Cabecalho() {
  return (
    <nav className="cabecalho">
      <img src={Logo} alt="Logo OKR" className="cabecalho__logo" />
      <button type="button" className="botao botao_com-icone">
        <i data-feather="plus-circle"></i>
        Criar novo objetivo
    </button>
    </nav>
  );
}