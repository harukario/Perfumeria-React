import React from 'react'
import { useState } from 'react'



const ItemCount = ({stock, productName, price}) => {
    const [cantidad, setCantidad]= useState(1);
    const [display, setDisplay]= useState('none')

    const less =()=>{
        if (cantidad >1){
            setCantidad (cantidad -1);
        }
    }

    const add =()=>{
        if (cantidad < stock){
            setCantidad (cantidad + 1);
        }
        else alert("No hay mas stock")
    }

    const added = ()=>{
        console.log ("Agregaste " + cantidad + " " + productName + " al carrito. Suma: " + price*cantidad);
        setDisplay('');
        // return(
        //     <>
           
        //   </>
        //  )
    }
    
  return (
    <>
     <div className='itemCount'>
        <div className='displayCount'>
            <button className='displayButton' onClick={()=> less()}> - </button>
            <span className='spanDisplay'> {cantidad} </span>
            <button className='displayButton' onClick={()=> add ()}> + </button>
        </div>
        <button className='addButton' onClick={()=> added ()} > Agregar al carrito </button>
    <div>
   
    </div>
    </div>
    </>
    
  )
}


export default ItemCount