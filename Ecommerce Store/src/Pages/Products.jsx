import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {

// using the product id, we will find the product in the all_products data
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()

  // if product is true, then display to page
  // convert productId from string to number 
  const product = all_product.find((e)=> e.id === Number(productId)) ;
  return (
    <div>
      <Breadcrumb product={product} />
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product