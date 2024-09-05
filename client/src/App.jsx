import { useState } from 'react'
import './App.css'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './views/Home'
import Navbar from './components/Navbar'
import ShowOne from './views/ShowOne'
import UpdatePlants from './views/UpdatePlants'
import ShoppingCart from './components/ShoppingCart'

function App() {
  //create global state
  const [carts, setCarts] = useState([])
  //console.log(carts)
  
  const updateCart=(plant)=>{
    setCarts([...carts, plant])
    //console.log(carts)
    

  }





  return (
    <>
      <Navbar />
      {/*Listing Routes*/}
      <Routes>
        {/*Initial Redirect for Home Route*/}
        <Route path='/' element={<Navigate to="/plants" />} />

        {/*Home Route*/}
        <Route path="/plants" element={<Home updateCart={updateCart} />} />

        {/*Shopping Cart Route*/}
        <Route path="/plants/cart" element={<ShoppingCart carts={carts}/>} />

        {/*Create Route*/}
        {/* <Route path="/plants/create" element={<AddPlants/>} />  */}

        {/*Show One Route*/}
        <Route path="/plants/:id" element={<ShowOne />} />

        {/*Update Route*/}
        <Route path="/plants/:id/update" element={<UpdatePlants />} />

      </Routes>
    </>
  )
}

export default App
