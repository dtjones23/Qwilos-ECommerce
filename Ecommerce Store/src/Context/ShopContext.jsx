import React, { createContext, useContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    // this loop will create a cart object with all the product id as key and 0 as value
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
    // this useState will store the cart items and the setCartItems will be used to update the cart items
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0

    // the item is the key of the cartItems object
    for (const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        // this will find the product from the all_product array and then multiply the new_price with the quantity of the product in the cart
        let itemInfo = all_product.find((product) => product.id === Number(item))
        totalAmount += itemInfo.new_price * cartItems[item]
      }
    }
    return totalAmount;
  }

  // this is the data that we are going to pass to the provider
  const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount };
  
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
