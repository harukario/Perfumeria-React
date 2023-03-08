import React from "react"
import ItemListContainer from "./components/ItemListContainer"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Cart from "./components/Cart";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetail";
const App =()=>{
  return (
    <>
    <Navbar/>
    <Routes> 
      <Route exact path= "/" element={<Welcome/>} />
      <Route exact path= "/catalogue" element={<ItemListContainer greetings={"Todos los productos"}/>} />
      <Route exact path= "/category/:category" element={<ItemListContainer  />} />
      <Route exact path= "/item/:id" element={<ItemDetailContainer/>} /> 
      <Route exact path= "/cart" element={<Cart/>} />
    </Routes>
    </>

  )
}
export default App
  