import React from 'react'
import './CoinSymbol.css'

const CoinSymbol = (props) => {
  return (
    <span className='coin-symbol'>{props.coinSymbol.toUpperCase()}</span>
  )
}

export { CoinSymbol }