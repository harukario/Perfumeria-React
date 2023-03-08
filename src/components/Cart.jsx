import React from 'react'
import {Link} from "react-router-dom";

const Cart = () => {
  return (
    <>
    <div>Soy el carro</div>
   
        <Link to="/">
            <button>
            Volver al inicio
            </button>
        </Link>
    </>
  )
}

export default Cart