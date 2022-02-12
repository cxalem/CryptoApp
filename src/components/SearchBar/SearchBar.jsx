import React from 'react'
import { LupaSvg } from '../../SvgComponents/LupaSvg/LupaSvg';
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className="search-container">
        <input type='text' className='search-input' placeholder='Find your crypto...'></input>
        <button className='search-btn'><LupaSvg className='lupa-svg' stroke='#EDF8F8' /></button>
    </div>
  )
}

export { SearchBar }