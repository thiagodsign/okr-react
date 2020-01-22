import React from 'react'

export default function Krs(props) {
  const porcentagemAtualDaKr = () => {
    return ((props.kr.valorAtual - props.kr.valorInicial) / (props.kr.valorFinal - props.kr.valorInicial) * 100).toFixed(1) + '%'
  }
  return (
    <div className="sessao__conteudo">
      <div className="sessao__item"
        title=" Clique para fazer checkin">
        <div className="sessao__conteudo-primario-do-item">
          <h2 className="titulo titulo_cinza titulo_pequeno">{props.kr.nome}</h2>
          <div className="regua">
            <span className="regua__traco" style={{ width: porcentagemAtualDaKr() }}></span>
            <div className="regua__valores">
              <span name="valorInicialkr1">{props.kr.valorInicial}</span>
              <span className="regua__valor-dinamico" style={{ left: porcentagemAtualDaKr() }}>
                {porcentagemAtualDaKr()}
              </span>
              <span name="valorFinalkr1">{props.kr.valorFinal}</span>
            </div>
          </div>
        </div>

        <button className="botao botao_com-icone botao_pequeno">
          <i data-feather="map-pin"></i>
          Checkin
        </button>
      </div>
    </div>
  )
}