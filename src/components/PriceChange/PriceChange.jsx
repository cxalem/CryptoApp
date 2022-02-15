import React from 'react'
import './PriceChange.css'

const PriceChange = (props) => {
  return (
    <>
      {props.priceChange > 0 ? <span className="price-change">▲{props.priceChange.toFixed(3)}</span> : <span className="down-price">▼{props.priceChange.toFixed(3)}</span>}
    </>
  )
}

export { PriceChange }