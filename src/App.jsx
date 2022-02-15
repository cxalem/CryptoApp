import { Card } from "./components/Card/Card";
import { CardList } from "./components/CardList/CardList";
import { Header } from "./components/Header/Header";
import { React, useEffect, useState, useRef } from "react";
import UUID from "uuidjs";
import "./App.css";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const myRef = useRef();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
      setTimeout(() => {
        const container = Array.from(myRef.current.children);
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            entry.isIntersecting && console.log(entry.target)
          });
        });
        container.map((card) => {
          observer.observe(card);
        });
      }, 1000);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <Header />
      <CardList>
        {loading && <h1>cargando...</h1>}
        <div className="cardListContainer" ref={myRef}>
          {coins.map((coin) => {
            return (
              <Card
                key={UUID.generate()}
                coinName={coin.name}
                coinSymbol={coin.symbol}
                marketCap={formatPrice(coin.market_cap)}
                price={formatPrice(coin.current_price)}
                high24={formatPrice(coin.high_24h)}
                low24={formatPrice(coin.low_24h)}
                ath={formatPrice(coin.ath)}
                rank={coin.market_cap_rank}
                priceChange={coin.price_change_percentage_24h}
                coinImg={coin.image}
              />
            );
          })}
        </div>
      </CardList>
    </div>
  );
}

export default App;
