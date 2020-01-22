import React from 'react'
import Krs from './Krs'
import Botao from '../botao/Botao'

export default function Objetivos(props) {
  const filtrarKrsPorObjetivo = kr => kr.idDoObjetivo === props.objetivo.id;

  const novaKr = () => {
    document.getElementById('dialogoKr').classList.add('dialogo_aberto')
  }

  return (
    <section className="sessao">
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

      <div className="sessao__conteudo">
        {
          props.okr.krs.filter(filtrarKrsPorObjetivo).map(kr => {
            return (
              <Krs key={kr.id}
                kr={kr}
                valorInicial={kr.valorInicial}
                valorAtual={kr.valorAtual}
                valorFinal={kr.valorFinal} />
            )
          })
        }

        <div className="container-criar-kr">
          <Botao texto="Adicionar KR" icone="plus" funcao={() => novaKr()} />
        </div>
      </div>
    </section>
  )
}