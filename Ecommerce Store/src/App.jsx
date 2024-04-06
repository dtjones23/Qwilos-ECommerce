
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory'
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import ShopContextProvider from './Context/ShopContext'; // note import the context!!
import banner_men from './Components/Assets/banner_mens.png'
import banner_women from './Components/Assets/banner_women.png'
import banner_kid from './Components/Assets/banner_kids.png'



function App() {
  return (
    <div>
      <BrowserRouter >
      <ShopContextProvider >
      <Navbar />
      <Routes >
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={banner_men} category = "men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={banner_women }category = "women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={banner_kid} category = "kid"/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:productId' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path = '/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer />
      </ShopContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
