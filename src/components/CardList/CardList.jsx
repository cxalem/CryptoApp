import React from 'react'
import './CardList.css'

const CardList = (props) => {
  return (
    <section className="card-list">
        {props.children}
    </section>
  )
}

export { CardList }