import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(50)</p>
          {/* this is placeholder for the number of ratings */}
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-oldprice">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-newprice">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          accusamus eveniet, inventore voluptatum quae iure ipsum corporis et
          animi sunt amet culpa quis voluptate. Animi molestiae eos qui veniam
          pariatur?
        </div>
        <div className="productdisplay-right-size">
          <h2>SelectSize</h2>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
          <p className="productdisplay-right-category"> <span>Category :</span> Women , T-Shirt, Crop Top</p>
          <p className="productdisplay-right-category"> <span>Tags :</span> Modern, Latest</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
