import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { ShopContext } from '../../Context/ShopContext'
import dropdown_icon from "../Assets/dropdown_icon.png"


import "./Navbar.css"

const Navbar = () => {

  const [menu, setMenu] = useState("shop")
  const {getTotalCardItems} = useContext(ShopContext) 
  const menuRef = useRef() // reference to the dropdown menu for toggling

  // toggles the dropdown menu so when user clicks on the dropdown icon the menu will appear
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-active")
    e.target.classList.toggle("open")
  }
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="shopping logo" />
            <p>Qwilo's Store</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown_icon} alt="" />
      <ul ref={menuRef} className="nav-menu">
        {/* when user selects menu item the hr will move on click */}
        <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration:"none"}}to='/'>Shop</Link> {menu === "shop" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration:"none"}} to='/mens'>Mens</Link> {menu === "mens" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration:"none"}} to='/womens'>Womens</Link> {menu === "womens" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration:"none"}} to='/kids'>Kids</Link> {menu === "kids" ? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="cart icon"/></Link>
        <div className="nav-cart-count">{getTotalCardItems()}</div>
        {/* tracks the number of items in cart in icon */}
      </div>

    </div>
  )
}

export default Navbar
