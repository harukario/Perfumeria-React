import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({datos}) => {
  
    return(
       <div>
        {datos.map((dato)=>{
           return (
            <div className='detailContainer'> 
            <div key={dato.id} className="detailCard">
                <div>   <img className='detailImg' src={dato.pictureUrl}></img>  </div>
                <div className="detailDataContainer"> 
                    <span> Fragancia {dato.category}</span>
                    <div className='detailName'> {(dato.name).toUpperCase()}</div>
                    <span className="detailPrice">${dato.price}</span>
                    <div className="whiteSpace"></div>
                   <div><ItemCount stock={dato.stock} productName={dato.name} price={dato.price}/> </div>
                </div>  
           </div>
             <div className='detailDetail'>
                <span className='detailName'>Detalles</span>
                 <div > {dato.detail} </div>
            </div>

           </div>
       )
        })
    }
       </div>  
    )
}

export default ItemDetail