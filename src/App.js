import React from 'react'
import{BrowserRouter,Routes,Route}from "react-router-dom"
import Navbar from './Component.jsx/Navbar'
import Home from './Pages.jsx/Home'
import About from './Pages.jsx/About'
import Products from './Pages.jsx/Products'
import Category from './Pages.jsx/Category'
import Contact from './Pages.jsx/Contact'
import FilterProduct from './Pages.jsx/FilterProduct'
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact'element={<Contact/>}/>
      <Route path='/Category'element={<Category/>}/>
      <Route path='/Product'element={<Products/>}/>
      <Route path='/cat-product/:catname'element={<FilterProduct/>}/>


    </Routes>
    </BrowserRouter>
    </>
  )
}
