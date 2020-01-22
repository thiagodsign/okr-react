import React from 'react';

export default function Botao(props) {
  return (
    <button className="botao botao_com-icone" onClick={props.funcao}>
      <i data-feather="plus-circle"></i>
      {props.texto}
    </button>
  )
}
