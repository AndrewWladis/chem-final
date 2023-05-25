import React from 'react'
import './index.css';

function Element({ data }) {
  return (
    <div className='element'>
      <div className='element-symbol' style={{backgroundColor: `hsl(${60 + (240 - 60) * (data.number / 294)}, 100%, 50%)`}}>
        <h2>{data.symbol}</h2>
      </div>
      <div className='element-content'>
        <h2>{data.name}</h2>
        <h3>Atomic Number: {data.number}</h3>
        <h3>Atomic Mass: {data.atomic_mass}</h3>
        <h3>Group: {data.group}</h3>
      </div>
    </div>
  )
}

export default Element