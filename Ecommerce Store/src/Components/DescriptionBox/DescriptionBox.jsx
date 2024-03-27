import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-navbox">Description</div>
        <div className="descriptionbox-navbox fade">Reviews (199)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An eCommerce site, short for electronic commerce site, is a website or
          online platform where goods or services are bought and sold over the
          internet. It enables businesses and individuals to conduct commercial
          transactions electronically, without the need for physical
          interactions between buyers and sellers.
        </p>
        <p>
          Popular eCommerce platforms include Shopify, WooCommerce (WordPress
          plugin), Magento, and BigCommerce. These platforms provide tools and
          templates for building and managing eCommerce websites, catering to
          businesses of various sizes and industries in the digital marketplace.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
