import React from 'react'
import './CoinRank.css'

const CoinRank = (props) => {
  return (
    <span className='rank'>Rank# {props.coinRank}</span>
  )
}

export { CoinRank }