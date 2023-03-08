import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='imgBanner' >
        
      {/* <img className='imgBanner' src="public\banner.jpg"></img> */}
      <Link to={`/catalogue`}>  <button className='botonBanner'>Conocé mas</button> </Link>
    </div>
  )
}

export default Welcome