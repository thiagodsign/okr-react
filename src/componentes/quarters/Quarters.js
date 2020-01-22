import React from 'react'
import Objetivos from './objetivos/Objetivos'

export default function Quarter() {
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
    <div className="container container_com-margem">
      <h2 className="titulo">Q1 2019</h2>

      {
        listaDeObjetivos.map(objetivo => {
          return (
            <Objetivos objetivo={objetivo} />
          )
        })
      }

    </div >
  )
}