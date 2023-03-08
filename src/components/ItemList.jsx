import React from 'react'
import Item from './Item'

const ItemList = (({datos}) => {
          return(
            <div className='itemContainer'>
                {datos.map((dato)=>{
                    return (
                      <Item
                      id={dato.id} 
                      key= {dato.id}
                      name={dato.name}
                      price={dato.price}
                      picture={dato.pictureUrl}
                      stock={dato.stock}
                      category={dato.category}
                      />
                    )
                }) 
                 }

            </div>  
        )
        
})


export default ItemList