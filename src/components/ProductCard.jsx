import React from 'react'
import products from '../../db/products.json'

const ProductCard = () => {

  return (
    <div>
        <div>
            <img src={products[1].img} alt="" />
            <h3></h3>
        </div>
    </div>
  )
}

export default ProductCard
