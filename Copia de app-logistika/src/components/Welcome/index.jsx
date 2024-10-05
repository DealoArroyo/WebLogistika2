import React from 'react'
import mesa from '../../assets/images/mesa-decoracion.webp'
import Text from './text'
import Button from './button'

const Welcome = () => {
  return (
    <main className='p-12 grid-cols-2'>
      <Text />
      <img src={mesa} alt="mesa-de-decoracion" className='w-4/5 mx-auto m-10 rounded-xl'/>
      <Button />
    </main>

  )
}

export default Welcome