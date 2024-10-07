import React from 'react'
import mesa from '../../assets/images/mesa-decoracion.webp'
import Text from './text'
import Button from './button'

const Welcome = () => {
  return (
    <main className='p-12 grid-cols-2'>
      <div className='md:flex md:space-x-7'>
        <Text />
        <img src={mesa} alt="mesa-de-decoracion" className='w-4/5 mx-auto m-10 rounded-xl md:max-w-96 lg:max-w-md'/>
      </div>
      <Button/>
    </main>

  )
}

export default Welcome