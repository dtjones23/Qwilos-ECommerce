import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import star_icon from '../Components/Assets/star_icon.png'
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext); // get all the childrens
  return (
    <div className='shopcategory'>
      <img src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
          <p>
            {/* lets the user keep track of items */}
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            <img src={dropdown_icon} alt="" /> 
          </div>
        </div>
        <div className="shopcategory-products">
          {all_product.map((item, index) => {
            if (props.category === item.category) {
              return <Item key={index} id = {item.id} name={item.name} image={item.image} new_price={'$' + item.new_price} old_price={'$' + item.old_price}/>
            } else {
              return null
            }
          })}
        </div>
        <div className="shopcategory-loadmore">
          Load More
        </div>
    </div>
  )
}

export default ShopCategory