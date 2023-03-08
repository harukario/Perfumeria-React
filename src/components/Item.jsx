import React from 'react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
const Item = ({id,name,picture,stock,price,category}) => {

        return (
             <div className='itemContainer'>
                <div key={id} className='item'> 
                    <div className='card'>
                    <Link to={`/item/${id}`}> <img className='imgItem' src={picture}></img>
                        <h1>{name}</h1>
                        <h2>${price}</h2></Link>
                        <ItemCount stock={stock} productName={name} price= {price}/>
                    </div>
                </div>
            </div>
            
        )}
export default Item