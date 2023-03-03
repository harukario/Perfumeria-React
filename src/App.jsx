import React from "react"
import ItemList from "./components/ItemList"
import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/Navbar"
const App =()=>{
  return (
    <>
  <Navbar/>
   <ItemListContainer greetings={"Productos destacados de la semana"}/>
   
    </>

  )
}
export default App
