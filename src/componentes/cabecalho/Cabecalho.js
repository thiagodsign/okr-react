import React from "react"
import Logo from './logo.svg'
import Botao from '../botao/Botao'
import CriacaoDeObjetivo from '../criacao-de-objetivo/CriacaoDeObjetivo'

let abrirDialogo = (id) => {
  document.getElementById(id).classList.add('dialogo_aberto')
  fecharDialogoComEsc(id)
}

let fecharDialogo = (id) => {
  document.getElementById(id).classList.remove('dialogo_aberto')
}

let fecharDialogoComEsc = (id) => {
  document.onkeydown = function (e) {
    if (e.which === 27) {
      fecharDialogo(id);
    }
  }
}

export default function Cabecalho() {
  return (
    <nav className="cabecalho">
      <img src={Logo} alt="Logo OKR" className="cabecalho__logo" />
      <Botao funcao={() => abrirDialogo('dialogoObjetivo')} texto="Criar novo objetivo" />
      < CriacaoDeObjetivo />
    </nav>
  );
}