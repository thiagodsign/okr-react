import React from 'react'
import Objetivos from './Objetivos'

export default function Quarter() {
  let okr = []
  return (
    <div className="container container_com-margem">
      <h2 className="titulo">Q1 2019</h2>

      {
        okr.objetivos.map(objetivo => {
          return (
            <Objetivos objetivo={objetivo} />
          )
        })
      }

    </div >
  )
}