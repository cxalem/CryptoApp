import React from "react";
import { CoinRank } from "../CoinRank/CoinRank";
import { CoinSymbol } from "../CoinSymbol/CoinSymbol";
import { PriceChange } from "../PriceChange/PriceChange";
import { High24 } from "../High24/High24";
import { Low24 } from "../Low24/Low24";
import { MarketCap } from "../MarketCap/MarketCap";
import { Ath } from "../Ath/Ath";
import { Price } from "../Price/Price";
import { CoinTitle } from "../CoinTitle/CoinTitle";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="container">
      <div className="card-1row">
        <div className="info">
          <img className="coin-img" src={props.coinImg} alt="" />
          <div className="coin-info-container">
            <CoinTitle coinName={props.coinName} />            
            <div className="coin-name-container">
              <CoinSymbol coinSymbol={props.coinSymbol} />
              <CoinRank coinRank={props.rank} />
            </div>
          </div>
        </div>
        <PriceChange priceChange={props.priceChange} />
      </div>

      <div className="card-2row">
        <High24 high24={props.high24} />
        <Low24 low24={props.low24} />
      </div>

      <div className="card-3row">
        <div className="coin-data">
          <MarketCap marketCap={props.marketCap} />
          <Ath ath={props.ath} />
        </div>
        <Price price={props.price} />
      </div>
    </div>
  );
};

export { Card };
