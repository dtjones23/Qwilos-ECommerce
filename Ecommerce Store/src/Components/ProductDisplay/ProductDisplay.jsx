import React from 'react'
import './ProductDisplay.css'

const ProductDisplay = (props) => {
  const {product} = props
  return (
    <div className='productdisplay'>
      <img src={product.image} alt="" />
    </div>
  )
}

export default ProductDisplay
