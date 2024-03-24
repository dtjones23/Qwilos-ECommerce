import React, { useState } from "react"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"

import "./Navbar.css"

const Navbar = () => {

  const [menu, setMenu] = useState("shop")
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="shopping logo" />
            <p>Qwilo's Store</p>
        </div>
      <ul className="nav-menu">
        {/* when user selects menu item the hr will move on click */}
        <li onClick={() => {setMenu("shop")}}>Shop {menu === "shop" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("mens")}}>Mens {menu === "mens" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("womens")}}>Womens {menu === "womens" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("kids")}}>Kids {menu === "kids" ? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart icon" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
