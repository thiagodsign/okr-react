import React from 'react'
import Quarters from './Quarters'

export default function Okr(props) {
  return (
    <div className="container container_com-margem">
      {
        props.okr.quarters.map(quarter => (
          <Quarters quarter={quarter} okr={props.okr} />
        ))
      }
    </div>
  )
}