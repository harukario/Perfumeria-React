import React from 'react'
import ItemList from './ItemList'
import data from './data.json'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ItemListContainer = ({greetings}) => {

  const { category } = useParams()

  const [datos, setDatos] =useState ([]);
  const lista=data;

  useEffect(()=>{
    const getData = () => {
      return new Promise((resolve, reject) => {
        if (datos == []) {
          reject(new Error('No hay datos'));
        } else resolve(lista);
          
      });
    };
  
    getData()
      .then((lista) => {
        console.log(lista)
       setDatos(lista);
      })
      .catch((error) => {
        console.log('Error: ' + error);
      });
    
  }, []);


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