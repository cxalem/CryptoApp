import React from 'react'
import './Price.css'

const Price = (props) => {
  return (
    <h2 className="price">{props.price}</h2>
  )
}

export { Price }