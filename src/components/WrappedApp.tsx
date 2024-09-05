import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import PageNotFound from "../pages/PageNotFound";
import Product from '../pages/Product.tsx';
import ProductDetail from '../pages/ProductDetail.tsx';
import App from '../App.tsx';
function WrappedApp() {
  return (
    <>
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
    </>
  )
}

export default WrappedApp