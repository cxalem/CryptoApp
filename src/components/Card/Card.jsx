import React from 'react'
import { BtcSvg } from '../../SvgComponents/BtcSvg/BtcSvg'
import './Card.css'

const Card = () => {
  return (
    <div className='container'>

      <div className="card-1row">
        <div className="info">
          <BtcSvg width='55' height='55' />
          <div className="coin-info-container">
            <div className="coin-name-container">
              <h3 className="card-title">Bitcoin</h3>
              <span className='coin-symbol'>BTC</span>
            </div>
            <span className='rank'>Rank #1</span>
          </div>
        </div>
        <span className="price-change">▲51.5%</span>
      </div>

      <div className="card-2row">
        <p className="high-24">
          High 24h: <span className="price-24h">$46,153.09</span>
        </p>
        <p className="low-24">
          Low 24h: <span className="price-24h">$43,153.09</span>
        </p>
      </div>

      <div className="card-3row">
        <div className="coin-data">
          <p className="market-info">Market Cap: <span className="market-price">$831,601,198,495</span></p>
          <p className="market-info">All Time High: <span className="market-price">$66,997.15</span></p>
        </div>
        <h2 className="price">$43,874.07</h2>
      </div>
    </div>
  )
}

export { Card }