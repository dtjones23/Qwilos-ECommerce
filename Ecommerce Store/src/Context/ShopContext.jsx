import React,{ createContext, useContext } from "react";
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const ShopCategory = (props) => {

    // this is the data that we are going to pass to the provider
    const contextValue = { all_product };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children} 
        </ShopContext.Provider>
    )
}

export default ShopCategory;