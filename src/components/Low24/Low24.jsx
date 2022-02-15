import React from 'react'
import './Low24.css'

const Low24 = (props) => {
  return (
    <p className="low-24">
      Low 24h: <span className="price-24h">{props.low24}</span>
    </p>
  )
}

export { Low24 }