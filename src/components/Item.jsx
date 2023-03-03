import React from 'react'
import ItemCount from './ItemCount';
const Item = ({id,name,picture,stock,price}) => {

        return (
            <div className='itemContainer'>
                <div key={id} className='item'> 
                    <div>
                        <img className='imgItem' src={picture}></img>
                        <h1>{name}</h1>
                        <h2>${price}</h2>
                        <ItemCount stock={stock} productName={name} price= {price}/>
                    </div>
                </div>
            </div>  
        )}
export default Item