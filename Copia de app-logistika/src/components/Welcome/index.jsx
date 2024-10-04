import React from 'react'
import mesa from '../../assets/images/mesa-decoracion.webp'

const Welcome = () => {
  return (
    <main className='p-12 grid-cols-2'>
        <h2 className='text-center text-black md:text-left font-sans font-bold text-2xl'>¿Quieres un <mark className='bg-green-600 text-white'>evento</mark> espectacular en uno de los lugares más <marker className='bg-green-600 text-white'>bonitos</marker> y espaciosos de Querétaro donde la clase y el buen gusto no te cuesta más?</h2>
        <img src={mesa} alt="mesa-de-decoracion" className='w-4/5 mx-auto m-10 rounded-xl'/>
        <div className='w-max p-3 px-6 mx-auto bg-greenav rounded-3xl cursor-pointer'>
          <a href="#">Ver eventos</a>
        </div>
    </main>

  )
}

export default Welcome