import React from 'react'
import mesa from '../../assets/images/mesa-decoracion.webp'

const Welcome = () => {
  return (
    <main className='p-12 grid-cols-2'>
        <h2 className='text-center md:text-left font-sans font-extralight text-2xl'>¿Quieres un <mark className='bg-green-600 text-white'>evento</mark> espectacular en uno de los lugares más <marker className='bg-green-600 text-white'>bonitos</marker> y espaciosos de Querétaro donde la clase y el buen gusto no te cuesta más?</h2>
        <img src={mesa} alt="mesa-de-decoracion" className='w-4/5 mx-auto m-10 rounded-xl'/>
        <a href="http://"></a>
    </main>

  )
}

export default Welcome