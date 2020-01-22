import React from 'react'
import Quarters from './Quarters'
import CriacaoDeKr from '../criacao-de-kr/CriacaoDeKr';

export default function Okr(props) {
  const okr = props.okr;
  return (
    <div className="container container_com-margem">
      <CriacaoDeKr />
      {
        okr.quarters.map(quarter => (
          <Quarters key={quarter.id} quarter={quarter} okr={okr} />
        ))
      }
    </div >
  )
}