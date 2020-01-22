import React from 'react'
import Objetivos from './Objetivos'

export default function Quarters(props) {
  return (
    <div className="container container_com-margem">
      <h2 className="titulo">{props.quarter.nome}</h2>

      {
        props.okr.objetivos.map(objetivo => (
          <Objetivos okr={props.okr} objetivo={objetivo} />
        ))
      }
    </div>
  )
}