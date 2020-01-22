import React from 'react'
import Krs from './Krs'

const krs = [
  {
    id: 1,
    nome: 'Nome da KR',
    descricao: 'KR Descrição',
    idDoObjetivo: 2,
    valorInicial: 1,
    valorFinal: 100,
    valorAtual: 25
  },
  {
    id: 2,
    nome: 'Nome da KR',
    descricao: 'KR Descrição',
    idDoObjetivo: 2,
    valorInicial: 1,
    valorFinal: 100,
    valorAtual: 30
  },
  {
    id: 3,
    nome: 'Nome da KR',
    descricao: 'KR Descrição',
    idDoObjetivo: 1,
    valorInicial: 1,
    valorFinal: 100,
    valorAtual: 30
  }
]


export default function Objetivos(props) {
  const filtrarKrsPorObjetivo = kr => kr.idDoObjetivo === props.objetivo.id;

  return (
    <section className="sessao" key={props.objetivo.id}>
      <div className="sessao__cabecalho">
        <div className="sessao__cabecalho-container-primario">
          <p className="texto texto_cinza texto_espacado">OBJETIVO</p>
          <h2 className="titulo">{props.objetivo.nome}</h2>
          <p className="texto texto_cinza">{props.objetivo.descricao}</p>
        </div>

        <div className="sessao__cabecalho-container-secundario">
          <div className="dropdown">
            <button type="button" className="botao botao_sem-fundo dropdown__ativador">
              <i data-feather="more-vertical"></i>
            </button>

            <ul className="dropdown__lista">
              <li>
                <button className="botao">Adicionar KR</button>
              </li>
              <li>
                <button className="botao">Editar Objetivo</button>
              </li>
              <li>
                <button className="botao">Excluir objetivo</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {
        krs.filter(filtrarKrsPorObjetivo).map(kr => {
          return (
            <Krs kr={kr}
              valorInicial={kr.valorInicial}
              valorAtual={kr.valorAtual}
              valorFinal={kr.valorFinal} />
          )
        })
      }
    </section>
  )
}