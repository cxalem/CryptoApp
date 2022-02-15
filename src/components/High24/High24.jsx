import React from 'react'
import './High24.css'

const High24 = (props) => {
  return (
    <p className="high-24">
          High 24h: <span className="price-24h">{props.high24}</span>
    </p>
  )
}

export { High24 }