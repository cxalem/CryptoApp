import React from 'react'
import './Ath.css'

const Ath = (props) => {
  return (
    <p className="market-info">All Time High: <span className="market-price">{props.ath}</span></p>
  )
}

export { Ath }