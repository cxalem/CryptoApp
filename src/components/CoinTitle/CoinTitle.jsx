import React from 'react'
import './CoinTitle.css'

const CoinTitle = (props) => {
  return (
    <h3 className="card-title">{props.coinName}</h3>
  )
}

export { CoinTitle }