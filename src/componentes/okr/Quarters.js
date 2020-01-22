import React from 'react'
import Objetivos from './Objetivos'

export default function Quarters(props) {
  const okr = props.okr
  return (
    <div className="container container_com-margem">
      <h2 className="titulo">{props.quarter.nome}</h2>

      {
        okr.objetivos.map(objetivo => (
          <Objetivos key={objetivo.id} objetivo={objetivo} okr={okr} />
        ))
      }
    </div>
  )
}