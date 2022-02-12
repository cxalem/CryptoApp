import React from 'react'
import { DevamSvg } from '../../SvgComponents/DevamLogo/DevamSvg'
import { SearchBar } from '../SearchBar/SearchBar';
import './Header.css'

const Header = () => {
  const date = new Date();
  const todaysDate = date.toDateString();

  return (
    <header className='header'>
      <div className="header-info">
        <DevamSvg className='devam-svg' fill='#EDF8F8' />
        <span className='date'>{todaysDate}</span>
      </div>
        <SearchBar className='search-bar' />
    </header>
  )
}

export { Header }