import React from 'react'

const Items = ({ open }) => {
    return (
      <ul className={`${open ? 'md:hidden flex flex-col absolute justify-center items-center w-full h-full top-28 right-0 bg-greenav bg-opacity-90 space-y-8' : 'hidden'} md:flex md:space-x-6` }>
        <li className='md:flex md:space-x-6'><a href="#" className='text-white'>Inicio</a></li>
        <li><a href="#" className='text-white'>Ordena</a></li>
        <li><a href="#" className='text-white'>Contacto</a></li>
      </ul>
    );
  };
  

export default Items