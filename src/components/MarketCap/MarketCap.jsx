import React from 'react'
import './MarketCap.css'

const MarketCap = (props) => {
  return (
    <p className="market-info">Market Cap: <span className="market-price">{props.marketCap}</span></p>
  )
}

export { MarketCap }