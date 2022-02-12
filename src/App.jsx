import { useState } from 'react'
import './App.css'
import { Card } from './components/Card/Card'
import { CardList } from './components/CardList/CardList'
import { Header } from './components/Header/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <CardList>
        <Card />
        <Card />
        <Card />
      </CardList>
    </div>
  )
}

export default App
