import React from 'react'
import { useEffect, useState } from 'react';
import data from './data.json';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
const ItemDetailContainer = () => {
    const { id } =useParams();

    const [datos, setDatos] = useState ([]);

    useEffect(()=>{
        const getDatos = new Promise( (resolve,reject) =>{

            if (datos == []){
                reject (console.log("No hay datos"))}
            else {
                resolve (data)
            }
          
        });
        getDatos.then((data)=>{
            console.log(data);
            setDatos(data);
        })
        getDatos.catch (()=>{console.log("ocurrio un error")})
    },[])

        const filtrarId = datos.filter((dato)=> dato.id == id)
        
  return (
    <div>
    {id ? <ItemDetail datos={filtrarId} /> : <ItemDetail datos={datos} /> }
  </div>
  )
}

export default ItemDetailContainer