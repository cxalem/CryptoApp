import React from "react";
import { useState } from "react";

const CryptoContext = React.createContext();

const CryptoProvider = (props) => {
  //Coins State
  const [coins, setCoins] = useState([]);

  //API info
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1`;
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCoins(data);
  };

  //Price Format
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  //Searchbar
  const [search, setSearch] = useState("");
  const onSearchValue = (e) => {
    setSearch(e.target.value);
  };
  let serchedCoins = [];
  if (!search.length >= 1) {
    serchedCoins = coins;
  } else {
    serchedCoins = coins.filter((coin) => {
      const coinName = coin.name.toLowerCase();
      const searchText = search.toLowerCase();
      return coinName.includes(searchText);
    });
  }

  return (
    <CryptoContext.Provider
      value={{
        getData,
        formatPrice,
        coins,
        search,
        onSearchValue,
        serchedCoins,
      }}
    >
      {props.children}
    </CryptoContext.Provider>
  );
};

export { CryptoContext, CryptoProvider };
