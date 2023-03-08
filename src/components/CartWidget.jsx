import React from 'react'
import { Link} from "react-router-dom";

const CartWidget = () => {
  return (
    <>
    <Link to="/cart">
      <button>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <span className="material-symbols-outlined"> shopping_bag </span>
        <span> 1 </span>
      </button>
    </Link> 
   </>
   
  )
}

export default CartWidget