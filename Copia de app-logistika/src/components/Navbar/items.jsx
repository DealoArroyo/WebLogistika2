import React from 'react'

const Items = ({ open }) => {
    return (
      <ul className={`space-x-4 ${open ? 'flex' : 'hidden'}`}>
        <li><a href="#" className='text-white'>Inicio</a></li>
        <li><a href="#" className='text-white'>Ordena</a></li>
        <li><a href="#" className='text-white'>Contacto</a></li>
      </ul>
    );
  };
  

export default Items