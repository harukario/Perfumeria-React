import React from 'react'
import ItemList from './ItemList'
import data from './data.json'
import ItemCount from './ItemCount'

const ItemListContainer = ({greetings}) => {
  const datos= data
  
  const getData =()=>{

      return new Promise ((resolve, reject)=>{

       if (datos ==""){
          reject (new Error ("No hay datos"))
         }

      else (
          setTimeout (()=>{
              resolve(datos)
              
          },2000))
     }) 
  }
  getData()
  .then ((datos) => {
      console.log(datos)
      
 })
  .catch ((error)=>{ console.log("Error: "+ error)});

 
    return (
      <>
      <div className='itemListContainer'> 
          <h2>{greetings} </h2>
      <ItemList datos={datos} />
     
      </div>
      </>
    )
  
  
}

export default ItemListContainer