import React from 'react'
import { LupaSvg } from '../../SvgComponents/LupaSvg/LupaSvg';
import { CryptoContext } from '../CryptoContext/CryptoContext';
import './SearchBar.css'

const SearchBar = () => {
  const { search, onSearchValue } = React.useContext(CryptoContext);
  return (
    <div className="search-container">
        <input onChange={onSearchValue} value={search} className='search-input' placeholder='Find your crypto...'></input>
        <button className='search-btn'><LupaSvg className='lupa-svg' stroke='#EDF8F8' /></button>
    </div>
  )
}

export { SearchBar }