import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import WrappedApp from './components/WrappedApp'
import { BrowserRouter,Routes,Route } from 'react-router-dom' 
import PageNotFound from "./pages/PageNotFound";
import ProductDetail from './pages/ProductDetail'
import AppBarSide from './components/AppBarSide'
import CheckOut from './pages/CheckOut'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
  
      <AppBarSide></AppBarSide>

      <Routes>
      <Route path="" element={<Product></Product>}></Route>
      {/* <Route path="/login" element={<Login></Login>}></Route> */}
      <Route path="/Detail/:id" element={<ProductDetail></ProductDetail>}></Route>
      <Route path="/ChkOut" element={<CheckOut></CheckOut>}></Route>
      <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
    </>
  )
}

export default App
