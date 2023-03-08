import React from 'react'
import ItemDetail from './ItemDetail'
import data from './data.json'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const datos= data
  const {id} = useParams();
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
  .then ((datos) => {console.log( datos)})
  .catch ((error)=>{ console.log("Error: "+ error)});
  
       
  const filtrarId = datos.filter((dato)=> dato.id === id)
  return (
    <div>
    {id ? <ItemDetail datos={filtrarId} /> : <ItemDetail datos={datos} /> }
  </div>
    
  )
}

export default ItemDetailContainer