import React from 'react'
import CartWidget from './CartWidget'
import { useState } from 'react'

const Navbar = () => {
  const [display, setDisplay] = useState(false)
  const onClick = () =>{
    
    if (display==false){
      setDisplay(true)
    }
    else setDisplay(false);
  
  } 

  const Categorias =()=>{
    return(
    <div id="categorias" className="search-results">
      <ul>
        <li>Hombre</li>
        <li>Mujer</li>
        <li>Novedades</li>
      </ul>
    </div>)
  }

  return (

    <div className='containerProvisorio'> 
      <img src="public\logo.svg" alt="miLogo"/>
      <h1>Perfumeria </h1>
       
      
     <ul className='ulProvisorio'>
        <button> Inicio</button>
        <button> Ofertas</button>
        <input type="submit" value="Categorias" onClick={onClick} />
        { display ? Categorias() : null }
        
        <button> Fragancias</button>
        <button> Contacto</button>
    </ul>
    
     <CartWidget/>
   
    </div>
    
  )
}

export default Navbar
