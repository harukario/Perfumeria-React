import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({datos}) => {
    return(
        <div>
            {datos.map((dato)=>{
                return (
                    <div className='detailContainer'>
                        <div key={dato.id}> 
                            <div> {dato.pictureUrl} </div>
                            <div> 
                                <span>{dato.category}</span>
                                <div> {dato.nombre}</div>
                                <div> {dato.precio}</div>
                                <ItemCount></ItemCount>
                            </div>
                        </div>
                    <div> {dato.detail}</div>
                    </div>
                )
            }) 
             }

        </div>  
    )
    
}


export default ItemDetail