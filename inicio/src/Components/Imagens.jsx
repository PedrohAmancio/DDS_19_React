import React from 'react'
import Moran from '../assets/Tiro_errado.jpg'

const Imagens = () => {
  return (
    <div>
        <h1>Imagens</h1>
        <h2>Sub titulo de Imagens</h2>
        <img src="./Baska.png" width={900} height ={500}/>
           
            {/* imagen vindo da pasta assets */}
        <img src={Moran} width={900} height ={500}  />
    </div>
  )
}

export default Imagens