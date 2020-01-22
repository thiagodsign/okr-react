import React from 'react'

export default function Objetivos() {
  let listaDeObjetivos = [
    {
      id: 1,
      nome: 'Primero Luucura',
      descricao: 'Objeuutivo Descrição',
      idDoQuarter: 2
    },
    {
      id: 2,
      nome: 'Segunfdo',
      descricao: 'Objetivo Descrição',
      idDoQuarter: 1
    },
    {
      id: 3,
      nome: 'Teceiro',
      descricao: 'Objetivo Descrição',
      idDoQuarter: 1
    },
    {
      id: 4,
      nome: 'cvaramaço',
      descricao: 'Objetivo Descrição',
      idDoQuarter: 1
    }
  ]

  return (
    <div className="container container_com-margem" v-for="quarter in okr.quarters">
      <h2 className="titulo">Q1 2019</h2>

      {
        listaDeObjetivos.map(objetivo => {
          return (
            <section className="sessao" key={objetivo.id}>
              <div className="sessao__cabecalho">
                <div className="sessao__cabecalho-container-primario">
                  <p className="texto texto_cinza texto_espacado">OBJETIVO</p>
                  <h2 className="titulo">{objetivo.nome}</h2>
                  <p className="texto texto_cinza">{objetivo.descricao}</p>
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
            </section>
          )
        })
      }

    </div >
  )
}