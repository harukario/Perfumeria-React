import React from 'react'
import ItemList from './ItemList'
import data from './data.json'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greetings}) => {
  const datos= data
  const { category } = useParams()

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
  .then ((datos) => {console.log("del itemlistcontainer " + datos)})
  .catch ((error)=>{ console.log("Error: "+ error)});

  const filtrar = datos.filter((dato)=> dato.category === category)

    return (
      <>
        <div className='itemListContainer'> 
            <div className='greetings'>{greetings} </div>
        <div>
          {category ? <ItemList datos={filtrar} /> : <ItemList datos={datos} /> }
        </div>
      </div>
      </>
    )
}

export default ItemListContainer